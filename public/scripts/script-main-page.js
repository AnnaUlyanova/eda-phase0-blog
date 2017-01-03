$(document).ready(function() {

    $("#hide-cult").click(function() {
    $(".Technical, .Cultural").removeClass('hide');
    $(".Cultural").addClass('hide');
  })

  $("#hide-tech").click(function() {
    $(".Technical, .Cultural").removeClass('hide');
    $(".Technical").addClass('hide');
  })

  $("#show-all").click(function() {
    $(".Technical, .Cultural").removeClass('hide');
  })

});
