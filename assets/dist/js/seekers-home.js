$(document).ready(function () {
  // $('data-fancybox="gallery"').fancybox({});
  // кнопка ютуб

  $(".youtube-overlay").click(function () {
    $(".video").removeClass("active");
    $(".video iframe").attr('src', '')
    var a = $(this).parent('.video').attr("data-youtube");
    $(this).parent('.video').addClass("active");
    $(this).parent('.video').find("iframe").attr('src', a).addClass("active");
  })

  //end

  $('.banner-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $('.jobs-content').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1024,
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

  var assistants = $('.assistants-slider')

  assistants.on("init", function (event, slick) {
    $(".assistants_count").html(parseInt(slick.currentSlide + 1) + '<span> / ' + slick.slideCount + '</span>');
  });

  assistants.on("afterChange", function (event, slick, currentSlide) {
    $(".assistants_count").html(parseInt(slick.currentSlide + 1) + '<span> / ' + slick.slideCount + '</span>');
  });

  assistants.slick({
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: '<button class="slick-arrow next"><i class="icon-right-arrow1"></i></button>',
    prevArrow: '<button class="slick-arrow prev"><i class="icon-right-arrow1"></i></button>',
    responsive: [{
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          nextArrow: '<button class="slick-arrow next"><i class="icon-right-arrow1"></i></button>',
          prevArrow: '<button class="slick-arrow prev"><i class="icon-right-arrow1"></i></button>',
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  $('.articles-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: '<button class="slick-arrow next"><i class="icon-right-arrow1"></i></button>',
    prevArrow: '<button class="slick-arrow prev"><i class="icon-right-arrow1"></i></button>',
    responsive: [{
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          nextArrow: '<button class="slick-arrow next"><i class="icon-right-arrow1"></i></button>',
          prevArrow: '<button class="slick-arrow prev"><i class="icon-right-arrow1"></i></button>',
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  $('.documents-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggabl: false,
    // focusOnSelect: true,
    nextArrow: '<button class="slick-arrow next"><i class="icon-right-arrow1"></i></button>',
    prevArrow: '<button class="slick-arrow prev"><i class="icon-right-arrow1"></i></button>',
    responsive: [{
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

  $('.partner-slider').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: '<button class="slick-arrow next"><i class="icon-right-arrow1"></i></button>',
    prevArrow: '<button class="slick-arrow prev"><i class="icon-right-arrow1"></i></button>',
    responsive: [{
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

  var reviews = $('.reviews-slider');

  reviews.on("init", function (event, slick) {
    $(".reviews_count").html(parseInt(slick.currentSlide + 1) + '<span> / ' + slick.slideCount + '</span>');
  });

  reviews.on("afterChange", function (event, slick, currentSlide) {
    $(".reviews_count").html(parseInt(slick.currentSlide + 1) + '<span> / ' + slick.slideCount + '</span>');
  });

  reviews.slick({
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // focusOnSelect: true,
    draggable: false,
    touchMove: false,
    nextArrow: '<button class="slick-arrow next"><i class="icon-right-arrow1"></i><span>следующий отзыв</span></button>',
    prevArrow: '<button class="slick-arrow prev"><i class="icon-right-arrow1"></i><span>предыдущий отзыв</span></button>',
    responsive: [{
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

  var reviewsVideo = $('.video-slider');

  reviewsVideo.on("init", function (event, slick) {
    $(".video_count").html(parseInt(slick.currentSlide + 1) + '<span> / ' + slick.slideCount + '</span>');
  });

  reviewsVideo.on("afterChange", function (event, slick, currentSlide) {
    $(".video_count").html(parseInt(slick.currentSlide + 1) + '<span> / ' + slick.slideCount + '</span>');
  });

  reviewsVideo.slick({
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    draggable: false,
    touchMove: false,
    nextArrow: '<button class="slick-arrow next"><i class="icon-right-arrow1"></i><span>следующий отзыв</span></button>',
    prevArrow: '<button class="slick-arrow prev"><i class="icon-right-arrow1"></i><span>предыдущий отзыв</span></button>',
    responsive: [{
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

  if ($(window).width() >= 1280) {

    assistants.slick('unslick');

    $('.articles-slider').slick('unslick');

  }

  jcf.replaceAll();

  $('.jobs-item .img').matchHeight({
    byRow: false
  });

  $('.jobs-item h4').matchHeight({
    byRow: false
  });

  $('.jobs-item p').matchHeight({
    byRow: false
  });

  $('.articles-item h4').matchHeight({
    byRow: false
  });

  $('.articles-item p').matchHeight({
    byRow: false
  });

  $('.reviews-slider h4').matchHeight({
    byRow: false
  });

  $('.reviews-slider p').matchHeight({
    byRow: false
  });

  $('.documents-item .img').matchHeight({
    byRow: false
  });

  $('.partner-item').matchHeight({
    byRow: false
  });

  $('.single-img').fancybox({});

});



  