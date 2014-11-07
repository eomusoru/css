(function( window, undefined ) {

    var floatLabel = function() {

        var $container = $('.float-label');

        $("input", $container).bind("floatIt",function(){

            var label = $(this).prev("label");

            if(this.value !== ""){
                label.addClass('is-visible');
            } else {
                label.removeClass('is-visible');
            }
        })
        .on("keyup",function() { $(this).trigger("floatIt"); })
        .on("focus",function() { $(this).prev("label").addClass('is-focused'); })
        .on("blur",function()  { $(this).prev("label").removeClass('is-focused'); })
        .trigger("floatIt");

    };

    floatLabel();

})(window);
