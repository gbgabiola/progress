# [Understanding Undefined Value returned from a Function](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/understanding-undefined-value-returned-from-a-function)

A function can include the `return` statement but it does not have to. In the case that the function doesn't have a `return` statement, when you call it, the function processes the inner code but the returned value is `undefined`.

**Example**

```js
var sum = 0;
function addSum(num) {
sum = sum + num;
}
var returnedValue = addSum(3); // sum will be modified but returned value is undefined
```

`addSum` is a function without a `return` statement. The function will change the global `sum` variable but the returned value of the function is `undefined`

---

Create a function `addFive` without any arguments. This function adds `5` to the `sum` variable, but its returned value is `undefined`.

## Setup

```js
var sum = 0;

var returnedValue = addFive();
```

## Solution

```js
var sum = 0;
function addFive() {
  sum = sum + 5;
}

var returnedValue = addFive();
// undefined
```