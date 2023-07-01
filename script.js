var PresentDate = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(PresentDate);

$(document).ready(function () {

  $("time08 .description").val(localStorage.getItem("time08"));
  $("time09 .description").val(localStorage.getItem("time09"));
  $("time10 .description").val(localStorage.getItem("time10"));
  $("time11 .description").val(localStorage.getItem("time11"));
  $("time12 .description").val(localStorage.getItem("time12"));
  $("time13 .description").val(localStorage.getItem("time13"));
  $("time14 .description").val(localStorage.getItem("time14"));
  $("time15 .description").val(localStorage.getItem("time15"));
  $("time16 .description").val(localStorage.getItem("time16"));
  $("time17 .description").val(localStorage.getItem("time17"));

  $('.saveBtn').on("click", function () {
  var workInfo = $(this).siblings('.description').val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(workInfo, time);
  })

  function blockStatus () {

    var currentTime = moment().hour();

    $(".time-block").each(function () {
      var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

      if (timeBlock < currentTime) {
        $(this).addClass("past");
      }
      else if (timeBlock == currentTime) {
        $(this).addClass("present");
      }
      else if (timeBlock > currentTime) {
        $(this).addClass("future");
      }
    })
  }

blockStatus();
})