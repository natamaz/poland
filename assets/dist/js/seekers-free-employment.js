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

    $('.decent-item h4').matchHeight({
        byRow: false
    });

    jcf.replaceAll();

    if($(window).width() >= 1024){

        $('.decent-item').matchHeight({
            byRow: false
        });

        $('.how-work-item').matchHeight({
            byRow: false
        });

        assistants.slick('unslick');

    }

    var assistants = $('.advantages-slider')

    assistants.on("init", function(event, slick){
        $(".advantages_count").html(parseInt(slick.currentSlide + 1) + '<span> / ' + slick.slideCount + '</span>');
    });

    assistants.on("afterChange", function(event, slick, currentSlide){
        $(".advantages_count").html(parseInt(slick.currentSlide + 1) + '<span> / ' + slick.slideCount + '</span>');
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

});


