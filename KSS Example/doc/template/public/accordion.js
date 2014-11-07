(function ($) {

    /* Event for opened items from faq */
    $('.js-accordion dl').on('click', 'dt', function(){
        var $this          = $(this),
            $thisDef       = $this.next('dd'),
            $container     = $('.js-accordion dl dt');
            $clonedThisDef = getUnvisibleDimensions($thisDef);
            $thisDefHeight = $clonedThisDef.h+70;

        /* Check if there are some items opened. If there are, make them hidden */
        $('.js-accordion dl').find('dd.is-visible').not($thisDef).removeClass('is-visible').css('max-height',0);
        $('.js-accordion dl').find('dt.is-visible').not($this).removeClass('is-visible');


        // If the clicked DT is not already open
        if (!$thisDef.hasClass('is-visible')) {

            // Close all the definitions first
            $('.is-visible', $container).removeClass('is-visible');
            $('.is-visible', $container).css("max-height", '0');

            // Then open $this question
            $this.addClass('is-visible');
            $thisDef.addClass('is-visible');
            $thisDef.css("max-height", $thisDefHeight);
        }
        else {
            // Then close $this question
            $this.removeClass('is-visible');
            $thisDef.removeClass('is-visible');
            $thisDef.css("max-height", '0');
        }
    });

}(jQuery));
