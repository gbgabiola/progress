# [Basic Algorithm Scripting: Find the Longest Word in a String](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string)

Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Write your own code.

## Setup
```js
function findLongestWordLength(str) {
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
```

## Solution
```js
function findLongestWordLength(str) {
  str = str.split(' ').reduce((a, b) => {
    return (a.length > b.length) ? a : b;
  });
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog"); // 6
```

## Solution 2
```js
function findLongestWordLength(str) {
  str = str.split(' ').sort((a, b) => {
    return b.length - a.length;   
  })[0];
  // let index = str.length;
  // str = str[index - 1];
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
```


## Solution 3
```js
function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  } 
  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
```