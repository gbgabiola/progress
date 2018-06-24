# [Basic JavaScript: Manipulate Arrays With unshift()](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-unshift)

Not only can you `shift` elements off of the beginning of an array, you can also `unshift` elements to the beginning of an array i.e. add elements in front of the array.

`.unshift()` works exactly like `.push()`, but instead of adding the element at the end of the array, `unshift()` adds the element at the beginning of the array.

---

Add `["Paul",35]` to the beginning of the `myArray` variable using `unshift()`.

```js
// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

myArray.unshift(["Paul", 35]); // myArray = [["Paul", 35], ["John", 23], ["dog", 3]]
```