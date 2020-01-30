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

### Functions

**`function`** is a "subprogram" that can be _called_ by code external to the function. Like the program itself, a function is composed of a sequence of statements called the _function body_. Values can be _passed_ to a function, and the function will _return_ a value.

```js
// Declaring a function
function name([param[, param[, ... param]]]) {
   statements
}

// Calling the function
name();
```


**`Math.floor()`** function returns the largest integer less than or equal to a given number.

```js
// Math.floor(x)
Math.floor(5.95); // 5
```

**`Math.pow()`** function returns the `base` to the `exponent` power, that is, `base`<sup>`exponent`</sup>.

```js
// Math.pow(base, exponent)
Math.pow(3, 2) // 9
```

**`Math.round()`** function returns the value of a number rounded to the nearest integer.

```js
// Math.round(x)
Math.round(0.9)); // 1
```


## Intermediate JavaScript

### Random Number Generation

**Math.random()** function returns a floating-point, pseudo-random number in the range 0-1 (inclusive of 0, but not 1) with approximately uniform distribution over that range, which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.

```js
Math.random()); // a number between 0 and 1
```

### Control Statements Using If-Else Conditionals & Logic

**`if` statement** executes a statement if a specified condition is _truthy_. If the condition is _falsy_, another statement can be executed.

Multiple `**if...else**` statements can be nested to create an `else if` clause. **Note** that there is no `elseif` keyword in JavaScript.

- **condition** is an expression that is considered to be either _truthy_ or _falsy_.
- **statement1**  is executed if _condition_ is _truthy_. Can be any statement, including further nested `if` statements. To execute multiple statements, use a _block_ statement (`{` ... `}`) to group those statements. To execute no statements, use an _empty_ statement.
- **statement2** is executed if _condition_ is _falsy_ and the `else` clause exists. Can be any statement, including block statements and further nested `if` statements.

```js
// Syntax
if (condition1)
  statement1
else if (condition2)
  statement2
else
  statementN

if (x > 50) {
  /* do the right thing */
} else if (x > 5) {
  /* do the right thing */
} else {
  /* do the right thing */
}
```

### Comparators and Equality

#### Equality Operators

**Equality (`==`)** operator converts the operands if they are **not of the same type**, then applies strict comparison. If **both operands are objects**, then JavaScript compares internal references which are equal when operands refer to the same object in memory.

```js
// x == y
1 == 1 // true
```

**Inequality (`!=`)** operator returns true if the operands are not equal. If the two operands **are not of the same type**, JavaScript attempts to convert the operands to an appropriate type for the comparison. If **both operands are objects**, then JavaScript compares internal references which are not equal when operands refer to different objects in memory.

```js
// x != y
1 != 2 // true
```

**Identity / Strict Equality (`===`) operator** returns true if the operands are strictly equal **with no type conversion**.

```js
// x === y
3 === '3' // false
```

**Non-Identity / Strict Inequality (`!==`)** operator returns true if the operands **are not equal and/or not of the same type**.

```js
// x !== y
3 !== '3' // true
```

Use strict equality operators if the operands must be of a specific type as well as value or if the exact type of the operands is important. Otherwise, use the standard equality operators, which allow you to compare the identity of two operands even if they are not of the same type.

#### Relational Operators

**Greater than (`>`)** operator returns true if the left operand is greater than the right operand.

```js
// x > y
4 > 3 // true
```

**Greater than or equal (`>=`)** operator returns true if the left operand is greater than or equal to the right operand.

```js
// x >= y
4 >= 3 // true
```

**less than (`<`)** operator returns true if the left operand is less than the right operand.

```js
// x < y
3 < 4 // true
```

**less than or equal (`<=`)** operator returns true if the left operand is less than or equal to the right operand.

```js
// x <= y
3 <= 4 // true
```

### Combing Comparators

Logical operators are typically used with `Boolean` values. When they are, they return a Boolean value. However, the `&&` and `||` operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they will return a non-Boolean value.


| Operator   | Syntax           | Description                                                                                  |
| :--------- | :--------------: | :------------------------------------------------------------------------------------------: |
| AND (`&&`) | `expr1 && expr2` | If `expr1` can be converted to `true`, returns `expr2`; else, returns `expr1`.
| OR (`||`)  | `expr1 || expr2` | If `expr1` can be converted to `true`, returns `expr1`; else, returns `expr2`.
| NOT (`!`)  | `!expr`          | Returns `false` if its single operand can be converted to `true`; otherwise, returns `true`.

```js
true && false // false
true || false // true
!true // false
```

### Collections Working with Arrays

**`Array`** object is a global object that is used in the construction of arrays; which are high-level, list-like objects.


```js
// Create an Array
var fruits = ['Apple', 'Banana'];
console.log(fruits.length); // 2

// Access (index into) an Array item
var first = fruits[0]; // Apple
```

**`includes()`** method determines whether an array includes a certain value among its entries, returning `true` or `false` as appropriate.

```js
// arr.includes(valueToFind[, fromIndex])
[1, 2, 3].includes(2); // true
```

### Adding Elements and Intermediate Array Techniques

**`push()`** method adds one or more elements to the end of an array and returns the new length of the array.

```js
// arr.push(element1[, ...[, elementN]])

var animals = ['pigs', 'goats', 'sheep'];
console.log(animals.push('cows')); // 4
console.log(animals); // ["pigs", "goats", "sheep", "cows"]
```

**`pop()`** method removes the **last** element from an array and returns that element. This method changes the length of the array.

```js
arr.pop()
```

### Control Statements

**`while` statement** creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.
```js
// while (condition)
//   statement

while (i < 2) {
  console.log(i);
  i++;
}
```

**`for` statement** creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement to be executed in the loop.

```js
// for ([initialization]; [condition]; [final-expression])
//   statement

for (let i = 0; i < 9; i++) {
  console.log(i);
```

## Resources

- [Principles of Writing Consistent, Idiomatic JavaScript](https://github.com/rwaldron/idiomatic.js)
- [STANFORD KAREL](http://stanford.edu/~cpiech/karel/ide.html)
- [Pseudorandom number generators](https://www.youtube.com/watch?v=GtOt7EBNEwQ) video by Khan Academy
- [Why Can't Programmers... Program?](https://blog.codinghorror.com/why-cant-programmers-program/) blog post from Coding Horror
- [Now that's what I call a Hacker](https://www.jitbit.com/alexblog/249-now-thats-what-i-call-a-hacker/)