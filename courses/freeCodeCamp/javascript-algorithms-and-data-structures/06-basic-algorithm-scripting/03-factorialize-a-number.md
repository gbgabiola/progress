# [Basic Algorithm Scripting: Factorialize a Number](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number)

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation `n!`

For example: `5! = 1 * 2 * 3 * 4 * 5 = 120`

Only integers greater than or equal to zero will be supplied to the function.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Write your own code.

## Setup
```js
function factorialize(num) {
  return num;
}

factorialize(5);
```

## Solution
```js
function factorialize(num) {
  if (num === 0) { return 1; };
  return num * factorialize(num - 1);
}

factorialize(5); // 120
```