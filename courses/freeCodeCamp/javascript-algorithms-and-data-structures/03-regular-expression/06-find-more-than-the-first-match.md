# [Regular Expressions: Find More Than the First Match](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/regular-expressions/find-more-than-the-first-match)

So far, you have only been able to extract or search a pattern once.

```js
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
// Returns ["Repeat"]
```

To search or extract a pattern more than once, you can use the `g` flag.

```js
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
// Returns ["Repeat", "Repeat", "Repeat"]
```

---

Using the regex `starRegex`, find and extract both `"Twinkle"` words from the string `twinkleStar`.

**Note**  
You can have multiple flags on your regex like `/search/gi`

## Setup
```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // Change this line
let result = twinkleStar; // Change this line
```

## Solution
```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi;
let result = twinkleStar.match(starRegex); // (2) ["Twinkle", "twinkle"]
```