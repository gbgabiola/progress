# [Basic Algorithm Scripting: Falsy Bouncer](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer)

Remove all falsy values from an array.

Falsy values in JavaScript are `false`, `null`, `0`, `""`, `undefined`, and `NaN`.

Hint: Try converting each value to a Boolean.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Write your own code.

## Setup
```js
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr;
}

bouncer([7, "ate", "", false, 9]);
```

## Solution
```js
function bouncer(arr) {
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]); // [7, "ate", 9]
```

## Solution 2
```js
function bouncer(arr) {
  return arr.filter(function(value) {
    if (value !== Boolean) {
      return value;
    }
  });
}

bouncer([7, "ate", "", false, 9]); // [7, "ate", 9]
```

## Solution 3
```js
function bouncer(arr) {
  // return arr.filter(arr => Boolean(arr));
  return arr.filter(x => x);
}

bouncer([7, "ate", "", false, 9]); // [7, "ate", 9]
```