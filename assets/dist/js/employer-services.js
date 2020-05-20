$(document).ready(function(){

    $('.services-item p').matchHeight({
        byRow: false
    });

    $('.additional-item').matchHeight({
        byRow: false
    });

    $('.additional-item p').matchHeight({
        byRow: false
    });

    if($(window).width() >= 1024){

        $('.employer-item').matchHeight({
            byRow: true
        });

    }

    $('.additional-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
            }
        ]
    });

    if($(window).width() >= 1280){

        $('.additional-slider').slick('unslick');   

    }

    $('.services-tabs').responsiveTabs({
        active: 0,
        startCollapsed: 'accordion'
    });

});


