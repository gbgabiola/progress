# [Functional Programming: Return a Sorted Array Without Changing the Original Array](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/return-a-sorted-array-without-changing-the-original-array)

A side effect of the `sort` method is that it changes the order of the elements in the original array. In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array to the one being sorted (remember that `concat` returns a new array), then run the `sort` method.

---

Use the `sort` method in the `nonMutatingSort` function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the `globalArray` variable.

## Setup
```js
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line

  // Add your code above this line
}
nonMutatingSort(globalArray);
```

## Solution 1
```js
const globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  return [].concat(arr).sort((a, b) => a - b);
}
nonMutatingSort(globalArray); // [2, 3, 5, 6, 9]
```

## Solution 2
```js
const globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  let newArray = arr.concat();
  return newArray.sort();
}
nonMutatingSort(globalArray);  // [2, 3, 5, 6, 9]
```