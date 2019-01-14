# [Intermediate Algorithm Scripting: Missing letters](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters)

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Try to pair program. Write your own code.

## Setup
```js
function fearNotLetter(str) {
  return str;
}

fearNotLetter("abce");
```

## Solution
```js
// Basic Code: Using charCodeAt and String.fromCharCode
function fearNotLetter(str) {
  for(let i = 0; i < str.length; i++) {
    // code of current character
    const code = str.charCodeAt(i);

    // if code of current character is not equal to first character + no of iteration hence character has been escaped
    if (code !== str.charCodeAt(0) + i) {
      // if current character has escaped one character find previous char and return
      return String.fromCharCode(code - 1);
    }  
  }
  return undefined;
}

fearNotLetter("abce"); // "d"
```

## Solution 2
```js
// Intermediate Code: Using split, map, charCodeAt, and String.fromCharCode
function fearNotLetter(str) {
  let compare = str.charCodeAt(0), missing;

  str.split('').map(function(letter, index) {
    if (str.charCodeAt(index) === compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });
  return missing;
}

fearNotLetter("abce"); // "d"
```

## Solution 3
```js
// Advanced Simplified Code: Using charCodeAt and String.fromCharCode
function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}

fearNotLetter("abce"); // "d"
```

## Solution 4
```js
// More Readable Code
function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    const currChar = str.charCodeAt(i);
    const nextChar = str.charCodeAt(i+1);
    if (nextChar - currChar > 1) { 
      return String.fromCharCode(currChar+1);
    } 
  }
}

fearNotLetter("abce"); // "d"
```

## Solution 5
```js
// Advanced Code: Using match, join, charCodeAt, String.fromCharCode, ternary and RegEx
function fearNotLetter(str) {
  let allChars = '';
  const notChars = new RegExp('[^'+str+']', 'g');

  for (let i = 0; allChars[allChars.length-1] !== str[str.length-1]; i++) {
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i);
  }
  return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined;
}

fearNotLetter("abce"); // "d"
```