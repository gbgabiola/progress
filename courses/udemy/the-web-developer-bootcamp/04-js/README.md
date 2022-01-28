# JavaScript

## Table of Contents <!-- omit in toc -->

- [Topics](#topics)
- [Basics](#basics)
- [Strings and More](#strings-and-more)
- [Decision Making](#decision-making)
- [Arrays](#arrays)
- [Object Literals](#object-literals)
- [Repeating Stuff With Loops](#repeating-stuff-with-loops)
- [Functions](#functions)
- [Callbacks & Array Methods](#callbacks--array-methods)


## Topics

- **Crucial**
  - Understanding the role of JavaScript
  - JavaScript Numbers
  - Variables & Let
  - Const
  - Booleans
  - Variable Naming
  - String Basics
  - Indices and Length
  - Undefined & Null
  - _String Methods_
  - String Template Literals
  - Comparison Operators
  - Running JavaScript From a File
  - _Conditionals: If, Else-If, and Else_
  - Truth-y and False-y Values
  - _Logical AND_
  - _Logical OR_
  - _Logical NOT_
  - _Array Basics - Creating and Updating_
  - Push & Pop
  - Shift & Unshift
  - _Creating and Working With Object Literals_
  - _Nesting Arrays and Objects_
  - **For Loops**
  - _While Loops_
  - The Break Keyword
  - For...Of Loops
  - **Iterating Arrays**
  - _Working With Arguments_
  - _Function Return Values_
  - _Defining Functions_
  - **Functions Exercises**
  - _Function Scope_
  - _Block Scope_
  - _Lexical Scope_
  - Function Expressions
  - **Higher Order Functions**
  - _ForEach_
  - _Map_
  - _Arrow Functions_
- **Important**
  - _Random Numbers and the Math Object_
  - Concat, IndexOf
  - _Slice & Splice_
  - Multi Dimensional Arrays
  - **Nested Loops**
  - **Returning Functions**
  - **The Keyword "this"**
  - _Adding Methods To Objects_
  - _Filter_
- **Nice To Have**
  - Iterating Objects
  - _Some & Every_
  - **Reduce**


## Basics

- **Primitive Types**
  - Number
  - String
  - Boolean
  - Null
  - Undefined
  - Symbol
  - BigInt
- Chrome developer _console_ is the easiest place to write and run the code
  - REPL (Read, Evaluate, Print, Loop)
- **Number**
  - JS has _one_ number type
  - Positive numbers
  - Negative numbers
  - Whole numbers (integers)
  - Decimal numbers
  - Math operations
    - PEMDAS
      - Parentheses
      - Exponents `**`
      - Multiplication `*`
      - Division `/`
      - Addition `+`
      - Subtraction `-`
    - Modulo `%` (remainder)
  - `NaN` (Not-A-Number)
- **Variables** are like labels for values
  - We can store a value and give it a name so we can:
    - Refer back to it later
    - Use the value to do...stuff
    - Or change it later
  - basic syntax:
    - `let someName = value;`
    - `let year = 1985;`
  - recall values
  - Naming and Conventions
- `const` works just like `let`, except you CANNOT change the value
- **Booleans**
  - true or false


## Strings and More

- **Strings**
  - Strings of characters
  - One of the primitive types
  - Represent _text_ and must be wrapped in quotes
  - Double or single quotes
- Indices & Length
  - Each character has has a corresponding index (a positional number)
- **String Methods**
  - Methods are built-in actions we can perform with individual strings
  - Help us to:
    - Searching within a string
    - Replacing part of a string
    - Changing the casing of a string
  - Syntax:
    - `thing.method()`
    - `"hello".length`
  - `"genesis".toUpperCase()` -> `GENESIS`
  - `'   Hello there!      '.trim()` -> `Hello there!`
- **String Methods with Arguments**
  - Syntax: `thing.method(arg)`
  - Some methods accept _arguments_ that modify their behavior
  - Think of them as inputs that we can pass in
  - We pass these arguments inside of the parentheses
  - `str.indexOf(char)` returns the first occurent of the specified value
  - `str.slice(beginIndex[, endIndex])` extract a portion of a string, then returns a new string
  - `str.replace(stringToReplace, stringToPlace)` can use RegExp to match/replace a pattern 
  - `str.repeat(count)`
- **String Template Literals**
  - Allows embedded expressions, which will be evaluated and then turned into a resulting string
  - Use back-tick key (usually above the tab key)
- **Undefined & Null**
  - Null
    - Intentional absence of any "value"
    - Must be assigned
  - Undefined
    - Variables that do not have an assigned value are undefined
- **Math Object** contains properties and methods for mathematical constants and functions
  - `Math.PI`
  - `Math.floor(x)`
  - `Math.ceil(x)`
  - `Math.random()` gives us a random decimal between 0 and 1 (non-inclusive)


## Decision Making

- **Comparison Operators**
  - `>` greater than
  - `<` less than
  - `>=` greater than or equal to
  - `<=` less than or equal to
  - `==` equality
    - Checks for equality of value, but not equality of type
    - It coerces both values to the same type and then compares them
    - This can lead to some unexpected results
  - `!=` not equal
  - `===` strict equality
    - Checks for equality of value and type
  - `!==` strict not-equality
- **Console, Alert, & Prompt**
  - `console.log()`
  - `alert()`
  - `prompt()`
- **Conditionals**
  - **If Statement** only runs code if given condition is true
  - **Else If** only runs if the first condition is false
  - **Else** only run if nothing else was true
  - **Nesting conditionals** are conditionals inside conditionals
  - **Switch**
    - Switch statement is another control-flow statement that can replace multiple if statements
- **Truthy and Falsy Values**
  - Falsy values:
    - false
    - 0
    - "" (empty string)
    - null
    - undefined
    - NaN
  - Everything else is truthy!
- **Logical Operators**
  - **AND** (`&&`) both sides must be true, for the entire thing to be true
  - **OR** (`||`) if one side is true, the entire thing is true
  - **NOT** (`!`) expression return true if expression is false 


## Arrays

- **Arrays**
  - Ordered collections of values
    - List of comments on IG
    - Collection of levels in a game
    - Songs in a playlist
  - First Data Structure
  - Array of strings, numbers and mixed
  - Arrays are indexed
    - each element has a corresponding index (counting starts at 0)
  - The values can change as long as the reference remains the same
  - Nested arrays lets us store arrays inside other arrays
- **Array Methods**
  - `push(value)` adds value to the END of an array
  - `pop()` removes and returns last value in array
  - `unshift(value)` adds value to START of an array
  - `shift()` removes and returns first element in an array
  - `concat()` merges arrays
  - `includes()` looks for a value
  - `indexOf()` returns the first index where element can be found, else -1
  - `join()` creates a string from an array
  - `reverse()` reverses an array 
  - `slice()` copies a portion of an array
  - `splice()` removes/replaces elements
  - `sort()` sorts an array


## Object Literals

- **Objects**
  - Second Data Structure
  - Collections of _properties_
  - **Properties** are a key-value pair
    - Can change as long as the reference remains the same
  - Rather than accessing data using an index we use custom keys
  - **Valid Keys** - All keys are converted to strings
    - Except for Symbols


## Repeating Stuff With Loops

- Loops allow us to repeat code
  - Print `'hello'` 10 times
  - Sum all numbers in an array
- There are multiple types:
  - for loop
  - while loop
  - for...of loop
  - for...in loop
- **For Loops**
  ```js
  for ([initialExpression]; [conditional]; [incrementExpression]) {
    ...
  }
  ```
- **Looping Over Arrays**
  - Start at index 0 and continue looping until last index (`length - 1`)
- **Nested Loops** are loops inside another loop
- **While Loops** continues to run as
long as the condition is true
  ```js
  [initialExpression]
  while ([conditional]) {
    ...
    [incrementExpression]
  }
  ```
- **For...Of Loops** is an easy way of iterating over arrays (or other iterable objects)
  ```js
  for (variable of iterable) {
    statement
  }
  ```
  - IE not supported
  - Nested For...Of
- **For...In Loops**
  - Iterates over all enumerable properties of an object


## Functions

- **Functions** are reusable procedures
  - Allow us to write reusable, modular code
  - We define a "chunk" of code that we can then execute at a later point
  - Used all ALL THE TIME
- 2 Step Process
  - Define
    ```js
    function funcName() {
      // do something
    }
    ```
  - Run
    ```js
    function();
    ```
- **Arguments** are inputs we accept from functions
  - Function accepts multiple arguments
- **Return** statement
  - We can store built-in methods **return** values in a variable
  - Ends function execution AND specifies the value to be returned by that function
- **Scope**
  - Variable "visibility"
  - The location where a variable is defined dictates _where we have access to that variable_
  - **Function Scope**
    - Variables in a function are only accessible to that function
  - **Block Scope**
    - All that have curly braces except functions
    - Variables inside a block are only accessible to that block
  - **Lexical Scope**
    - An inner function nested inside of parent function has access to the variables/scope defined in the outer/parent function inside of inner function
- **Function Expressions** are another way of defining a function
  - Store an anonymous function in a variable
  - Execute the name of a variable which
  - Techinically functions are objects behind the scenes
    - Every function has the option of having a name
- **Higher Order Functions** are functions that operate on/with other functions
  - Accept other functions as arguments
  - Return a function
    - Factory function is a function that makes a function for us
- **Methods** are functions added as properties on objects
  - Every method is a function, but not every function is a method
  - We can add a function as a property value
- **`this`** in Methods
  - Access other properties on the same object
  - Value of `this` depends on the invocation context of the function it is used in
  - `window` is a top level object in JS
- **Try/Catch**
  - Catch errors and preventing them from breaking or stopping the execution of our code
    - If there is an error grab it and stop it from propagating outwards and crashing everything


## Callbacks & Array Methods

- Passing function to another function
- **ForEach**
  - Accepts a callback function
  - Calls the function once per element in the array
  - Do something once per element in an array
  - Used a lot before the released of `for...of` loop
- **Map**
  - Creates a new array with the results of calling a callback on every element in the array
- **Arrow Functions**
  - "Syntactically compact alternative" to a regular function expression
  - Newer and shorter syntax for defining function expressions
  - Allows us write functions without writing the keyword function
  - We can have empty parens if there's no parameters/arguments
  - Parens are optional when only have single parameter/argument
  - **Implicit Returns** only work if only have one expression in the function body
- **setTimeout and setInterval**
  - `setTimeout` accepts callback and number of milliseconds
    - delaying
    - waiting
    - pausing execution
    - postponing execution for later dates
    - scheduling something
  - `setInterval` infinitely repeat something at an interval
    - accepts callback and number of milliseconds
    - `clearInterval` is needed to stop the interval
- **Filter** creates a _new_ array with all elements that pass the test implemented by the provided function
- **Every** tests whether _all_ elements in the array pass the provided function and returns a Boolean value
- **Some** returns true if _any_ of the array elements pass the test function
- **Reduce** executes a reducer function on each element of the array, _resulting in a single value_
  - Accepts two parameters which gonna be the 1st argument
    - Accumulator or total
    - Current Value
  - 2nd argument can be set as initial value of accumulator
- **Arrow Functions & '`this`'**
  - Keyword '`this`' values behaves differently in arrow functions
  - Keyword '`this`' in arrow functions refers to the value of '`this`' when the function is created
