# [Intermediate Algorithm Scripting: Smallest Common Multiple](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple)

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers _between_ 1 and 3. The answer here would be 6.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Try to pair program. Write your own code.

## Setup
```js
function smallestCommons(arr) {
  return arr;
}

smallestCommons([1,5]);
```

## Solution 1
```js
// Basic Code: Using do...while, for loop, sort, push, and arrow function
function smallestCommons(arr) {
  // Sort array from greater to lowest
  arr.sort((a, b) => b - a);

  // Create new array and add all values from greater to smaller from the original array.
  const newArr = [];
  for (let i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

  // Variables needed declared outside the loops.
  let quot = 0;
  let loop = 1;
  let n;

  // Run code while n is not the same as the array length.
  do {
    quot = newArr[0] * loop * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {
        break;
      }
    }
    loop++;
  } while (n !== newArr.length);

  return quot;
}

smallestCommons([1,5]); // 60
```

## Solution 2
```js
// Intermediate Code: Using for loop, Math.max, Math.min, Euclidean algorithm, and ternary operator
function smallestCommons(arr) {
  const range = [];
  for (let i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
  }

  // Ccan use reduce() in place of this block
  let lcm = range[0];
  for (let i = 1; i < range.length; i++) {
    const GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
  }
  return lcm;

  function gcd(x, y) { // Implements the Euclidean Algorithm
    return (y === 0) ? x : gcd(y, x%y);
  }
}

smallestCommons([1,5]); // 60
```

## Solution 3
```js
// Advanced Code: Using  while loop, Math.min, Math.max, apply, and Euclidean algorithm
function smallestCommons(arr) {
  // range
  let min = Math.min.apply(null, arr);
  let max = Math.max.apply(null, arr);

  let smallestCommon = lcm(min, min + 1);

  while(min < max) {
    min++;
    smallestCommon = lcm(smallestCommon, min);
  }

  return smallestCommon;
}

/**
 * Calculates Greatest Common Divisor
 * of two nubers using Euclidean algorithm
 * https://en.wikipedia.org/wiki/Euclidean_algorithm
 */
function gcd(a, b) {
  while (b > 0) {
    let tmp = a;
    a = b;
    b = tmp % b;
  }
  return a;
}

/**
 * Calculates Least Common Multiple
 * for two numbers utilising GCD
 */
function lcm(a, b) {
  return (a * b / gcd(a, b));
}

smallestCommons([1,5]); // 60
```