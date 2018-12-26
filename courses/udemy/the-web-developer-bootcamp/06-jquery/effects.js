// $('div').fadeOut();
// $('button').on('click', function() {
//   $('div').fadeOut(1000, function() {
//   // $('div').fadeIn(1000, function() {
//     console.log('Fade Completed!');
//     $(this).remove();
//   });
// });

// $('button').on('click', function() {
//   $('div').fadeToggle(500);
// });


$('button').on('click', function() {
  // $('div').slideDown();
  // $('div').slideUp();
  $('div').slideToggle(500, function() {
    // console.log('SLIDE IS DONE!');
    $(this).remove();
  });
});