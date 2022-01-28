/**
 * Define a function called allEvens that accepts a single array of numbers.
 * If the array contains all even numbers, return true.
 * Otherwise, return false.
 * Use some or every to help you do this!
 *   allEvens([2, 4, 6, 8]) // true
 *   allEvens([1, 4, 6, 8]) // false
 *   allEvens([1, 2, 3]) // false
 */

const allEvens = nums => nums.every(num => num % 2 === 0);
