/*
  Challenge: Change the text color of all the buttons with a class of drum to color white when clicked.
*/

var buttons = document.querySelectorAll(".drum");

// While loop
// var i = 0;
// while(i < buttons.length) {
//   buttons[i].addEventListener("click", function() {
//     this.style.color = "white";
//   });
//   i++;
// }

// For loop
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    this.style.color = "white";
  });
}
