# JavaScript Basics: Functions

## Objectives
- Write function declarations and function expressions
- Explain the difference between _console.log_ and _return_
- Define function that takes multiple arguments

**Functions** let us wrap bits of code up into REUSABLE packages. They are one of the building blocks of JS.


```js
// Declare a function first
function doSomething() {
  console.log("HELLO WORLD");
}

// Then we call it
doSomething();
doSomething();
doSomething();
```

#### Arguments
- Often we write functions that takes input
- Functions can have as many arguments as needed
```js
function square(num) {
  console.log(num * num);
}

// Now when we call square we need to pass in a value
sqaure(10); // print 100
sqaure(3); // print 9
sqaure(4); // print 16
```

#### The `return` Keyword
- Often we want a function to send back an output value
- We use the _return_ keyword to output a value from a function
- The _return_ keyword stops the execution of a function

#### Function Declaration vs. Function Expression
```js
// function declaration
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// function expression
var capitalize = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
```

#### Scope
- Scope is the **context** that code is executed in
- Every functions has its own scope and they're not shared between functions

#### Higher Order Functions
- Higher Order Functions are functions that either take a function as argument or they return another function

```js
setInterval(anotherFunction, interval)
```

## Learned
- Understand why we use functions
- Define a function with or without arguments
- Return a value from a function
- Use function declaration and function expression
- Functions Scope and Global Scope
- Higher Order Functions