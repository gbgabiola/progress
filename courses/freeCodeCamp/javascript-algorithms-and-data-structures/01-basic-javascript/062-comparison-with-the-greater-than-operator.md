# [Comparison with the Greater Than Operator](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-greater-than-operator)

The greater than operator (`>`) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns `true`. Otherwise, it returns `false`.

Like the equality operator, greater than operator will convert data types of values while comparing.

**Examples**

```js
5 > 3 // true
7 > '3' // true
2 > 3 // false
'1' > 9 // false
```

---

Add the `greater than` operator to the indicated lines so that the return statements make sense.

## Setup

```js
function testGreaterThan(val) {
  if (val) {  // Change this line
    return "Over 100";
  }
  if (val) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}
// Change this value to test
testGreaterThan(10);
```

## Solution

```js
if (val > 100) { }
if (val > 10) { }

testGreaterThan(10); // "10 or Under"
```