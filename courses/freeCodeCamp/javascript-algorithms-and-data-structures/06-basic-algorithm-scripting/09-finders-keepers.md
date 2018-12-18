# [Basic Algorithm Scripting: Finders Keepers](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers)

Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Try to pair program. Write your own code.

## Setup
```js
function findElement(arr, func) {
  let num = 0;
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
```

## Solution
```js
function findElement(arr, func) {
  let num;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
      num = arr[i];
      return num;
    }
  }
}

findElement([1, 2, 3, 4], num => num % 2 === 0); // 2
```

## Solution 2
```js
function findElement(arr, func) {
  let num = 0;
  
  for(var i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0); // 2
```