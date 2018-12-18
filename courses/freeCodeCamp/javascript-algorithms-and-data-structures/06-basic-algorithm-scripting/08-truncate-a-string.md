# [Basic Algorithm Scripting: Truncate a String](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string)

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a `...` ending.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Write your own code.

## Setup
```js
function truncateString(str, num) {
  // Clear out that junk in your trunk
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
```

## Solution
```js
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + '...' : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8); // "A-tisket..."
```

## Solution 2
```js
function truncateString(str, num) {
  if (str.length > num && num > 3) {
    return str.slice(0, (num - 3)) + '...';
  } else if (str.length > num && num <= 3) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8); // "A-tisket..."
```

## Solution 3
```js
function truncateString(str, num) {
  const result = str.length > num ? '...' : '';
  return str.substring(0, num)+ result;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8); // "A-tisket..."
```