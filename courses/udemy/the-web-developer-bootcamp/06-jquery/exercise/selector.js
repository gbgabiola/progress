/**
 * jQuery Selector Exercise
  - Correctly include jQuery
*/

// Select all divs and give them a purple background
$('div').css('backgroundColor', 'purple')

// Select the divs with class "highlight" and make them 200px wide
$('.highlight').css('width', '200px');

// Select the div with id "third" and give it a orange border
$('#third').css('border', '2px solid orange');

// Bonus: Select the first div only and change its font color to pink
// $('div:first').css('color', 'pink'); // a little slower
// $('div:first-child').css('color', 'pink');
$('div:first-of-type').css('color', 'pink');