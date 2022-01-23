/**
 * Define a function called rant which accepts a string argument called message.
 * The function should print out an uppercased version of message 3 times (with 3 separate calls to console.log).
 * For example, rant("I hate beets") should print out:
 *   I HATE BEETS
 *   I HATE BEETS
 *   I HATE BEETS
 */

// DEFINE YOUR FUNCTION:
function rant(message) {
  for (let i = 0; i < 3; i++) {
    console.log(message.toUpperCase());
  }
}

rant('I hate beets');
