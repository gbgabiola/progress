# [Use Bracket Notation to Find the Nth Character in a String](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-nth-character-in-a-string)

You can also use _bracket notation_ to get the character at other positions within a string.

Remember that computers start counting at `0`, so the first character is actually the zeroth character.

---

Let's try to set `thirdLetterOfLastName` to equal the third letter of the `lastName` variable using bracket notation.

**Hint**  
Try looking at the `secondLetterOfFirstName` variable declaration if you get stuck.

## Setup

```js
var lastName = "Lovelace";

// Only change code below this line.
var thirdLetterOfLastName = lastName;
```

## Solution

```js
var thirdLetterOfLastName = lastName[2];
```