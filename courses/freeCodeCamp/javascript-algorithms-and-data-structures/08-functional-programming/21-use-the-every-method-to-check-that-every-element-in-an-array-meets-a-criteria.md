# [Functional Programming: Use the every Method to Check that Every Element in an Array Meets a Criteria](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/use-the-every-method-to-check-that-every-element-in-an-array-meets-a-criteria)

The `every` method works with arrays to check if _every_ element passes a particular test. It returns a Boolean value - `true` if all values meet the criteria, `false` if not.

For example, the following code would check if every element in the `numbers` array is less than 10:

```js
var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentValue) {
  return currentValue < 10;
});
// Returns false
```

---

Use the `every` method inside the `checkPositive` function to check if every element in `arr` is positive. The function should return a Boolean value.

## Setup
```js
function checkPositive(arr) {
  // Add your code below this line
  
  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);
```

## Solution 1
```js
function checkPositive(arr) {
  // Add your code below this line
  return arr.every(function(val) {
      return val > 0;
  });
}
checkPositive([1, 2, 3, -4, 5]);
```

## Solution 2
```js
function checkPositive(arr) {
  return arr.every(val => val > 0);
}
checkPositive([1, 2, 3, -4, 5]);
```