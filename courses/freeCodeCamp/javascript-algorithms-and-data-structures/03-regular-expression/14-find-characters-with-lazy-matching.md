# [Regular Expressions: Find Characters with Lazy Matching](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/regular-expressions/find-characters-with-lazy-matching)

In regular expressions, a `greedy` match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a `lazy` match, which finds the smallest possible part of the string that satisfies the regex pattern.

You can apply the regex `/t[a-z]*i/` to the string `"titanic"`. This regex is basically a pattern that starts with `t`, ends with `i`, and has some letters in between.

Regular expressions are by default `greedy`, so the match would return `["titani"]`. It finds the largest sub-string possible to fit the pattern.

However, you can use the `?` character to change it to lazy matching. `"titanic"` matched against the adjusted regex of `/t[a-z]*?i/` returns `["ti"]`.

---

Fix the regex `/<.*>/` to return the HTML tag `<h1>` and not the text `"<h1>Winter is coming</h1>"`. Remember the wildcard `.` in a regular expression matches any character.

## Setup
```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // Change this line
let result = text.match(myRegex);
```

## Solution
```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/;
// let myRegex = /<h1>?/; // Solution 2
let result = text.match(myRegex); // ["<h1>", index: 0, input: "<h1>Winter is coming</h1>", groups: undefined]
```