# [ES6: Use getters and setters to Control Access to an Object](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/use-getters-and-setters-to-control-access-to-an-object)

You can obtain values from an object, and set a value of a property within an object.

These are classically called _getters_ and _setters_.

Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.

Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.

```js
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer(){
    return this._author;
  }
  // setter
  set writer(updatedAuthor){
    this._author = updatedAuthor;
  }
}
const lol = new Book('anonymous');
console.log(lol.writer);  // anonymous
lol.writer = 'wut';
console.log(lol.writer);  // wut
```

Notice the syntax we are using to invoke the getter and setter - as if they are not even functions.

Getters and setters are important, because they hide internal implementation details.

---

Use `class` keyword to create a Thermostat class. The constructor accepts Fahrenheit temperature.

Now create `getter` and `setter` in the class, to obtain the temperature in Celsius scale.

Remember that `C = 5/9 * (F - 32)` and `F = C * 9.0 / 5 + 32`, where F is the value of temperature in Fahrenheit scale, and C is the value of the same temperature in Celsius scale

Note

When you implement this, you would be tracking the temperature inside the class in one scale - either Fahrenheit or Celsius.

This is the power of getter or setter - you are creating an API for another user, who would get the correct result, no matter which one you track.

In other words, you are abstracting implementation details from the consumer.

## Setup
```js
function makeClass() {
  "use strict";
  /* Alter code below this line */

  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
```

## Solution
```js
function makeClass() {
  "use strict";
  
  class Thermostat {
    constructor(fahrenheit) {
      this._fahrenheit = fahrenheit;
    }
    get temperature() {
      return this._fahrenheit;
    }
    set temperature(celcius) {
      this._fahrenheit = celcius;
    }
  }
  
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
```

## Solution 2
```js
class Thermostat{
  constructor(fahrenheit){
    this.celsius = 5 / 9 * (fahrenheit - 32);
  }
  get temperature(){
    return this.celsius;
  }
  set temperature(updateTemp){
    this.celsius = updateTemp;
  }
}
```