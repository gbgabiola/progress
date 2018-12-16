# [Basic Algorithm Scripting: Reverse a String](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string)

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Write your own code.

## Setup
```js
function reverseString(str) {
  return str;
}

reverseString("hello");
```

## Solution
```js
function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello"); // "olleh"
```