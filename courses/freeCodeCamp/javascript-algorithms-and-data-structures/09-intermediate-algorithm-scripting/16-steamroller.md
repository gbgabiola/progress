# [Intermediate Algorithm Scripting: Steamroller](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller)

Flatten a nested array. You must account for varying levels of nesting.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Try to pair program. Write your own code.

## Setup
```js
function steamrollArray(arr) {
  // I'm a steamroller, baby
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
```

## Solution 1
```js
// Basic Code: Using for...in, isArray, forEach, and push
function steamrollArray(arr) {
  const flattenedArray = [];

  // Create function that adds an element if it is not an array.
  // If it is an array, then loops through it and uses recursion on that array.
  const flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (let a in arg) {
        flatten(arg[a]);
      }
    }
  };

  // Call the function for each element in the array
  arr.forEach(flatten);
  return flattenedArray;
}

steamrollArray([1, [2], [3, [[4]]]]); // [1, 2, 3, 4]
```

## Solution 2
```js
// Intermediate Code: Using concat, some, Array.isArray, spread operator, and ternary operator
function steamrollArray(arr) {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

steamrollArray([1, [2], [3, [[4]]]]); // [1, 2, 3, 4]
```

## Solution 3
```js
// Advanced Code: Using toString, replace, split, and map
function steamrollArray(arr) {
  return arr.toString()
    .replace(',,', ',')             // "1,2,,3" => "1,2,3"
    .split(',')                     // ['1','2','3']
    .map(function(v) {
      if (v == '[object Object]') { // bring back empty objects
        return {};
      } else if (isNaN(v)) {        // if not a number (string)
        return v;
      } else {
        return parseInt(v);         // if a number in a string, convert it
      }
    });
}

steamrollArray([1, [2], [3, [[4]]]]); // [1, 2, 3, 4]
```