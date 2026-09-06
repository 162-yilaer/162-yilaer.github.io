$(function() {
var $backToTop = $('<button class="back-to-top" data-i18n="common.back_to_top">返回顶部</button>');
$backToTop.css({
position: 'fixed',
bottom: '50px',
right: '30px',
width: '50px',
height: '50px',
background: 'rgba(0, 0, 0, 0.5)',
color: '#fff',
border: 'none',
borderRadius: '50%',
cursor: 'pointer',
display: 'none',
zIndex: '9999'
});
$('body').append($backToTop);
$(window).scroll(function() {
if ($(window).scrollTop() > 300) {
$backToTop.fadeIn();
} else {
$backToTop.fadeOut();
}
});
$backToTop.click(function() {
$('html, body').animate({ scrollTop: 0 }, 500);
});
// 监听语言切换事件
function updateBackToTopText() {
if (window.MenneiI18n) {
var text = window.MenneiI18n.t('common.back_to_top');
$backToTop.text(text);
}
}
// 初始检查
updateBackToTopText();
// 监听自定义语言切换事件
document.addEventListener('mennei-lang-changed', updateBackToTopText);
});