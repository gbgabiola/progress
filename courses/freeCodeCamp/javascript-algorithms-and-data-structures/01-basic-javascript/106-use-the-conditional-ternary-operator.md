# [Use the Conditional (Ternary) Operator](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/use-the-conditional-ternary-operator/)

The _conditional operator_, also called the _ternary operator_, can be used as a one line if-else expression.

The syntax is:

```js
condition ? statement-if-true : statement-if-false;
```

The following function uses an if-else statement to check a condition:

```js
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
```

This can be re-written using the `conditional operator`:

```js
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}
```

---

Use the `conditional operator` in the `checkEqual` function to check if two numbers are equal or not. The function should return either true or false.

## Setup

```js
function checkEqual(a, b) {
}
checkEqual(1, 2);
```

## Solution

```js
return a === b ? true : false;

checkEqual(1, 2); // false
```