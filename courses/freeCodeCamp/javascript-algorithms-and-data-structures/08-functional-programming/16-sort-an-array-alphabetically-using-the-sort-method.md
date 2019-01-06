# [Functional Programming: Sort an Array Alphabetically using the sort Method](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/sort-an-array-alphabetically-using-the-sort-method)

The `sort` method sorts the elements of an array according to the callback function.

For example:

```js
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
ascendingOrder([1, 5, 2, 3, 4]);
// Returns [1, 2, 3, 4, 5]

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a < b;
  });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);
// Returns ['z', 's', 'l', 'h', 'b']
```

Note: It's encouraged to provide a callback function to specify how to sort the array items. JavaScript's default sorting method is by string Unicode point value, which may return unexpected results.

---

Use the `sort` method in the `alphabeticalOrder` function to sort the elements of `arr` in alphabetical order.

## Setup
```js
function alphabeticalOrder(arr) {
  // Add your code below this line
  
  // Add your code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
```

## Solution 1
```js
function alphabeticalOrder(arr) {
  return arr.sort();
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]); // ["a", "a", "c", "d", "g", "z"]
```