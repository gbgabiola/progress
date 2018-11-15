# [Comparison with the Inequality Operator](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-inequality-operator)

The inequality operator (`!=`) is the opposite of the equality operator. It means "Not Equal" and returns `false` where equality would return `true` and _vice versa_. Like the equality operator, the inequality operator will convert data types of values while comparing.

**Examples**

```js
1 != 2 // true
1 != "1" // false
1 != '1' // false
1 != true // false
0 != false // false
```

---

Add the inequality operator `!=` in the `if` statement so that the function will return "Not Equal" when `val` is not equivalent to `99`

## Setup

```js
// Setup
function testNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}
// Change this value to test
testNotEqual(10);
```

## Solution

```js
if (val != 99) { }

testNotEqual(10); // "Not Equal"
```