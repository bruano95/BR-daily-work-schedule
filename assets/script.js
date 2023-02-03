//Date in header
var currentDate = dayjs().format('dddd, D MMMM YYYY');
$('#currentDay').text(currentDate);

function currentTime() {
  var timeOfDay = dayjs().hour();

  $(".time-group").each(function () {
    var groupTime = parseInt($(this).attr("id").split("-")[1]);

    if (groupTime === timeOfDay) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else if (groupTime > timeOfDay) {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (groupTime < timeOfDay) {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  })
}

$(document).ready(function() {
  $('.saveBtn').on('click', function(event) {
  event.preventDefault();
   var text = $(this).siblings(".description").val();
   var time = $(this).parent().attr("id");

   $("#hour-9 .description").val(localStorage.getItem("hour-9"));
   $("#hour-10 .description").val(localStorage.getItem("hour-10"));
   $("#hour-11 .description").val(localStorage.getItem("hour-11"));
   $("#hour-12 .description").val(localStorage.getItem("hour-12"));
   $("#hour-13 .description").val(localStorage.getItem("hour-13"));
   $("#hour-14 .description").val(localStorage.getItem("hour-14"));
   $("#hour-15 .description").val(localStorage.getItem("hour-15"));
   $("#hour-16 .description").val(localStorage.getItem("hour-16"));
   $("#hour-17 .description").val(localStorage.getItem("hour-17"));

   currentTime();