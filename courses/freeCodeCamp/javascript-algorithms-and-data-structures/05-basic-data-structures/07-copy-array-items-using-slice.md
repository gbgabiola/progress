# [Basic Data Structures: Copy Array Items Using slice()](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-data-structures/copy-array-items-using-slice)

The next method we will cover is `slice()`. `slice()`, rather than modifying an array, copies, or _extracts_, a given number of elements to a new array, leaving the array it is called upon untouched. `slice()` takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index). Consider this:

```js
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']
```

In effect, we have created a new array by extracting elements from an existing array.

---

We have defined a function, `forecast`, that takes an array as an argument. Modify the function using `slice()` to extract information from the argument array and return a new array that contains the elements `'warm'` and `'sunny'`.

## Setup
```js
function forecast(arr) {
  // change code below this line
  
  return arr;
}

// do not change code below this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
```

## Solution
```js
function forecast(arr) {
  
  return arr.slice(2, 4);;
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'])); // (2) ["warm", "sunny"]
```