$(document).ready(function () {
  // кнопка ютуб

  $(".youtube-overlay").click(function () {
    $(".video").removeClass("active");
    $(".video iframe").attr('src', '')
    var a = $(this).parent('.video').attr("data-youtube");
    $(this).parent('.video').addClass("active");
    $(this).parent('.video').find("iframe").attr('src', a).addClass("active");
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

  $('.partner-item').matchHeight({
    byRow: false
  });

  jcf.replaceAll();

});
