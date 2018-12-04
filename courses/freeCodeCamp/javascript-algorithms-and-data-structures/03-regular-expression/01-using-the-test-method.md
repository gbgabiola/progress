# [Regular Expressions: Using the Test Method](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/regular-expressions/using-the-test-method)

Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.

If you want to find the word `"the"` in the string `"The dog chased the cat"`, you could use the following regular expression: `/the/`. Notice that quote marks are not required within the regular expression.

JavaScript has multiple ways to use regexes. One way to test a regex is using the `.test()` method. The `.test()` method takes the regex, applies it to a string (which is placed inside the parentheses), and returns `true` or `false` if your pattern finds something or not.

```js
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
// Returns true
```

---

Apply the regex `myRegex` on the string `myString` using the `.test()` method.

## Setup
```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // Change this line
```

## Solution
```js
let myString = "Hello, World!";
let myRegex = /Hello/;

let result = myRegex.test(myString); // true
```