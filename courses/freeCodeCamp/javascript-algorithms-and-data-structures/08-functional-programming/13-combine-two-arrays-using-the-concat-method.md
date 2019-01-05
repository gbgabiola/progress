# [Functional Programming: Combine Two Arrays Using the concat Method](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/combine-two-arrays-using-the-concat-metho)

`Concatenation` means to join items end to end. JavaScript offers the `concat` method for both strings and arrays that work in the same way. For arrays, the method is called on one, then another array is provided as the argument to `concat`, which is added to the end of the first array. It returns a new array and does not mutate either of the original arrays. Here's an example:

```js
[1, 2, 3].concat([4, 5, 6]);
// Returns a new array [1, 2, 3, 4, 5, 6]
```

---

Use the `concat` method in the `nonMutatingConcat` function to concatenate `attach` to the end of `original`. The function should return the concatenated array.

## Setup
```js
function nonMutatingConcat(original, attach) {
  // Add your code below this line
  
  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);
```

## Solution
```js
function nonMutatingConcat(original, attach) {
  return original.concat(attach);
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);
// [1, 2, 3, 4, 5]
```