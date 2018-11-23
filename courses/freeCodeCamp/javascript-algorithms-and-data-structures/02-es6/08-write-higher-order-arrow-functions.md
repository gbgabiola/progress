# [ES6: Write Higher Order Arrow Functions](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/write-higher-order-arrow-functions/)

It's time we see how powerful arrow functions are when processing data.

Arrow functions work really well with higher order functions, such as `map()`, `filter()`, and `reduce()`, that take other functions as arguments for processing collections of data.

Read the following code:

```js
FBPosts.filter(function(post) {
  return post.thumbnail !== null && post.shares > 100 && post.likes > 500;
})
```

We have written this with `filter()` to at least make it somewhat readable. Now compare it to the following code which uses arrow function syntax instead:

```js
FBPosts.filter((post) => post.thumbnail !== null && post.shares > 100 && post.likes > 500)
```

This code is more succinct and accomplishes the same task with fewer lines of code.

---

Use arrow function syntax to compute the square of only the positive integers (fractions are not integers) in the array `realNumberArray` and store the new array in the variable `squaredIntegers`.

## Setup
```js
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr;
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
```

## Solution 1
```js
const squaredIntegers = arr.filter((num) => Number.isInteger(num)).filter(num => num > 0).map(num => num * num);
```

## Solution 2
```js
const squaredIntegers = arr.filter((num) => num > 0 && num % parseInt(num) === 0 ).map( (num) => Math.pow(num, 2));
```

## Solution 3
```js
const squaredIntegers = arr.filter(num => num > 0 && (num % 2 === 0 || num % 2 === 1)).map(num => num * num);
```

## Solution 4
```js
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];

const squaredIntegers = arr.filter(num => (num ^ 0)=== num).map(num => num * num);
```

## Solution 5
```js
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];

const squaredIntegers = arr.filter(num => (~~num) === num).map(num => num * num);
```