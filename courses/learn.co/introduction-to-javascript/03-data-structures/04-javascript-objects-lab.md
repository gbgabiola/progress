# JavaScript Objects Lab

## Overview

In this lab, we'll create objects and perform various operations on them. 

## Instructions

Be sure to run the tests to get a feel for the types of problems this lab is
asking you to solve. In particular, you'll need to define a `recipes` object and
then apply certain updates (destructively and non-destructively) in various
functions.

Good luck!

**HINT**: You might find `deleteFromObjectByKey` to be a bit hard to write non-destructively. Think about how we learned to use `Object.assign`. What happens if we do

```js
var obj = { foo: 'bar' }

var newObj = Object.assign({}, obj)

newObj // { foo: 'bar' }

delete newObj.foo // true

newObj // {}

obj // { foo: 'bar' }
```

Hmmmmm...

## Resources

- [MDN: Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

---

## Solution

```js
var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  const newObject = Object.assign({}, object)
  delete newObject[key];
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
```