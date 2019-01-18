# [Intermediate Algorithm Scripting: Drop it](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it)

Given the array `arr`, iterate through and remove each element starting from the first element (the 0 index) until the function `func` returns `true` when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, `arr` should be returned as an empty array.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Try to pair program. Write your own code.

## Setup
```js
function dropElements(arr, func) {
  // Drop them elements.
  return arr;
}

dropElements([1, 2, 3], function(n) { return n < 3; });
```

## Solution 1
```js
// Basic Code: Using for loop amd shift
function dropElements(arr, func) {
  // drop them elements.
  const times = arr.length;
  for (let i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; }); // [1, 2, 3]
```

## Solution 2
```js
// Intermediate Code: Using slice, findIndex, and ternary operator
function dropElements(arr, func) {
  return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func): arr.length, arr.length);
}

dropElements([1, 2, 3], function(n) { return n < 3; }); // [1, 2, 3]
```

## Solution 3
```js
// Advanced Code: Using while loop and shift
function dropElements(arr, func) {
  while(arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3], function(n) { return n < 3; }); // [1, 2, 3]
```