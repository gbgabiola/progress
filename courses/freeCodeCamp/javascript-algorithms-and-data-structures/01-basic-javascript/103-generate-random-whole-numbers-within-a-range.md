# [Generate Random Whole Numbers within a Range](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/generate-random-whole-numbers-within-a-range)

Instead of generating a random number between zero and a given number like we did before, we can generate a random number that falls within a range of two specific numbers.

To do this, we'll define a minimum number `min` and a maximum number `max`.

Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:

`Math.floor(Math.random() * (max - min + 1)) + min`

---

Create a function called `randomRange` that takes a range `myMin` and `myMax` and returns a random number that's greater than or equal to `myMin`, and is less than or equal to `myMax`, inclusive.

## Setup

```js
function randomRange(myMin, myMax) {
  return 0; // Change this line
}
// Change these values to test your function
var myRandom = randomRange(5, 15);
```

## Solution

```js
return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

var myRandom = randomRange(5, 15);
```