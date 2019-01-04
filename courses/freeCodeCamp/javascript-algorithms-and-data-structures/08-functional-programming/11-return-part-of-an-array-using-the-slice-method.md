# [Functional Programming: Return Part of an Array Using the slice Method](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/return-part-of-an-array-using-the-slice-method)

The `slice` method returns a copy of certain elements of an array. It can take two arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice (and it's non-inclusive). If the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array. The `slice` method does not mutate the original array, but returns a new one.

Here's an example:

```js
var arr = ["Cat", "Dog", "Tiger", "Zebra"];
var newArray = arr.slice(1, 3);
// Sets newArray to ["Dog", "Tiger"]
```

---

Use the `slice` method in the `sliceArray` function to return part of the `anim` array given the provided `beginSlice` and `endSlice` indices. The function should return an array.

## Setup
```js
function sliceArray(anim, beginSlice, endSlice) {
  // Add your code below this line
  
  // Add your code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
```

## Solution
```js
function sliceArray(anim, beginSlice, endSlice) {
  return anim.slice(beginSlice, endSlice);
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3); // ["Dog", "Tiger"]
```