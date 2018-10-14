# Hoisting

## Objectives
- Explain what hoisting is
- Explain why hoisting is important to remember

## What Is Hoisting

JavaScript has a well-intentioned trick that can often lead to trouble (and nowadays, even when the trick is used well, it can make code less readable). Here's the gist:

```js
// When we declare and assign a variable with `var`

var myVariable = 1;

// JavaScript actually treats it as a separate declaration and assignment:

var myVariable;
myVariable = 1;

// Here's the thing: JavaScript *hoists* variables like this to the _top_ of the file.
// So if we have a long file like this

var doSomethingComplicated = function() {
  // complicated stuff happening in here...
  // takes
  // a
  // lot
  // of
  // lines
  // of
  // code
}

var myVariable = 1;


// JavaScript actually interprets the file like

var doSomethingComplicated, myVariable;

doSomethingComplicated = function() {
  // ...
}

myVariable = 1
```

We call this process **hoisting**. For all intents and purposes, hoisting applies primarily to variables declared with `var` and to function declarations. Variables declared with `let` and `const` are _technically_ hoisted, but they cannot be referenced until they're assigned. MDN offers a great explanation:

> In ECMAScript 2015, `let` [and `const`] will hoist the variable to the top of the block. However, referencing the variable in the block before the variable declaration results in a ReferenceError. The variable is in a "temporal dead zone" from the start of the block until the declaration is processed.
> [MDN - let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone_and_errors_with_let)

## Variable Hoisting

While talking about hoisting, it's important to remember that JavaScript has function-level scope, which means that functions have access to variables that are defined outside of it, but any variables defined inside of a function are not accessible to the outside.

```js
function myFunction(){
  console.log(word)
  var word = "cake";
}
```

Before reading on, what do you think the above will print? What did we say happens to variables in the previous section?

Ready?

Are you sure?

It would print out `undefined`. That's because variable hoisting just raises the **variable declaration**. JavaScript reads the above code like this:

```js
function myFunction(){
  var word;
  console.log(word);
  word = "cake";
}
```

We see `undefined` printed in the console because JavaScript reads the variable as declared, but not defined.

To put this another way, we can **declare** the variable `word` simply by writing `var word;`. Its initial value is `undefined`. We can then **assign** a value to the variable by writing `word = "cake";`. In this way, JavaScript lets us split _declaration_ and _assignment_ into two different steps:

```js
var word;
word = "cake";
```

Or we can perform them both on the same line:

```js
var word = "cake";
```

Under the hood, JavaScript is always hoisting the _declaration_ to the top of the current scope and then performing the _assignment_ at the appropriate line.

Let's start with an example of JavaScript accessing a variable inside a function that was defined outside:

```js
var snack = "granola bar";
function eat(){
  console.log(snack);
}
eat();
// prints out "granola bar" and returns undefined
```

Let's modify the function a little bit:
```js
var snack = "granola bar";
function eat(){
  console.log(snack);
  var snack = "snickers";
}
eat();
// prints out undefined, returns undefined
console.log(snack);
// prints out "granola bar"
```

In the example above, we first define the variable `snack` to store `"granola bar"`. Then we define a function `eat`. Inside the function, we `console.log(snack)` (which we would expect to print out `"granola bar"` because of the variable definition outside the function). The following line, we define `snack` to store `"snickers"`.

JavaScript reads our function like this:

```js
function eat(){
  var snack;
  console.log(snack);
  snack = "snickers";
}
```

So our function will print out to the console `undefined`. Our function returns `undefined` because we have not explicitly given it a return value.

Outside the function, we call `console.log(snack)` which prints out `"granola bar"` because variables defined inside a function are scoped to that function.

Variable hoisting is important to remember because you want to define all variables at the top of the scope in which you need them. Define all variables at the top of your functions.

## Function Hoisting

### Function Declarations

Let's take the following example:

```js
eat();

function eat(){
  console.log("time to eat cake!")
}
```

The above JavaScript executes correctly. The function prints out `"time to eat cake!"`. That's because JavaScript hoists the **entire function** to the top of its scope, which in this case is the main scope of the program. JavaScript translates the above code to the following:

```js
function eat(){
  console.log("time to eat cake!")
}
eat();
```

### Function Expressions
Function expressions are handled differently than function declarations. Let's take an example:

```js
eat();

var eat = function(){
  console.log("time to eat cake!");
}
```

The above code errors with `Uncaught TypeError: eat is not a function`. This is because the variable declaration for `eat` is hoisted, but not its assignment. JavaScript reads the above code like this:

```js
var eat;
eat();
eat = function(){
  console.log("time to eat cake!");
}
```

## Instructions

Make sure you run the tests in `test/hoisting-test.js`. You'll be coding your solutions in `hoisting.js`. You'll find a bunch of pre-written broken code. Your job is to fix the code to pass the tests.

- Use your knowledge of variable hoisting to get the function `callMe` to return `"maybe"`.

- Use your function hoisting expertise to fix the function `thisIsCrazy` to `console.log` the string `"hey!!!"`.

- Fix the code inside the function `sayMyName` to get the function to print out `"Kristin"` to the console.


## Resources

- [Jon Grover's Hoisting Video](https://www.youtube.com/watch?v=nmlJIOnahBA&list=PLj148bJp5wiwI0291sD0vdXiwn1u6aQkc&index=3)
- [Adequately Good](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)
- [Tuts Plus](http://code.tutsplus.com/tutorials/javascript-hoisting-explained--net-15092)

## Solution

```js
function callMe(){
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  var lyric = "maybe";
  return lyric;
}

function crazy(){
  var thisIsCrazy = function (){
    console.log("hey!!!")
  }
  thisIsCrazy();
}

function sayMyName() {
  var name = "Cricky";

  function sayMy() {
    var name = "Kristin";
    console.log(name);
  }
  sayMy();
}
```