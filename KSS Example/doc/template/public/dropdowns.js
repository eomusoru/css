(function( window, undefined ) {
    
    var dropDown = function(that, event) {

        var $target         = $(that.attr('data-href')),
            $activeDropDown = $('.dropdown').filter('.is-visible').not($target);

        $activeDropDown.removeClass('is-visible');

        if (!!$target) {
            $target.toggleClass('is-visible');
        }

        event.preventDefault();
        event.stopPropagation();
    };

    $('.js-dropdown-toggle').on('click', function(event){
        dropDown($(this), event);
    });
                
})(window);
