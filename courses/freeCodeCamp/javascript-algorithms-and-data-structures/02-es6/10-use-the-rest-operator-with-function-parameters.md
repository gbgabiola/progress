# [ES6: Use the Rest Operator with Function Parameters](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/use-the-rest-operator-with-function-parameters)

In order to help us create more flexible functions, ES6 introduces the _rest operator_ for function parameters. With the rest operator, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.

Check out this code:

```js
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.
```

The rest operator eliminates the need to check the `args` array and allows us to apply `map()`, `filter()` and `reduce()` on the parameters array.

---

Modify the function `sum` so that it uses the rest operator and it works in the same way with any number of parameters.

## Setup
```js
const sum = (function() {
  "use strict";
  return function sum(x, y, z) {
    const args = [ x, y, z ];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
```

## Solution
```js
const sum = (function() {
  "use strict";
  return function sum(...args) {
    
    return args.reduce((a, b) => a + b, 0);
  };
})();

console.log(sum(1, 2, 3)); // 6
```