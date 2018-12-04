# [Regular Expressions: Specify Exact Number of Matches](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/regular-expressions/specify-exact-number-of-matches)

You can specify the lower and upper number of patterns with `quantity specifiers` using curly brackets. Sometimes you only want a specific number of matches.

To specify a certain number of patterns, just have that one number between the curly brackets.

For example, to match only the word `"hah"` with the letter `a` `3` times, your regex would be `/ha{3}h/`.

```js
let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4); // Returns false
multipleHA.test(A3); // Returns true
multipleHA.test(A100); // Returns false
```

---

Change the regex `timRegex` to match the word `"Timber"` only when it has four letter `m`'s.

## Setup
```js
let timStr = "Timmmmber";
let timRegex = /change/; // Change this line
let result = timRegex.test(timStr);
```

## Solution
```js
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let result = timRegex.test(timStr); // true
```