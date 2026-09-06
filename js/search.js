(function() {
'use strict';
var searchIndex = [
// ========== 页面 Pages ==========
{ type: 'page', zh: '首页', en: 'Home', zhDesc: '门内艺术涂料官网首页', enDesc: 'MENNEI artistic coating homepage', url: '/' },
{ type: 'page', zh: '品牌故事', en: 'Brand Story', zhDesc: '门内品牌溯源、概览、调性、内核与愿景', enDesc: 'MENNEI brand origin, overview, tone, essence and vision', url: 'story.html' },
{ type: 'page', zh: '色彩体系', en: 'Color System', zhDesc: '门内主题色：草木黄、壁炉灰、杏子白', enDesc: 'MENNEI signature colors: Grass & Wood Yellow, Fireplace Ash, Apricot White', url: 'color.html' },
{ type: 'page', zh: '产品中心', en: 'Products', zhDesc: '门内艺术涂料产品矩阵，覆盖家装、工装全场景', enDesc: 'MENNEI artistic coating product portfolio for all scenarios', url: 'product.html' },
{ type: 'page', zh: '实景案例', en: 'Case Studies', zhDesc: '门内艺术涂料实景落地案例', enDesc: 'MENNEI real project cases', url: 'case.html' },
{ type: 'page', zh: '施工教程', en: 'Tutorials', zhDesc: '门内艺术涂料施工教程', enDesc: 'MENNEI artistic coating application tutorials', url: 'https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg5OTY5NTA3Mw==&action=getalbum&album_id=3145469585073078278#wechat_redirect', external: true },
{ type: 'page', zh: '联系我们', en: 'Contact Us', zhDesc: '门内联系方式与地址', enDesc: 'MENNEI contact information and address', url: 'contact.html' },
{ type: 'page', zh: '线下门店', en: 'Stores', zhDesc: '门内线下品牌门店', enDesc: 'MENNEI physical brand stores', url: 'ditu.html' },
// ========== 分类 Categories ==========
{ type: 'category', zh: '质感类', en: 'Texture', zhDesc: '质感类艺术涂料是当下高端家装、商业空间的主流饰面品类，主打触觉美学，依靠天然矿物骨料打造多层次立体颗粒肌理', enDesc: 'Texture artistic coatings for high-end residential and commercial spaces, using natural mineral aggregates to create multi-dimensional granular textures', url: 'zhigan.html' },
{ type: 'category', zh: '实色类', en: 'Solid Color', zhDesc: '哑光柔雾平整饰面，无凹凸颗粒，色彩体系丰富，奶油风、极简、现代、轻奢、中古风均可适配', enDesc: 'Matte soft-mist smooth finish with rich color system, compatible with cream, minimalist, modern, light luxury, and mid-century styles', url: 'shise.html' },
{ type: 'category', zh: '灰泥类', en: 'Stucco', zhDesc: '传承千年古法灰泥工艺，以天然石灰、砂岩等无机矿物为原料，打造粗砺质朴的墙面肌理', enDesc: 'Inheriting thousand-year-old stucco craftsmanship, using natural lime and sandstone to create rough and natural wall textures', url: 'huini.html' },
{ type: 'category', zh: '珠光类', en: 'Pearl', zhDesc: '以云母、贝壳等天然珠光材料为骨，在光线下呈现若隐若现的灵动光泽', enDesc: 'With natural pearlescent materials like mica and shells, presenting a subtle dynamic sheen under light', url: 'zhuguang.html' },
{ type: 'category', zh: '地墙一体涂装', en: 'Floor-Wall System', zhDesc: '打破墙地界限，实现地面与墙面的材质统一，防水防滑、无缝一体', enDesc: 'Breaking the boundary between wall and floor, achieving material unity, waterproof and seamless', url: 'diqiangyiti.html' },
{ type: 'category', zh: '乳胶漆系列', en: 'Latex Paint', zhDesc: '以健康环保为核心，零甲醛、零VOC释放，抗菌防霉性能卓越', enDesc: 'Health-focused, zero formaldehyde, zero VOC, excellent antibacterial and mold resistance', url: 'rujiaoqi.html' },
{ type: 'category', zh: '外墙系列', en: 'Exterior', zhDesc: '专为建筑外立面研发，具备超强耐候性、抗紫外线能力与自洁功能', enDesc: 'Specially developed for building facades, with super weather resistance, UV resistance, and self-cleaning function', url: 'https://mp.weixin.qq.com/s/ESEng4T1al6Pw77_-kqmOw', external: true },
// ========== 产品 Products ==========
{ type: 'product', zh: '砂影', en: 'Sand Shadow', zhDesc: '一款卓越的涂料，以其细腻纹理与顺滑手感脱颖而出', enDesc: 'An exceptional coating that stands out with its delicate texture and smooth feel', url: 'shaying.html', catZh: '质感类', catEn: 'Texture' },
{ type: 'product', zh: '晶钻彩', en: 'Crystal Diamond', zhDesc: '以高纯度烧结砂为骨，高品质乳液为脉，交融成一面可触摸的星河', enDesc: 'With high-purity sintered sand as the bone and high-quality emulsion as the vein, blending into a touchable galaxy', url: 'jingzuancai.html', catZh: '质感类', catEn: 'Texture' },
{ type: 'product', zh: '石上', en: 'Stone Texture', zhDesc: '灵感源自自然界中岩石的万千形态，将石材的坚韧质感与艺术灵动创意巧妙结合', enDesc: 'Inspired by the myriad forms of rocks in nature, combining the tough texture of stone with artistic creativity', url: 'shishang.html', catZh: '质感类', catEn: 'Texture' },
{ type: 'product', zh: '玛绒', en: 'Ma Velvet', zhDesc: '让温柔可触，也让坚韧可依。在方寸之间，安放既细腻又从容的绵长诗意', enDesc: 'Making gentleness touchable and resilience reliable, placing delicate and calm enduring poetry', url: 'marong.html', catZh: '质感类', catEn: 'Texture' },
{ type: 'product', zh: '雅晶石', en: 'Elegant Stone', zhDesc: '以大地脉动为灵感，将时光的刻痕凝于墙面，纹理蜿蜒游走，硬度出众', enDesc: 'Inspired by the pulse of the earth, condensing the marks of time onto walls, with outstanding hardness', url: 'yajingshi.html', catZh: '质感类', catEn: 'Texture' },
{ type: 'product', zh: '宝宝绒', en: 'Baby Velvet', zhDesc: '肌肤轻绒质感，手感柔和，视觉上斑驳效果若隐若现，配备净化甲醛技术', enDesc: 'Skin-like velvet texture, soft to the touch, with formaldehyde-purification technology', url: 'baobaorong.html', catZh: '实色类', catEn: 'Solid Color' },
{ type: 'product', zh: '小牛皮', en: 'Calfskin', zhDesc: '指尖划过，顺滑如丝绸拂过掌心，又如触摸一块上好的小牛皮，细腻而有韧性', enDesc: 'Smooth as silk brushing the palm, like touching fine calfskin — delicate yet resilient', url: 'xiaoniupi.html', catZh: '实色类', catEn: 'Solid Color' },
{ type: 'product', zh: '小羊皮', en: 'Lambskin', zhDesc: '带着微微起伏的橘皮纹理，如小羊皮般柔韧而有筋骨', enDesc: 'With gently undulating orange peel texture, as supple and structured as lambskin', url: 'xiaoyangpi.html', catZh: '实色类', catEn: 'Solid Color' },
{ type: 'product', zh: '致优蛋壳光', en: 'Premium Eggshell', zhDesc: '不刺目，不暗沉，恰似晨光轻抚蛋壳，泛起一层内敛而温润的光晕', enDesc: 'Neither harsh nor dull, like morning light gently touching an eggshell, raising a restrained and warm halo', url: 'zhiyou.html', catZh: '实色类', catEn: 'Solid Color' },
{ type: 'product', zh: '鹿皮绒por', en: 'Suede Por', zhDesc: '以极致哑光为幕，为墙面覆上一层令人沉溺的温柔，绒制手感极为舒服', enDesc: 'With extreme matte as its canvas, cloaking walls in an intoxicating gentleness, extremely comfortable suede touch', url: 'lupirong.html', catZh: '实色类', catEn: 'Solid Color' },
{ type: 'product', zh: '麂皮绒', en: 'Suede', zhDesc: '一份沉静而笃定的温柔，绒感在细腻之上添一分风骨', enDesc: 'A calm and assured gentleness, suede feel adds a touch of substance atop delicacy', url: 'jipirong.html', catZh: '实色类', catEn: 'Solid Color' },
{ type: 'product', zh: '城堡灰泥', en: 'Castle Stucco', zhDesc: '以天然石灰为骨，大理石粉为肌，在墙面上形成独一无二的斑驳纹理', enDesc: 'With natural lime as the bone and marble powder as the flesh, forming unique mottled textures on walls', url: 'chengbaohuini.html', catZh: '灰泥类', catEn: 'Stucco' },
{ type: 'product', zh: '托斯卡纳灰泥', en: 'Tuscan Stucco', zhDesc: '掘于西北贺兰矿山的自然宝藏，经数亿年地壳岁月淬炼，在时光轮回中沉淀风骨', enDesc: 'Natural treasure from the northwest Helan mines, tempered by hundreds of millions of years of crustal time', url: 'tuosikanahui.html', catZh: '灰泥类', catEn: 'Stucco' },
{ type: 'product', zh: '西夏灰泥', en: 'Xixia Stucco', zhDesc: '以纯净赋墙面以细腻与斑驳的交融之美，在方寸之间，铺展西北大地的苍古与温柔', enDesc: 'With purity endowing walls with the beauty of delicate and mottled fusion, spreading the ancient majesty of the northwest', url: 'xixiahunni.html', catZh: '灰泥类', catEn: 'Stucco' },
{ type: 'product', zh: '珠玑石', en: 'Pearl Stone', zhDesc: '以矿物的质朴语言，为墙面铭刻大地的记忆。方寸之间，见山，见石，见时间', enDesc: 'In the rustic language of minerals, engraving the memory of the earth on walls', url: 'zhujishi.html', catZh: '灰泥类', catEn: 'Stucco' },
{ type: 'product', zh: '贺兰石', en: 'Helan Stone', zhDesc: '以苍茫笔触为墙面刻下山河的筋骨，采贺兰山石矿物，肌理更显磊落', enDesc: 'With vast brushstrokes, carves the sinews of mountains and rivers onto walls, sourcing minerals from the Helan Mountains', url: 'helanshi.html', catZh: '灰泥类', catEn: 'Stucco' },
{ type: 'product', zh: '莫高灰岩-若土', en: 'Mogao Limestone - Earth', zhDesc: '以大漠细尘为灵感，为墙面铺陈一层温润如丝的地质记忆，颗粒度较细，斑驳感更强', enDesc: 'Inspired by the fine dust of the desert, laying a warm, silk-like geological memory across walls', url: 'mogaohuiruotu.html', catZh: '灰泥类', catEn: 'Stucco' },
{ type: 'product', zh: '莫高灰岩-若石', en: 'Mogao Limestone - Rock', zhDesc: '以苍茫大漠为灵感，用矿物语言书写的洞石之诗，颗粒度粗犷有力', enDesc: 'Inspired by the vast desert, a poem of travertine written in the language of minerals, with bold and forceful granular coarseness', url: 'mogaohuiruo.html', catZh: '灰泥类', catEn: 'Stucco' },
{ type: 'product', zh: '云舒', en: 'Cloud Drift', zhDesc: '明暗花纹在光影映射中相互交融，犹如云卷云舒，随光线、角度变化给视觉带来不同的惊喜', enDesc: 'Light and dark patterns blend in the interplay of light and shadow, like drifting clouds', url: 'yunshu.html', catZh: '珠光类', catEn: 'Pearl' },
{ type: 'product', zh: '星雨', en: 'Star Rain', zhDesc: '不耀眼，不喧哗，却在不经意的一瞥间，捕捉到那转瞬即逝的微光', enDesc: 'Not dazzling, not loud, but in a casual glance, capturing that fleeting glimmer', url: 'xingyu.html', catZh: '珠光类', catEn: 'Pearl' },
{ type: 'product', zh: '蕴珠', en: 'Pearl Essence', zhDesc: '将光芒内敛于心，为墙面沉淀一席温润的珠光梦境', enDesc: 'Holding light within, weaving a warm pearlescent dream for the walls', url: 'yunzhu.html', catZh: '珠光类', catEn: 'Pearl' },
{ type: 'product', zh: '阿基里斯', en: 'Achilles', zhDesc: '立体布纹肌理自带珠光，织物般的层次在光影下舒展', enDesc: 'Three-dimensional fabric-weave texture with built-in pearlescence, unfolding like a woven layer under light and shadow', url: 'ajilisi.html', catZh: '珠光类', catEn: 'Pearl' },
{ type: 'product', zh: '绸缎', en: 'Silk Satin', zhDesc: '珠光薄浆肌理明暗交织，呈现丝绸般柔顺光泽', enDesc: 'Pearlescent thin-paste texture with interwoven light and shade, presenting silk-like soft luster', url: 'chouduan.html', catZh: '珠光类', catEn: 'Pearl' },
{ type: 'product', zh: '微岩瓷', en: 'Micro Rock Porcelain', zhDesc: '以瓷之名，为空间描绘天地墙一体的从容，可延展于墙面、地面、天花，一体涂装', enDesc: 'In the name of porcelain, painting the composure of unified floor-wall for spaces', url: 'weiyanci.html', catZh: '地墙一体涂装', catEn: 'Floor-Wall System' },
{ type: 'product', zh: '微岩釉', en: 'Micro Rock Glaze', zhDesc: '为空间覆上坚韧温润的铠甲，滚刷间如釉彩流淌，遮盖力出色，附着力强', enDesc: 'Endowing spaces with resilient and warm armor, flows like glaze during rolling, excellent coverage', url: 'weiyanyou.html', catZh: '地墙一体涂装', catEn: 'Floor-Wall System' },
{ type: 'product', zh: '净界', en: 'Pure Zone', zhDesc: '净无止境，以洁净之名为空间筑起无形健康屏障，抗菌防霉', enDesc: 'Purity without end, building an invisible health barrier in the name of cleanliness, antibacterial and mold-resistant', url: 'jingjie.html', catZh: '乳胶漆系列', catEn: 'Latex Paint' },
{ type: 'product', zh: '净盾', en: 'Pure Shield', zhDesc: '为家筑起坚韧安心的防线，遮盖力出色，耐擦洗出众，抗菌防霉', enDesc: 'Building a resilient and reassuring defense for home, excellent coverage, outstanding washability, antibacterial', url: 'jingdun.html', catZh: '乳胶漆系列', catEn: 'Latex Paint' },
// ========== 案例 Case Studies ==========
{ type: 'case', zh: '深圳·在野南杂（RISOCIAL）', en: 'Shenzhen · Zaiye Nanza (RISOCIAL)', zhDesc: '原生矿石美学空间，选用莎安娜洞石艺术涂料', enDesc: 'Native ore aesthetic space, using Shaanna Travertine artistic coating', url: 'case/case1.html' },
{ type: 'case', zh: '重庆家装案例', en: 'Chongqing Residential Project', zhDesc: '全屋大面积使用门内艺术涂料石上，呈现原始温暖的美学', enDesc: 'Whole-house application of MENNEI Stone Texture coating, presenting primal warm aesthetics', url: 'case/case2.html' },
{ type: 'case', zh: '江门海悦天玺', en: 'Jiangmen Haiyue Tianxi', zhDesc: '江畔四代宅，以涂料为笔，绘意式极简的呼吸与骨相', enDesc: 'Riverside four-generation residence, painting Italian minimalism with coatings', url: 'case/case3.html' },
{ type: 'case', zh: '宝宝绒案例赏析', en: 'Baby Velvet Showcase', zhDesc: '一绒多面，定义高级住宅新质感', enDesc: 'One velvet, many faces — defining premium residence texture', url: 'case/case4.html' },
{ type: 'case', zh: '江门碧桂园', en: 'Jiangmen Country Garden', zhDesc: '当现代极简遇见艺术涂料，材料本身即是最佳叙事者', enDesc: 'When modern minimalism meets artistic coatings, materials become the ultimate storyteller', url: 'case/case5.html' },
{ type: 'case', zh: '中山案例', en: 'Zhongshan Project', zhDesc: '精神领地——中山中1892', enDesc: 'Spiritual Realm — Zhongshan 1892', url: 'case/case6.html' },
{ type: 'case', zh: '中古风案例', en: 'Mid-Century Modern Style', zhDesc: '中古美学的墙面应用', enDesc: 'Wall applications of mid-century aesthetics', url: 'case/case7.html' },
{ type: 'case', zh: '宋式美学', en: 'Song Dynasty Aesthetics', zhDesc: '宋式美学的墙面应用', enDesc: 'Wall applications of Song Dynasty aesthetics', url: 'case/case8.html' },
{ type: 'case', zh: '洞石案例', en: 'Travertine Project', zhDesc: '自然之韵，空间之魂', enDesc: 'Natural rhythm, the soul of space', url: 'case/case9.html' },
{ type: 'case', zh: '液态金属', en: 'Liquid Metal', zhDesc: '以光影，重塑空间灵魂', enDesc: 'Reshaping the soul of space with light and shadow', url: 'case/case10.html' },
{ type: 'case', zh: '设计师事务所', en: 'Designer Studio', zhDesc: '黑白之间，见本真', enDesc: 'Between black and white, finding authenticity', url: 'case/case11.html' },
{ type: 'case', zh: '玛曼奴', en: 'Mamanu', zhDesc: '经典&创新', enDesc: 'Classic & Innovation', url: 'case/case12.html' }
];
function hasChinese(str) {
return /[\u4e00-\u9fff]/.test(str);
}
function getLang() {
if (window.MenneiI18n && typeof window.MenneiI18n.getLang === 'function') {
return window.MenneiI18n.getLang();
}
var saved = localStorage.getItem('mennei_lang');
return (saved === 'en') ? 'en' : 'zh';
}
function t(key) {
if (window.MenneiI18n && typeof window.MenneiI18n.t === 'function') {
return window.MenneiI18n.t(key);
}
return key;
}
function getTypeLabel(type, lang) {
var labels = {
product: { zh: '产品', en: 'Product' },
category: { zh: '分类', en: 'Category' },
case: { zh: '案例', en: 'Case Study' },
page: { zh: '页面', en: 'Page' }
};
var label = labels[type] || labels.page;
return label[lang] || label.zh;
}
function doSearch(keyword, lang) {
var kw = keyword.toLowerCase().trim();
if (!kw) return [];
var results = [];
searchIndex.forEach(function(item) {
var name = (lang === 'zh' ? item.zh : item.en) || '';
var desc = (lang === 'zh' ? item.zhDesc : item.enDesc) || '';
var cat = (lang === 'zh' ? item.catZh : item.catEn) || '';
if (name.toLowerCase().indexOf(kw) !== -1 ||
desc.toLowerCase().indexOf(kw) !== -1 ||
cat.toLowerCase().indexOf(kw) !== -1) {
results.push(item);
}
});
return results;
}
var promptTimer = null;
var promptEl = null;
function showPrompt(message) {
var searchContainer = document.querySelector('.footer-search');
if (!searchContainer) return;
if (promptEl) {
promptEl.remove();
}
if (promptTimer) {
clearTimeout(promptTimer);
}
promptEl = document.createElement('div');
promptEl.className = 'search-prompt';
promptEl.textContent = message;
searchContainer.appendChild(promptEl);
requestAnimationFrame(function() {
promptEl.classList.add('show');
});
promptTimer = setTimeout(function() {
hidePrompt();
}, 3000);
}
function hidePrompt() {
if (promptEl) {
promptEl.classList.remove('show');
var el = promptEl;
promptEl = null;
setTimeout(function() { if (el.parentNode) el.remove(); }, 300);
}
if (promptTimer) {
clearTimeout(promptTimer);
promptTimer = null;
}
}
var modalOverlay = null;
function closeModal() {
if (modalOverlay) {
modalOverlay.classList.remove('open');
var el = modalOverlay;
modalOverlay = null;
setTimeout(function() { if (el.parentNode) el.remove(); }, 300);
}
document.body.style.overflow = '';
}
function showResultsModal(keyword, results, lang) {
closeModal();
hidePrompt();
modalOverlay = document.createElement('div');
modalOverlay.className = 'search-modal-overlay';
var modal = document.createElement('div');
modal.className = 'search-modal';
var header = document.createElement('div');
header.className = 'search-modal-header';
var titleText = t('search.results_title') + ' — ' + keyword;
var title = document.createElement('h3');
title.className = 'search-modal-title';
title.textContent = titleText;
var closeBtn = document.createElement('button');
closeBtn.className = 'search-modal-close';
closeBtn.innerHTML = '&times;';
closeBtn.setAttribute('aria-label', t('search.close'));
closeBtn.addEventListener('click', closeModal);
header.appendChild(title);
header.appendChild(closeBtn);
var body = document.createElement('div');
body.className = 'search-modal-body';
if (results.length === 0) {
var noResults = document.createElement('div');
noResults.className = 'search-no-results';
noResults.textContent = t('search.no_results');
body.appendChild(noResults);
} else {
var countEl = document.createElement('div');
countEl.className = 'search-results-count';
countEl.textContent = results.length + ' ' + (lang === 'zh' ? '条结果' : 'results');
body.appendChild(countEl);
results.forEach(function(item) {
var card = document.createElement('a');
card.className = 'search-result-card';
card.href = item.url;
if (item.external) { card.target = '_blank'; card.rel = 'noopener'; }
var badge = document.createElement('span');
badge.className = 'search-result-badge search-result-badge-' + item.type;
badge.textContent = getTypeLabel(item.type, lang);
var info = document.createElement('div');
info.className = 'search-result-info';
var name = document.createElement('div');
name.className = 'search-result-name';
name.textContent = (lang === 'zh' ? item.zh : item.en) || '';
var desc = document.createElement('div');
desc.className = 'search-result-desc';
var descText = (lang === 'zh' ? item.zhDesc : item.enDesc) || '';
if (descText.length > 100) {
descText = descText.substring(0, 100) + '...';
}
desc.textContent = descText;
info.appendChild(name);
if (descText) {
info.appendChild(desc);
}
card.appendChild(badge);
card.appendChild(info);
body.appendChild(card);
});
}
modal.appendChild(header);
modal.appendChild(body);
modalOverlay.appendChild(modal);
modalOverlay.addEventListener('click', function(e) {
if (e.target === modalOverlay) {
closeModal();
}
});
document.body.appendChild(modalOverlay);
document.body.style.overflow = 'hidden';
requestAnimationFrame(function() {
modalOverlay.classList.add('open');
});
}
function initSearch() {
var form = document.querySelector('.footer-search form');
if (!form) return;
form.addEventListener('submit', function(e) {
e.preventDefault();
var input = form.querySelector('input[name="keyword"]');
if (!input) return;
var keyword = input.value.trim();
var lang = getLang();
if (!keyword) return;
if (lang === 'zh' && !hasChinese(keyword)) {
showPrompt('请输入中文关键词');
return;
}
if (lang === 'en' && hasChinese(keyword)) {
showPrompt('Please enter English keywords');
return;
}
var results = doSearch(keyword, lang);
showResultsModal(keyword, results, lang);
});
}
document.addEventListener('mennei-lang-changed', function() {
hidePrompt();
if (modalOverlay) {
closeModal();
}
});
document.addEventListener('keydown', function(e) {
if (e.key === 'Escape' && modalOverlay) {
closeModal();
}
});
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', initSearch);
} else {
initSearch();
}
})();