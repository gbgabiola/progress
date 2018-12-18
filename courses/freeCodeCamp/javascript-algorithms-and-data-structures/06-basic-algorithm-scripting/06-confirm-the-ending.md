# [Basic Algorithm Scripting: Confirm the Ending](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending)

Check if a string (first argument, `str`) ends with the given target string (second argument, `target`).

This challenge can be solved with the `.endsWith()` method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Write your own code.

## Setup
```js
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str;
}

confirmEnding("Bastian", "n");
```

## Solution
```js
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
  // return str.endsWith(target); Using a build-in method
}

confirmEnding("Bastian", "n"); // true
```

## Solution 2
```js
function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
  // return str.substr(str.length - target.length) === target;
}

confirmEnding("Bastian", "n"); // true
```