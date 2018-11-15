# [Return Early Pattern for Functions](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/return-early-pattern-for-functions)

When a `return` statement is reached, the execution of the current function stops and control returns to the calling location.

**Example**

```js
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
```

The above outputs "Hello" to the console, returns "World", but `"byebye"` is never output, because the function exits at the `return` statement.

---

Modify the function `abTest` so that if `a` or `b` are less than `0` the function will immediately exit with a value of `undefined`.

**Hint**  
Remember that [`undefined` is a keyword](http://www.freecodecamp.org/challenges/understanding-uninitialized-variables), not a string.

## Setup

```js
function abTest(a, b) {
  // Only change code below this line
  // Only change code above this line
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
// Change values below to test your code
abTest(2,2);
```

## Solution

```js
if (a < 0 || b < 0) return undefined;

abTest(2,2); // 8
```