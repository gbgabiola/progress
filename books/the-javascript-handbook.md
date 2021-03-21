# The JavaScript Handbook

The JavaScript Handbook follows the 80/20 rule: learn in 20% of the time the 80% of a topic.

- [Introduction to JavaScript](#introduction-to-javascript)
- [ECMAScript](#ecmascript)
- [ES6](#es6)
- [ES2016](#es2016)
- [ES2017](#es2017)
- [ES2018](#es2018)
- [Quick reference to modern JS syntax](#quick-reference-to-modern-js-syntax)
- [Coding style](#coding-style)
- [Lexical Structure](#lexical-structure)
- [Variables](#variables)
- [Types](#types)
- [Expressions](#expressions)
- [Prototypal inheritance](#prototypal-inheritance)
- [Classes](#classes)
- [Exceptions](#exceptions)
- [Semicolons](#semicolons)
- [Quotes](#quotes)
- [Template Literals](#template-literals)
- [Functions](#functions)
- [Arrow Functions](#arrow-functions)
- [Closures](#closures)
- [Arrays](#arrays)
- [Loops](#loops)
- [Events](#events)
- [The Event Loop](#the-event-loop)
- [Asynchronous programming and callbacks](#asynchronous-programming-and-callbacks)
- [Promises](#promises)
- [Async and Await](#async-and-await)
- [Loops and Scope](#loops-and-scope)
- [Timers](#timers)
- [this](#this)
- [Strict Mode](#strict-mode)
- [Immediately-invoked Function Expressions (IIFE)](#immediately-invoked-function-expressions-iife)
- [Math operators](#math-operators)
- [The Math object](#the-math-object)
- [ES Modules](#es-modules)
- [CommonJS](#commonjs)
- [Glossary](#glossary)

## Introduction to JavaScript
JavaScript is one of the most popular programming languages in the world, and now widely used also outside of the browser. The rise of [Node.js](https://flaviocopes.com/nodejs/) in the last few years unlocked backend development, once the domain of Java, Ruby, Python, PHP, and more traditional server-side languages. Learn all about it!

JavaScript is now also the language powering databases and many more applications, and it's even possible to develop embedded applications, mobile apps, TV sets apps and much more. What started as a tiny language inside the browser is now the most popular language in the world.

#### A basic definition of JavaScript
- **high level**: it provides abstractions that allow you to ignore the details of the machine where it's running on. It manages memory automatically with a garbage collector, and provides many constructs which allow you to deal with highly powerful variables and objects.
- **dynamic**: language executes at runtime many of the things that a static language does at compile time. This gives us powerful features like dynamic typing, late binding, reflection, functional programming, object runtime alteration, [closures](https://flaviocopes.com/javascript-closures/) and much more.
- **dynamically typed**: can reassign any type to a variable, for example assigning an integer to a variable that holds a string.
- **weakly typed**: (or loosely) typed languages do not enforce the type of an object, allowing more flexibility but denying us type safety and type checking (something that TypeScript and Flow aim to improve).
- **interpreted**: which means that it does not need a compilation stage before a program can run, as opposed to C, Java or Go for example. In practice, browsers do compile JavaScript before executing it, for performance reasons, but this is transparent to you: there is no additional step involved.
- **multi-paradigm**:  the language does not enforce any particular programming paradigm, unlike Java for example which forces the use of object oriented programming, or C that forces imperative programming. You can write JavaScript using an object-oriented paradigm, using prototypes and the new (as of ES6) classes syntax. You can write JavaScript in functional programming style, with its first class functions, or even in an imperative style (C-like).

## ECMAScript
ECMAScript is the standard upon which JavaScript is based, and it's often abbreviated to ES.

Beside JavaScript, other languages implement(ed) ECMAScript, including:
- **ActionScript** (the Flash scripting language), which is losing popularity since Flash will be officially discontinued in 2020
- **JScript** (the Microsoft scripting dialect), since at the time JavaScript was supported only by Netscape and the browser wars were at their peak, Microsoft had to build its own version for Internet Explorer

but of course JavaScript is the **most popular** and widely used implementation of ES.

When JavaScript was created, it was presented by Netscape and Sun Microsystems to Ecma and they gave it the name ECMA-262 alias **ECMAScript**.

**TC39** is the committee that evolves JavaScript.  
The members of TC39 are companies involved in JavaScript and browser vendors, including Mozilla, Google, Facebook, Apple, Microsoft, Intel, PayPal, SalesForce and others.  
Every standard version proposal must go through various stages, [which are explained here](https://tc39.github.io/process-document/).

| Edition | Official name | Date published |
| ------- | ------------- | -------------- |
| ES9     | ES2018        | June 2018      |
| ES8     | ES2017        | June 2017      |
| ES7     | ES2016        | June 2016      |
| ES6     | ES2015        | June 2015      |
| ES5.1   | ES5.1         | June 2011      |
| ES5     | ES5           | December 2009  |
| ES4     | ES4           | Abandoned      |
| ES3     | ES3           | December 1999  |
| ES2     | ES2           | June 1998      |
| ES1     | ES1           | June 1997      |

**ES.Next** is a name that always indicates the next version of JavaScript.

## ES6
ECMAScript 2015, also known as ES6, is a fundamental version of the ECMAScript standard.

Keep in mind that with this version, the specification document went from 250 pages to ~600.

The most important changes in ES2015 include

- [Arrow function](https://flaviocopes.com/javascript-arrow-functions/)
- [Promises](https://flaviocopes.com/javascript-promises/)
- [Generators](https://flaviocopes.com/es6/#generators)
- [let and const](https://flaviocopes.com/javascript-variables/)
- [Classes](https://flaviocopes.com/javascript-classes/)
  - [Constructor](https://flaviocopes.com/es6/#constructor)
  - [Super](https://flaviocopes.com/es6/#super)
  - [Getters and setters](https://flaviocopes.com/es6/#getters-and-setters)
- [Modules](https://flaviocopes.com/es-modules/)
  - [Importing modules](https://flaviocopes.com/es6/#importing-modules)
  - [Exporting modules](https://flaviocopes.com/es6/#exporting-modules)
- [Template literals](https://flaviocopes.com/javascript-template-literals/)
- [Default parameters](https://flaviocopes.com/es6/#default-parameters)
- [The spread operator](https://flaviocopes.com/es6/#the-spread-operator)
- [Destructuring assignments](https://flaviocopes.com/es6/#destructuring-assignments)
- [Enhanced object literals](https://flaviocopes.com/es6/#enhanced-object-literals)
  - [Simpler syntax to include variables](https://flaviocopes.com/es6/#simpler-syntax-to-include-variables)
  - [Prototype](https://flaviocopes.com/es6/#prototype)
  - [super()](https://flaviocopes.com/es6/#super)
  - [Dynamic properties](https://flaviocopes.com/es6/#dynamic-properties)
- [The for..of loop](https://flaviocopes.com/javascript-loops/#for-of)
- [Map](https://flaviocopes.com/javascript-data-structures-map/) and [Set](https://flaviocopes.com/javascript-data-structures-set/)


## ES2016
ES7, officially known as ECMAScript 2016, was finalized in June 2016.

Compared to ES6, ES7 is a tiny release for JavaScript, containing just two features:
- [Array.prototype.includes](https://flaviocopes.com/es2016/#arrayprototypeincludes)
- [Exponentiation Operator](https://flaviocopes.com/es2016/#exponentiation-operator)

## ES2017
ECMAScript 2017, edition 8 of the ECMA-262 Standard (also commonly called **ES2017** or **ES8**), was finalized in June 2017.

Compared to ES6, ES8 is a tiny release for JavaScript, but still it introduces very useful features:
- [String padding](https://flaviocopes.com/es2017/#string-padding)
- [Object.values](https://flaviocopes.com/es2017/#objectvalues)
- [Object.entries](https://flaviocopes.com/es2017/#objectentries)
- [Object.getOwnPropertyDescriptors()](https://flaviocopes.com/es2017/#getownpropertydescriptors())
- [Trailing commas in function parameter lists and calls](https://flaviocopes.com/es2017/#trailing-commas)
- [Async functions](https://flaviocopes.com/es2017/#async-functions)
- [Shared memory and atomics](https://flaviocopes.com/es2017/#shared-memory-and-atomics)

## ES2018
- Rest/Spread Properties
- Asynchronous iteration
- Promise.prototype.finally()
- Regular Expression improvements
  - RegExp lookbehind assertions: match a string depending on what precedes it
  - Unicode property escapes \p{…} and \P{…}
  - Named capturing groups
  - The s flag for regular expressions

## Quick reference to modern JS syntax
Many times, code samples are using the latest JavaScript features available.

Sometimes those features can be hard to be distinguished from a framework features. It happens frequently with React for example, which encourages a very modern approach to JavaScript.

- [Arrow Functions](https://flaviocopes.com/javascript-arrow-functions/)
- [The spread operator](https://flaviocopes.com/ecmascript/#the-spread-operator)
- [Destructuring assignments](https://flaviocopes.com/es6/#destructuring-assignments)
- [Template literals](https://flaviocopes.com/javascript-template-literals/)

## Coding style
Having fixed rules on your code writing format helps a lot in order to have a **more readable and managed code**.

### Popular Style Guides
- [The Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- [The AirBnb JavaScript Style Guide](https://github.com/airbnb/javascript)

### Be consistent with the project you work on
[Prettier](https://flaviocopes.com/prettier/) is an awesome tool that enforces code formatting, use it.

### Own preferences
- Always use the latest ES version. Use Babel if old browser support is necessary.
- **Indentation**: use spaces instead of tabs, indent using 2 spaces.
- **Semicolons**: don't use semicolons.
- **Line length**: try to cut lines at 80 chars, if possible.
- **Inline Comments**: use inline comments in your code. Use block comments only to document.
- **No dead code**: Don't leave old code commented, "just in case" it will be useful later. Keep only the code you need now, version control/your notes app is meant for this.
- **Only comment when useful**: Don't add comments that don't help understand what the code is doing. If the code is self-explaining through the use of good variable and function naming, and JSDoc function comments, don't add a comment.
- **Variable declarations**: always declare variables to avoid polluting the global object. Never use `var`. Default to `const`, only use `let` if you reassign the variable.
- **Constants**: declare all constants in CAPS. Use `_` to separate words in a `VARIABLE_NAME`.
- **Functions**: use arrow functions unless you have a specific reason to use regular functions, like in object methods or constructors, due to how `this` works. Declare them as const, and use implicit returns if possible.

```js
const test = (a, b) => a + b
const another = a => a + 2
```

Feel free to use nested functions to hide helper functions to the rest of the code

- **Names**: function names, variable names and method names always start with a lowercase letter (unless you identify them as private), and are camelCased. Only constructor functions and class names should start capitalized. If you use a framework that requires specific conventions, change your habits accordingly. File names should all be lowercase, with words separated by `-`.

**Statement-specific formats and rules:**
- **if**
```js
if (condition) {
  statements
}

if (condition) {
  statements
} else {
  statements
}

if (condition) {
  statements
} else if (condition) {
  statements
} else {
  statements
}
```

- **for**
Always initialize the length in the initialization to cache it, don't insert it in the condition.

Avoid using `for in` except with used in conjunction with `.hasOwnProperty()`. Prefer `for of` (see [JavaScript Loops](https://flaviocopes.com/javascript-loops/))

```js
for (initialization; condition; update) {
  statements
}
```

- **while**
```js
while (condition) {
  statements
}
```

- **do**
```js
do {
  statements
} while (condition);
```

- **switch**
```js
switch (expression) {
  case expression:
    statements
  default:
    statements
}
```

- **try**
```js
try {
  statements
} catch (variable) {
  statements
}

try {
  statements
} catch (variable) {
  statements
} finally {
  statements
}
```

- **Whitespace**: use whitespace wisely to improve readability: put a whitespace after a keyword followed by a (`;` before & after a binary operation (`+`, `-`, `/`, `*`, `&&`..); inside the for statement, after each `;` to separate each part of the statement; after each `,`.
- **New lines**: use new lines to separate blocks of code that perform logically related operations.
- **Quotes** favor single quotes `'` instead of double quotes `"`. Double quotes are a standard in HTML attributes, so using single quotes helps remove problems when dealing with HTML strings. Use [template literals](https://flaviocopes.com/javascript-template-literals/) when appropriate instead of variable interpolation.

## Lexical Structure
A deep dive into the building blocks of JavaScript: unicode, semicolons, white space, case sensitivity, comments, literals, identifiers and reserved words.

### Unicode
JavaScript is written in [Unicode](https://flaviocopes.com/unicode/). This means you can use Emojis as variable names, but more importantly, you can write identifiers in any language, for example Japanese or Chinese, [with some rules](https://mathiasbynens.be/notes/javascript-identifiers).

### Semicolon
**Semicolons aren't mandatory**, and JavaScript does not have any problem in code that does not use them, and lately many developers, especially those coming from languages that do not have semicolons, started avoiding using them.  
You just need to avoid doing strange things like typing statements on multiple lines

```js
return
variable
```

or starting a line with parentheses (`[` or `(`) and you'll be safe 99.9% of the times (and your linter will warn you).

### White space
In practice, you will most likely keep a well defined style and adhere to what people commonly use, and enforce this using a linter or a style tool such as _Prettier_.

### Case sensitive
JavaScript is case sensitive. A variable named `something` is different from `Something`. The same goes for any identifier.

### Comments
You can use two kind of comments in JavaScript:
```js

/* The first can 
span over 
multiple lines and 
needs to be closed. */

// The second comments everything that's on its right, on the current line.
```

### Literals and Identifiers
We define as **literal** a value that is written in the source code, for example a number, a string, a boolean or also more advanced constructs, like Object Literals or Array Literals:
```js
5
'Test'
true
['a', 'b']
{color: 'red', shape: 'Rectangle'}
```

An **identifier** is a sequence of characters that can be used to identify a variable, a function, an object. It can start with a letter, the dollar sign `$` or an underscore `_`, and it can contain digits. Using Unicode, a letter can be any allowed char, for example an emoji.

```js
Test
test
TEST
_test
Test1
$test
```

The dollar sign is commonly used to reference [DOM](https://flaviocopes.com/dom/) elements.

### Reserved words
You can't use as identifiers any of the following words because they are reserved by the language.
```js
break
do
instanceof
typeof
case
else
new
var
catch
finally
return
void
continue
for
switch
while
debugger
function
this
with
default
if
throw
delete
in
try
class
enum
extends
super
const
export
import
implements
let
private
public
interface
package
protected
static
yield
```

## Variables
A variable is a literal assigned to an identifier, so you can reference and use it later in the program.

Variables in JavaScript do not have any type attached. Once you assign a specific literal type to a variable, you can later reassign the variable to host any other type, without type errors or any issue.

This is why JavaScript is sometimes referenced as "untyped"

A variable must be declared before you can use it. There are 3 ways to do it, using `var`, `let` or `const`, and those 3 ways differ in how you can interact with the variable later on.

### Using `var`
Until ES2015, `var` was the only construct available for defining variables.
```js
var a = 0
```

The **scope** is the portion of code where the variable is visible.

A variable initialized with `var` outside of any function is assigned to the global object, has a global scope and is visible everywhere. A variable initialized with `var` inside a function is assigned to that function, it's local and is visible only inside it, just like a function parameter.

Any variable defined into a function with the same name of a global variable takes precedence over the global variable, shadowing it.

It's important to understand that a block (identified by a pair of curly braces) does not define a new scope. A new scope is only created when a function is created, because `var` has not block scope, but function scope.

Inside a function, any variable defined in it is visible throughout all the function code, even if the variable is declared at the end of the function it can still be referenced in the beginning, because JavaScript before executing the code actually _moves all variables on top_ (something that is called **hoisting**). To avoid confusion, always declare variables at the beginning of a function.

### Using `let`
`let` is a new feature introduced in ES2015 and it's essentially a block scoped version of `var`. Its scope is limited to the block, statement or expression where it's defined, and all the contained inner blocks.

> If `let` seems an obscure term, just read `let color = 'red'` as let the color be red and all has much more sense.

Defining `let` outside of any function - contrary to `var` - does not create a global variable.

### Using `const`
Once a `const` is initialized, its value can never be changed again, and it can't be reassigned to a different value.

```js
const a = 'test'
```

We can't assign a different literal to the `a` const. We can however mutate `a` if it's an object that provides methods that mutate its contents.

`const` has block scope, same as `let` and does not provide immutability, just makes sure that the reference can't be changed.

## Types
You might sometimes read that JS is untyped, but that's incorrect. It's true that you can assign all sorts of different types to a variable, but JavaScript has types. In particular, it provides primitive types, and object types.

### Primitive types
Primitive types are
- Numbers
- Strings
- Booleans

And two special types:
- null
- undefined

### Numbers
Internally, JavaScript has just one type for numbers: every number is a float.

A numeric literal is a number represented in the source code, amd depending on how it's written, it can be an integer literal or a floating point literal.

Integers:
```js
10
5354576767321
0xCC //hex
```

Floats:
```js
3.14
.1234
5.2e4 //5.2 * 10^4
```

### Strings
A string type is a sequence of characters. It's defined in the source code as a string literal, which is enclosed in quotes or double quotes

```js
'A string'
"Another string"

// Strings can span across multiple lines by using the backslash
"A \
string"
```

A string can contain escape sequences that can be interpreted when the string is printed, like \n to create a new line. The backslash is also useful when you need to enter for example a quote in a string enclosed in quotes, to prevent the char to be interpreted as a closing quote:

```js
'I\'m a developer'

// Strings can be joined using the + operator:
"A " + "string"
```

#### Template strings.
Introduced in ES2015, template strings are string literals that allow a more powerful way to define strings.

You can perform string substitution, embedding the result of any JS expression:
```js
`a string with ${something}`
`a string with ${something+somethingElse}`
`a string with ${obj.something()}`

// You can have multiline strings easily:
`a string
with
${something}`
```

### Booleans
JavaScript defines two reserved words for booleans: true and false. Many comparision operations `==` `===` `<` `>` (and so on) return either one or the other.

`if` , `while` statements and other control structures use booleans to determine the flow of the program.

They don't just accept true or false, but also accept **truthy** and **falsy** values.

Falsy values, values **interpreted as false**, are
```js
0
-0
NaN
undefined
null
'' //empty string
```

All the rest is considered a `truthy value`.

### null
`null` is a special value that indicates the absence of a value.

It's a common concept in other languages as well, can be known as `nil` or `None` in Python for example.

### undefined
`undefined` indicates that a variable has not been initialized and the value is absent.

It's commonly returned by functions with no `return` value. When a function accepts a parameter but that's not set by the caller, it's undefined.

To detect if a value is undefined , you use the construct:
```js
typeof variable === 'undefined'
```

### Object types
Anything that's not a primitive type is an object type.

Functions, arrays and what we call objects are object types. They are special on their own, but they inherit many properties of objects, like having properties and also having methods that can act on those properties.

## Expressions
Expressions are units of code that can be evaluated and resolve to a value. Expressions in JS can be divided in categories.

### Arithmetic expressions
Under this category go all expressions that evaluate to a number:
```js
1 / 2
i++
i -= 2
i * 2
```

### String expressions
Expressions that evaluate to a string:
```js
'A ' + 'string'
'A ' += 'string'
```

### Primary expressions
Under this category go variable references, literals and constants:
```js
2
0.02
'something'
true
false
this //the current object
undefined
i //where i is a variable or a constant
```

but also some language keywords:
```js
function
class
function* //the generator function
yield //the generator pauser/resumer
yield* //delegate to another generator or iterator
async function* //async function expression
await //async function pause/resume/wait for completion
/pattern/i //regex
() // grouping
```

### Array and object initializers expressions
```js
[] //array literal
{} //object literal
[1,2,3]
{a: 1, b: 2}
{a: {b: 1}}
```

### Logical expressions
Logical expressions make use of logical operators and resolve to a boolean value:
```js
a && b
a || b
!a
```

### Left-hand-side expressions
```js
new //create an instance of a constructor
super //calls the parent constructor
...obj //expression using the spread operator
```

### Property access expressions
```js
object.property //reference a property (or method) of an object
object[property]
object['property']
```

### Object creation expressions
```js
new object()
new a(1)
new MyRectangle('name', 2, {a: 4})
```

### Function definition expressions
```js
function() {}
function(a, b) { return a * b }
(a, b) => a * b
a => a * 2
() => { return 2 }
```

### Invocation expressions
```js
The syntax for calling a function or method
a.x(2)
window.resize()
```

## Prototypal inheritance
JavaScript is quite unique in the popular programming languages landscape because of its usage of prototypal inheritance.

While most object-oriented languages use a class-based inheritance model, JavaScript is based on the prototype inheritance model.

Every single JavaScript object has a property, called `prototype` , which points to a different object.

This different object is the **object prototype**.

Our object uses that object prototype to inherit properties and methods.

Say you have an object created using the object literal syntax:
```js
const car = {}
```

or one created with the `new Object` syntax:
```js
const car = new Object()
```

in any case, the prototype of `car` is `Object`:

If you initialize an array, which is an object:
```js
const list = []
//or
const list = new Array()
```

the prototype is `Array`.

You can verify this by checking the `__proto__` getter:
```js
car.__proto__ == Object.prototype //true
car.__proto__ == new Object().__proto__ //true
list.__proto__ == Object.prototype //false
list.__proto__ == Array.prototype //true
list.__proto__ == new Array().__proto__ //true
```

> I use the `__proto__` property here, which is non-standard but widely implemented in browsers. A more reliable way to get a prototype is to use `Object.getPrototypeOf(new Object())`

`Object.prototype` is the base prototype of all the objects:
```js
Array.prototype.__proto__ == Object.prototype
```

If you wonder what's the prototype of the Object.prototype, there is no prototype. It's a special snowflake.

I can make an object that extends Array and any object I instantiate using it, will have Array and Object in its prototype chain and inherit properties and methods from all the ancestors.

In addition to using the `new` operator to create an object, or using the literals syntax for objects and arrays, you can instantiate an object using `Object.create()`.  
The first argument passed is the object used as prototype:
```js
const car = Object.create({})
const list = Object.create(Array)
```

You can check the prototype of an object using the isPrototypeOf() method:
```js
Array.isPrototypeOf(list) //true
```

Pay attention because you can instantiate an array using
```js
const list = Object.create(Array.prototype)
```

and in this case `Array.isPrototypeOf(list)` is false, while
`Array.prototype.isPrototypeOf(list)` is true.

## Classes
In 2015 the ECMAScript 6 (ES6) standard introduced classes.

Before that, JavaScript only had a quite unique way to implement inheritance. Its [prototypal inheritance](https://flaviocopes.com/javascript-prototypal-inheritance/), while in my opinion great, was different from any other popular programming language.

People coming from Java or Python or other languages had a hard time understanding the intricacies of prototypal inheritance, so the ECMAScript committee decided to introduce a syntactic sugar on top of them, and resemble how classes-based inheritance works in other popular implementations.

This is important: JavaScript under the hoods is still the same, and you can access an object prototype in the usual way.

### A class definition
```js
class Person {
  constructor(name) {
    this.name = name
  }
  hello() {
    return 'Hello, I am ' + this.name + '.'
  }
}
```

A class has an identifier, which we can use to create new objects using new
ClassIdentifier() .

When the object is initialized, the `constructor` method is called, with any parameters passed.

A class also has as many methods as it needs. In this case `hello` is a method and can be called on all objects derived from this class:
```js
const genesis = new Person('genesis')
genesis.hello()
```

### Classes inheritance
A class can extend another class, and objects initialized using that class inherit all the methods of both classes.

If the inherited class has a method with the same name as one of the classes higher in the hierarchy, the closest method takes precedence:
```js
class Programmer extends Person {
  hello() {
    return super.hello() + ' I am a programmer.'
  }
}
const genesis = new Programmer('Genesis')
genesis.hello()
```

(the above program prints "_Hello, I am Genesis. I am a programmer._")

Classes do not have explicit class variable declarations, but you must initialize any variable in the constructor.

Inside a class, you can reference the parent class calling `super()`.

### Static methods
Normally methods are defined on the instance, not on the class.  
Static methods are executed on the class instead:
```js
class Person {
  static genericHello() {
    return 'Hello'
  }
}
Person.genericHello() //Hello
```

### Private methods
JavaScript does not have a built-in way to define private or protected methods.  
There are workarounds.

### Getters and setters
You can add methods prefixed with `get` or `set` to create a getter and setter, which are two different pieces of code that are execute based on what you are doing: accessing the variable, or modifying its value.

```js
class Person {
  constructor(name) {
    this.name = name
  }

  set name(value) {
    this.name = value
  }

  get name() {
    return this.name
  }
}
```

If you only have a getter, the property cannot be set, and any attempt at doing so will be ignored:
```js
class Person {
  constructor(name) {
    this.name = name
  }

  get name() {
    return this.name
  }
}
```

If you only have a setter, you can change the value but not access it from the outside:
```js
class Person {
  constructor(name) {
    this.name = name
  }

  set name(value) {
    this.name = value
  }
}
```

## Exceptions
When the code runs into an unexpected problem, the JavaScript idiomatic way to handle this situation is through exceptions.

### Creating exceptions
An exception is created using the `throw` keyword:
```js
throw value
```

where `value` can be any JavaScript value including a string, a number or an object.

As soon as JavaScript executes this line, the normal program flow is halted and the control is held back to the nearest exception handler.

### Handling exceptions
An exception handler is a `try` `/` `catch` statement.

Any exception raised in the lines of code included in the `try` block is handled in the corresponding `catch` block:
```js
try {
  //lines of code
} catch (e) {

}
```

`e` in this example is the exception value.

You can add multiple handlers, that can catch different kinds of errors.

### `finally`
To complete this statement JavaScript has another statement called `finally`, which contains code that is executed regardless of the program flow, if the exception was handled or not, if there was an exception or if there wasn't:
```js
try {
  //lines of code
} catch (e) {

} finally {

}
```

You can use `finally` without a `catch` block, to serve as a way to clean up any resource you might have opened in the `try` block, like files or network requests:
```js
try {
  //lines of code
} finally {

}
```

### Nested `try` blocks
try blocks can be nested, and an exception is always handled in the nearest catch block:
```js
try {
//lines of code

  try {
    //other lines of code
  } finally {
    //other lines of code
  }

} catch (e) {

}
```

If an exception is raised in the inner `try`, it's handled in the outer `catch` block.

## Semicolons
JavaScript does not strictly require semicolons. When there is a place where a semicolon was needed, it adds it behind the scenes.

The process that does this is called **Automatic Semicolon Insertion**.

It's important to know the rules that power semicolons, to avoid writing code that will generate bugs because does not behave like you expect.

### The rules of JavaScript Automatic Semicolon Insertion
The JavaScript parser will automatically add a semicolon when, during the parsing of the source code, it finds these particular situations:
1. when the next line starts with code that breaks the current one (code can spawn on multiple lines)
2. when the next line starts with a `}`, closing the current block
3. when the end of the source code file is reached
4. when there is a `return` statement on its own line
5. when there is a `break` statement on its own line
6. when there is a `throw` statement on its own line
7. when there is a `continue` statement on its own line

### Examples of code that does not do what you think
```js
const hey = 'hey'
const you = 'hey'
const heyYou = hey + ' ' + you
['h', 'e', 'y'].forEach((letter) => console.log(letter))
```

You'll get the error `Uncaught TypeError: Cannot read property 'forEach' of undefined` because based on rule 1 JavaScript tries to interpret the code as
```js
const hey = 'hey';
const you = 'hey';
const heyYou = hey + ' ' + you['h', 'e', 'y'].forEach((letter) => console.log(letter))
```

---

Such piece of code:
```js
(1 + 2).toString()
```

prints `"3"`.

```js
const a = 1
const b = 2
const c = a + b
(a + b).toString()
```

instead raises a `TypeError: b is not a function` exception, because JavaScript tries to interpret it as
```js
const a = 1
const b = 2
const c = a + b(a + b).toString()
```

---

Another example based on rule 4:
```js
(() => {
  return
  {
    color: 'white'
  }
})()
```

You'd expect the return value of this immediately-invoked function to be an object that contains the `color` property, but it's not. Instead, it's `undefined`, because JavaScript inserts a semicolon after `return`.

Instead you should put the opening bracket right after `return`:
```js
(() => {
  return {
    color: 'white'
  }
})()
```

---

You'd think this code shows '0' in an alert:
```js
1 + 1
-1 + 1 === 0 ? alert(0) : alert(2)
```

but it shows 2 instead, because JavaScript per rule 1 interprets it as:
```js
1 + 1 -1 + 1 === 0 ? alert(0) : alert(2)
```

### Conclusion
Be careful. Some people are very opinionated on semicolons.

We just need to pay a bit of attention, even if most of the times those basic scenarios never show up in your code.

Pick some rules:
- be careful with `return` statements. If you return something, add it on the same line as the return (same for `break`, `throw`, `continue`)
- never start a line with parentheses, those might be concatenated with the previous line to form a function call, or array element reference

And ultimately, always test your code to make sure it does what you want.

## Quotes
JavaScript allows you to use 3 types of quotes:
- single quotes
- double quotes
- backticks

The first 2 are essentially the same. The only difference lies in having to escape the quote character you use to delimit the string:
```js
const test = 'test'
const test = 'te\'st'
const test = 'te"st'
const test = "te\"st"
const test = "te'st"
```

Backticks are a recent addition to JavaScript, since they were introduced with ES6 in 2015.

They have a unique feature: they allow multiline strings.
```js
// regular strings
const multilineString = 'A string\non multiple lines'

// Using backticks, you can avoid using an escape character:
const multilineString = `A string
on multiple lines`
```

You can interpolate variables using the` ${}` syntax:
```js
// template literals
const multilineString = `A string
on ${1+1} lines`
```

## Template Literals
Introduced in ES2015, aka ES6, Template Literals offer a new way to declare strings, but also some new interesting constructs which are already widely popular.

They are unique because they provide a lot of features that normal strings built with quotes, in particular:
- they offer a great syntax to define multiline strings
- they provide an easy way to interpolate variables and expressions in strings
- they allow to create DSLs with template tags

### Multiline strings
Pre-ES6, to create a string spanned over two lines you had to use the `\` character at the end of a line:
```js
// This allows to create a string on 2 lines, but it's rendered on just one line
const string = 'first part \
second part'

// first part second part
```

Add `\n` explicitly at the end of each line to render the string on multiple lines, like this:
```js
const string = 'first line\n \
second line'

// or

const string = 'first line\n' +
               'second line'
```

Template literals make multiline strings much simpler.  
Once opened with the backtick, you just press enter to create a new line, with no special characters, and it's rendered as-is:
```js
const string = `Hey
this

string
is awesome!`

// Keep in mind that space is meaningful, so doing this:
const string = `First
               Second`

// is going to create a string like this:
First
               Second
```

an easy way to fix this problem is by having an empty first line, and appending the `trim()` method right after the closing backtick, which will eliminate any space before the first character:
```js
const string = `
First
Second`.trim()
```

### Interpolation
Template literals provide an easy way to interpolate variables and expressions into strings.
```js
const var = 'test'
const string = `something ${var}` //something test

const string = `something ${1 + 2 + 3}`
const string2 = `something ${foo() ? 'x' : 'y' }`
```

### Template tags
Tagged templates is one features that might sound less useful at first for you, but it's actually used by lots of popular libraries around, like [Styled Components](https://flaviocopes.com/styled-components/) or [Apollo](https://flaviocopes.com/apollo/), the [GraphQL](https://flaviocopes.com/graphql/) client/server lib, so it's essential to understand how it works.

In Styled Components template tags are used to define CSS strings:
```js
const Button = styled.button`
  font-size: 1.5em;
  background-color: black;
  color: white;
`;
```

In Apollo template tags are used to define a GraphQL query schema:
```js
const query = gql`
  query {
  ...
}
```

The `styled.button` and `gql` template tags highlighted in those examples are just **functions**:
```js
function gql(literals, ...expressions) {

}
```

this function returns a string, which can be the result of _any_ kind of computation.

`literals` is an array containing the template literal content tokenized by the expressions interpolations.

`expressions` contains all the interpolations.

If we take an example above:
```js
const string = `something ${1 + 2 + 3}`
```

`literals` is an array with two items. The first is `something`, the string until the first interpolation, and the second is an empty string, the space between the end of the first interpolation (we only have one) and the end of the string.

`expressions` in this case is an array with a single item, `6`.

A more complex example is:
```js
const string = `something
another ${'x'}
new line ${1 + 2 + 3}
test`
```

in this case `literals` is an array where the first item is:
```js
`something
another `

// the second is:
`
new line `

// and the third is:
`
test`
```

`expressions` in this case is an array with two items, `x` and `6`.

The function that is passed those values can do anything with them, and this is the power of this kind feature.

The most simple example is replicating what the string interpolation does, by simply joining `literals` and `expressions`:
```js
const interpolated = interpolate`I paid ${10}€`
```

and this is how `interpolate` works:
```js
function interpolate(literals, ...expressions) {
  let string = ``

  for (const [i, val] of expressions) {
    string += literals[i] + val
  }
  string += literals[literals.length - 1]
  return string
}
```

## Functions
Everything in JavaScript happens in functions.

A function is a block of code, self contained, that can be defined once and run any times you want.

A function can optionally accept parameters, and returns one value.

Functions in JavaScript are **objects**, a special kind of objects: **function objects**. Their superpower lies in the fact that they can be invoked.

In addition, functions are said to be **first class functions** because they can be assigned to a value, and they can be passed as arguments and used as a return value.

### Syntax
Let's start with the "old", pre-ES6/ES2015 syntax. Here's a **function declaration**:
```js
function dosomething(foo) {
  // do something
}
```

(now, in post ES6/ES2015 world, referred as a **regular function**)

Functions can be assigned to variables (this is called a **function expression**):
```js
const dosomething = function(foo) {
  // do something
}
```

**Named function expressions** are similar, but play nicer with the stack call trace, which is useful when an error occurs - it holds the name of the function:
```js
const dosomething = function dosomething(foo) {
  // do something
}
```

ES6/ES2015 introduced **arrow functions**, which are especially nice to use when working with inline functions, as parameters or callbacks:
```js
const dosomething = foo => {
  //do something
}
```

Arrow functions have an important difference from the other function definitions above, we'll see which one later as it's an advanced topic.

### Parameters
A function can have one or more parameters.

```js
const dosomething = () => {
  //do something
}

const dosomethingElse = foo => {
  //do something
}

const dosomethingElseAgain = (foo, bar) => {
  //do something
}
```

Starting with ES6/ES2015, functions can have default values for the parameters:
```js
const dosomething = (foo = 1, bar = 'hey') => {
  //do something
}

// This allows you to call a function without filling all the parameters:
dosomething(3)
dosomething()
```

ES2018 introduced trailing commas for parameters, a feature that helps reducing bugs due to missing commas when moving around parameters (e.g. moving the last in the middle):
```js
const dosomething = (foo = 1, bar = 'hey') => {
  //do something
}
dosomething(2, 'ho!')
```

You can wrap all your arguments in an array, and use the spread operator when calling the function:
```js
const dosomething = (foo = 1, bar = 'hey') => {
  //do something
}
const args = [2, 'ho!']
dosomething(...args)
```

With many parameters, remembering the order can be difficult. Using objects, destructuring allows to keep the parameter names:
```js
const dosomething = ({ foo = 1, bar = 'hey' }) => {
  //do something
  console.log(foo) // 2
  console.log(bar) // 'ho!'
}
const args = { foo: 2, bar: 'ho!' }
dosomething(args)
```

### Return values
Every function returns a value, which by default is `undefined`.

![Undefined return value](https://flaviocopes.com/javascript-functions/undefined-return-value.png)

Any function is terminated when its lines of code end, or when the execution flow finds a `return` keyword.

When JavaScript encounters this keyword it exits the function execution and gives control back to its caller.

If you pass a value, that value is returned as the result of the function:
```js
const dosomething = () => {
  return 'test'
}
const result = dosomething() // result === 'test'
```

You can only return one value.

To _simulate_ returning multiple values, you can return an **object literal**, or an **array**, and use a [destructuring assignment](https://flaviocopes.com/es6/#destructuring-assignments) when calling the function.

Using arrays:
![Destructuring return array](https://flaviocopes.com/javascript-functions/destructuring-return-array.png)

Using objects:
![Destructuring return object](https://flaviocopes.com/javascript-functions/destructuring-return-object.png)

### Nested functions
Functions can be defined inside other functions:
```js
const dosomething = () => {
  const dosomethingelse = () => {}
  dosomethingelse()
  return 'test'
}
```

The nested function is scoped to the outside function, and cannot be called from the outside.

### Object Methods
When used as object properties, functions are called methods:
```js
const car = {
  brand: 'Ford',
  model: 'Fiesta',
  start: function() {
    console.log(`Started`)
  }
}

car.start()
```

### `this` in Arrow Functions
There's an important behavior of Arrow Functions vs regular Functions when used as object methods. Consider this example:
```js
const car = {
  brand: 'Ford',
  model: 'Fiesta',
  start: function() {
    console.log(`Started ${this.brand} ${this.model}`)
  },
  stop: () => {
    console.log(`Stopped ${this.brand} ${this.model}`)
  }
}
```

The `stop()` method does not work as you would expect.

![Methods this](https://flaviocopes.com/javascript-functions/methods-this.png)

This is because the handling of `this` is different in the two functions declarations style. `this` in the arrow function refers to the enclosing function context, which in this case is the `window` object:

![Methods this window](https://flaviocopes.com/javascript-functions/methods-this-window.png)

`this`, which refers to the host object using `function()`

This implies that **arrow functions are not suitable to be used for object methods** and constructors (arrow function constructors will actually raise a `TypeError` when called).

### IIFE, Immediately Invocated Function Expressions
An IIFE is a function that's immediately executed right after its declaration:
```js
;(function dosomething() {
  console.log('executed')
})()

// You can assign the result to a variable:
const something = (function dosomething() {
  return 'something'
})()
```
They are very handy, as you don't need to separately call the function after its definition.

### Function Hoisting
JavaScript before executing your code reorders it according to some rules.

Functions in particular are moved at the top of their scope. This is why it's legal to write
```js
dosomething()
function dosomething() {
  console.log('did something')
}
```

![Hoisting example](https://flaviocopes.com/javascript-functions/hoisting-example.png)

Internally, JavaScript moves the function before its call, along with all the other functions found in the same scope:
```js
function dosomething() {
  console.log('did something')
}
dosomething()
```

Now, if you use named function expressions, since you're using [variables](https://flaviocopes.com/javascript-variables/) something different happens. The variable declaration is hoisted, but not the value, so not the function.

```js
dosomething()
const dosomething = function dosomething() {
  console.log('did something')
}
```

Not going to work:
![Hoisting named](https://flaviocopes.com/javascript-functions/hoisting-named.png)

This is because what happens internally is:
```js
const dosomething
dosomething()
dosomething = function dosomething() {
  console.log('did something')
}
```

The same happens for let declarations. var declarations do not work either, but with a different error:
![Hoisting Var](https://flaviocopes.com/javascript-functions/hoisting-var.png)

This is because `var` declarations are hoisted and initialized with `undefined` as a value, while const and `let` are hoisted but not initialized.




## Arrow Functions
## Closures
## Arrays
## Loops
## Events
## The Event Loop
## Asynchronous programming and callbacks
## Promises
## Async and Await
## Loops and Scope
## Timers
## this
## Strict Mode
## Immediately-invoked Function Expressions (IIFE)
## Math operators
## The Math object
## ES Modules
## CommonJS
## Glossary
