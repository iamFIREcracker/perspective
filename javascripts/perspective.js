(function ($) {
    var $window = $(window);

    var perspectives = [];

    var Perspective = function(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, Perspective.defaults, options);
        this.$cropper = this.$element.wrap(
            $('<div>').addClass('perspective-cropper').css({
                position: 'relative',
                overflow: 'hidden',
                width: this.$element.width() + 'px',
                height: (this.$element.height() - 2 * this.options.maxOffset) + 'px'

            })).parent();
    };

    Perspective.defaults = {
        maxOffset: 30
    };

    Perspective.prototype.scroll = function(e) {
        var docViewHalfHeight = $window.height()/2;
        var docViewMiddle = $window.scrollTop() + docViewHalfHeight;

        var cropperHeight = this.$cropper.height();
        var cropperTop = this.$cropper.offset().top;
        var cropperMiddle = cropperTop + cropperHeight/2;

        var offset = cropperMiddle - docViewMiddle;

        var elementTop = cropperTop;
        // Make sure image is centered while in the middle of the view
        elementTop -= this.options.maxOffset;
        // Add an additional offset to create the perspective effect
        elementTop += this.options.maxOffset * offset / docViewHalfHeight;

        this.$element.offset({top: elementTop});
    };

    $.fn.perspective = function(options) {
        return this.each(function() {
            var $this = $(this);
            var data = new Perspective(this, options);

            perspectives.push(data);

            data.scroll();
        });
    };

    $(window).on('scroll', function(e) {
        $.each(perspectives, function() {
            this.scroll(e);
        });
    });
}(window.jQuery));
