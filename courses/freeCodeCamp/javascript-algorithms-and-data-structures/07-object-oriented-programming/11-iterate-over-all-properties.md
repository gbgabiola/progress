# [Object Oriented Programming: Iterate Over All Properties](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/iterate-over-all-properties)

You have now seen two kinds of properties: `own` properties and `prototype` properties. `Own` properties are defined directly on the object instance itself. And `prototype` properties are defined on the `prototype`.

```js
function Bird(name) {
  this.name = name; //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");
```

Here is how you add `duck’s own` properties to the array `ownProps` and `prototype` properties to the array `prototypeProps`:

```js
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps); // prints ["name"]
console.log(prototypeProps); // prints ["numLegs"]
```

---

Add all of the `own` properties of `beagle` to the array `ownProps`. Add all of the `prototype` properties of `Dog` to the array `prototypeProps`.

## Setup
```js
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Add your code below this line 
```

## Solution
```js
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property)
  } else {
    prototypeProps.push(property);
  }
}
```