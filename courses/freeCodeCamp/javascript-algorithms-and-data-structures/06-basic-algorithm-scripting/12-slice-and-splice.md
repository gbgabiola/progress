# [Basic Algorithm Scripting: Slice and Splice](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice)

You are given two arrays and an index.

Use the array methods `slice` and `splice` to copy each element of the first array into the second array, in order.

Begin inserting elements at index `n` of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Write your own code.

## Setup
```js
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
```

## Solution
```js
function frankenSplice(arr1, arr2, n) {
  // let arrCopy = arr2.slice(0, arr2.length);
  let arrCopy = arr2.slice(); // simply copying the entire array, no need to set parameters on slice
  arrCopy.splice(n, 0, ...arr1);
  return arrCopy;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1); // [4, 1, 2, 3, 5]
```

## Solution 2
```js
function frankenSplice(arr1, arr2, n) {
  let arrCopy = [...arr2];
  // console.log(n + ' ~ '+ arr2 + ' << ' + arr1);
  arrCopy.splice(n, 0, ...arr1);
  // console.log(arrCopy);
  return arrCopy;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1); // [4, 1, 2, 3, 5]
```

## Solution 3
```js
function frankenSplice(arr1, arr2, n) {
  let arrCopy = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    arrCopy.splice(n, 0, arr1[i]);
    n++;
  }
  return arrCopy;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1); // [4, 1, 2, 3, 5]
```