# [Iterate Through an Array with a For Loop](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/iterate-through-an-array-with-a-for-loop)

A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a `for` loop. This code will output each element of the array `arr` to the console:

```js
var arr = [10,9,8,7,6];
for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
```

Remember that Arrays have zero-based numbering, which means the last index of the array is length - 1. Our _condition_ for this loop is `i < arr.length`, which stops when `i` is at length - 1.

---

Declare and initialize a variable `total` to `0`. Use a `for` loop to add the value of each element of the `myArr` array to `total`.

## Setup

```js
var myArr = [ 2, 3, 4, 5, 6];
// Only change code below this line
```

## Solution

```js
var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
```