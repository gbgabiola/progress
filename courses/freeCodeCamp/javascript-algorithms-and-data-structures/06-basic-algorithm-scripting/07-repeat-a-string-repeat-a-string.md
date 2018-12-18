# [Basic Algorithm Scripting: Repeat a String Repeat a String](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string)

Repeat a given string `str` (first argument) for `num` times (second argument). Return an empty string if `num` is not a positive number.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Write your own code.

## Setup
```js
function repeatStringNumTimes(str, num) {
  // repeat after me
  return str;
}

repeatStringNumTimes("abc", 3);
```

## Solution
```js
// using for loop
function repeatStringNumTimes(str, num) {
  let result = '';
  for (let i = 1; i <= num; i++) {
    result += str;
  }

  return result;
}

repeatStringNumTimes("abc", 3); // "abcabcabc"
```

## Solution 2
```js
// using while loop
function repeatStringNumTimes(str, num) {
  let result = '';
  while (num > 0) {
    result += str;
    num--;
  }
 
  return result;
}
 
repeatStringNumTimes("abc", 3); // "abcabcabc"

// Step 1. Create an empty string that will host the repeated string
// Step 2. Set the While loop with (times > 0) as the condition to check
// As long as times is greater than 0, the statement is executed
// Step 3. Return the repeated string

  /* While loop logic
                    Condition       T/F       repeatedString += string      repeatedString        times
  First iteration    (3 > 0)        true            "" + "abc"                  "abc"               2
  Second iteration   (2 > 0)        true           "abc" + "abc"               "abcabc"             1
  Third iteration    (1 > 0)        true          "abcabc" + "abc"            "abcabcabc"           0
  Fourth iteration   (0 > 0)        false
*/
```

## Solution 3
```js
// using Conditional and Recursion
function repeatStringNumTimes(str, num) {
  if(num < 0) 
    return '';
  if(num === 1) 
    return str;
  else 
    return str + repeatStringNumTimes(str, num - 1);
}

repeatStringNumTimes("abc", 3); // "abcabcabc"
```

## Solution 4
```js
// using ES6 repeat() method, not valid in the current challenge
function repeatStringNumTimes(str, num) {
  // If num is positive, return the repeated str
  // (3 > 0) => true
  // return "abc".repeat(3); => return "abcabcabc";
  // Else if num is negative, return an empty str if true
  return (num > 0) ? str.repeat(num) : '';
}

repeatStringNumTimes("abc", 3); // "abcabcabc"
```