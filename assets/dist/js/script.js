$(document).ready(function () {

    $('.top-menu, .mune-open').on('click', function () {
        $('.menu-mobile').toggleClass('active');
    });

    $('.bottom-menu').on('click', function () {
        $('.nav-mobile').toggleClass('active');
    });

    $('.menu-mobile .dropdown').on('click', function () {
        $(this).toggleClass('active');
    });

    $('.menu-mobile a').on('click', function () {
        $('.menu-mobile').removeClass('active');
    });

    $('.close-menu').on('click', function () {
        $('.menu-mobile').removeClass('active');
    });


    jQuery(function ($) {
        $(document).mouseup(function (e) {
            var div = $(".menu-mobile");
            if (!div.is(e.target) &&
                div.has(e.target).length === 0) {
                div.removeClass('active');
            }
        });
    });
    jQuery(function ($) {
        $(document).mouseup(function (e) {
            var div = $(".header-bottom");
            var navMenu = $(".nav-mobile");
            if (!div.is(e.target) &&
                div.has(e.target).length === 0) {
                navMenu.removeClass('active');
            }
        });
    });



    $('.phone').mask('+7 (000) 000 00 00', {
        placeholder: "+7 (___) ___ __ __"
    });

    function openPopup() {
        $('.home-banner').addClass('active');
    };

    setTimeout(openPopup, 1000);

    var header_height = $('header').height();
    var footer_height = $('footer').height();
    $('body').css({
        'padding-top': header_height,
        'padding-bottom': footer_height
    });

    $('.conditions_js').on('click', function () {
        $('.conditions-popup').addClass('active');
    });

    $('.complaints_js').on('click', function () {
        $('.complaints-popup').addClass('active');
    });

    $('.policy').on('click', function () {
        $('.policy-popup').addClass('active');
    });

    $('.close').on('click', function () {
        $('.conditions-popup').removeClass('active');
        $('.complaints-popup').removeClass('active');
        $('.policy-popup').removeClass('active');
        $('.video-popup').removeClass('active');
        $(".video-popup iframe").attr('src', '')
    });

    $('.close-popup').on('click', function () {
        $('.conditions-popup').removeClass('active');
        $('.complaints-popup').removeClass('active');
        $('.video-popup').removeClass('active');
        $('.policy-popup').removeClass('active');
        $(".video-popup iframe").attr('src', '')
    });



    // кнопка ютуб

    $(".video-play").on('click', function () {
        var a = $(this).attr("data-youtube");
        $('.video-popup').addClass('active');
        $(".video-popup iframe").attr('src', a)
    })


    var bgRight = $('.choice--right'),
        personRight = $('.person-right'),
        bgLeft = $('.choice--left'),
        personLeft = $('.person-left');

    $('.person-left').mouseover(function () {
        bgRight.addClass('choice--right-active');
        personRight.addClass('person-right--active')
    });
    $('.person-left').on('mouseleave', function () {
        bgRight.removeClass('choice--right-active');
        personRight.removeClass('person-right--active');
    });


    $('.person-right').mouseover(function () {
        bgLeft.addClass('choice--left-active');
        personLeft.addClass('person-left--active');
        bgRight.addClass('choice--right-opacity');

    });
    $('.person-right').on('mouseleave', function () {
        bgLeft.removeClass('choice--left-active');
        personLeft.removeClass('person-left--active');
        bgRight.removeClass('choice--right-opacity');
    });
});


$(window).resize(function () {

    var header_height = $('header').height();
    var footer_height = $('footer').height();
    $('body').css({
        'padding-top': header_height,
        'padding-bottom': footer_height
    });

});