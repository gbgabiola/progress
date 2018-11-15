# [Returning Boolean Values from Functions](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/returning-boolean-values-from-functions)

You may recall from [Comparison with the Equality Operator](https://learn.freecodecamp.org/waypoint-comparison-with-the-equality-operator) that all comparison operators return a boolean `true` or `false` value.

Sometimes people use an if/else statement to do a comparison, like this:

```js
function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
```

But there's a better way to do this. Since `===` returns `true` or `false`, we can return the result of the comparison:

```js
function isEqual(a,b) {
  return a === b;
}
```

---

Fix the function `isLess` to remove the `if/else` statements.

## Setup

```js
function isLess(a, b) {
  // Fix this code
  if (a < b) {
    return true;
  } else {
    return false;
  }
}
// Change these values to test
isLess(10, 15);
```

## Solution

```js
return a < b;

isLess(10, 15); // true
```