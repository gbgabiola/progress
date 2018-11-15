# [Comparison with the Less Than Operator](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-less-than-operator)

The _less than_ operator (`<`) compares the values of two numbers. If the number to the left is less than the number to the right, it returns `true`. Otherwise, it returns `false`. Like the equality operator, _less than_ operator converts data types while comparing.

**Examples**

```js
2 < 5 // true
'3' < 7 // true
5 < 5 // false
3 < 2 // false
'8' < 4 // false
```

---

Add the `less than` operator to the indicated lines so that the return statements make sense.

## Setup

```js
function testLessThan(val) {
  if (val) {  // Change this line
    return "Under 25";
  }
  if (val) {  // Change this line
    return "Under 55";
  }
  return "55 or Over";
}
// Change this value to test
testLessThan(10);
```

## Solution

```js
if (val < 25) { }
if (val < 55) { }

testLessThan(10); // "Under 25"
```