# [Return a Value from a Function with Return](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/return-a-value-from-a-function-with-return)

We can pass values into a function with _arguments_. You can use a `return` statement to send a value back out of a function.

**Example**

```js
function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5); // 8
```

`plusThree` takes an _argument_ for `num` and returns a value equal to `num + 3`.

---

Create a function `timesFive` that accepts one argument, multiplies it by `5`, and returns the new value. See the last line in the editor for an example of how you can test your `timesFive` function.

## Setup

```js
console.log(timesFive(10));
```

## Solution

```js
function timesFive(n) {
  return n * 5;
}

console.log(timesFive(10)); // 50
```