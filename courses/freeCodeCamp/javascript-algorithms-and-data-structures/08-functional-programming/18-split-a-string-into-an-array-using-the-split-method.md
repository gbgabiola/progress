# [Functional Programming: Split a String into an Array Using the split Method](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/split-a-string-into-an-array-using-the-split-method)

The `split` method splits a string into an array of strings. It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression. For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.

Here are two examples that split one string by spaces, then another by digits using a regular expression:

```js
var str = "Hello World";
var bySpace = str.split(" ");
// Sets bySpace to ["Hello", "World"]

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);
// Sets byDigits to ["How", "are", "you", "today"]
```

Since strings are immutable, the `split` method makes it easier to work with them.

---

Use the `split` method inside the `splitify` function to split `str` into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.

## Setup
```js
function splitify(str) {
  // Add your code below this line
  
  // Add your code above this line
}
splitify("Hello World,I-am code");
```

## Solution
```js
function splitify(str) {
  return str.split(/\W/);
}
splitify("Hello World,I-am code"); // ["Hello", "World", "I", "am", "code"]
```