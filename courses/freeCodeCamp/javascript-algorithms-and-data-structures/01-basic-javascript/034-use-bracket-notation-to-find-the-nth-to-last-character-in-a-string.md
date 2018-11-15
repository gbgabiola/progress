# [Use Bracket Notation to Find the Nth-to-Last Character in a String](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-nth-to-last-character-in-a-string)

You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.

For example, you can get the value of the third-to-last letter of the `var firstName = "Charles"` string by using `firstName[firstName.length - 3]`

---

Use _bracket notation_ to find the second-to-last character in the `lastName` string.

**Hint**  
Try looking at the `thirdToLastLetterOfFirstName` variable declaration if you get stuck.

## Setup

```js
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName;
```

## Solution

```js
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
```