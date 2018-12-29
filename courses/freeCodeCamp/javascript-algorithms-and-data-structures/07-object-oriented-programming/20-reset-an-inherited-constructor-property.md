# [Object Oriented Programming: Reset an Inherited Constructor Property](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/reset-an-inherited-constructor-property)

When an object inherits its `prototype` from another object, it also inherits the `supertype`'s constructor property.

Here's an example:

```js
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor // function Animal(){...}
```

But `duck` and all instances of `Bird` should show that they were constructed by `Bird` and not `Animal`. To do so, you can manually set `Bird's` constructor property to the `Bird` object:

```js
Bird.prototype.constructor = Bird;
duck.constructor // function Bird(){...}
```

---

Fix the code so `duck.constructor` and `beagle.constructor` return their respective constructors.

## Setup
```js
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Add your code below this line

let duck = new Bird();
let beagle = new Dog();
```

## Solution
```js
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();
```