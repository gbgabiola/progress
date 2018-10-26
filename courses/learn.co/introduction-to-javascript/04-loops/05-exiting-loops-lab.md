# Exiting Loops Lab

## Objectives

1. Practice using `break` to exit a loop
2. Practice using `continue` to skip an iteration
3. Practice using `return` in a loop

## Instructions

Now that we've had some practice breaking out of loops, it's time to break free and practice a bit without training wheels.

In `index.js`, you'll have to define a few functions:

- `breakOut(array, changeValue, stopValue)` which iterates through `array` and changes every element to `changeValue` until the loop reaches `stopValue`. Then we `break` out of the loop and return the array.
- `keepGoing(array, changeValue, skipValue)` which iterates through `array` and changes every element to `changeValue` except those that match `skipValue`. Then return the array.
- `findBy(array, findFn)` which looks for a value in `array` based on the return value of `findFn`. Return `null` if the value isn't found. **Hint:** _Check the test file to know the signature of the findFn and the type of its return value_

Good luck!

## Resources

- [break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)
- [continue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)

---

## Solution

```js
function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      break;
    }
    array[i] = changeValue;
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue;
    }
    array[i] = changeValue;
  }
  return array;
}

function findBy(array, findFn) {
  for (let i = 0; i < array.length; i++) {
    if (findFn(array[i])) {
      return array[i];
    }
  }
  return null;
}
```