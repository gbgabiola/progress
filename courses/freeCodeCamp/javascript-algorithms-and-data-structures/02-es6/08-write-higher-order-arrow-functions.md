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

```js
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";

  const squaredIntegers = arr.filter((i) => Number.isInteger(i)).filter(p => p > 0).map(x => x*x);
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
```

another way of solving it.
```js
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";

  const squaredIntegers = arr.filter(num => num > 0 && (num % 2 === 0 || num % 2 === 1)).map(num => num * num);
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
```

another way of solving it.
```js
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";

  const squaredIntegers = arr.filter(x=>(x^0)===x).map(x=>x*x);
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
```

another way of solving it.
```js
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";

  const squaredIntegers = arr.filter(x=>(~~x)===x).map(x=>x*x);
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
```