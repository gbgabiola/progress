# JavaScript

## Goal

- The Fundamentals of Code
- Starting code with alerts and prompts.
- Understand Variables and Data Types in JavaScript
- Variable naming in JS
- Working with strings and numbers
- Randomisation and logical operators
- Loops, collections and Conditionals.
- Functions and invocation patterns
- Discussion of ECMAScripts
- Intermediate JavaScript
- Learn to use JS Expressions, Operators, Statements and Declarations
- Object-Oriented Programming
- JS Objects and Prototypes
- `This`, Scope and Closures
- Objects and Prototypes
- Refactoring and Debugging


## Introduction to Javascript

**JavaScript** is the programming language of the web, created by Brendan Eich in 10 days.

Interpreted vs. Compiled

- **Interpreted languages** was seen like a toy languages, they were not so powerful, very slow, and execute instructions line by line.
- **Compiled languages** was seen as the most serious languages and end with a very fast running programs.

| Interpreted | Compiled |
| :---------- | :------: |
| JavaScript  | Java
| Python      | C/C++
| Ruby        | Swift

Traditionally javaScript is used as _Front-End_ language and meant for adding animations, user interaction, but now JavaScript can be see in frameworks ranging from _Front-End_ to _Back-End_ and everything in between.

**JavaScript** is the only language that is supported by all the major browsers.

### JavaScript Alerts

**`Window.alert()`** or **`alert()`** method displays an alert dialog with the optional specified content and an OK button.

- `alert` is a keyword `function`.
- `'Hello'` is the message we want to show.
- `;` is the end of function.

```js
// English grammar
Say: "hello".

// JavaScript grammar
alert("Hello");
```

### Data Types

- **String** is a sequence of characters used to represent text.
- **Number** is a numeric data type
- **Boolean** is a logical data type that can have only the values `true` or `false`.

### JavaScript Variables

**variable** is a named location for storing a value. That way an unpredictable value can be accessed through a predetermined name.

```js
var myName = "Genesis"
```

- **`var`** is keyword that prompts to create a new container for the value.
- `myName` is a container that holds the value you stored.
- `"Genesis"` is the value you're string to a variable `myName`.

Reassigning value:

```js
var myName = "Genesis";
myName = "John";
```

Storing value from prompt:

```js
var yourName = prompt("What is your name? ");
```

### Naming Convention

Rules for naming variables:

1. Should have a meaningful names
2. Cannot use JavaScript predefined keywords
   - but it contain keywords, E.g `myVar`
3. Cannot begin with a number
   - but variables can contain numbers, E.g `my123`
4. Cannot contain spaces on variables
5. Can only contain letters, numbers, `$` and `_`, no other symbols are valid
6. Use camelCase notation, E.g `myName`

### String Concatenation

Combine strings together using plus (`+`) sign.

```js
alert("Hello " + "World"); // Hello World
```

### String Lengths

**`length`** property of a String object indicates the length of a string.

```js
var name = "Genesis";
name.length; // 7
```

### Slicing and Extracting Parts of a String

**`slice()`** method extracts a section of a string and returns it as a new string, without modifying the original string.

- **beginIndex**
  - The zero-based index at which to begin extraction.
  - If negative, it is treated as `strLength` + (_beginIndex_) where `strLength` is the length of the string (for example, if _beginIndex_ is `-3` it is treated as `strLength - 3`).
  - If _beginIndex_ is greater than or equal to the length of the string, `slice()` returns an empty string.

- **endIndex**
  - Optional.
  - The zero-based index before which to end extraction.
  - The character at this index will not be included.
  - If _endIndex_ is omitted, `slice()` extracts to the end of the string. If negative, it is treated as `strLength` + _endIndex_ where `strLength` is the length of the string (for example, if _endIndex_ is` -3` it is treated as `strLength - 3`).

### Changing Casing in Text

- **`toUpperCase()`** method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).

  ```js
  str.toUpperCase();
  ```

- **`toLowerCase()`** method returns the calling string value converted to lower case.

  ```js
  str.toLowerCase();
  ```

### Basic Arithmetic

**Arithmetic operators** take numerical values as their operands and return a single numerical value. The standard arithmetic operators are addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`).

- **Addition (`+`)** operator produces the sum of numeric operands or string concatenation.
- **Subtraction (`-`)** operator subtracts the two operands, producing their difference.
- **Division (`/`)** ooperator produces the quotient of its operands where the left operand is the dividend and the right operand is the divisor.
- **Multiplication (`*`)** operator produces the sum of numeric operands or string concatenation.
- **Remainder (`%`)** operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.

  ```js
  1 + 2 // 3
  5 - 3 // 2
  4 / 4 // 1
  2 * 2 // 4
  9 % 6 // 3

  var cost = 3 + 5 * 2 // 13
  var cost = (3 + 5) * 2 // 16
  ```

**Note:**

- **Operator precedence** determines the way in which operators are parsed with respect to each other. Operators with higher precedence become the operands of operators with lower precedence.

### Increment and Decrement Expressions

- **Increment (`++`)** operator increments (adds one to) its operand and returns a value.
  - If used postfix, with operator after operand (for example, x++), then it increments and returns the value before incrementing.
  - If used prefix, with operator before operand (for example, ++x), then it increments and returns the value after incrementing.
- **Decrement (`--`)** operator decrements (subtracts one from) its operand and returns a value.
  - If used postfix, with operator after operand (for example, x--), then it decrements and returns the value before decrementing.
  - If used prefix, with operator before operand (for example, --x), then it decrements and returns the value after decrementing.

  ```js
  // Postfix
  var x = 3;
  var y = 1

  x += y; // 4
  y = x++; // y = 3, x = 4
  y = x--; // y = 3, x = 2

  // Prefix
  var a = 2;
  var y = 1

  x -= y; // 71
  b = ++a; // a = 3, b = 3
  b = --a; // a = 1, b = 1
  ```

## Resources

- [Principles of Writing Consistent, Idiomatic JavaScript](https://github.com/rwaldron/idiomatic.js)
- 