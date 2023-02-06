// Sets the Date for today
var todaysDate = dayjs().format('dddd D MMMM YYYY');
$('#currentDay').text(todaysDate);

// sets the current time
    function timeCurrently() {

      var currentTime = dayjs().hour();

        $(".time-group").each(function () {
       
        var groupTime = parseInt($(this).attr("id").split("hour")[1]);
        // Changes the colors for past, present, and future times  
        if (groupTime === currentTime) {
          $(this).removeClass("past");
          $(this).removeClass("future");
          $(this).addClass("present");
        } else if (groupTime > currentTime) {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        } else if (groupTime < currentTime) {
          $(this).removeClass("present");
          $(this).removeClass("future");
          $(this).addClass("past");
          console.log(currentTime)
        }
      })
    }

// save button function, allows for button to work properly
$(document).ready(function() {
  $('.saveBtn').on('click', function(event) {
  event.preventDefault();
   var text = $(this).siblings(".description").val();
   var time = $(this).parent().attr("id");
   
 // saves the inputted items into the local storage with time
   localStorage.setItem(time,text);
  })

    timeCurrently();
});