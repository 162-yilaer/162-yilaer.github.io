(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['./core'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('./core'));
    } else {
        factory(window.jQuery);
    }
}(function(jQuery) {
    window.$ = window.jQuery = jQuery;
    return jQuery;
}));