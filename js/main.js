new WOW().init();

$(document).ready(function(){
  $('.service__header-wrapper').on('click', function(){
    $(this).next('.service__content-wrapper').toggleClass('.service__content-wrapper-active').slideToggle(600);
  });
});
