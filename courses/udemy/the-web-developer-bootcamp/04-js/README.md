# JavaScript

## Table of Contents <!-- omit in toc -->

- [Topics](#topics)
- [Basics](#basics)
- [Strings and More](#strings-and-more)
- [Decision Making](#decision-making)
- [Arrays](#arrays)
- [Object Literals](#object-literals)


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
- **Important**
  - _Random Numbers and the Math Object_
  - Concat, IndexOf
  - _Slice & Splice_
  - Multi Dimensional Arrays
- **Nice To Have**


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
