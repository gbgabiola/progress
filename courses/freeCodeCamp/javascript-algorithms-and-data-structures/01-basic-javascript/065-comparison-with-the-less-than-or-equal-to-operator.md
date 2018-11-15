# [Comparison with the Less Than Or Equal To Operator](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-less-than-or-equal-to-operator)

The `less than or equal to` operator (`<=`) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns `true`. If the number on the left is greater than the number on the right, it returns `false`. Like the equality operator, `less than or equal to` converts data types.

**Examples**

```js
4 <= 5 // true
'7' <= 7 // true
5 <= 5 // true
3 <= 2 // false
'8' <= 4 // false
```

---

Add the `less than or equal to` operator to the indicated lines so that the return statements make sense.

## Setup

```js
function testLessOrEqual(val) {
  if (val) {  // Change this line
    return "Smaller Than or Equal to 12";
  }
  if (val) {  // Change this line
    return "Smaller Than or Equal to 24";
  }
  return "More Than 24";
}
// Change this value to test
testLessOrEqual(10);
```

## Solution

```js
if (val <= 12) { }
if (val <= 24) { }

testLessOrEqual(10); // "Smaller Than or Equal to 12"
```