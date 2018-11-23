# [ES6: Write Concise Object Literal Declarations Using Simple Fields](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/write-concise-object-literal-declarations-using-simple-fields)

ES6 adds some nice support for easily defining object literals.

Consider the following code:

```js
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
```

`getMousePosition` is a simple function that returns an object containing two fields.

ES6 provides the syntactic sugar to eliminate the redundancy of having to write `x: x`. You can simply write `x` once, and it will be converted to `x: x` (or something equivalent) under the hood.

Here is the same function from above rewritten to use this new syntax:

```js
const getMousePosition = (x, y) => ({ x, y });
```

---

Use simple fields with object literals to create and return a `Person` object.

## Setup
```js
const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
```

## Solution
```js
const createPerson = (name, age, gender) => {
  "use strict";
  
  return {
    name,
    age,
    gender
  };
  
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // {name: "Zodiac Hasbro", age: 56, gender: "male"}
```