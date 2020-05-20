$(document).ready(function(){

    $('.news-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    if($(window).width() >= 1024){

        $('.news-item .text').matchHeight({
            byRow: false
        });

        $('.news-slider').slick('unslick');   

    }

});


