/**
 * I've provided you with an array of strings called people.
 * Loop over the people array with a for loop, printing out each name in uppercase letters.
 * Your result should look something like:
 * SCOOBY
 * VELMA
 * DAPHNE
 * SHAGGY
 * FRED
 *
 * Hint: use i from your loop as an array index!
 */

const people = ['Scooby', 'Velma', 'Daphne', 'Shaggy', 'Fred']; // DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let i = 0; i < people.length; i++) {
  console.log(people[i].toUpperCase());
}
