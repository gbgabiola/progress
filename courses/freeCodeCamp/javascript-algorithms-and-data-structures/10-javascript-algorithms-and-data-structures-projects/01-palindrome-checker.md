# [JavaScript Algorithms and Data Structures Projects: Palindrome Checker](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker)

Return `true` if the given string is a palindrome. Otherwise, return `false`.

A _palindrome_ is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

**Note**  
You'll need to remove **all non-alphanumeric characters** (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as `"racecar"`, `"RaceCar"`, and `"race CAR"` among others.

We'll also pass strings with special symbols, such as `"2A3*3a2"`, `"2A3 3a2"`, and `"2_A3*3#A2"`.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Write your own code.

## Setup
```js
function palindrome(str) {
  // Good luck!
  return true;
}

palindrome("eye");
```

## Solution 1
```js
// Basic Code: Using toLowerCase, split, join, reverse, replace, and RegExp
function palindrome(str) {
  return str.replace(/[\W_]/g, '').toLowerCase() === str
  .replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}

palindrome("eye");
```

## Solution 2
```js
// Intermediate Code: Using for, toLowerCase, and replace
function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, '');
  for (let i = 0, len = str.length - 1; i < len / 2; i++) {
    if (str[i] !== str[len - i]) {
      return false;
    }
  }
  return true;
}

palindrome("eye");
```

## Solution 3
```js
// Advanced Code: Using while, toLowerCase, match, and RegExp
function palindrome(str) {
  //assign a front and a back pointer
  let front = 0;
  let back = str.length - 1;

  //back and front pointers won't always meet in the middle, so use (back > front)
  while (back > front) {
    //increments front pointer if current character doesn't meet criteria
    if (str[front].match(/[\W_]/)) {
      front++
      continue
    }
    //decrements back pointer if current character doesn't meet criteria
    if (str[back].match(/[\W_]/)) {
      back--
      continue
    }
    //finally does the comparison on the current character
    if (str[front].toLowerCase() !== str[back].toLowerCase()) return false
    front++
    back--
  }

  //if the whole string has been compared without returning false, it's a palindrome!
  return true;
}

palindrome("eye");
```