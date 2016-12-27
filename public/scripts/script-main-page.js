$(document).ready(function() {

    $("#hide-cult").click(function() {
    $(".Cultural").addClass('hide');
  })

  $("#hide-tech").click(function() {
    $(".Technical").addClass('hide');
  })

  $("#show-all").click(function() {
    $(".Technical, .Cultural").removeClass('hide');
  })

});
