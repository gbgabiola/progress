# JavaScript

## Table of Contents <!-- omit in toc -->

- [Topics](#topics)
- [Basics](#basics)
- [Strings and More](#strings-and-more)


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
- **Important**
  - _Random Numbers and the Math Object_
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
