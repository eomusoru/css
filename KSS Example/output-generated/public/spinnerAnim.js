$(document).ready(function(){
    var iconWidth = 120,
        framesNb  = 24,
        frameTime = 40,
        iteration = 0,
        $icon     = $('.spinner__icon');

    timer = setInterval(function() {

        $icon.css('background-position', iconWidth * iteration * -1 + 'px 0px')

        iteration += 1

        if ( iteration === framesNb ) {
            iteration = 0
        }

    }, frameTime);
});
