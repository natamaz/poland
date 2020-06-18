$(document).ready(function () {

    if ($(window).width() >= 768) {

        $('.why-worth-item p').matchHeight({
            byRow: true
        });

    }

    $(".faq-accordion").accordion({
        collapsible: true,
        heightStyle: "content"
    });

    $('.step-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    if ($(window).width() >= 1024) {

        $('.step-slider').slick('unslick');

    }

    $('.step-item p').matchHeight({
        byRow: true
    });

    $('.step-item .title').matchHeight({
        byRow: true
    });

});
