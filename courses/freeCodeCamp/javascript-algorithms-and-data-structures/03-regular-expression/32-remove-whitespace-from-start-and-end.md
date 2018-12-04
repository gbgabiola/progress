# [Regular Expressions: Remove Whitespace from Start and End](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/regular-expressions/remove-whitespace-from-start-and-end)

Sometimes whitespace characters around strings are not wanted but are there. Typical processing of strings is to remove the whitespace at the start and end of it.

---

Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

**Note**  
The `.trim()` method would work here, but you'll need to complete this challenge using regular expressions.

## Setup
```js
let hello = "   Hello, World!  ";
let wsRegex = /change/; // Change this line
let result = hello; // Change this line
```

## Solution
```js
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;
let result = hello.replace(wsRegex, ''); // "Hello, World!"
```