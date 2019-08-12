/*
  Challenge: Add a click event to all the buttons with a class drum.
*/

var buttons = document.querySelectorAll(".drum"); // buttons with a class of drum

// While loop
// var i = 0;
// while (i < buttons.length) {
//   buttons[i].addEventListener("click", function() {
//     alert("Click");
//   });
//   i++
// }

// For loop
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    alert("Clicked!");
  })
}