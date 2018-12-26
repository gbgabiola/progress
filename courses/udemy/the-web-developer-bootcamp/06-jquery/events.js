$('hi');
// $('h1').click(function() {
//   alert('h1 clicked!');
// });

$('button');
// $('button').click(function() {
//   // alert('button clicked!');
//   $(this).css('backgroundColor', 'pink');
// });

// $('button').click(function() {
//   var text = $(this).text();
//   console.log('You clicked ' + text);
// });


$('input');
// listen for any keypress in any text input
// $('input').keypress(function () {
//   console.log('You pressed a key!');
// });

// check if enter key was pressed
$('input').keypress(function(event) {
  if (event.which === 13) {
    alert('YOU HIT ENTER!');
  }
});

$('h1').on('click', function() {
  $(this).css('color', 'red');
});

$('input').on('keypress', function() {
  console.log('Keypressed!')
});

$('button').on('mouseenter', function() {
  $(this).css('font-weight', 'bold');
});

$('button').on('mouseleave', function() {
  $(this).css('font-weight', 'normal');
});