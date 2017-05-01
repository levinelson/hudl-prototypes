// @codekit-prepend "../../bower_components/jquery/dist/jquery.min.js";

$(document).ready(function(){
  var $toast = $('.toast');
  var $container = $('.container');

  $('.js-toggle-toast').click(function() {
    $toast.toggleClass('toast--is-triggered');
  });

  $('.js-toggle-environment').click(function(){
    if ($toast.hasClass('t-de--ink')) {
      $toast.removeClass('t-de--ink').addClass('t-le--clean');
    } else {
      $toast.removeClass('t-le--clean').addClass('t-de--ink');
    }
  });

  $('.js-toggle-type').click(function(){
    if ($toast.hasClass('toast--type-success')) {
      $toast.removeClass('toast--type-success').addClass('toast--type-critical');
    } else if ($toast.hasClass('toast--type-critical')) {
      $toast.removeClass('toast--type-critical').addClass('toast--type-warning');
    } else if ($toast.hasClass('toast--type-warning')) {
      $toast.removeClass('toast--type-warning').addClass('toast--type-default');
    } else {
      $toast.removeClass('toast--type-default').addClass('toast--type-success');
    }
  });

  $('.js-toggle-bg').click(function(){
    if ($container.hasClass('_desktop-de-1')) {
      $container.removeClass('_desktop-de-1').addClass('_desktop-le-1');
    } else if ($container.hasClass('_desktop-le-1')) {
      $container.removeClass('_desktop-le-1').addClass('_desktop-le-2');
    } else if ($container.hasClass('_desktop-le-2')) {
      $container.removeClass('_desktop-le-2').addClass('_desktop-ve-1');
    } else if ($container.hasClass('_desktop-ve-1')) {
      $container.removeClass('_desktop-ve-1').addClass('_mobile-l-ve');
    } else if ($container.hasClass('_mobile-l-ve')) {
      $container.removeClass('_mobile-l-ve').addClass('_mobile-p-le');
    } else if ($container.hasClass('_mobile-p-le')) {
      $container.removeClass('_mobile-p-le').addClass('_desktop-de-1');
    }
  });

  $('.js-toggle-btns').click(function(){
    var theClass = 'toast--buttons-are-hidden';
    if ($toast.hasClass(theClass)) {
      $toast.removeClass(theClass);
    } else {
      $toast.addClass(theClass);
    }
  });

  $('.js-toggle-icon').click(function(){
    var theClass = 'toast--icon-is-hidden';
    if ($toast.hasClass(theClass)) {
      $toast.removeClass(theClass);
    } else {
      $toast.addClass(theClass);
    }
  });
});
