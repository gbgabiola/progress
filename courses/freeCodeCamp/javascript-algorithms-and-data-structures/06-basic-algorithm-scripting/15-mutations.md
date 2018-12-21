# [Basic Algorithm Scripting: Mutations](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations)

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, `["hello", "Hello"]`, should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments `["hello", "hey"]` should return false because the string "hello" does not contain a "y".

Lastly, `["Alien", "line"]`, should return true because all of the letters in "line" are present in "Alien".

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Write your own code.

## Setup
```js
function mutation(arr) {
  return arr;
}

mutation(["hello", "hey"]);
```

## Solution
```js
// Procedural
function mutation(arr) {
  //make the string in lower case
  const test = arr[1].toLowerCase();
  const target = arr[0].toLowerCase();
  /* at MDN indexOf()method return the index of the first occurance of the specified value,
  -1 if not found */
  for (let i = 0; i < test.length; i++) {
    //check the strChecker wheter there's single word in str 
    if (target.indexOf(test[i]) < 0)
      return false;
  }
  return true;
}

mutation(["hello", "hey"]); // false
```

## Solution 2
```js
// Declarative
function mutation(arr) {
  return arr[1].toLowerCase()
    .split('')
    .every(function(letter) {
      return arr[0].toLowerCase()
        .indexOf(letter) != -1;
    });
}

mutation(["hello", "hey"]); // false
```