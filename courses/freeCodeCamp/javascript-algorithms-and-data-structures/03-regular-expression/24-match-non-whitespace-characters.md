# [Regular Expressions: Match Non-Whitespace Characters](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/regular-expressions/match-non-whitespace-characters)

You learned about searching for whitespace using `\s`, with a lowercase `s`. You can also search for everything except whitespace.

Search for non-whitespace using `\S`, which is an uppercase `s`. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class `[^ \r\t\f\n\v]`.

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length; // Returns 32
```

---

Change the regex `countNonWhiteSpace` to look for multiple non-whitespace characters in a string.

## Setup
```js
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /change/; // Change this line
let result = sample.match(countNonWhiteSpace);
```

## Solution
```js
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace); // (38) ["W", "h", "i", "t", "e", "s", "p", "a", "c", "e", "i", "s", "i", "m", "p", "o", "r", "t", "a", "n", "t", "i", "n", "s", "e", "p", "a", "r", "a", "t", "i", "n", "g", "w", "o", "r", "d", "s"]
```