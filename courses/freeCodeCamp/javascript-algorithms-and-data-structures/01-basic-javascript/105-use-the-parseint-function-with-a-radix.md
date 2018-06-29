# [Basic JavaScript: Use the parseInt Function with a Radix](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/use-the-parseint-function-with-a-radix/)

The `parseInt()` function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

The function call looks like:

`parseInt(string, radix);`

And here's an example:

`var a = parseInt("11", 2);`

The radix variable says that "11" is in the binary system, or base 2. This example converts the string "11" to an integer 3.

---

Use `parseInt()` in the `convertToInteger` function so it converts a binary number to an integer and returns it.

if you want your code to be clear
```js
function convertToInteger(str) {
    var radix = 2;
    return parseInt(str, radix);
}

convertToInteger("10011"); // 19
```

most people would do it like this
```js
function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011"); // 19
```