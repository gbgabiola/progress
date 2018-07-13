# [ES6: Write Arrow Functions with Parameters](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/write-arrow-functions-with-parameters)

Just like a normal function, you can pass arguments into arrow functions.

```js
// doubles input value and returns it
const doubler = (item) => item * 2;
```

You can pass more than one argument into arrow functions as well.

---

Rewrite the `myConcat` function which appends contents of `arr2` to `arr1` so that the function uses arrow function syntax.

```js
const myConcat = (arr1, arr2) => {
  "use strict";
  return arr1.concat(arr2);
};
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));
```