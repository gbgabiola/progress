# [Regular Expressions: Match Letters of the Alphabet](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/regular-expressions/match-letters-of-the-alphabet)

You saw how you can use `character sets` to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.

Inside a `character set`, you can define a range of characters to match using a `hyphen` character: `-`.

For example, to match lowercase letters `a` through `e` you would use `[a-e]`.

```js
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null
```

---

Match all the letters in the string `quoteSample`.

**Note**  
Be sure to match both upper- and lowercase letters.

## Setup
```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /change/; // Change this line
let result = alphabetRegex; // Change this line
```

## Solution
```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig;
let result = quoteSample.match(alphabetRegex); // (35) ["T", "h", "e", "q", "u", "i", "c", "k", "b", "r", "o", "w", "n", "f", "o", "x", "j", "u", "m", "p", "s", "o", "v", "e", "r", "t", "h", "e", "l", "a", "z", "y", "d", "o", "g"]
```