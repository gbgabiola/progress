# [Functional Programming: Implement the filter Method on a Prototype](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/implement-the-filter-method-on-a-prototype)

It would teach us a lot about the `filter` method if we try to implement a version of it that behaves exactly like `Array.prototype.filter()`. It can use either a `for` loop or `Array.prototype.forEach()`.

Note: A pure function is allowed to alter local variables defined within its scope, although, it's preferable to avoid that as well.

---

Write your own `Array.prototype.myFilter()`, which should behave exactly like `Array.prototype.filter()`. You may use a `for` loop or the `Array.prototype.forEach()` method.

## Setup
```js
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  // Add your code below this line
  
  // Add your code above this line
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
```

## Solution 1
```js
// Using forEach
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  var newArray = [];
  this.forEach((item) => {
    if (callback(item)) { // callback(item) === true
      newArray.push(item);
    }
  });
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
```

## Solution 2
```js
// Using for loop
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  var newArray = [];
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i])) { // callback(this[i]) === true
      newArray.push(this[i]);
    }
  }
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
```