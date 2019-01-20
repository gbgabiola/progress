# [Intermediate Algorithm Scripting: Binary Agents](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents)

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Try to pair program. Write your own code.

## Setup
```js
function binaryAgent(str) {
  return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
```

## Solution 1
```js
// Basic Code: Using for, split, join, String.fromCharCode, and parseInt
function binaryAgent(str) {
  const biString = str.split(' ');
  const uniString = [];

  /* using the radix (or base) parameter in parseInt, we can convert the binary
  number to a decimal number while simultaneously converting to a char */
  for(let i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }
  // we then simply join the string
  return uniString.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); // "Aren't bonfires fun!?"
```

## Solution 2
```js
// Intermediate Code: Using for, split, Math.pow, and String.fromCharCode
function binaryAgent(str) {
  // Separate the binary code by space.
  str = str.split(' ');
  let power;
  let decValue = 0;
  let sentence = '';

  // Check each binary number from the array.
  for (let i = 0; i < str.length; i++) {
    // Check each bit from binary number
    for (let j = 0; j < str[i].length; j++) {
      // This only takes into consideration the active ones.
      if (str[i][j] == 1) {
        // This is quivalent to 2 ** position
        power = Math.pow(2, + str[i].length - j - 1);
        decValue += power;
        // Record the decimal value by adding the number to the previous one.
      }
    }

    // After the binary number is converted to decimal, convert it to string and store
    sentence += (String.fromCharCode(decValue));

    // Reset decimal value for next binary number.
    decValue = 0;
  }

  return sentence;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); // "Aren't bonfires fun!?"
```

## Solution 3
```js
function binaryAgent(str) {
  return String.fromCharCode(...str.split(' ')
  .map(function(char) { return parseInt(char, 2); }));

  // return String.fromCharCode(...str.split(' ').map((char) => parseInt(char, 2) ));
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); // "Aren't bonfires fun!?"
```