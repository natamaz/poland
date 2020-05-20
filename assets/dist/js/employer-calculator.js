$(document).ready(function(){

    jcf.replaceAll();

    $('#range').rangeslider({
        polyfill: false,
        onInit: function() {
            var data = $('#range').val();
            $('.range1 .rangeslider__handle').append('<span>' + data + '</span>');   
        },
        onSlide: function(position, value) {
            $('.range1 .rangeslider__handle span').html(value);   
            console.log(value);
        }
    });

    $('#range2').rangeslider({
        polyfill: false,
        onInit: function() {
            var data = $('#range2').val();
            $('.range2 .rangeslider__handle').append('<span>' + data + '</span>');   
        },
        onSlide: function(position, value) {
            $('.range2 .rangeslider__handle span').html(value);   
            console.log(value);
        }
    });

    $('#range3').rangeslider({
        polyfill: false,
        onInit: function() {
            var data = $('#range3').val();
            $('.range3 .rangeslider__handle').append('<span>' + data + '</span>');   
        },
        onSlide: function(position, value) {
            $('.range3 .rangeslider__handle span').html(value);   
            console.log(value);
        }
    });

    var x = $('.jcf-fake-input').empty();
    var x = $('.jcf-button-content').empty();

});


