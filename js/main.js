

$(document).ready(function(){
  new WOW().init(); // WOW lib initialization
  $('.service__header-wrapper').on('click', function(){
    $(this).next('.service__content-wrapper').toggleClass('.service__content-wrapper-active').slideToggle(400); //accordion
  });
  $('.slider').bxSlider({         // slider
    slideSelector: 'div.slider-block',
    mode:'vertical',
    easing: 'ease-in-out',
    adaptiveHeight:true,
    wrapperClass: '.feedback__slider-wrapepr',
    pager:false,
    minSlides:2,
    moveSlides:1,
    slideMargin:70,
    nextText: '<i class="material-icons slider__icon">keyboard_arrow_up</i>',
    prevText: '<i class="material-icons slider__icon">keyboard_arrow_down</i>',
    nextSelector: ('#go-to-next-holder'),
    prevSelector: ('#go-to-prev-holder'),
    auto:true,
    pause:3000
  });
  // $('.team__photo').on('click', function(){
  //   $(this).addClass('active').prev().removeClass('active');
    
  //   var myIndex = $(this).index();
  // });
  $('#member-1').on('click', function () {
    $('.team__member').addClass('team__member-first').removeClass('team__member-second').removeClass('team__member-last');
  });
  $('#member-2').on('click', function () {
    $('.team__member').removeClass('team__member-first').addClass('team__member-second').removeClass('team__member-last');
    });
  $('#member-3').on('click', function () {
    $('.team__member').addClass('team__member-last').removeClass('bteam__member-second').removeClass('team__member-first');
  });
});
/*
  var value = $('.contact__input').each().val()
  alert(value);
  $('.contact__input').on('click', function() {
    $(this).val('');
    $(this).on('blur', function() {
      if ($(this).val() = '') {
        $(this).val(value);
      }
    })
  })
  */

