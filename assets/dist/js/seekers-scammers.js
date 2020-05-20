$(document).ready(function(){

    var assistants = $('.step-slider')

    assistants.on("init", function(event, slick){
        $(".step_count").html(parseInt(slick.currentSlide + 1) + '<span> / ' + slick.slideCount + '</span>');
    });

    assistants.on("afterChange", function(event, slick, currentSlide){
        $(".step_count").html(parseInt(slick.currentSlide + 1) + '<span> / ' + slick.slideCount + '</span>');
    });

    assistants.slick({
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: '<button class="slick-arrow next"><i class="icon-right-arrow1"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-right-arrow1"></i></button>'
    });

    if($(window).width() >= 1024){

        assistants.slick('unslick');

    }

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

});


