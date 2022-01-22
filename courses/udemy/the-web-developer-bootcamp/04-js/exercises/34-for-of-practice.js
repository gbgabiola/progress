/**
 * I've provided you with an array called numbers.
 * Please use a for...of loop to loop over it, and print out the square of each value (the number multiplied by itself).
 *
 * Notes:
 *   1. Udemy's coding exercise platform does NOT support the ** operator.
 *   2. You could accomplish this by using while or for loop, but please use a for...of loop!
 *
 * Your output should look like this:
 * 1
 * 4
 * 9
 * 16
 * 25
 * 36
 * 49
 * 64
 * 81
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (const num of numbers) {
  console.log(num * num);
}
