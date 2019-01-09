# [Intermediate Algorithm Scripting: Sum All Numbers in a Range](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range)

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Try to pair program. Write your own code.

## Setup
```js
function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);
```

## Solution 1
```js
// Basic Solution: Using Math.max(), Math.min() and For Loops
function sumAll(arr) {
  const max = Math.max(arr[0], arr[1]);
  const min = Math.min(arr[0], arr[1]);
  let temp = 0;
  for (let i = min; i <= max; i++){
      temp += i;
  }
  return(temp);
}

sumAll([1, 4]); // 10
```

## Solution 2
```js
// Intermediate Solution: Using sort(), Arithmetic Progression summing formula, and arrow function
function sumAll(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const firstNum = arr[0];
  const lastNum = arr[1];

  // Using Arithmetic Progression summing formula
  const sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;
  return sum;
}

sumAll([1, 4]); // 10
```

## Solution 3
```js
// Advanced Solution: Using Math.max(), Math.min() and Spread Operator
function sumAll(arr) {
  let sum = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++){
    sum += i;
  }
  return sum;
}

sumAll([1, 4]); // 10
```