# [Intermediate Algorithm Scripting: Seek and Destroy](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy)

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

**Note**  
You have to use the `arguments` object.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Write your own code.

## Setup
```js
function destroyer(arr) {
  // Remove all the values
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```

## Solution 1
```js
// Basic Solution: Using filter, Boolean and arguments
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // [1, 1]
```

## Solution 2
```js
// Intermediate Solution: Using slice(), includes() and arguments
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);

  return arr.filter(function(val) {
    return !args.includes(val);
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // [1, 1]
```

## Solution 3
```js
// Advanced Solution: Using spread operator
const destroyer = (arr, ...args) => arr.filter(i => !args.includes(i));

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // [1, 1]
```