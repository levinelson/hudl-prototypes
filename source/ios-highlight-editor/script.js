// @codekit-prepend '../../bower_components/jquery/dist/jquery.min.js';
// @codekit-prepend '../../bower_components/autosize/dist/autosize.min.js';
// @codekit-prepend '../../bower_components/fastclick/lib/fastclick.js';
// @codekit-prepend "../../bower_components/dragdealer/src/dragdealer.js";

$(document).ready(function(){

  // 0 = initial
  // 1 = trimming
  // 2 = spot
  // 3 = slowmo
  // 4 = text

  var state = 0;
  var hasText = false;

  var setState = function(element, settedState) {
    $(element).click(function(){
      if (state === settedState) {
        state = 0;
      } else {
        state = settedState;
      }
    });
  };

  $(function() {
     FastClick.attach(document.body);
  });

  setState('#add-trim', 1);
  setState('#add-spot', 2);
  setState('#add-slowmo', 3);
  setState('#add-text', 4);
  setState('#set-overlay-remove', 0);

  $('.editor-fx-tray-1 li').click(function(){
    $(this).toggleClass('_is-active').siblings().removeClass('_is-active');
    if (state === 4) {
      $('.editor-trimmer').removeClass('_is-inactive');
      $('.video-lower-third').addClass('_is-active');
      $('.editor-fx-tray-2').removeClass('_is-inactive');
      $('.video-container').addClass('_is-editing');
      $('#text-indication').addClass('_is-inactive');
    } else if (state === 2) {
      $('#spot-shadow-indication').addClass('_is-active');
      $('.editor-fx-tray-2').removeClass('_is-inactive');
      $('.video-container').addClass('_is-editing');
    } else {
      $('#spot-shadow-indication').removeClass('_is-active');
      $('.editor-trimmer').addClass('_is-inactive');
      $('.editor-fx-tray-2').addClass('_is-inactive');
      $('.video-container').removeClass('_is-editing');
      $('#slowmo-indication').removeClass('_is-inactive');
      if (!$('#lower-third-content').val()) { // no text is present
        $('.video-lower-third').removeClass('_is-active');
      } else {
        $('.video-lower-third').addClass('_is-active');
        $('#text-indication').removeClass('_is-inactive');
      }
    }

  });

  $('#set-overlay-remove').click(function(){
    hasText = false;
    $('.video-lower-third').removeClass('_is-active');
    $('.editor-trimmer').addClass('_is-inactive');
    $('.editor-fx-tray-2').addClass('_is-inactive');
    $('.video-container').removeClass('_is-editing');
    $('#add-text').removeClass('_is-active');
  });

  var thirdPositions = ['bottom-left', 'bottom-right', 'top-left', 'top-right'];

  var setOverlayPosition = function(position) {
    $('#set-overlay-' + position).click(function(){
      $(this).addClass('_is-active').siblings().removeClass('_is-active');
      $('.video-container').removeClass('bottom-left bottom-right top-right top-left').addClass(position);
      $('.video-lower-third').addClass('_is-active');
    });
  };

  $.each(thirdPositions, function(index, value){
    setOverlayPosition(value);
  });

  $('.hotspot').click(function(){
    $('.editor-container').removeClass('initial');
  });

  $('#cancel, #done').click(function(){
    $('.editor-container').addClass('initial');
  });

  // overlay stuff
  autosize($('textarea'));

  // max 35 characters
  var maxchars = 35;
  $('textarea').keyup(function () {
    $(this).val($(this).val().substring(0, maxchars));
  });

  // prevent return
  $('textarea').keydown(function(e){
    // Enter was pressed without shift key
    if (e.keyCode === 13 && !e.shiftKey) {
      // prevent default behavior
      e.preventDefault();
    }
  });

});
