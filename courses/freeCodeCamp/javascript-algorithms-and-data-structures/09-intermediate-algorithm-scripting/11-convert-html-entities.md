# [Intermediate Algorithm Scripting: Convert HTML Entities](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities)

Convert the characters `&`, `<`, `>`, ` (double quote), and ` (apostrophe), in a string to their corresponding HTML entities.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Try to pair program. Write your own code.

## Setup
```js
function convertHTML(str) {
  // &colon;&rpar;
  return str;
}

convertHTML("Dolce & Gabbana");
```

## Solution 1
```js
// Basic Code: Using for loop, switch, split, and join
function convertHTML(str) {
  // Split by character to avoid problems.
  let temp = str.split('');

  // Since we are only checking for a few HTML elements I used a switch
  for (let i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case '<':
        temp[i] = '&lt;';
        break;
      case '&':
        temp[i] = '&amp;';
        break;
      case '>':
        temp[i] = '&gt;';
        break;
      case '"':
        temp[i] = '&quot;';
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }

  temp = temp.join('');
  return temp;
}

convertHTML("Dolce & Gabbana"); // "Dolce &amp; Gabbana"
```

## Solution 2
```js
// Intermediate Code: Using replace and RegExp
function convertHTML(str) {
  str = str
  .replace(/&/g,'&amp;')
  .replace(/</g,'&lt;')
  .replace(/>/g,'&gt;')
  .replace(/"/g,'&quot;')
  .replace(/'/g,'&apos;');
  return str;
}

convertHTML("Dolce & Gabbana"); // "Dolce &amp; Gabbana"
```

## Solution 3
```js
// Advanced Code: Using split, join, map, and arrow function
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str.split('').map(entity => htmlEntities[entity] || entity).join('');
}

convertHTML("Dolce & Gabbana"); // "Dolce &amp; Gabbana"
```

```js
// Advanced Code: Using for...in, replace, and RegExp
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };
  
  for (let key in htmlEntities) {
    str = str.replace(RegExp(key, 'g'),htmlEntities[key])
  }
  return str;
}

convertHTML("Dolce & Gabbana");
```