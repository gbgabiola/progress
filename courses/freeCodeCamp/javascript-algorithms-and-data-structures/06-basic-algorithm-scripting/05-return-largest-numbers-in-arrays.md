# [Basic Algorithm Scripting: Return Largest Numbers in Arrays](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays)

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax `arr[i]`.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Write your own code.

## Setup
```js
function largestOfFour(arr) {
  // You can do this!
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
```

## Solution
```js
function largestOfFour(arr) {
  let newArr = [];
  arr.forEach((a) => {
    newArr.push(Math.max.apply(null, a));
  });
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // (4) [5, 27, 39, 1001]
```

## Solution 2
```js
function largestOfFour(arr) {
  const arg = []; // to put the numbers in
  const len = arr.length; // how many miniarrays there are
  for(let i = 0; i < len; i++) { // loops the number of miniarrays
    let lar = 0; // to store the biggest int of four
    lar = arr[0]; // lar = firstnum of miniarray
    lar = Math.max(...arr[i]); // to find the highest value of the four
    arg.push(lar); // pushes biggest num on arg
  }
  return arg; // returns arg
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // (4) [5, 27, 39, 1001]
```

## Solution 3
```js
function largestOfFour(arr) {
  const results = [];
  for (let n = 0; n < arr.length; n++) {
    let largest = arr[n][0];
    for (let sb = 1; sb < arr[n].length; sb++) {
      if (arr[n][sb] > largest) {
        largest = arr[n][sb];
      }
    }
    results[n] = largest;
  }
  return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // (4) [5, 27, 39, 1001]
```
