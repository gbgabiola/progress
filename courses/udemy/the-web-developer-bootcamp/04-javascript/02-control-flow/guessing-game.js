/**
 * Guessing Game
 */

// Create a secretNumber
var secretNumber = 4;

// Ask user for guess
var guess = Number(prompt('Guess a number!'));

// If guess is right
if (guess === secretNumber) {
  alert('YOU GUESSED IT!!!');
}

// Check if guess is higher
else if (guess > secretNumber) {
  alert('Too high. Try Again.')
}

// Check if guess is lower
else if (guess < secretNumber) {
  alert('Too low. Try Again.')
}

// otherwise, for invalid input
else {
  alert('Invalid Number');
}