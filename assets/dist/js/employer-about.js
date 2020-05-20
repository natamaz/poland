$(document).ready(function(){

    if($(window).width() < 768){
        $(".founders-scroll").scrollLeft(195);
    }

    if($(window).width() <= 1024){
        $('.our-values-item').matchHeight({
            byRow: true
        });
    }

    $('.founders-item p').matchHeight({
        byRow: false
    });

});


