/**
 * jQuery dlmenu Plugin
 */
(function($, window, undefined) {
    $.fn.dlmenu = function(options) {
        return this.each(function() {
            var $this = $(this);
            $this.data('dlmenu', new DlMenu($this, options));
        });
    };

    function DlMenu($el, options) {
        this.$el = $el;
        this.options = $.extend({}, $.fn.dlmenu.options, options);
        this.init();
    }

    DlMenu.prototype.init = function() {
        var self = this;
        self.$trigger = self.$el.children('button');
        self.$menu = self.$el.find('.dl-menu');
        
        self.$trigger.on('click.dlmenu', function(event) {
            event.stopPropagation();
            self.toggleMenu();
        });
        
        $(document).on('click.dlmenu', function(event) {
            if (!self.$el.is(event.target) && !self.$el.has(event.target).length) {
                self.closeMenu();
            }
        });
    };

    DlMenu.prototype.toggleMenu = function() {
        var self = this;
        self.$menu.toggleClass('dl-menuopen');
    };

    DlMenu.prototype.closeMenu = function() {
        var self = this;
        self.$menu.removeClass('dl-menuopen');
    };

    $.fn.dlmenu.options = {};
})(jQuery, window);