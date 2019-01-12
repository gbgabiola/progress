# [Intermediate Algorithm Scripting: DNA Pairing](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing)

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

[Base pairs](http://en.wikipedia.org/wiki/Base_pair) are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Try to pair program. Write your own code.

## Setup
```js
function pairElement(str) {
  return str;
}

pairElement("GCG");
```

## Solution
```js
// Basic Code: Using switch
function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
  const paired = [];

  // Function to check with strand to pair.
  const search = function(char) {
    switch (char) {
      case 'A':
        paired.push(['A', 'T']);
        break;
      case 'T':
        paired.push(['T', 'A']);
        break;
      case 'C':
        paired.push(['C', 'G']);
        break;
      case 'G':
        paired.push(['G', 'C']);
        break;
    }
  };

  // Loops through the input and pair.
  for (let i = 0; i < str.length; i++) {
    search(str[i]);
  }
  return paired;
}

pairElement("GCG"); // [["G", "C"], ["C", "G"], ["G", "C"]]
```

## Solution 2
```js
// Intermediate Code: Using Property accessors, split, map, and arrow functions
function pairElement(str) {
  const pairs = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C'
  }
  //split string into array of characters
  const arr = str.split('');
  //map character to array of character and matching pair
  return arr.map(x => [x, pairs[x]]);
}

pairElement("GCG"); // [["G", "C"], ["C", "G"], ["G", "C"]]
```

## Solution 3
```js
function pairElement(str) {
  let dna = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'A') { dna[i] = ['A', 'T']; }
    if (str[i] === 'T') { dna[i] = ['T', 'A']; }
    if (str[i] === 'G') { dna[i] = ['G', 'C']; }
    if (str[i] === 'C') { dna[i] = ['C', 'G']; }
  }
  return dna;
}

pairElement("GCG"); // [["G", "C"], ["C", "G"], ["G", "C"]]
```

## Solution 4
```js
function pairElement(str) {
  const emptyArray = [];
  const a = ['A', 'T'];
  const c = ['C', 'G'];
  const g = ['G', 'C'];
  const t = ['T', 'A'];
  const splitArray = str.split('');

  for (let i = 0; i < splitArray.length; i++) {
    if(splitArray[i] == 'A' ) {
      emptyArray.push(a)
    }
    else if (splitArray[i] == 'C') {
      emptyArray.push(c)
    
    } 
    else if (splitArray[i] == 'G') {
      emptyArray.push(g)
    }
    else if (splitArray[i] == 'T') {
      emptyArray.push(t)
    }
  }
  return emptyArray
}

pairElement("GCG"); // [["G", "C"], ["C", "G"], ["G", "C"]]
```


