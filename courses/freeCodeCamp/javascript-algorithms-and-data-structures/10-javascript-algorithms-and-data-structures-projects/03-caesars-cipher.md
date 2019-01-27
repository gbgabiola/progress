# [JavaScript Algorithms and Data Structures Projects: Caesars Cipher](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher)

One of the simplest and most widely known _ciphers_ is a `Caesar cipher`, also known as a `shift cipher`. In a `shift cipher` the meanings of the letters are shifted by some set amount.

A common modern use is the [ROT13](https://en.wikipedia.org/wiki/ROT13) cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a [ROT13](https://en.wikipedia.org/wiki/ROT13) encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Try to pair program. Write your own code.

## Setup
```js
function rot13(str) { // LBH QVQ VG!
  
  return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
```

## Solution 1
```js
function rot13(str) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const cipher = 'NOPQRSTUVWXYZABCDEFGHIJKLM';
  let newStr = '';

  for (const letter of str) {
    alphabet.charAt(cipher.indexOf(letter)) != '' ? 
    newStr += alphabet.charAt(cipher.indexOf(letter)) : newStr += letter;
  }
  return newStr;
}

rot13("SERR PBQR PNZC");
```

## Solution 2
```js
// Basic Code: Using split, join, map, charCodeAt, and String.fromCharCode
function rot13(str) {
  // Split str into a character array
  return str.split('')
  // Iterate over each character in the array
    .map.call(str, function(char) {
      // Convert char to a character code
      const x = char.charCodeAt(0);
      // Checks if character lies between A-Z
      if (x < 65 || x > 90) {
        return String.fromCharCode(x);  // Return un-converted character
      }
      //N = ASCII 78, if the character code is less than 78, shift forward 13 places
      else if (x < 78) {
        return String.fromCharCode(x + 13);
      }
      // Otherwise shift the character 13 places backward
      return String.fromCharCode(x - 13);
    }).join('');  // Rejoin the array into a string
}

rot13("SERR PBQR PNZC");
```

## Solution 3
```js
// Intermediate Code: Using split, push, charCodeAt, String.fromCharCode, test, and RegExp
function rot13(str) {
  var rotCharArray = [];
  var regEx = /[A-Z]/ ;
  str = str.split('');
  for (var x in str) {
    if (regEx.test(str[x])) {
      // A more general approach
      // possible because of modular arithmetic
      // and cyclic nature of rot13 transform
      rotCharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65);
    } else {
      rotCharArray.push(str[x].charCodeAt());
    }
  }
  str = String.fromCharCode.apply(String, rotCharArray);
  return str;
}

rot13("SERR PBQR PNZC");
```

## Solution 4
```js
// Advanced Code: Using replace, charCodeAt, String.fromCharCode, and RegExp
function rot13(str) {
  return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
}

rot13("SERR PBQR PNZC");
```