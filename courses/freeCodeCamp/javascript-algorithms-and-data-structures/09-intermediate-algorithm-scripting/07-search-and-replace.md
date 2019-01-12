# Intermediate Algorithm Scripting: Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

**Note**  
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Try to pair program. Write your own code.

## Setup
```js
function myReplace(str, before, after) {
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```

## Solution 1
```js
// Basic Code: Using indexOf, toUpperCase, charAt, slice, and replace
function myReplace(str, before, after) {
  // Find index where before is on string
  const index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after);
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); // "A quick brown fox leaped over the lazy dog"
```

## Solution 2
```js
// Intermediate Code: Using charAt, toUpperCase, slice, replace, and RegEx
function myReplace(str, before, after) {
  if ((/^[A-Z]/).test(before)) {
    let cap = after.match(/^[a-z]/)[0].toUpperCase();

    after = after.replace(/(^[a-z])(.)/, cap + '$2');
  }

  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); // "A quick brown fox leaped over the lazy dog"
```

## Solution 3
```js
// Intermediate Code: Using charAt, toUpperCase, slice, replace, and RegEx
function myReplace(str, before, after) {
  // Create a regular expression object
  const regEx = new RegExp(before, 'gi');
  // Check whether the first letter is uppercase or not
  if(/[A-Z]/.test(before[0])) {
  // Change the word to be capitalized
    after = after.charAt(0).toUpperCase()+after.slice(1);
  }
  // Replace the original word with new one
  const newStr =  str.replace(regEx, after);

  return newStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); // "A quick brown fox leaped over the lazy dog"
```

## Solution 4
```js
// Advanced Code: Using Math.min, length, split, join, toUpperCase, toLowerCase, replace, and RegEx
function myReplace(str, before, after) {
  // create a function that will change the casing of any number of letter in parameter "target"
  // matching parameter "source"
  function applyCasing(source, target) {
    // split the source and target strings to array of letters
    const targetArr = target.split('');
    const sourceArr = source.split('');
    // iterate through all the items of sourceArr and targetArr arrays till loop hits the end of shortest array
    for (let i = 0; i < Math.min(targetArr.length, sourceArr.length); i++){
      // find out the casing of every letter from sourceArr using regular expression
      // if sourceArr[i] is upper case then convert targetArr[i] to upper case
      if (/[A-Z]/.test(sourceArr[i])) {
          targetArr[i] = targetArr[i].toUpperCase();
      }
      // if sourceArr[i] is not upper case then convert targetArr[i] to lower case
      else targetArr[i] = targetArr[i].toLowerCase();
    }
    // join modified targetArr to string and return
    return (targetArr.join(''));
  }

  // replace 'before' with 'after' with 'before'-casing
  return str.replace(before, applyCasing(before, after));
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); // "A quick brown fox leaped over the lazy dog"
```

## Solution 5
```js
// Advanced Code: Using toUpperCase, toLowerCase, capitalize, slice, and RegEx
// Add new method to the String object, not overriding it if one exists already
String.prototype.capitalize =  String.prototype.capitalize ||
  function() {
      return this[0].toUpperCase() + this.slice(1);
  };

const Util = (function() {
// Create utility module to hold helper functions
  function textCase(str, tCase) {
    // Depending if the tCase argument is passed we either set the case of the
    // given string or we get it.
    // Those functions can be expanded for other text cases.
      
    if (tCase) {
      return setCase(str, tCase);
    } else {
      return getCase(str);
    }

    function setCase(str, tCase) {
      switch(tCase) {
        case 'uppercase': return str.toUpperCase();
        case 'lowercase': return str.toLowerCase();
        case 'capitalized': return str.capitalize();
        default: return str;
      }
    }

    function getCase(str) {
      if (str === str.toUpperCase()) { return 'uppercase'; }
      if (str === str.toLowerCase()) { return 'lowercase'; }
      if (str === str.capitalize()) { return 'capitalized'; }
      return 'normal';
    }
  }

  return {
    textCase
  };
})();

function myReplace(str, before, after) {
  const { textCase } = Util;
  const regEx = new RegExp(before, 'gi');
  const replacingStr = textCase(after, textCase(before));

  return str.replace(regEx, replacingStr);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); // "A quick brown fox leaped over the lazy dog"
```