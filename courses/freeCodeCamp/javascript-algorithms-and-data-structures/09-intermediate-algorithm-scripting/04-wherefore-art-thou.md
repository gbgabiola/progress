# [Intermediate Algorithm Scripting: Wherefore art thou](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou)

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is `[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]`, and the second argument is `{ last: "Capulet" }`, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Write your own code.

## Setup
```js
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
```

## Solution 1
```js
// Basic Solution: Using for loops, filter() and hasOwnProperty()
function whatIsInAName(collection, source) {
  const srcKeys = Object.keys(source);
  
  return collection.filter(function(obj) {
    for (let i = 0; i < srcKeys.length; i++) {
      if (!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); // {first: "Tybalt", last: "Capulet"}
```

## Solution 2
```js
// Intermediate Solution: Using filter(),  every(), and hasOwnProperty()
function whatIsInAName(collection, source) {
  const srcKeys = Object.keys(source);
  
  return collection.filter(function(obj) {
    return srcKeys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); // {first: "Tybalt", last: "Capulet"}
```

## Solution 3
```js
// Advanced Solution: Using filter(), reduce(), and hasOwnProperty()
function whatIsInAName(collection, source) {
  const srcKeys = Object.keys(source);
  
  return collection.filter(function(obj) {
    return srcKeys
    .map(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    })
    .reduce(function(a, b) {
      return a && b;
    });
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); // {first: "Tybalt", last: "Capulet"}
```