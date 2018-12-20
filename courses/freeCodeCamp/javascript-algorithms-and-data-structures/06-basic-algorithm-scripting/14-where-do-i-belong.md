# [Basic Algorithm Scripting: Where do I Belong](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong)

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, `getIndexToIns([1,2,3,4], 1.5)` should return `1` because it is greater than `1` (index 0), but less than `2` (index 1).

Likewise, `getIndexToIns([20,3,5], 19)` should return `2` because once the array has been sorted it will look like `[3,5,20]` and `19` is less than `20` (index 2) and greater than `5` (index 1).

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Write your own code.

## Setup
```js
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  return num;
}

getIndexToIns([40, 60], 50);
```

## Solution
```js
// using for loop
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length;
}

getIndexToIns([40, 60], 50); // 1
```

## Solution 2
```js
// using while loop
function getIndexToIns(arr, num) {
  arr.sort((a, b) =>  a - b);

  let i = 0;
  while (num > arr[i]) {
    i++;
  }
  return i;
}

getIndexToIns([40, 60], 50); // 1
```

## Solution 3
```js
function getIndexToIns(arr, num) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    // counts how many array numbers are smaller than num
    if (num > arr[i]) {
      count++;
    }
  }
  return count;
}

getIndexToIns([40, 60], 50); // 1
```

## Solution 4
```js
// Intermediate Code Solution
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort((a, b) => a - b);
  return arr.indexOf(num);
}

getIndexToIns([40, 60], 50); // 1
```

## Solution 6
```js
// Advanced Code Solution
function getIndexToIns(arr, num) {
  return arr.concat(num).sort((a, b) => a - b).indexOf(num);
}

getIndexToIns([40, 60], 50); // 1
```