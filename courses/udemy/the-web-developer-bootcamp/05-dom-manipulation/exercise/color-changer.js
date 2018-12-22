/**
 * Color Changer
    Toggle the body's background color between
    purple and white, when a button is clicked
 */

// alert('CONNECTED')
var button = document.querySelector('button');
// var isClicked = false;

// button.addEventListener('click', function() {
//   // body.style.background = 'purple';
//   if (isClicked) {
//     document.body.style.background = 'white';
//     // isClicked = false;
//   } else {
//     document.body.style.background = 'pink';
//     // isClicked = true;
//   }
//   isClicked = !isClicked;
// });

button.addEventListener('click', function() {
  document.body.classList.toggle('color-change');
});