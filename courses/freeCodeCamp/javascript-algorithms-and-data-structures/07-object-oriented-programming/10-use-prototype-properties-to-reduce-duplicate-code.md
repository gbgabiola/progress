# [Object Oriented Programming: Use Prototype Properties to Reduce Duplicate Code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/use-prototype-properties-to-reduce-duplicate-code)

Since `numLegs` will probably have the same value for all instances of `Bird`, you essentially have a duplicated variable `numLegs` inside each `Bird` instance.

This may not be an issue when there are only two instances, but imagine if there are millions of instances. That would be a lot of duplicated variables.

A better way is to use `Bird's prototype`. The `prototype` is an object that is shared among ALL instances of `Bird`. Here's how to add `numLegs` to the `Bird prototype`:

```js
Bird.prototype.numLegs = 2;
```

Now all instances of `Bird` have the `numLegs` property.

```js
console.log(duck.numLegs); // prints 2
console.log(canary.numLegs); // prints 2
```

Since all instances automatically have the properties on the `prototype`, think of a `prototype` as a "recipe" for creating objects.

Note that the `prototype` for `duck` and `canary` is part of the `Bird` constructor as `Bird.prototype`. Nearly every object in JavaScript has a `prototype` property which is part of the constructor function that created it.

---

Add a `numLegs` property to the `prototype` of `Dog`

## Setup
```js
function Dog(name) {
  this.name = name;
}

// Add your code above this line
let beagle = new Dog("Snoopy");
```

## Solution
```js
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");
```