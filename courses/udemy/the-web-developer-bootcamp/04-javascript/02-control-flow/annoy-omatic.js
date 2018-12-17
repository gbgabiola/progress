/**
 * Annoy-omatic
    - Ask the user "Are we there yet"
    - Keep asking again and again until
    they enter "yes" OR "yeah"
    - Then, alert "Yay, we finally made it!"
    BONUS: A user can enter any string as long as 
    it contains 'yes' in it
 */

var answer = prompt('Are we there yet?');

//  while (answer !== 'yes' && answer !== 'yeah') {
//    var answer = prompt('Are we there yet?');
//  }

//  alert('Yay, we finally made it');


// Annoy-omatic v2
while (answer.indexOf('yes') === -1 && answer.indexOf('yeah') === -1) {
  answer = prompt('Are we there yet?');
}

alert('Yay, we finally made it');