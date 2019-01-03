# [Functional Programming: Implement map on a Prototype](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/implement-map-on-a-prototype)

As you have seen from applying `Array.prototype.map()`, or simply `map()` earlier, the `map` method returns an array of the same length as the one it was called on. It also doesn't alter the original array, as long as its callback function doesn't.

In other words, `map` is a pure function, and its output depends solely on its inputs. Plus, it takes another function as its argument.

It would teach us a lot about `map` to try to implement a version of it that behaves exactly like the `Array.prototype.map()` with a `for` loop or `Array.prototype.forEach()`.

Note: A pure function is allowed to alter local variables defined within its scope, although, it's preferable to avoid that as well.

---

Write your own `Array.prototype.myMap()`, which should behave exactly like `Array.prototype.map()`. You may use a `for` loop or the `forEach` method.

## Setup
```js
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line

  // Add your code above this line
  return newArray;
};

var new_s = s.myMap(function(item){
  return item * 2;
});
```

## Solution 1
```js
// Using forEach
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  this.forEach(item => newArray.push(callback(item)));
  return newArray;
};

var new_s = s.myMap(function(item){
  return item * 2;
});

// 46
// 46,130
// 46,130,196
// 46,130,196,10
```

## Solution 2
```js
// Using for loop
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }

  // const arrayCopy = this.slice();
  // for (let i = 0; i < arrayCopy.length; i++) {
  //   newArray[i] = (callback(arrayCopy[i]));
  // }
  return newArray;
};

var new_s = s.myMap(function(item){
  return item * 2;
});

// 46
// 46,130
// 46,130,196
// 46,130,196,10
```