//Set the current date to the work day calendar
var date = moment().format('MMMM Do YYYY');
$('#currentDay').html(date);

console.log($('#currentDay').html(date));

// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future

var rightNow = new Date();
console.log("Current hour: " + rightNow);

var currentTime = rightNow.getHours();
console.log(rightNow.getHours());

function colorCode() {
    for (var i = 9; i <18; i++)
    if (i > currentTime) {
        $('#'+ i).children('textarea').addClass('future');
    } else if (i < currentTime) {
        $('#' + i).children('textarea').addClass('past');
    } else if (i === currentTime) {
        $('#' + i).children('textarea').addClass('present');
    }
    // var event = localStorage.getItem()
};

colorCode();

// // var currentTime = moment().format('h a');
// function colorCode(time) {
//     var eventCurrentTime = moment(currentTime, 'h a');
//     var eventBlock = moment(time, 'h a');
//     if (eventBlock.isBefore(eventCurrentTime) === true) {
//         return "past";
//     } else if (eventBlock.isBefore(eventCurrentTime) === false) {
//         return "future";
//     } else {
//         return "present";
//     }
// };

colorCode();

// console.log(moment(currentTime, 'h a'));
// console.log(moment(time, 'h a'));


//When clicked, save button stores text into local storage.
$(document).ready(function () {
    $(".saveBtn").on("click", function (){
        var event = $(this).siblings('.description').val();
        var hour = $(this).parent().attr('id');

        // saves 'events' into local storage
        localStorage.setItem(hour, event);
    })

    $('#9 .description').val(localStorage.getItem("9"))
    console.log($('#9 .description').val(localStorage.getItem("9")))
    $('#10 .description').val(localStorage.getItem("10"))
    $('#11 .description').val(localStorage.getItem("11"))
    $('#12 .description').val(localStorage.getItem("12"))
    $('#13 .description').val(localStorage.getItem("13"))
    $('#14 .description').val(localStorage.getItem("14"))
    $('#15 .description').val(localStorage.getItem("15"))
    $('#16 .description').val(localStorage.getItem("16"))
    $('#17 .description').val(localStorage.getItem("17"))

});

// Walter's note on getting getStorage to save
// Store
// localStorage.setItem("lastname", "Smith");
// Retrieve
// document.getElementById("result").innerHTML = localStorage.getItem("lastname");