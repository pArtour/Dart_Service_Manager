$(document).ready(function(){
  var wow = new WOW(
    {
      mobile: false
    }
  ).init(); // WOW lib initialization
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
  $('#member-1').on('click', function () {
    $('.team__member').addClass('team__member-first').removeClass('team__member-second').removeClass('team__member-last');
    $(this).addClass('active');
    $('#member-2').removeClass('active');
    $('#member-3').removeClass('active');
  });
  $('#member-2').on('click', function () {
    $('.team__member').removeClass('team__member-first').addClass('team__member-second').removeClass('team__member-last');
    $(this).addClass('active');
    $('#member-1').removeClass('active');
    $('#member-3').removeClass('active');
    });
  $('#member-3').on('click', function () {
    $('.team__member').addClass('team__member-last').removeClass('bteam__member-second').removeClass('team__member-first');
    $(this).addClass('active');
    $('#member-1').removeClass('active');
    $('#member-2').removeClass('active');
  });
  $('.menu__phone__button').on('click', function(e){
    e.preventDefault();
    $('.menu__list__phone').toggleClass('menu__list__phone-active');
  });
});
