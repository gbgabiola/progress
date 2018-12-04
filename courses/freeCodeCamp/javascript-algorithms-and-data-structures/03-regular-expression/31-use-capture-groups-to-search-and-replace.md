# [Regular Expressions: Use Capture Groups to Search and Replace](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/regular-expressions/use-capture-groups-to-search-and-replace)

Searching is useful. However, you can make searching even more powerful when it also changes (or replaces) the text you match.

You can search and replace text in a string using `.replace()` on a string. The inputs for `.replace()` is first the regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something.

```js
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// Returns "The sky is blue."
```

You can also access capture groups in the replacement string with dollar signs (`$`).

```js
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// Returns "Camp Code"
```

---

Write a regex so that it will search for the string `"good"`. Then update the `replaceText` variable to replace `"good"` with `"okey-dokey"`.

## Setup
```js
let huhText = "This sandwich is good.";
let fixRegex = /change/; // Change this line
let replaceText = ""; // Change this line
let result = huhText.replace(fixRegex, replaceText);
```

## Solution
```js
let huhText = "This sandwich is good.";
let fixRegex = /good/;
let replaceText = "okey-dokey";
let result = huhText.replace(fixRegex, replaceText); // "This sandwich is okey-dokey."
```