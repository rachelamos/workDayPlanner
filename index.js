//Set the current date to the work day calendar
var date = moment().format('MMMM Do YYYY');
$('#currentDay').html(date);

// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future

// var currentTime = moment().getHours();

// function colorCode() {
//     for (var i = 0; i <10; i++)
//     if (currentTime < i)
// };


//When clicked, save button stores text into local storage.
$(document).ready(function () {
    $(".saveBtn").on("click", function (){
        var event = $(this).siblings('.description').val();
        var hour = $(this).parent().attr('id');

        // saves 'events' into local storage
        localStorage.setItem(hour, event);
    })

    $('#nineAm .description').val(localStorage.getItem("nineAm"))
    console.log($('#nineAm .description').val(localStorage.getItem("nineAm")))
    $('#tenAm .description').val(localStorage.getItem("tenAm"))
    $('elevenAm .description').val(localStorage.getItem("elevenAm"))
    $('#twelvePm .description').val(localStorage.getItem("twelvePm"))
    $('#onePm .description').val(localStorage.getItem("onePm"))
    $('#twoPm .description').val(localStorage.getItem("twoPm"))
    $('#threePm .description').val(localStorage.getItem("threePm"))
    $('#fourPm .description').val(localStorage.getItem("fourPm"))
    $('#fivePm .description').val(localStorage.getItem("fivePm"))

});

// Walter's note on getting getStorage to save
// Store
// localStorage.setItem("lastname", "Smith");
// Retrieve
// document.getElementById("result").innerHTML = localStorage.getItem("lastname");