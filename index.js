//Set the current date to the work day calendar
var date = moment().format('MMMM Do YYYY');
$('#currentDay').html(date);

// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
var currentTime = moment().getHours();

function colorCode() {
    for (var i = 0; i <10; i++)
    if (currentTime < i)
}; 


//When clicked, save button stores text into local storage.
$(document).ready(function () {
    $(".saveBtn").on("click", function (){

    })
});

// Walter's note on getting getStorage to save
// Store
// localStorage.setItem("lastname", "Smith");
// Retrieve
// document.getElementById("result").innerHTML = localStorage.getItem("lastname");