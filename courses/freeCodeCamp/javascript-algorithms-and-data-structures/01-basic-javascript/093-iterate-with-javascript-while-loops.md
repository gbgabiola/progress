# [Basic JavaScript: Iterate with JavaScript While Loops](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-while-loops)

You can run the same code multiple times by using a loop.

The first type of loop we will learn is called a " `while` " loop because it runs "while" a specified condition is true and stops once that condition is no longer true.

```js
var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}
```

Let's try getting a while loop to work by pushing values to an array.

---

Push the numbers 0 through 4 to `myArray` using a `while` loop.

```js
// Setup
var myArray = [];
var i = 0;

while(i < 5) {
  myArray.push(i);
  i++;
}
```