$(document).ready(function () {

    jcf.replaceAll();

    $('.maps-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
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



  $("#file-1").fileinput({
    uploadUrl: "/ file-upload-batch / 1",
    showCaption: false,
    dropZoneEnabled: false
  });

  $("#file-2").fileinput({
    uploadUrl: "/ file-upload-batch / 1",
    showCaption: false,
    dropZoneEnabled: false
  });

  $("#file-3").fileinput({
    uploadUrl: "/ file-upload-batch / 1",
    showCaption: false,
    dropZoneEnabled: false
  });

  $("#file-4").fileinput({
    uploadUrl: "/ file-upload-batch / 1",
    showCaption: false,
    dropZoneEnabled: false
  });

  $("#file-5").fileinput({
    uploadUrl: "/ file-upload-batch / 1",
    showCaption: false,
    dropZoneEnabled: false
  });

  $("#file-6").fileinput({
    uploadUrl: "/ file-upload-batch / 1",
    showCaption: false,
    dropZoneEnabled: false
  });

  $("#file-2").fileinput({
    uploadUrl: "/ file-upload-batch / 1",
    showCaption: false,
    dropZoneEnabled: false
  });

  $('.btn-file .hidden-xs').text('Прикрепить файлы');

});


// модальные окна
document.addEventListener('DOMContentLoaded', function() {

   var modalButtons = document.querySelectorAll('.js-open-modal'),
      overlay      = document.querySelector('.js-overlay-modal'),
      closeButtons = document.querySelectorAll('.close');
      modalWrapp = document.querySelector('.modal');


   modalButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         e.preventDefault();

         var modalId = this.getAttribute('data-modal'),
            modalElem = document.querySelector('.popup[data-modal="' + modalId + '"]');

         modalElem.classList.add('popup--opened');
         overlay.classList.add('modal__overlay--opened');
         modalWrapp.classList.add('modal--opened');
         document.querySelector('body').classList.add('hidden');
         jcf.replaceAll();
      });
   });

   closeButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         var parentModal = this.closest('.popup');

         parentModal.classList.remove('popup--opened');
         overlay.classList.remove('modal__overlay--opened');
         modalWrapp.classList.remove('modal--opened');
         document.querySelector('.hidden').classList.remove('hidden');
      });

   });


   document.body.addEventListener('keyup', function (e) {
      var key = e.keyCode;

      if (key == 27) {

         document.querySelector('.modal--opened').classList.remove('modal--opened');
         document.querySelector('.modal__overlay--opened').classList.remove('modal__overlay--opened');
         document.querySelector('.popup--opened').classList.remove('popup--opened');
         document.querySelector('.hidden').classList.remove('hidden');
      };
   }, false);


   overlay.addEventListener('click', function() {
      document.querySelector('.modal--opened').classList.remove('modal--opened');
      document.querySelector('.popup--opened').classList.remove('popup--opened');
      document.querySelector('.hidden').classList.remove('hidden');
      this.classList.remove('.modal__overlay--opened');
   });
});


