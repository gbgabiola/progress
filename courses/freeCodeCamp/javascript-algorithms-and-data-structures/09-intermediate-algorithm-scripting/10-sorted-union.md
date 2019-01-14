# [Intermediate Algorithm Scripting: Sorted Union](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union)

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Try to pair program. Write your own code.

## Setup
```js
function uniteUnique(arr) {
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```

## Solution
```js
// Basic Code: Using for loops, indexOf, and push
function uniteUnique(arr) {
  // Creates an empty array to store our final result.
  const finalArray = [];

  // Loop through the arguments object to truly made the program work with two or more arrays
  // instead of 3.
  for (let i = 0; i < arguments.length; i++) {
    const arrayArguments = arguments[i];

    // Loops through the array at hand
    for (let j = 0; j < arrayArguments.length; j++) {
      const indexValue = arrayArguments[j];

      // Checks if the value is already on the final array.
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }
  return finalArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // [1, 3, 2, 5, 4]
```

## Solution 2
```js
// Basic Code: Using for loops, arguments, push, and includes
function uniteUnique(arr) {
  const args = [...arguments];
  const result = [];
  for(let i = 0; i < args.length; i++) {
    for(let j = 0; j < args[i].length; j++) {
       if(!result.includes(args[i][j])) {
        result.push(args[i][j]);
      }
    }
  }
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // [1, 3, 2, 5, 4]
```

## Solution 3
```js
// Intermediate Code: Using filter, reduce, concat, and slice
function uniteUnique(arr) {
  let newArr;
 // Convert the arguments object into an array
  const args = Array.prototype.slice.call(arguments);
  // Use reduce function to flatten the array
  newArr = args.reduce(function(arrA, arrB) {
    // Apply filter to remove the duplicate elements in the array
    return arrA.concat(arrB.filter(function(i) {
      return arrA.indexOf(i) === -1;
    }));
  });
   return newArr;     
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // [1, 3, 2, 5, 4]
```

## Solution 4
```js
// Advanced Code: Using while loop, concat,, filter, and indexOf
function uniteUnique(arr) {
  let concatArr = [];
  let i = 0;
  while (arguments[i]) {
    concatArr = concatArr.concat(arguments[i]); i++;
  }
  const uniqueArray = concatArr.filter(function(item, pos) {
    return concatArr.indexOf(item) == pos;
  });
  return uniqueArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // [1, 3, 2, 5, 4]
```

## Solution 5
```js
// Advanced Code: Using concat, spread operator, and ES6 set
function uniteUnique(...arrays) {
  // Make an array out of the given arrays and flatten it (using the spread operator)
  const flatArray = [].concat(...arrays);

  // Create a Set which clears any duplicates since it's a regulat set and not a multiset
  return [...new Set(flatArray)];
}

// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // [1, 3, 2, 5, 4]
```