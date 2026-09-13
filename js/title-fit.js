/* 门内 MENNEI — 中英文标题上下等宽对齐
 * 目标：每个标题块内，英文行与中文行（含手机端拆分出的多行）渲染宽度完全一致，
 *      使每一行的首字符与末字符垂直对齐。
 * 手段：先按内容自然宽度确定目标宽度 T，再对较窄的行增加字间距（必要时微调字号）。
 * 手机端以 344px 视口为基准判断英文标题是否需要拆分多行。
 */
(function () {
  'use strict';

  // 需要处理的「英文行 + 中文行」标题组合
  var GROUPS = [
    { root: '.section-title', en: 'h2', zh: 'h3' },
    { root: '.offline-cta-overlay', en: '.offline-cta-english', zh: '.offline-cta-title' },
    { root: '.stkjjnr', en: '.stkbt', zh: '.stkbt1' },
    { root: '.stktop', en: '.bt', zh: '.bt1' }
  ];

  var BASE_VW = 344;      // 手机端设计基准视口宽度
  var MIN_EM = 0.05;      // 字间距下限（em）
  var MAX_EM = 1.15;      // 字间距上限（em）
  var CANDIDATES = [
    [1, 1], [1.1, 1], [1.2, 1], [1.3, 1], [1, 0.95],
    [1.1, 0.95], [1.2, 0.95], [1, 0.9], [1.3, 0.95], [1.4, 1],
    [0.9, 1.1], [0.85, 1.15], [1, 1.1], [1, 1.15]
  ];

  function norm(s) { return (s || '').replace(/\s+/g, ' ').trim(); }
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // 取标题原始文本：区分「外部(i18n)改过」与「我们自己重排过」
  function sourceOf(el) {
    var cur = norm(el.textContent);
    if (el.__ttlWritten === undefined || cur !== el.__ttlWritten) el.__ttlSrc = cur;
    return el.__ttlSrc;
  }

  function contentWidth(el) {
    var cs = window.getComputedStyle(el);
    var w = el.getBoundingClientRect().width;
    return w - (parseFloat(cs.paddingLeft) || 0) - (parseFloat(cs.paddingRight) || 0);
  }

  // 英文标题拆行：避免出现以「·」开头的行，优先在「·」之后断开
  function splitBalanced(text) {
    var toks = text.split(/\s+/).filter(function (t) { return t.length; });
    if (toks.length < 2) return null;
    var best = null;
    for (var i = 1; i < toks.length; i++) {
      var a = toks.slice(0, i).join(' ');
      var b = toks.slice(i).join(' ');
      var score = Math.max(a.length, b.length);
      if (b.charAt(0) === '·') score += 12;
      if (a.charAt(a.length - 1) === '·') score -= 2;
      if (!best || score < best.score) best = { score: score, lines: [a, b] };
    }
    return best ? best.lines : null;
  }

  // 把标题渲染成「每行一个 span」的结构
  function render(el, lines, fsPx) {
    var align = window.getComputedStyle(el).textAlign;
    var ai = 'center';
    if (align === 'left' || align === 'start') ai = 'flex-start';
    else if (align === 'right' || align === 'end') ai = 'flex-end';
    var html = '<span class="ttl-lines" style="align-items:' + ai + '">';
    for (var i = 0; i < lines.length; i++) {
      html += '<span class="ttl-line">' + esc(lines[i]) + '</span>';
    }
    html += '</span>';
    el.innerHTML = html;
    el.style.fontSize = fsPx + 'px';
    el.__ttlWritten = norm(el.textContent);
    var spans = [];
    var nodes = el.querySelectorAll('.ttl-line');
    for (var j = 0; j < nodes.length; j++) spans.push(nodes[j]);
    return spans;
  }

  // 量取单行的 基础宽度 w0（字距为0） 与 每 1px 字距带来的宽度增量 slope（≈字符数）
  function measure(span) {
    span.style.marginRight = '0px';
    span.style.letterSpacing = '0px';
    var w0 = span.getBoundingClientRect().width;
    span.style.letterSpacing = '1px';
    var w1 = span.getBoundingClientRect().width;
    return { w0: w0, slope: Math.max(1, w1 - w0) };
  }

  function fitGroup(rootEl, enEl, zhEl) {
    var srcEn = sourceOf(enEl), srcZh = sourceOf(zhEl);
    if (!srcEn || !srcZh) return;

    // 清掉上一次的内联字号，读取 CSS 原始字号/字距
    enEl.style.fontSize = '';
    zhEl.style.fontSize = '';
    var csE = window.getComputedStyle(enEl), csZ = window.getComputedStyle(zhEl);
    var fsE0 = parseFloat(csE.fontSize) || 12;
    var fsZ0 = parseFloat(csZ.fontSize) || 20;
    var rE = fsE0 ? (parseFloat(csE.letterSpacing) || 0) / fsE0 : 0;
    var rZ = fsZ0 ? (parseFloat(csZ.letterSpacing) || 0) / fsZ0 : 0;

    // 可用宽度取「根容器」的内容宽度：标题元素本身可能是 flex 项（宽度随内容收缩），
    // 用它测量会造成逐次收缩的反馈循环
    var avail = contentWidth(rootEl);
    if (!(avail > 20)) return;

    // 手机端：以 344px 视口为基准折算参考宽度，判断英文标题是否需拆行
    var vw = window.innerWidth || document.documentElement.clientWidth || 1200;
    var refW = avail;
    if (vw <= 576) refW = avail * (BASE_VW - 40) / Math.max(120, vw - 40);

    var linesEn = [srcEn];
    var probe = render(enEl, [srcEn], fsE0);
    if (probe.length && probe[0].getBoundingClientRect().width > refW) {
      var sp = splitBalanced(srcEn);
      if (sp) linesEn = sp;
    }
    var linesZh = [srcZh];

    var best = null, refTnat = 0;
    for (var c = 0; c < CANDIDATES.length; c++) {
      var se = CANDIDATES[c][0], sz = CANDIDATES[c][1];
      var fsE = fsE0 * se, fsZ = fsZ0 * sz;
      var spansE = render(enEl, linesEn, fsE);
      var spansZ = render(zhEl, linesZh, fsZ);

      var items = [], i;
      for (i = 0; i < spansE.length; i++) {
        items.push({ span: spansE[i], m: measure(spansE[i]), ratio: rE, fs: fsE });
      }
      for (i = 0; i < spansZ.length; i++) {
        items.push({ span: spansZ[i], m: measure(spansZ[i]), ratio: rZ, fs: fsZ });
      }

      var base = [], lo = [], hi = [], k;
      for (k = 0; k < items.length; k++) {
        var it = items[k];
        var d = Math.max(0, it.m.slope - 1);
        var lb = it.ratio * it.fs;
        base.push(it.m.w0 + it.m.slope * lb);
        lo.push(it.m.w0 + d * MIN_EM * it.fs);
        hi.push(it.m.w0 + d * MAX_EM * it.fs);
      }
      var Tnat = Math.max.apply(null, base);
      if (se === 1 && sz === 1) refTnat = Tnat;   // 以「原始字号」下的自然宽度为统一基准
      var Tlo = Math.max.apply(null, lo);
      var Thi = Math.min.apply(null, hi);
      if (Tlo > Thi) continue;                       // 该字号组合无法对齐

      var T = Math.min(Math.max(Tnat, Tlo), Thi);
      if (T > avail) T = Math.max(Tlo, Math.min(Thi, avail));
      if (T <= 0) continue;

      var ls = [], slopes = [], ok = true;
      for (k = 0; k < items.length; k++) {
        var d2 = Math.max(1, items[k].m.slope - 1);
        var v = (T - items[k].m.w0) / d2;
        if (v < MIN_EM * items[k].fs - 0.05 || v > MAX_EM * items[k].fs + 0.05) ok = false;
        ls.push(v); slopes.push(d2);
      }
      if (!ok) continue;

      var maxEm = 0;
      for (k = 0; k < items.length; k++) {
        maxEm = Math.max(maxEm, ls[k] / items[k].fs);
      }
      // 评分：优先保持原始目标宽度与原始字号，并抑制过大的字间距
      var ref = refTnat || Tnat;
      var score = 0.3 * Math.abs(Math.log(T / ref))
        + 0.6 * Math.abs(se - 1) + 0.6 * Math.abs(sz - 1)
        + 0.4 * Math.max(0, maxEm - 1.0);
      if (!best || score < best.score) {
        best = { score: score, T: T, ls: ls, slopes: slopes, se: se, sz: sz, fsE: fsE, fsZ: fsZ };
      }
    }

    if (!best) {                                     // 兜底：恢复原始字号与字距
      render(enEl, linesEn, fsE0);
      render(zhEl, linesZh, fsZ0);
      return;
    }

    // 若目标宽度仍超出容器，整体等比缩小字号
    if (best.T > avail + 0.5) {
      var sc = Math.max(0.5, avail / best.T);
      best.fsE *= sc; best.fsZ *= sc;
      best.T *= sc;
      best.ls = best.ls.map(function (v) { return v * sc; });
    }

    var sE = render(enEl, linesEn, best.fsE);
    var sZ = render(zhEl, linesZh, best.fsZ);
    var all = sE.concat(sZ);
    applyLs(all, best.ls);

    // 精度校正（字体度量存在亚像素误差）
    for (var pass = 0; pass < 2; pass++) {
      var changed = false;
      for (var i2 = 0; i2 < all.length; i2++) {
        var w = all[i2].getBoundingClientRect().width + (parseFloat(all[i2].style.marginRight) || 0);
        var diff = best.T - w;
        if (Math.abs(diff) > 0.6) {
          best.ls[i2] += diff / best.slopes[i2];
          changed = true;
        }
      }
      if (!changed) break;
      applyLs(all, best.ls);
    }
  }

  function applyLs(spans, ls) {
    for (var i = 0; i < spans.length; i++) {
      spans[i].style.letterSpacing = ls[i] + 'px';
      spans[i].style.marginRight = (-ls[i]) + 'px';
    }
  }

  var timer = null;
  function schedule() {
    if (timer) clearTimeout(timer);
    timer = setTimeout(run, 60);
  }

  var watched = [];
  function run(retryLeft) {
    var rl = (typeof retryLeft === 'number' && isFinite(retryLeft)) ? retryLeft : 2;
    var bad = false;
    for (var g = 0; g < GROUPS.length; g++) {
      var cfg = GROUPS[g];
      var roots = document.querySelectorAll(cfg.root);
      for (var i = 0; i < roots.length; i++) {
        var en = roots[i].querySelector(cfg.en);
        var zh = roots[i].querySelector(cfg.zh);
        if (!en || !zh) continue;
        try { fitGroup(roots[i], en, zh); } catch (e) { /* 忽略单个标题的异常 */ }
        if (watched.indexOf(en) < 0) { watch(en); watched.push(en); }
        if (watched.indexOf(zh) < 0) { watch(zh); watched.push(zh); }
        if (spread(roots[i]) > 1.5) bad = true;
      }
    }
    // 字体加载/语言切换可能造成测量时序偏差，自动复检一次
    if (bad && rl > 0) setTimeout(function () { run(rl - 1); }, 250);
  }

  // 同一标题块内各行的实际渲染宽度差
  function spread(root) {
    var lines = root.querySelectorAll('.ttl-line');
    if (lines.length < 2) return 0;
    var mn = Infinity, mx = -Infinity;
    for (var i = 0; i < lines.length; i++) {
      var w = lines[i].getBoundingClientRect().width
        + (parseFloat(lines[i].style.marginRight) || 0);
      if (w < mn) mn = w;
      if (w > mx) mx = w;
    }
    return mx - mn;
  }

  // i18n 切换语言会改写文本，需要重新计算
  function watch(el) {
    if (!window.MutationObserver) return;
    var mo = new MutationObserver(function () {
      if (norm(el.textContent) !== el.__ttlWritten) schedule();
    });
    mo.observe(el, { childList: true, characterData: true, subtree: true });
  }

  function ready() {
    run();
    setTimeout(run, 300);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { run(); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
  } else {
    ready();
  }
  window.addEventListener('load', ready);
  window.addEventListener('resize', schedule);
  document.addEventListener('mennei-lang-changed', function () {
    setTimeout(function () { run(); }, 80);
    setTimeout(function () { run(); }, 600);
  });
  window.__fitTitles = run;
})();
