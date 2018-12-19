# [Basic Algorithm Scripting: Boo who](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/boo-who)

Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Try to pair program. Write your own code.

## Setup
```js
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return bool;
}

booWho(null);
```

## Solution
```js
function booWho(bool) {
  return (bool === true || bool === false) ? true : false;
}

booWho(null); // false
```

## Solution 2
```js
function booWho(bool) {
  return typeof bool === 'boolean' ? true : false;
}

booWho(null); // false
```