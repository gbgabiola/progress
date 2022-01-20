/**
 * I've provided you with an array called airplaneSeats, which represents the rows of seats on a flight.
 * Our friend Hugo is looking to book a seat on our flight.
 * Fortunately, there is one middle seat available (it's set to null currently).
 * Please update the array element that is currently null, to instead be "Hugo".
 */

// DO NOT TOUCH!!! (please)
const airplaneSeats = [
  ['Ruth', 'Anthony', 'Stevie'],
  ['Amelia', 'Pedro', 'Maya'],
  ['Xavier', 'Ananya', 'Luis'],
  ['Luke', null, 'Deniz'],
  ['Rin', 'Sakura', 'Francisco'],
];

// YOUR CODE GOES BELOW THIS LINE:
airplaneSeats[3][1] = 'Hugo';
