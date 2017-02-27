$(function(){

  $('.card--is-selectable').click(function(){
    $(this).toggleClass('card--selected');
  });

  $('.tabs__tab').click(function(){
    $(this).siblings().removeClass('tabs__tab--selected');
    $(this).addClass('tabs__tab--selected');
  });

  $('.js-choose-package').click(function(){
    $(this).parents('.step').removeClass('step--active').addClass('step--inactive');
    $(this).parents('.step').next().removeClass('step--inactive').addClass('step--active');
    $('.js-step-title').text('Choose 5 Clips');
  });
});
