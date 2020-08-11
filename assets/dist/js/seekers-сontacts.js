$(document).ready(function () {
  // кнопка ютуб

  $(".youtube-overlay").click(function () {
    $(".contacts-video").removeClass("active");
    $(".contacts-video iframe").attr('src', '')
    var a = $(this).parent('.contacts-video').attr("data-youtube");
    $(this).parent('.contacts-video').addClass("active");
    $(this).parent('.contacts-video').find("iframe").attr('src', a).addClass("active");
  })

  //end

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

  $('.executives-slider').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: '<button class="slick-arrow next"><i class="icon-right-arrow1"></i></button>',
    prevArrow: '<button class="slick-arrow prev"><i class="icon-right-arrow1"></i></button>',
    responsive: [{
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          nextArrow: '<button class="slick-arrow next"><i class="icon-right-arrow1"></i></button>',
          prevArrow: '<button class="slick-arrow prev"><i class="icon-right-arrow1"></i></button>',
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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

  $('.contacts-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $('.partner-item').matchHeight({
    byRow: false
  });

});
