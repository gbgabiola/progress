# [Manipulate Arrays With pop()](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-pop)

Another way to change the data in an array is with the `.pop()` function.

`.pop()` is used to "pop" a value off of the end of an array. We can store this "popped off" value by assigning it to a variable. In other words, `.pop()` removes the last element from an array and returns that element.

Any type of entry can be "popped" off of an array - numbers, strings, even nested arrays.

```js
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]
```

---

Use the `.pop()` function to remove the last item from `myArray`, assigning the "popped off" value to `removedFromMyArray`.

## Setup

```js
var myArray = [["John", 23], ["cat", 2]];
```

## Solution

```js
var removedFromMyArray = myArray.pop(); // myArray = ["John", 23]
```