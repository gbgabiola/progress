# [Manipulate Arrays With shift()](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-shift)

`pop()` always removes the last element of an array. What if you want to remove the first?

That's where `.shift()` comes in. It works just like `.pop()`, except it removes the first element instead of the last.

---

Use the `.shift()` function to remove the first item from `myArray`, assigning the "shifted off" value to `removedFromMyArray`.

## Setup

```js
var myArray = [["John", 23], ["dog", 3]];
```

## Solution

```js
var removedFromMyArray = myArray.shift(); // myArray = ["dog", 3]
```