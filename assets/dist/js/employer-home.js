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

  $('.banner-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $('.blog-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
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

  jcf.replaceAll();

  $('.are-we-item .title').matchHeight({
    byRow: false
  });

  $('.started-item p').matchHeight({
    byRow: false
  });

  if ($(window).width() >= 768) {

    $('.are-we-item').matchHeight({
      byRow: false
    });

  }

  if ($(window).width() >= 1024) {

    $('.working-item li').matchHeight({
      byRow: false
    });

  }

});
