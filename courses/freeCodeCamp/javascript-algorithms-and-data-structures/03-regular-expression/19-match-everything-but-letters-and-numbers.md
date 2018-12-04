# [Regular Expressions: Match Everything But Letters and Numbers](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/regular-expressions/match-everything-but-letters-and-numbers)

You've learned that you can use a shortcut to match alphanumerics `[A-Za-z0-9_]` using `\w`. A natural pattern you might want to search for is the opposite of alphanumerics.

You can search for the opposite of the `\w` with `\W`. Note, the opposite pattern uses a capital letter. This shortcut is the same as `[^A-Za-z0-9_]`.

```js
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); // Returns ["%"]
sentence.match(shortHand); // Returns ["!"]
```

---

Use the shorthand character class `\W` to count the number of non-alphanumeric characters in various quotes and strings.

## Setup
```js
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /change/; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
```

## Solution
```js
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length; // 6
```