# Introduction to `Array.prototype.forEach()`

## Objectives
1. Explain why we use `.forEach()`.
2. Explain how `.forEach()` works.

## The weaknesses of `for` loops

Up until now, we've been doing our iterating with `for` loops. These are great for one-off tasks, and they're reasonably explicit: "I'm incrementing a variable, `i`, from `0` to `myArray.length - 1` and using `i` to access the elements of the array."

```js
var evens = [0, 2, 4, 6, 8, 10];

for (var i = 0; i < evens.length; i++) {
  console.log(`${evens[i]} is not odd!`);
}
```

But wouldn't it be nice if there were a way to access the elements directly, without having to type out `evens[i]`?

Well, it's our lucky day!

Follow along in `index.js` — you can run your code by copying it into your browser's console.

## `.forEach()`

Every array in JavaScript comes with the `.forEach()` method.

This method lets us iterate over every element of the array directly, without writing out a whole `for` loop. Let's rewrite the above example using `.forEach()`:

```js
var evens = [0, 2, 4, 6, 8, 10];

evens.forEach(even => {
  console.log(`${even} is not odd!`);
});
```

Whoa! It's so much shorter! Even though this is just a tiny piece of code, let's make sure we understand what's happening.

On the array `evens` we invoke the method `.forEach()` by typing `evens.forEach()`. The `.` tells JavaScript that we're going to access some _property_ of the `evens` array. This property, `forEach`, happens to be a function, which, as we know, we invoke with parentheses around its arguments. `.forEach()` requires one argument, a function.

Whaaaaat? Did we read that right? We can pass a _function_ as an argument? You bet your boots we can! In the above example, we pass an ES6 arrow function as the argument to `evens.forEach()`:

```js
even => {
  console.log(`${even} is not odd!`);
}
```

The function passed to `.forEach()` accepts up to three arguments: the current element in the array upon which `.forEach()` was called, the index of that element in the array, and the array itself.

Let's add a second (`index`) and third (`array`) parameter to the function and step through it with the debugger to get a feel for all three arguments.

```js
var evens = [0, 2, 4, 6, 8, 10];

evens.forEach((even, index, array) => {
  debugger;
  console.log(`${even} is not odd!`);
});
```

As a reminder, `debugger` is globally available and opens up the debug console in your browser when it's evaluated. Clicking the arrow (<img width="75" alt="step-through arrow" src="https://user-images.githubusercontent.com/17556281/27013165-b7852f78-4eac-11e7-80f7-2a97a40633b3.png">) or pressing the `F10` key will let you step through the function calls and inspect the three arguments that `.forEach()` passes to the function as it iterates over the `evens` array. On each pass through the `.forEach()` loop, the `even`, `index`, and `array` variables contain the following values:

| Pass # | `even` | `index` |       `array`       |
|:------:|:------:|:-------:|:-------------------:|
|   1    |   0    |    0    | [0, 2, 4, 6, 8, 10] |
|   2    |   2    |    1    | [0, 2, 4, 6, 8, 10] |
|   3    |   4    |    2    | [0, 2, 4, 6, 8, 10] |
|   4    |   6    |    3    | [0, 2, 4, 6, 8, 10] |
|   5    |   8    |    4    | [0, 2, 4, 6, 8, 10] |
|   6    |   10   |    5    | [0, 2, 4, 6, 8, 10] |

It's possible to provide the same functionality with a regular `for` loop, but to do so we would have to jump through some hoops that `.forEach()` mercifully abstracts away for us. To replicate `.forEach()` with a `for` loop, we could define the function ahead of time and then invoke it inside of the loop...

```js
var evens = [0, 2, 4, 6, 8, 10];

function evenFn(even, index, array) {
  console.log(`${even} is not odd!`);
}

for (let i = 0; i < evens.length; i++) {
  evenFn(evens[i], i, evens);
}
```

...but that seems like too many extra lines for such a simple operation. `.forEach()` provides a wonderfully compact, readable syntax for invoking a function on every member of an array. It's a powerful tool that makes it easier for us to perform complex operations in just a few lines of code.

## Functions as Arguments
Functions in JavaScript are **first-class objects**, which means we can treat them just as we would numbers, strings, arrays, and other JavaScript objects. Functions "[can be stored in variables, passed as arguments to functions, created within functions and returned from functions](http://wiki.c2.com/?FirstClass)." Often, we will pass a function as an argument to another function so that it can serve as a **callback**, a very powerful concept in functional programming. Essentially, the main function (`mainFn()`) that receives the callback function (`callbackFn()`) as an argument will invoke the passed-in `callbackFn()` at some later point, perhaps waiting until other processes have completed or until data that the `callbackFn()` relies upon becomes available.

Callbacks are a very important concept that you'll employ throughout your JavaScript career. The basic idea is that we define a function but delegate control of _when_ it should be invoked to another function.

For example, take the following function, `square()`, which multiplies the passed-in number by itself and logs out the result:

```js
function square(n) {
  console.log(n * n)
}
```

If we just wanted to square all of the elements in `evens`, we could write `evens.forEach(square)`.

But what if we don't know ahead of time what we want to do to the elements in our `evens` array? We can make our little program even more generic by wrapping it all up in a function that accepts another function (a callback) as an argument:

```js
var evens = [0, 2, 4, 6, 8, 10];

function doToEvens(callback) {
  evens.forEach(callback);
}
```

Now we can pass _any_ function to `doToEvens` and that function will be invoked on every element of the `evens` array!

Let's take it a step farther — what if we don't know beforehand which array we're going to be operating on? We can define a function that accepts two arguments: an array and a callback function to pass to `.forEach()`:

```js
function doToElementsInArray(array, callback) {
  array.forEach(callback);
}
```

Our code is short and sweet, but it's also generic and enormously powerful.

```js
function changeCompletely(element, index, array) {
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
}

var animals = ["dog", "cat", "squirrel"];

doToElementsInArray(animals, changeCompletely);

// log out animals -- pretty cool, right?
console.log(animals);
```

If you've been following along in `index.js`, you should now be able to run `learn` — all of the tests should pass!

## Resources
- [`Array.prototype.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

---

## Solution

```js
function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

function changeCompletely(element, index, array) {
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
}

var animals = ["dog", "cat", "squirrel"];

doToElementsInArray(animals, changeCompletely);

console.log(animals);
```