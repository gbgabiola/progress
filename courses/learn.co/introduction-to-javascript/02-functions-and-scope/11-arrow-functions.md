# JavaScript Arrow Functions

## Objectives

1. Practice writing arrow functions
2. Explain how arrow functions differ from "normal" functions
3. Describe situations where arrow functions come in handy
4. Describe situations where we might not want to use arrow functions

## Function, function, function, function, function

You're familiar by now with the standard `function foo() { return 'bar' }` style of functions in JavaScript. What if I told you that ES6 introduced a new way of writing functions that's terser and more readable? (It has a few other perks that we'll go over, too.)

>Note: ES6 is the newest version of JavaScript to be released. It offers some new syntax, but it is not yet supported by all browsers.

Would you believe me? Have you seen these guys:

```js
var arrowFunction = () => {
  return 'Arrow functions are great!'
};
```

(If you've been checking out the test files in our labs, you've seen them :))

These are called [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) in reference to the little `=>` that characterizes them.

You can call arrow functions just like regular functions.

```js
var arrowFunction = () => {
  console.log('I was called!')
}

var regularFunction = function() {
  console.log('I was called, too!')
}

arrowFunction() // 'I was called!'
regularFunction() // 'I was called, too!'
```

And they take arguments in a similar way:

```js
var arrowFunction = (arg1, arg2) => {
  console.log(arg1, arg2)
}

arrowFunction('Hey,', 'you!') // 'Hey, you!'
```

If an arrow function accepts exactly one argument, you can omit the parentheses.

```js
var arrowFunction = myArg => {
  console.log(myArg)
}

arrowFunction('Hi!') // 'Hi!'
```

In a greater divergence from regular functions, arrow functions give us implicit returns.

```js
var square = n => n * n

square(3) // 9
square(4) // 16
```

Just omit the curly braces from around the function body.

## Anonymity's the Name of the Game

All arrow functions are anonymous. Regular functions take their names from their identifiers.

```js
function iHaveAName() {}

iHaveAName.name // 'iHaveAName'
```

But arrow functions don't have identifiers, so they're always anonymous.

```js
(() => {}).name // ''
```

## Use Cases

We've talked about functions returning functions, and arrow functions provide a nice, terse way of performing such a task.

```js
function nester() {
  return () => {
    return () => {
      return 'Found me!'
    }
  }
}

nester()()() // 'Found me!'
```

You'd agree that that's more readable than the alternative, right?

```js
function nester() {
  return function() {
    return function() {
      return 'Found me!'
    }
  }
}

nester()()() // 'Found me!'
```

(It also takes way fewer keystrokes to type, which seems like it's not a big deal now, but trust us when we say that you'll come to appreciate syntactical brevity in programming.)

Sometimes you might encounter a library or function that takes a function as an argument — arrow functions are great here, too!

```js
[1, 2, 3, 4].map(n => n * n).reduce((sum, n) => (sum + n), 0) // 30
```

Imagine writing that out with `function` all over the place!

```js
[1, 2, 3, 4].map(function(n) {
  return n * n
}).reduce(function(sum, n) {
  return sum + n
}, 0)
```

Gross.

## Resources

- [MDN: Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)