/*
  Challenge: Detect the key strokes on the document and then display the keys on h1.
  Check the jquery.html
*/

$(document).keydown(function(event) {
  console.log(event.key);
  $("h1").text(event.key);
});