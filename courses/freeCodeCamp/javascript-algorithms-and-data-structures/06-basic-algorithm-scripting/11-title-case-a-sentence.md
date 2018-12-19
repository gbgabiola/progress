# [Basic Algorithm Scripting: Title Case a Sentence](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence)

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Write your own code.

## Setup
```js
function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");
```

## Solution
```js
// using RegEx
function titleCase(str) {
  return str.replace(/\w\S*/g, function(text) {
    return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
  });
}

titleCase("I'm a little tea pot"); // "I'm A Little Tea Pot"
```

## Solution 2
```js
// using ES6
function titleCase(str) {
  return str.toLowerCase()
  .split(' ')
  .map((s) => s.charAt(0)
  .toUpperCase() + s.substring(1))
  .join(' ');
}

titleCase("I'm a little tea pot"); // "I'm A Little Tea Pot"
```

## Solution 3
```js
// Basic Code Solution
function titleCase(str) {
  const newTitle = str.split(' ');
  const updatedTitle = [];
  for (let st in newTitle) {
    updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase());
  }
  return updatedTitle.join(' ');
}

String.prototype.replaceAt = function(index, character) {
  return this.substr(0, index) + character + this.substr(index+character.length);
};

titleCase("I'm a little tea pot"); // "I'm A Little Tea Pot"
```

## Solution 4
```js
// Intermediate Code Solution
function titleCase(str) {
  let convertToArray = str.toLowerCase().split(' ');
  let result = convertToArray.map(function(s) {
    return s.replace(s.charAt(0), s.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

titleCase("I'm a little tea pot"); // "I'm A Little Tea Pot"
```

## Solution 5
```js
// Advanced Code Solution
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (s) => s.toUpperCase());
}

titleCase("I'm a little tea pot"); // "I'm A Little Tea Pot"
```