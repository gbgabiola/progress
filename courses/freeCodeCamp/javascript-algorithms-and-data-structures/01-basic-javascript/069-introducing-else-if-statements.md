# [Introducing Else If Statements](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/introducing-else-if-statements)

If you have multiple conditions that need to be addressed, you can chain `if` statements together with `else if` statements.

```js
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
```

---

Convert the logic to use `else if` statements.

## Setup

```js
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }
  if (val < 5) {
    return "Smaller than 5";
  }
  return "Between 5 and 10";
}
// Change this value to test
testElseIf(7);
```

## Solution

```js
if (val > 10) {
  return "Greater than 10";
} else if (val < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 10";
}

testElseIf(7); // "Between 5 and 10"
```