# [Object Oriented Programming: Use Dot Notation to Access the Properties of an Object](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/use-dot-notation-to-access-the-properties-of-an-object)

The last challenge created an `object` with various `properties`, now you'll see how to access the values of those `properties`. Here's an example:

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);
// This prints "Aflac" to the console
```

Dot notation is used on the `object` name, `duck`, followed by the name of the `property`, `name`, to access the value of "Aflac".

---

Print both `properties` of the `dog` object below to your console.

## Setup
```js
let dog = {
  name: "Spot",
  numLegs: 4
};
// Add your code below this line
```

## Solution
```js
let dog = {
  name: "Spot",
  numLegs: 4
};

console.log(dog.name, dog.numLegs); // Spot, 4
```