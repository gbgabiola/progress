# [Comparison with the Greater Than Or Equal To Operator](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-greater-than-or-equal-to-operator)

The `greater than or equal to` operator (`>=`) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns `true`. Otherwise, it returns `false`.

Like the equality operator, `greater than or equal to` operator will convert data types while comparing.

**Examples**

```js
6 >= 6 // true
7 >= '3' // true
2 >= 3 // false
'7' >= 9 // false
```

---

Add the `greater than or equal to` operator to the indicated lines so that the return statements make sense.

## Setup

```js
function testGreaterOrEqual(val) {
  if (val) {  // Change this line
    return "20 or Over";
  }
  if (val) {  // Change this line
    return "10 or Over";
  }
  return "Less than 10";
}
// Change this value to test
testGreaterOrEqual(10);
```

## Solution

```js
if (val >= 20) { }
if (val >= 10) { }

testGreaterOrEqual(10); // "10 or Over"
```