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

    if($(window).width() >= 1024){

        $('.visa-item .text h6').matchHeight({
            byRow: false
        });

        $('.visa-item .text p').matchHeight({
            byRow: false
        });

    }

    var assistants = $('.renouncement-slider')

    assistants.on("init", function(event, slick){
        $(".renouncement_count").html(parseInt(slick.currentSlide + 1) + '<span> / ' + slick.slideCount + '</span>');
    });

    assistants.on("afterChange", function(event, slick, currentSlide){
        $(".renouncement_count").html(parseInt(slick.currentSlide + 1) + '<span> / ' + slick.slideCount + '</span>');
    });

    assistants.slick({
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-right-arrow1"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-right-arrow1"></i></button>',
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                nextArrow: '<button class="slick-arrow next"><i class="icon-right-arrow1"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-right-arrow1"></i></button>',
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                nextArrow: '<button class="slick-arrow next"><i class="icon-right-arrow1"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-right-arrow1"></i></button>',
              }
            },
            {
                breakpoint: 767,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: '<button class="slick-arrow next"><i class="icon-right-arrow1"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-right-arrow1"></i></button>',
                }
            }
        ]
    });

    if($(window).width() >= 1280){

        assistants.slick('unslick');

    }

    $('.renouncement-item').matchHeight({
        byRow: true
    });

    $('.renouncement-items').matchHeight({
        byRow: true
    });

});


