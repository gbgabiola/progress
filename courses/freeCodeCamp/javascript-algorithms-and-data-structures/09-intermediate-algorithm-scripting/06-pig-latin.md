# [Intermediate Algorithm Scripting: Pig Latin](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin)

Translate the provided string to pig latin.

[Pig Latin](http://en.wikipedia.org/wiki/Pig_Latin) takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Try to pair program. Write your own code.

## Setup
```js
function translatePigLatin(str) {
  return str;
}

translatePigLatin("consonant");
```

## Solution 1
```js
// Basic Solution: Using indexOf(), substr(), and RegEx
function translatePigLatin(str) {
  // Create variables to be used
  var pigLatin = '';
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + 'way';
  } else if (str.match(regex) === null) {
    // Check if the string contains only consonants
    pigLatin = str + 'ay';
  } else {
    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }
  return pigLatin;
}

translatePigLatin("consonant"); // "onsonantcay"
```

## Solution 2
```js
// Intermediate Solution: Using charAt(), indexOf(), concat(), and substr()
function translatePigLatin(str) {
  function check(obj) {
      return ['a','i','u','e','o'].indexOf(str.charAt(obj)) == -1 ? check(obj + 1) : obj;
  }

  return str.substr(check(0)).concat((check(0) === 0 ? 'w' : str.substr(0, check(0))) + 'ay');
}

// test here
translatePigLatin("consonant"); // "onsonantcay"
```

## Solution 3
```js
// Advanced Solution: Using charAt(), split(), shift(), push(), join(), and RegEx
// Have issues with words without vowels.
function translatePigLatin(str) {
  var strArr = [];
  var tmpChar;

  // check if the char is consonant using RegEx
  function isConsonant(char) {
      return !/[aeiou]/.test(char);
  }

  // return initial str + 'way' if it starts with vowel
  // if not - convert str to array
  if (!isConsonant(str.charAt(0)))
      return str + 'way';
  else
      strArr = str.split('');

  // push all consonats to the end of the array
  while (isConsonant(strArr[0])) {
      tmpChar = strArr.shift();
      strArr.push(tmpChar);
  }
  // convert array to string and concatenate 'ay' at the end  
  return strArr.join('') + 'ay';
}

translatePigLatin('consonant'); // "onsonantcay"
```