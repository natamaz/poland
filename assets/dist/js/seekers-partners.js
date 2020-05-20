$(document).ready(function(){

    $('.partner-slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-right-arrow1"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-right-arrow1"></i></button>',
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                nextArrow: '<button class="slick-arrow next"><i class="icon-right-arrow1"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-right-arrow1"></i></button>',
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                nextArrow: '<button class="slick-arrow next"><i class="icon-right-arrow1"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-right-arrow1"></i></button>',
              }
            },
            {
                breakpoint: 767,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                nextArrow: '<button class="slick-arrow next"><i class="icon-right-arrow1"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-right-arrow1"></i></button>',
                }
            }
        ]
    });

    $('.partner-item').matchHeight({
        byRow: false
    });

    $('.package-item p').matchHeight({
        byRow: false
    });

    jcf.replaceAll();

    $('.tabs-content').responsiveTabs({
        active: 0,
        startCollapsed: 'accordion'
    });

    if($(window).width() >= 1024){

        $('.advantages-item h5').matchHeight({
            byRow: false
        });

        $('.advantages-item p').matchHeight({
            byRow: false
        });

        $('.everyone li').matchHeight({
            byRow: false
        });

        $('.everyone h6').matchHeight({
            byRow: false
        });

        $('.everyone p').matchHeight({
            byRow: false
        });

    }

});


