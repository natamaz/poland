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

    jcf.replaceAll();

    $('.filter-linc').on('click', function(){
      $('.filter-content').toggleClass('active');
    });

    var reviewsVideo = $('.video-slider');

    reviewsVideo.on("init", function(event, slick){
        $(".video_count").html(parseInt(slick.currentSlide + 1) + '<span> / ' + slick.slideCount + '</span>');
    });

    reviewsVideo.on("afterChange", function(event, slick, currentSlide){
        $(".video_count").html(parseInt(slick.currentSlide + 1) + '<span> / ' + slick.slideCount + '</span>');
    });

    reviewsVideo.slick({
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-right-arrow1"></i><span>следующий отзыв</span></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-right-arrow1"></i><span>предыдущий отзыв</span></button>',
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                nextArrow: '<button class="slick-arrow next"><i class="icon-right-arrow1"></i><span>следующий отзыв</span></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-right-arrow1"></i><span>предыдущий отзыв</span></button>',
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                nextArrow: '<button class="slick-arrow next"><i class="icon-right-arrow1"></i><span>следующий отзыв</span></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-right-arrow1"></i><span>предыдущий отзыв</span></button>',
              }
            },
            {
                breakpoint: 767,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: '<button class="slick-arrow next"><i class="icon-right-arrow1"></i><span>следующий отзыв</span></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-right-arrow1"></i><span>предыдущий отзыв</span></button>',
                }
            }
        ]
    });

});


