# [Basic JavaScript: Finding a Remainder in JavaScript](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/finding-a-remainder-in-javascript/)

The _remainder_ operator `%` gives the remainder of the division of two numbers.

**Example**  

```js
5 % 2 = 1 because
Math.floor(5 / 2) = 2 (Quotient)
2 * 2 = 4
5 - 4 = 1 (Remainder)
```

**Usage**  
In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by `2`.

```js
17 % 2 = 1 (17 is Odd)
48 % 2 = 0 (48 is Even)
```

**Note**  
The _remainder_ operator is sometimes incorrectly referred to as the "modulus" operator. It is very similar to modulus, but does not work properly with negative numbers. */

---

Set `remainder` equal to the remainder of `11` divided by `3` using the remainder (`%`) operator.

```js
var remainder = 11 % 3;
```