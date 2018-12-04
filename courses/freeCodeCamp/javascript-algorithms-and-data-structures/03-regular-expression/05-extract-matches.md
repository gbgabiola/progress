# [Regular Expressions: Extract Matches](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/regular-expressions/extract-matches)

So far, you have only been checking if a pattern exists or not within a string. You can also extract the actual matches you found with the `.match()` method.

To use the `.match()` method, apply the method on a string and pass in the regex inside the parentheses. Here's an example:

```js
"Hello, World!".match(/Hello/);
// Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Returns ["expressions"]
```

---

Apply the `.match()` method to extract the word `coding`.

## Setup
```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /change/; // Change this line
let result = extractStr; // Change this line
```

## Solution
```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex); // ["coding", index: 18, input: "Extract the word 'coding' from this string.", groups: undefined]
```