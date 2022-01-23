/**
 * Write a function called sumArray which accepts a single argument: an array of numbers.
 * It should return the sum of all the numbers in the array.
 *    sumArray([1, 2, 3]) // 6
 *    sumArray([2, 2, 2, 2]) // 8
 *    sumArray([50, 50, 1]) // 101
 *
 * Hints:
 *   - You'll need a variable to keep track of the total.
 *     - It should start out as zero.
 *   - Loop over the array and for each element, add it to the total variable.
 *   - After you have added every number to total, return total.
 */

// DEFINE YOUR FUNCTION BELOW:
function sumArray(numArray) {
  let total = 0;
  // for (let i = 0; i < numArray.length; i++) {
  //   total += numArray[i];
  // }

  // Using for...of loop
  for (let i of numArray) total += i;
  return total;
}
