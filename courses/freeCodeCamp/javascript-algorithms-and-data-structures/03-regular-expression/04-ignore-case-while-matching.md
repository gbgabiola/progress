# [Regular Expressions: Ignore Case While Matching](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/regular-expressions/ignore-case-while-matching)

Up until now, you've looked at regexes to do literal matches of strings. But sometimes, you might want to also match case differences.

Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. Examples of uppercase are `"A"`, `"B"`, and `"C"`. Examples of lowercase are `"a"`, `"b"`, and `"c"`.

You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i flag. You can use it by appending it to the regex. An example of using this flag is `/ignorecase/i`. This regex can match the strings `"ignorecase"`, `"igNoreCase"`, and `"IgnoreCase"`.

---

Write a regex `fccRegex` to match `"freeCodeCamp"`, no matter its case. Your regex should not match any abbreviations or variations with spaces.

## Setup
```js
let myString = "freeCodeCamp";
let fccRegex = /change/; // Change this line
let result = fccRegex.test(myString);
```

## Solution
```js
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let result = fccRegex.test(myString); // true
```