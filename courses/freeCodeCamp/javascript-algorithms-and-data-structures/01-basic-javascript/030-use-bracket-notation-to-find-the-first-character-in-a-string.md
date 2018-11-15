# [Use Bracket Notation to Find the First Character in a String](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-first-character-in-a-string)

`Bracket notation` is a way to get a character at a specific `index` within a string.

Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They start at 0. This is referred to as _Zero-based_ indexing.

For example, the character at index 0 in the word "Charles" is "C". So if `var firstName = "Charles"`, you can get the value of the first letter of the string by using `firstName[0]`.

---

Use _bracket notation_ to find the first character in the `lastName` variable and assign it to `firstLetterOfLastName`.

## Setup

```js
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName;
```

## Solution

```js
firstLetterOfLastName = lastName[0]; // "L"
```