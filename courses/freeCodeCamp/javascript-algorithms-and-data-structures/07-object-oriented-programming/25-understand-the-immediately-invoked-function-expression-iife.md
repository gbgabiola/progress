# [Object Oriented Programming: Understand the Immediately Invoked Function Expression (IIFE)](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/understand-the-immediately-invoked-function-expression-iife)

A common pattern in JavaScript is to execute a function as soon as it is declared:

```js
(function () {
  console.log("Chirp, chirp!");
})(); // this is an anonymous function expression that executes right away
// Outputs "Chirp, chirp!" immediately
```

Note that the function has no name and is not stored in a variable. The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. This pattern is known as an `immediately invoked function expression` or `IIFE`.

---

Rewrite the function makeNest and remove its call so instead it's an anonymous `immediately invoked function expression` (`IIFE`).

## Setup
```js
function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();
```

## Solution
```js
(function() {
  console.log("A cozy nest is ready");
})();
// A cozy nest is ready
```