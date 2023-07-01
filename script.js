var PresentDate = moment().format("dddd, MMM Do YYYY");
var saveBtn = document.querySelector('saveBtn');
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

$('.saveBtn').on("click", function () {
  var text = $(this).siblings('.description').val();
  var time = $(this).parent().attr("id");

  localStorage.setItem("time, text");
});

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
});
