# [Regular Expressions: Specify Upper and Lower Number of Matches](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/regular-expressions/specify-upper-and-lower-number-of-matches)

Recall that you use the plus sign `+` to look for one or more characters and the asterisk `*` to look for zero or more characters. These are convenient but sometimes you want to match a certain range of patterns.

You can specify the lower and upper number of patterns with `quantity specifiers`. Quantity specifiers are used with curly brackets (`{` and `}`). You put two numbers between the curly brackets - for the lower and upper number of patterns.

For example, to match only the letter `a` appearing between `3` and `5` times in the string `"ah"`, your regex would be `/a{3,5}h/`.

```js
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
```

---

Change the regex `ohRegex` to match only `3` to `6` letter `h`'s in the word `"Oh no"`.

## Setup
```js
let ohStr = "Ohhh no";
let ohRegex = /change/; // Change this line
let result = ohRegex.test(ohStr);
```

## Solution
```js
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/;
// let ohRegex = /oh{3,6}\sno/i; // using ignore-case
let result = ohRegex.test(ohStr); // true
```