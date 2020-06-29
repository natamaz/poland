$(window).scroll(function () {
    if ($(window).scrollTop() >= 520) {
        $('.aside').addClass('fixed');
    } else {
        $('.aside').removeClass('fixed');
    }
});
$(document).ready(function () {

    jcf.replaceAll();

    $('#range').rangeslider({
        polyfill: false,
        onInit: function () {
            var data = $('#range').val();
            $('.range1 .rangeslider__handle').append('<span>' + data + '</span>');
        },
        onSlide: function (position, value) {
            $('.range1 .rangeslider__handle span').html(value);
            console.log(value);
        }
    });

    $('#range2').rangeslider({
        polyfill: false,
        onInit: function () {
            var data = $('#range2').val();
            $('.range2 .rangeslider__handle').append('<span>' + data + '</span>');
        },
        onSlide: function (position, value) {
            $('.range2 .rangeslider__handle span').html(value);
            console.log(value);
        }
    });

    $('#range3').rangeslider({
        polyfill: false,
        onInit: function () {
            var data = $('#range3').val();
            $('.range3 .rangeslider__handle').append('<span>' + data + '</span>');
        },
        onSlide: function (position, value) {
            $('.range3 .rangeslider__handle span').html(value);
            console.log(value);
        }
    });

    var x = $('.jcf-fake-input').empty();
    var x = $('.jcf-button-content').empty();

    $(".hint").hover(function () {
        $('.answer').toggleClass('active')
    })

    jQuery(".only_number").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });

    $(function () {
        $(".calendar").datepicker({
            dateFormat: 'dd/mm/yy',
            firstDay: 1
        });

        $(document).on('click', '.date-picker .input', function (e) {
            var $me = $(this)
            $parent = $me.parents('.date-picker')
            $parent.toggleClass('open')
        });


        $(".calendar").on("change", function () {
            var $me = $(this)
            $selected = $me.val()
            $parent = $me.parents('.date-picker')
            $parent.find('.result').html($selected)
        });
    });

    $(".file-add").fileinput({
        uploadUrl: "/ file-upload-batch / 1",
    });

    $('.btn-brows-foto').on('click', function () {
        $(this).parents('.files').find('input').trigger('click')
    })
});
