$('h1').text(); // "jQuery Methods Demo"
$('ul').text(); // " Skittles Starburst Twix "
$('li').text(); // "SkittlesStarburstTwix"
// $('h1').text('New Text!!!'); // [ <h1>New Text!!!</h1>]
$('h1').text(); // New Text!!!

$('ul').html(); // " <li>Skittles</li> <li>Starburst</li> <li>Twix</li> "

// $('ul').html('<li>I Hacked your UL!</li><li>Bruno is still adorable</li>');
// $('li').html('<a href="google.com">CLICK ME TO GO TO GOOGLE</a>');


$('img').css('width'); // '1533px'
$('img').css('width', '200px'); // [ <img src="http://i.imgur.com/zvANQeG.jpg" style="width: 200px;">]
// $('img').attr('src', 'https://c3.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg'); // [ <img src="https://c3.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg" style="width: 200px;">]

$('input');
$('input').attr('type'); // "text"
// $('input').attr('type', 'color');
// $('input').attr('type', 'checkbox');

$('img:first-of-type').attr('src', 'https://c3.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg');
$('img').last().attr('src', 'https://c3.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg');
$('img').attr('src', 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Newfoundland_Pine_Marten.jpg');


$('input').val(); // ""
// $('input').val('Bruno Stark');

$('select');
$('select').val(); // "Ostrich"

// $('h1').addClass('correct');
// $('h1').remove('correct');

// $('li').addClass('wrong');
// $('li').addClass('correct');

$('li').toggleClass('correct');
$('li').toggleClass('correct');

$('li').first().toggleClass('done');
$('li').toggleClass('done');