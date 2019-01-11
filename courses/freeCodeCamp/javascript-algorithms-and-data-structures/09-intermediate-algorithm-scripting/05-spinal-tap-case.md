# [Intermediate Algorithm Scripting: Spinal Tap Case](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case)

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Try to pair program. Write your own code.

## Setup
```js
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str;
}

spinalCase('This Is Spinal Tap');
```

## Solution 1
```js
// Basic Solution: Using replace(), toLowerCase() and RegEx
function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}

spinalCase('This Is Spinal Tap'); // "this-is-spinal-tap"
```

## Solution 2
```js
// Intermediate Solution: Using replace(), toLowerCase(), split(), join(), and RegEx
function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Split on whitespace and underscores and join with dash
  return str.toLowerCase().split(/(?:_| )+/).join('-');
}

spinalCase('This Is Spinal Tap'); // "this-is-spinal-tap"
```

## Solution 3
```js
// Advanced Solution: Using split(), join(), toLowerCase() and RegEx
function spinalCase(str) {
  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
}

spinalCase('This Is Spinal Tap'); // "this-is-spinal-tap"
```