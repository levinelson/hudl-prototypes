$(document).ready(function(){

  $(function() {
	   FastClick.attach(document.body);
  });

  autosize($("textarea"));

  // max 35 characters
  var maxchars = 35;
  $("textarea").keyup(function () {
    var tlength = $(this).val().length;
    $(this).val($(this).val().substring(0, maxchars));
    var tlength = $(this).val().length;
    remain = maxchars - parseInt(tlength);
  });

  // prevent return
  $("textarea").keydown(function(e){
    // Enter was pressed without shift key
    if (e.keyCode == 13 && !e.shiftKey) {
      // prevent default behavior
      e.preventDefault();
    }
  });

  $(".editor-fx-tray-1 li").click(function(){
    $(this).addClass("_is-active").siblings().removeClass("_is-active");
  });

  var thirdPositions = ["bottom-left", "bottom-right", "top-left", "top-right"];

  var setOverlayPosition = function(position) {
    $("#set-overlay-" + position).click(function(){
      $(this).addClass("_is-active").siblings().removeClass("_is-active");
      $(".video-container").removeClass("bottom-left bottom-right top-right top-left").addClass(position);
    })
  }

  $.each(thirdPositions, function(index, value){
    setOverlayPosition(value);
  });
});
