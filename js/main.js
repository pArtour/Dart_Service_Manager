

$(document).ready(function(){
  new WOW().init();
  $('.service__header-wrapper').on('click', function(){
    $(this).next('.service__content-wrapper').toggleClass('.service__content-wrapper-active').slideToggle(400);
  });
  $('.slider').bxSlider({
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
    
    // pager:true
  });
});
