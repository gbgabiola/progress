# [JavaScript Basics for Beginners](https://www.udemy.com/javascript-basics-for-beginners/)

## Getting Started

#### What is JavaScript

Frequently Ask Questions about JavaScript

1. What is JavaScript?
   JavaScript is one of the most popular and widely used programming languages in the world right now.  
   72,000/year is the average Salary of the JavaScript Developer in the US.  
   You can work as a Front-end Developer, Back-end Developer or a Full-stack Developer.

2. What can you do with it?

   - Web / Mobile Apps
   - Real-time Networking Apps
   - Command-line Tools
   - Games

3. Where does JavaScript code run?
   JavaScript was originally designed to run only in browsers, so every browsers has JavaScript Engine that can execute JavaScript code.
   - FireFox: SpiderMonkey
   - Chrome: v8

In 2009 Ryan Dahl took the open-source JavaScript Engine in Chrome and embedded it inside a C++ program, became Node.  
Now with this we can run JavaScript code outside of the browser, so we can pass our JavaScript code to node for execution, and this means with JavaScript we can build Back-end for our Web and Mobile Application.  
Browsers and Node provide a run-time environment for our JavaScript code.

4. JavaScript vs ECMAScript?
   - ECMAScript is just a specification
   - Javascript is a programming language that confirms to this specification.

ECMA is a organization responsible for defining standards. They take care of the ECMAScript specification.

#### Setting Up the Development

1. Download Editor
   - Visual Studio Code (VSCode)
   - Sublime Text
   - Atom
2. Download [Node](nodejs.org)

#### JavaScript in Browsers

There are 2 places where we can add a script element.

1. head section
2. body section

Best practice is to put script element at the end of the body section after all the elements.  
2 reasons for that:

1. The browsers parses the file from top to bottom, so if you put the script element at the head section, then the browser will get busy parsing and executing the javaScript code and it won't be able to render the content of the page. This will create a bad user experience. Your user looks inside your web page, it's white or blank while your browser is busy pasinging and executing your javaScript code.

2. Almost always the code in between script element needs to talk to the elements on the wb page.  
   Ex. You may want to show or hide some elements. By adding the code at the end of the body section will be confident that all the element are rendered by the browser.

There are exception to this rule, sometimes you're using third party code that has to be place in the head section.

**Statement** is a piece of code that expresses an action to be carried out. In this case we want to log a message on the console.  
All statements in the javaScript should be terminated by a semi-colon.

```js
console.log("Hello World");
```

The content inside the quotes are **string**.  
A **String** is a sequence of characters.

Comment is not executed by javaScript, and it is intended for documenting your code.

```js
// This is a comment
```

---

## Basics

#### Variables

We use a variable to store data temporarily in a computer's memory

```js
let name = "Genesis";
console.log(name);

/*
Variables:
Cannot be a reserved keyword
Should be meaningful
Cannot start with a number (1name)
Cannot contain a space or hyphen (-)
Are case-sensitive
*/

let firstName = "Genesis",
  lastName = "Gabiola";

// Modern best practice is to define each variable in a single line

let firstName = "Genesis";
let lastName = "Gabiola";
```

#### Constant

Best practice: If you don't need to reassign, const should be the default choice, otherwise if you need to reassign a variable use let

```js
const interestRate = 0.3;
interestRate = 1;
console.log(interestRate);
```

#### Primitives

Two Categories of Types:

1. Primitives / Value Types
   - `String`
   - `Number`
   - `Boolean` (`true` or `false`)
   - `undefined` (if you don't initialize the variable by default it's undefined, but it can explicitly set it to undefined)
   - `null` If you want to clear the value of the variable
   - `symbol` (es6)
2. Reference Types

```js
let name = "Genesis"; // String Literal
let age = 25; // Number Literal
let isApproved = true; // Boolean Literal
let firstName = undefined;
let selectedColor = null;
```

#### Dynamic Typing

Two Types of Programming Languages

1. Static (Statically-typed)

   - when declared a variable, the type of that variable is set and it cannot be change in the future

   ```
   string name = 'John';
   ```

2. Dynamic (Dynamically-typed)

   - the type of the variable can change

   ```js
   let name = "John";
   ```

#### Objects

Reference Types:

- `Object`
- `Array`
- `Function`

An `Object` in javaScript and in other programming languages is like an object in real life.  
Ex. A person has name, age, address and so on... these are the properties of a person.

```js
let person = {
  // Object Literal
  name: "Genesis",
  age: 25
};

console.log(person);
```

Properties of the person object:
| key | value |
| --- | --------- |
| name| 'Genesis' |
| age | 25 |

Two ways to work with the properties:

1. **Dot Notation** is a bit more concise and shorter and should be the default choice

```js
person.name = "John";
```

2. Bracket Notation `[ ]` has it's own uses, sometimes you don't know the name of the target property until the run time.

```js
person["name"] = "Mary";
```

#### Arrays

`Array` is a data structure to present a list of items.

```js
let selectedColors = ["red", "blue"]; // Array Literal
selectedColors[2] = 1;
console.log(selectedColors);
```

#### Functions

`Functions` are one of the fundamental building blocks in javaScript, a `function` is basically a set of statement that performs a task or calculates and return a value.

```js
function greet(name, lastName) {
  // declaring the function with parameter name
  console.log("Hello World" + name + " " + lastName);
}

greet("John", "Smith"); // Calling the function with argument

// Output: Hello John Smith
```

`Parameter` is a like variable inside the parenthesis and only meaningful inside the function.

`Argument` is the actual value that will supply the parameter.

#### Types of Functions

```js
// Performing a task
function greet(name, lastName) {
  console.log("Hello World" + name + " " + lastName);
}
```

```js
// Calculating a value
function square(number) {
  return number * number;
}

console.log(square(2)); // 4
```

---

## Operators

In JavaScript, we have different kinds of operators, we use this operators along with our `Variables` and Constants to create `Expressions`, and with this `expressions` we can implement logic and `Algorithms`.

Operators in JavaScript:

- Arithmetic
- Assignment
- Comparison
- Logical
- Bitwise

#### Arithmetic Operators

We use this for performing calculations just like the calculations we have in mathematics.

**Expression** is something that produces a value.

```js
let x = 10;
let y = 3;

// In this example, we have the expression inside the console
console.log(x + y); // Addition
console.log(x - y); // Subtraction
console.log(x * y); // Multiplication
console.log(x / y); // Division
console.log(x % y); // Remainder
console.log(x ** y); // Exponentiation
```

```js
// Increment
console.log(++x); // 11
console.log(x++); // 10 then 11
```

```js
// Decrement
console.log(--x); // 9
console.log(x--); // 10 then 9
```

#### Assignment Operators

Assigning a value to `x`.

```js
let x = 10;

x++; // x = x + 1;
x += 5; // x = x + 5;
x *= 3; // x = x * 3;
```

#### Comparison Operators

We use this operator to compare the value of a variable to something else.

```js
let x = 1;

// Relational Operators
console.log(x > 0); // true
console.log(x >= 1); // true
console.log(x < 1); // false
console.log(x <= 1); // true

// Equality Operators
console.log(x === 1); // true
console.log(x /== 1); // false
```

#### Equality Operators

1. **Strict Equality Operator** ensures that both have the same Type and same Value.

2. **Loose Equality Operator** doesn't care about the types matching. If the types don't match it will convert it to be the same type, and will only check if the values are the same.

```js
// Strict Equality (Type and Value)
console.log(1 === 1); // true
console.log("1" === 1); // false

// Loose Equality (Value)
console.log(1 == 1); // true
console.log("1" == 1); // true | ('1' == '1')
console.log(true == 1); // true | (true == true)
```

**Note**:
Best practices is to always use strict equality operator because it's more precise and accurate.

#### Ternary Operators

```js
// If a customer has more than 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.

let points = 110;
let type = points > 100 ? "gold" : "silver";

console.log(type); // gold
```

#### Logical Operators

**Logical Operator** used to make decisions based on multiple conditions.

3 Types of Logical Operators:

1. `AND` (`&&`) returns TRUE if both operands are TRUE.
2. `OR` (`||`) returns TRUE if one of the operands is TRUE, it doesn't matter which one.
3. `NOT` (`!`)

```js
// Logical AND (&&)
console.log(true && true); // true
console.log(false && true); // false

// Building an application for approving loans, so we want to see if the applicant has high income and good credit score then they will be eligible for loan.

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(elegibleForLoan); // true
```

```js
// Logical OR (||)
let highIncome = false;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(elegibleForLoan); // true
```

```js
// NOT (!)
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome && goodCreditScore;
console.log("Eligible", eligibleForLoan);

let applicationRefused = !eligibleForLoan;

console.log("Application Refused", applicationRefused); // Eligible is false | Application Refused is true
```

#### Logical Operators with NonBooleans

In JavaScript, unlike many other programming languages we can use this logical operators with Nonboolean values.

The result of the logical expression is not neccesarily a `true` or `false`, that defends on the value of the operands we have.

When a JavaScript engine tries to evaluate a expression, it will look both operands, and if the operands is not a boolean true or false it will try to interpret it as what we call `truthy` or `falsy`.

False Values:

- `Falsy` (false)
- `undefined`
- `null`
- `0`
- `false`
- `''`
- `Nan` is a special value in JavaScript and when we're dealing with mathematical calculation that does not produce a valid number, this value is returned, Not a number.

```js
false || true; // true
false || "Genesis"; // "Genesis"
false || 1; // 1
```

Anything that is not `Falsy` -> `Truthy`

```js
// Short-circuiting
false || 1 || 2; // 1

// As soon as we find an operand that is truthy that operand is returned.
```

```js
/*
Real World Example:
User has to pick a color or we're gonna use the default color.
Maybe this is the color of the t-shirt they want to buy.
*/

let userColor = "red";
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

console.log(currentColor); // red

// if userColor is set to undefined
console.log(currentColor); // blue

// If the user selected a color (userColor) we're gonna use that otherwise we're gonna use our defaultColor and that determines the currentColor which we're going to display on the screen.
```

#### Bitwise Operators

We humans represents decimal system to represent numbers (1 2 3 4 5), but in computers these numbers are stored in a binary format, which is a combination of `0's` and `1's`.

8 digits: each digit is a bit  
8 bits represents 1 byte of information in a computer

| Dec. | Binary   |
| ---- | -------- |
| 1    | 00000001 |
| 2    | 00000010 |
| 3    | 00000011 |

```js
// Bitwise OR
console.log(1 | 2); // 3

// Bitwise AND
console.log(1 & 2); // 0
```

When to use Bitwise Operator?

Imagine you want to implement an Access Control System, so the user can have these permissions: `Read`, `Write`, `Execute`.

Now we can use 1 byte of information or 8 bits to determine what kind of permission a user can have.

```js
// Read, Write, Execute
// 00000100 - Read
// 00000010 - Write
// 00000001 - Execute

const readPermission = 4;
const writePermission = 2;
const executePermision = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

let message = myPermission & readPermission ? "yes" : "no";

console.log(message);
```

#### Operator Precedence

When working with complex expressions use parenthesis to determine how this operators are applied.

```js
let x = 2 + 3 * 4;
let y = (2 + 3) * 4;

console.log(x); // 14
console.log(y); // 20
```

#### Exercise Swapping Variables

Swap the value of these 2 variables.

```js
let a = "red";
let b = "blue";

let c = a;
a = b;
b = c;

console.log(a); // red
console.log(b); // blue
```

---

## Control Flow

#### If...else

Two types of Conditional Statements:

1. `If...else`
2. `Switch...case`

```js
if (condition) statement;
// one statement
else if (anotherCondition) {
  statement;
  statement;
} // 2 or more statement
else statement;
```

In an application we're going to get the current hour, and depending on it's value we're going to greet the user with the different message.

```js
/*
If hour is between 6am and 12pm: Good morning!
If it is between 12pm and 6pm: Good afternoon!
Otherwise: Good evening!
*/

let hour = 10;

if (hour >= 6 && hour < 12) console.log("Good morning!");
else if (hour >= 12 && hour < 18) console.log("Good afternoon!");
else console.log("Good evening!");
```

#### Switch...case

Another way to do a conditional statement.

Syntax structure:

```js
switch (variable) {
  condition:
    statement;
    break;

  default:
    statement;
}
```

Check the role of the current user:

```js
let role = "guest";

switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  default:
    console.log("Unknown User");
}
// Guest User
```

You can do it also with if..else statement.

```js
if (role === "guest") console.log("Guest User");
else if (role === "moderator") console.log("Moderator User");
else console.log("Unknown User");
```

If and else statement is cleaner and shorter, you don't need to worry about the break, default, curly braces.

#### For

**Loops**: repeat the action a number of times.

Other types of loops:

- For
- While
- Do...while
- For...in
- For...of

Syntax structure:

```js
for (initialExpression; condition; incrementExpression) {
  statement;
}
```

```js
for (let i = 0; i < 5; i++) {
  console.log("Hello World"); // Print Hello World 5 times
}
```

Print odd numbers in `for` loop.

```js
for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i); // Print odd numbers
}
```

#### While

One key difference between a `while` loop and a `for` loop is that in `for` loops, the loop variable is part of the loop itself, but in `while` loops you have to declare it externally.

Syntax structure:

```js
initialExpress;
while (condition) {
  statement;
  incrementExpression;
}
```

Print odd numbers in `while` loop.

```js
let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}
```

#### Do...while

**Do...while** loops are always excuted at least once, even if the condition is evaluates to false.

```js
let i = 0;
do {
  if (i % 2 !== 0) console.log(i);
  i++;
} while (i <= 5);
```

#### Infinite Loops

**Infinite loop** executes infinitely or forever, it will crash your browser or your computer.

```js
let i = 0;
while (i < 5) {
  console.log(i);
  // i++;
}
```

```js
while (true) {}
```

```js
let x = 0;
do {
  // x++;
} while (x < 5);
```

```js
for (let i = 0; i > 0; i++)
```

#### For...in

Two more kinds of loops in javaScript, and we use it to iterate over the properties of an object or elements in an array.

```js
const person {
  name: 'Genesis',
  age: 25
};

for (let key in person)
  console.log(key); // name | age

  console.log(key, person[key]); // name Genesis | age 25
```

```js
const colors = ["red", "green", "blue"];

for (let index in color) console.log(index); // 0 | 1 | 2

console.log(index, colors[index]); // 0 red | 1 green | 2 blue
```

#### For...of

Starting EcmaScript 6 or ES6, we have a new way to iterate over arrays.

```js
const colors = ["red", "green", "blue"];

for (let color of colors) console.log(color); // red, gree, blue
```

Use the `for...in` loop to iterate over the properties of an object and `for...of` loop to iterate over the elements or items in an array.

#### Break and Continue

There are two key words that can change how the loop behaves.

Break:

```js
let i = 0;
while (i <= 10) {
  if (i === 5) break;
  console.log(i); // 0 | 1 | 2 | 3 | 4
  i++;
}
```

```js
while (i <= 10) {
  if (i % 2 === 0) {
    i++;
    continue;
  }
  console.log(i); // 1 | 3 | 5 | 7 | 9
  i++;
}
```

With the `break` keyword we jump out of the loop and with the `continue` keyword we jump to the next iteration.

#### Exercise: Max of Two Numbers

Write a function that takes two numbers and returns the maximum of the two.

```js
let number = max(1, 2);
console.log(number);

function max(x, y) {
  if (x > y) return x;
  return y;

  // cleaner way with same result
  return x > y ? x : y;
}
```

#### Exercise: Landscape or Portrait

Write a function `isLandscape` that takes two parameters `width` and `height` of an image and returns `true` if the image is landscape which means `width > height`, otherwise it will return `false`.

```js
console.log(isLandscape(300, 200));

function isLandscape(width, height) {
  // Usual way
  if (width > height) return true;
  return false;

  // Amateur way
  return width > height ? true : false;

  // Professional way
  return width > height;
}
```

#### Exercise: FizzBuzz

If the number we pass in is divisible by `3` we get `Fizz`, then if the number we pass in is divisible by `5` we get `Buzz`, then if the number we pass in is divisible by `3` and `5` we get `FizzBuzz`, now if the number is not divisible by either `3` or `5` we're gonna get the same number, and if we didn't pass a number we're gonna get a message `Not a number`.

```js
const output = fizzBuzz(3);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;

  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";

  if (input % 3 === 0) return "Fizz";

  if (input % 5 === 0) return "Buzz";

  return input;
}
```

#### Exercise: Demerit Points

Implement this function `checkSpeed` that takes parameter `speed` of the car. In this program assume that speed limit is 70km/h, so if the car is driving under this speed limit we get `Ok` message in the console. Similarly if we pass 70 it's still good we still get the `Ok` message. Now for every 5kms above the speed limit we get 1 point. As for the calculation use one of the built in functions in javaScript that is `Math.floor()` where you give it a floating point number and it will convert it to the greatest integer. Lastly If the driver gets more than 12 point (180kms/h) then the license will be suspended, print `License suspended`.

```js
/*
Speed Limit = 70km/h
5 -> 1 point
Math.floor(1.3)
12 point -> suspended
*/
checkSpeed(130);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log("Ok");
    return;
  }

  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) console.log("License suspended");
  else console.log("Points", points);
}
```

#### Execise: Even and Odd Numbers

Write a function `showNumber` that takes a parameter `limit`. When we pass a number like 10, we should see the number from 0 up to the number we applied as the limit. Next to each number should display if it's `EVEN` or `ODD` label.

```js
showNumbers(10);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) console.log(i, "EVEN");
    else console.log(i, "ODD");

    // much cleaner way
    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, message);
  }
}
```

#### Exercise: Count Truthy

Create a function `countTruthy` that takes an `array` and returns the number of truthy elements in this array.

```js
const array = [1, 2, 3];
console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}
```

#### Exercise: String Properties

Create a function `showProperties` that takes an object `obj`, and this function should display all the properties of this object that are type of string.

```js
const movie = {
  title: "Unbelivable movie",
  releaseYear: 2018,
  rating: 4.5,
  director: "Unbelievable director"
};

showProperties(movie);

function showProperties(obj) {
  let count = 0;
  for (let key in obj) {
    if (typeof obj[key] === "string") console.log(key, obj[key]);
  }
}
```

#### Exercise: Sum of Multiples of 3 and 5

Create a function `sum` that takes a `limit` parameter, the function should return the of all multiples of `3` and `5` from `0` up to this `limit`.

```js
console.log(sum(10));

function sum(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;

  return sum;
}
```

#### Exercise: Grade

Calculate the grade of the student. The function `calculateGrade` should calculates the average grade.

```js
const marks = [80, 80, 50]; // 210 / 3

/*
Average = 70;
0-59: F
60-69: D
70-79: C
80-89: B
90-100: A
*/

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  const average = calculateAverage(marks);

  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array) sum += value;
  return sum / array.length;
}
```

#### Exercise: Stars

Create a function `showStars` that takes `rows` as a parameter. When we call the function it should display the star and the number of stars in that row depends on the row we are in.

```js
showStars(5);

function showStars(rows) {
  let stars = 0;
  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}
```

#### Exercise: Prime Numbers

Create a function `showPrimes`that takes `limit` as a parameter, and shows all the prime numbers of this limit.

```js
// Prime (whose factors are only 1 and itself)
// 11 = 1, 11
// 13 = 1, 13

// Composite (Can be divided evenly by its factors)
// 12 = 1, 2, 3, 4, 6, 12

showPrimes(20);

function showPrimes(limit) {
  for (let number = 2; number < limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;
  return true;
}
```

---

## Objects

#### Basics

`Objects` are collection of key value pairs, so if you have properties that are highly related, you wanna encapsulate them inside of an object

**Example**: We're building an application for drawing different kinds of shapes like: cirlcles, rectagles and so on.. we could declare multiple variables around circle, and they are highly related they will present the circle, but a better approach is to put this variables inside of an object.

```js
/*
let radius = 1;
let x = 1;
let y = 1;
*/

function draw() {}
function move() {}

// Instead of using this you can do it inside of an object
const circle = { // Object literal
  radius: 1,
  location: { // Object
    x: 1,
    y: 1
  },
  isVisible: true // Boolean
  draw: function() { // function (method)
    console.log('draw');
  }
};

circle.draw(); // Method
```

If a function is part of an object, in Object-oriented Programming terms, we refer to that function as a method.

#### Factory Functions

Naming convention for `factory function` is _camelCase_.

**camelCase Notation**: `oneTwoThreeFour`

```js
function createCircle(radius) {
  return {
    radius, // radius
    draw() {
      console.log("draw");
    }
  };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);
```

We Defined the logic in one place so we can call this function with different values or different arguments we get different circle objects that we have defined the draw method only in one place, so if there is bug in this method that we need to fix in the future, there is a single place that we need to modify.

`Factory functions` are not the only way to create an object, we can also use `constructor functions`.

#### Constructor Functions

The naming convention for the `constructor functions` is different we use Pascal notation.

**Pascal Notation**: `OneTwoThreeFour`

```js
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

const circle = new Circle(1);
```

When we use the `new` operator three things happen:

1. creates an empty object
2. set the `this` to point to this object
3. return that object from the function

Difference between the `factory function` and `constructor functions`:

In `factory functions` we simply call a function and in this function we return a new object, in contrast with `constructor functions` we use a `new` operator and instead of returning an object we use the `this` keyword.

In terms of naming convention, `factory functions` use a _camel notation_ convention and `constructor functions` use a _pascal notation_ convention.

#### Dynamic Nature of Objects

Once you create a new object, you can always add a new properties or methods, or remove existing ones.

```js
const circle = {
  radius: 1
};

circle.color = "yellow"; // Add a property
circle.draw = function() {}; // Add a method

delete circle.color;
delete circle.draw;

console.log(circle);
```

When we use constant here that means we cannot reassign the variable. We cannot reset the `circle = {}` to a new object.

#### Constructor Property

Every object in javaScript has a property called `constructor` and that references the function that was use to construct or create an object.

```js
// Factory Function
function createCircle(radius) {
  return {
    radius, // radius
    draw() {
      console.log("draw");
    }
  };
}
const circle = createCircle(1);

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}
const another = new Circle(1);
```

Output using contructor property

```js
another.constructor;
/*
f Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}
*/

circle.constructor;
// f Object() { [native code] }
```

```js
let x = {}; // Object literal
```

When using `object literal`, javaScript engine will translate that into something like this:

```js
let x = new Object();
```

Few built in constructor in javaScript:

| Constructor      | Literal            |
| ---------------- | ------------------ |
| `new String();`  | '', "", ``         |
| `new Boolean();` | `true`, `false`    |
| `new Number();`  | `1`, `2`, `3`, `4` |

#### Functions are Objects
Internally JavaScript will use Function constructor to create the object.

```js
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

// When we declare a function, internally it represented like this.
const Circle1 = new Function(
  "radius",
  `
this.radius = radius;
this.draw = function() {
  console.log('draw');
}
`
);

const circle = new Circle1(1);
```

first argument is `thisArg`, passing an empty object, `this` will reference to the object that we the pass in, then the add the argument explicitly.

```js
Circle.call({}, 1);
// both are exactly the same
const another = new Circle(1);
```

When use the `new` operator, this `new` operator will internally create an empty object and pass them as the first argument to the call method, and this object will determine the context or `this`, so `this` will reference the object.

If we don't use the `new` operator, `this` by default will point to the global object which is window.

Another method called `apply()`, it's exactly like the `call()` method with this we can call a function, but instead of passing all the arguments explicitly, we pass them in an array. So this is useful if you already have an array somewhere else in your application and you want to pass an array as the 2nd argumentto `apply()` method.

```js
circle.apply({}, [1, 2, 3]);
```

#### Value vs Reference Types

##### Value Types:
1. Number
2. String
3. Boolean
4. Symbol
5. undefined
6. null

##### Reference Types:
1. Object
2. Function
3. Array

When we work with **Primitive** the value is stored inside the variable, when we copy that variable, that value that is stored in the variable is copied into the new variable. So they completely independent to each other.

```js
let x = 10;
let y = x;

x = 20;

// Log
x; // 20
y; // 10
```

When we use an object, that object is not stored in the variable, that object is stored somewhere in the memory, and the address of that memory location is stored inside that variable.

```js
let x = { value: 10 };
let y = x;

x.value = 20;

// log
x; // {value: 20}
y; // {value: 20}
```

In other words, both x and y are pointing to the same object in memory and when we modify that object using either x or y, it changes are immediately visible to the other variable.

**Conclusion**:  
**Primitives** are copied by their **value**, **Reference** types or **Objects** are copied by their **reference**.

Primitive

```js
let number = 10;

function increase(number) {
  number++;
}

increase(number);
console.log(number); // 10
```

Reference

```js
let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj); // {value: 11}
```

#### Enumerating Properties of an Object

`for...of` loop can only be use with iterables such as arrays and maps.

```js
const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  }
};

for (let key in circle) console.log(key, circle[key]); // raidus 1 | draw f | draw() { console.log('draw'); }

for (let key of circle) console.log(key); // Uncaught TypeError: circle is not iterable
```

Object is not iterable, so we cannot iterate it using a `for...of` loop, however we have this method `Object.keys()`

```js
for (let key of Object.keys(circle)) console.log(key); // radius | draw
```

Similar method to `Object.keys()`

```js
for (let entry of Object.entries(circle)) console.log(entry); // (2) ["radies", 1] | (2) ["draw", f]
// each entry is an array
```

To see if the given property or method exist in an object.

```js
if ("radius" in circle) console.log("yes");
```

The simplest way to enumerate the properties of an object is using the `for...in` loop.

#### Cloning an Object

```js
const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  }
};

const another = {};
for (let key in circle) another[key] = circle[key];
// equivalent
another["radius"] = circle["radius"];

console.log(another); // {radius: 1, draw: f}
```

But this approach for copying or cloning an object is a little bit old, in modern javaScript we have a better ways to achieve the same thing.

```js
const another = Object.assign({}, circle);
```

Yet another, simpler and more elegant way to clone an object.

```js
const another = { ...circle };
```

`Object.assign()` copies the properties and methods from one or more source objexts into target object and we can use that to clone an object or combine mulptiple objects into a single object, and the `spread operator` is use to spread an object which basically means getting all its properties and methods and put in them into another object.

#### Garbage Collection
In low-level languages like `C` or `C++` when creating an object, we need to allocate memory to it, and when we're done we need to deallocate memory, but in `JavaScript` we don't have this concept, we can easily create a new object, at the time we initialize this object the memory is automatically allocated to this object, next we can use that, and when we're done using it, we don't need to deallocate the memory.

So, JavaScript engine has `Garbage Collector`, the job of this `garbage collector` is to find the variables or constants that are no longer use, and then deallocate the memory that was allocated to them earlier.

```js
let circle = {};
console.log(circle);
```

#### Math
`Math` is a built-in object that has properties and methods for mathematical constants and functions.

**Properties**:  
`Math.PI` ration of the circumference of a circle to its diameter, approximately 3.14159.

**Methods**:  
`Math.abs(x)` returns the absolute value of a number. (If you give it a negative number, it returns its positive value.)

`Math.floor(x)` returns the largest integer less than or equal to a number.

`Math.random()` returns a pseudo-random number between 0 and 1.

`Math.round(x)` returns the value of a number rounded to the nearest integer.

`Math.max([x[, y[,...]]])` returns the largest of zero or more numbers.

`Math.min([x[, y[,...]]])` returns the smallest of zero or more numbers.

#### String
`String` object is a constructor for strings or a sequence of characters.

JavaScript has two kinds of strings:

```js
// String primitive
const message = 'hi';

// String object
const another = new String('hi')
```

However, when we use the `dot notation` with a string primitive, javaScript engine internally wraps this with a string object. We can't see it, but we can work with it like a string object.

`Escape Notation` is use to encode special characters beside regular, printable characters.

```js
const message = 'This is my first message';

// returns the number of characters in the string
message.length // 24 

// Determines whether one string may be found within another string
message.includes('my') // true

// Determines whether a string begins with the characters of another string.
message.startsWith('This') // true

// Determines whether a string ends with the characters of another string.
message.ensWith('e') // true

// Returns the index within the calling String object of the first occurrence of the specified value, or -1 if not found.
message.indexOf('my') // 8

// replace the matched substring with a new substring.
message.replace('first', 'second') // "This is my second message"

// Returns the calling string value converted to uppercase.
message.toUpperCase() // "THIS IS MY FIRST MESSAGE"

// Trims whitespace from the beginning and end of the string. Part of the ECMAScript 5 standard.
message.trim() // "This is my first message"

// Splits a String object into an array of strings by separating the string into substrings.
message.split(' ') // ["This", "is", "my", "first", "message"]
```

| Code | Output       |
| ---- | ------------ |
| `\'` | single quote |
| `\"` | double quote |
| `\\` | backslash    |
| `\n` | new line     |
| `\\` | backslash    |
| `\t` | tab          |

#### Template Literals
`Template literals` are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

```js
// String literal
const message = 
'This is my\n' + 
'\'first\' message';

// Template literal
const another = `This is my
first message`;
```

We can also add placeholders with template literals.

```js
const name = 'John';

// Regular string
const message = 'Hi ' + name + ',\n';

// Template literal string
const message = `Hi ${name},`
```

#### Date
`Date` objects are based on a time value that is the number of milliseconds since 1 January 1970 UTC.

Different ways to create a `Date` object:

```js
const now = new Date() // connstructor function
const date1 = new Date('May 11 2018 19:00');
const date2 = new Date(2018, 4, 11, 9)

now.get
now.set
now.setFullYear(2017);
```

All these `Date` objects have a bunch of `get` and `set` methods.

#### Exercise 1: Address Objects
Create an `address` object with three properties: `street`, `city`, and `zipcode`. After that create a function called `showAddress` that takes an `address` object and display all the properties in this object along with their value.

```js
const address = {
  street: 'San Jose',
  city: 'San Fernano',
  zipCode: 2000
};

function showAddress(address) {
  for (let key in address)
    console.log(key, address[key]);
}

showAddress(address);
```

#### Exercise 2: Factory and Constructor Function
Write two different functio to initialize an `address` object
1. Using a `Factory function`
2. Using `Constructor function`

```js
// Factory function
let address = createAddress('San Jose', 'San Fernando', 2000);
console.log(address);

function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode
  }
}
```

```js
// Constructor function
let address = new Address('San Jose', 'San Fernando', 2000);
console.log(address);

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
```

#### Exercise 3: Object Equality
Create a two functions and pass two address object, which are `address1` and `address2`.
1. `areEqual` function checks if all the properties of these two objects are equal, this function should return `true`, otherwiise it should return `false`
2. `areSame` function tells us if `address1` and `address2` are pointing to the exact same object. In other words, they are referencing to the same object.

```js
let address1 = new Address('San Jose', 'San Fernando', 2000);
let address2 = new Address('San Jose', 'San Fernando', 2000);
let address3 = address1;

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address1, address3));

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

function areEqual(address1, address2) {
  return address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode;
}

function areSame(address1, address2) {
  return address1 === address2;
}
```

#### Exercise 4: Blog Post Object
Create a blog post object with these properties:
- `title`
- `body`
- `author`
- `views`
- `comment`
    - `author`
    - `body`
- `isLive`

```js
let post = {
  title: 'Web Development',
  body: 'Learning how to code is very hard, the chalenges we are facing are very helpful that we can still learn it.',
  author: 'Genesis Gabiola',
  views: 1021,
  comment: [
    { author: 'Abbyjel Mantibe', body: 'This post is very helpful, I learned a lot.' },
    { author: 'David Arcilla', body: 'Good stuff.' },
  ],
  isLive: true
};

console.log(post);
```

#### Exercise 5: Constructor Functions
Imagine that we are building a blogging engine, the user is drafting a post, but they haven't published it yet. What should the construction function should look like?

```js
let post = new Post('Web Development', 'Learning how to code is very hard, the chalenges we are facing are very helpful that we can still learn it.', 'Genesis Gabiola')

console.log(post);

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}
```

#### Exercise 6: Price Range Objects
Create an array of objects, each object is what we called a price range object. Create at least 3 price range objects. Think about the properties that each of object should have.

```js
let priceRanges = [
  { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
  { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
  { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 },
];

let restaurants = [
  { averagePerPerson: 5 }
]
```

---

## Arrays

#### Adding Elements
Using constant variable you cannot reassign it to something else, however it's perfectly fine to modify the content of the array. You can add new elements or remove existing elements.

Three methods to add new elements in an array:

`push()` method adds one or more elements to the **end8** of an array and returns the new length of the array.

`unshift()` method adds one or more elements to the **beginning** of an array and returns the new length of the array.

`splice()` method changes the contents of an array by removing existing elements and/or adding new elements.

```js
const numbers = [3, 4];

// End
numbers.push(5, 6); // (4) [3, 4, 5, 6]

// Beginning
numbers.unshift(1, 2); // (6) [1, 2, 3, 4, 5, 6]

// Middle
numbers.splice(2, 0, 'a', 'b') // (8) [1, 2, "a", "b", 3, 4, 5, 6]

console.log(numbers);
```

#### Finding ELements(Primitives)
`indexOf()` we pass the element we are looking for and if that element exist in that array, this method will return the index of that element in the array, if it doesn't exist will return `-1`.

`lastIndexOf()` that will return the last index of the given element or `-1` if it doesn't exist.

`includes()` this simply returns `true` if the given element exist in the array.

All the methods here have a second parameter which is optional, and that is the starting index where the search will begin.

```js
const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf(3)); // 1
console.log(numbers.indexOf('a')); // -1
console.log(numbers.lastIndexOf(1)); // 3
console.log(numbers.indexOf(1) !== -1); // true
console.log(numbers.includes(1)); // true
console.log(numbers.indexOf(1, 2)); // 3
```

#### Finding Elements (Object) - Reference Types
`find()` method returns the **value** of the **first element** in the array that satisfies the provided testing function. Otherwise `undefined` is returned.

`findIndex()`method returns the **index** of the first element in the array **that satisfies the provided testing function**. Otherwise, it returns -1, indicating no element passed the test.

```js
const courses = [
  { id: 1, name : 'a' },
  { id: 2, name : 'b' },
];

console.log(courses.includes({ id: 1, name: 'a' })) // false

const course = courses.find(function(course) {
  return course.name === 'a'; // {id: 1, name: "a"}
  return course.name === 'xyz'; // undefined
});


const course = courses.findIndex(function(course) {
  return course.name === 'b'; // 1
  return course.name === 'xyz'; // -1
});

console.log(course); 
```

#### Arrow Functions
**Arrow Function expression** has a shorter syntax than a `function expression` and does not have its own this, arguments, super, or new.target. These function expressions are best suited for non-method functions, and they cannot be used as constructors.

Whenever you wan to pass a function as a `callback function` or as argument for different method, you can use the `arrow function` syntax.

```js
const courses = [
  { id: 1, name : 'a' },
  { id: 2, name : 'b' },
];


const course = courses.find(function(course) {
  return course.name === 'a'; // {id: 1, name: "a"}
});

// Arrow function
const course = courses.find(course => course.name === 'a';); // {id: 1, name: "a"}

console.log(course);
```

#### Removing Elements
`pop()` method removes the **last** element from an array and returns that element. This method changes the length of the array.

`shift()` method removes the **first** element from an array and returns that removed element. This method changes the length of the array.

`splice()` method changes the contents of an array by removing existing elements and/or adding new elements.

```js
const numbers = [1, 2, 3, 4];

// End
const last = numbers.pop();
console.log(numbers); // (3) [1, 2, 3]
console.log(last); // 4

// Beginning
const first = numbers.shift();
console.log(numbers); // (2) [2, 3]
console.log(first); // 1

// Middle
numbers.splice(2, 1); // (3) [1, 2, 4]
numbers.splice(2, 2); // (2) [1, 2]
console.log(numbers)
```

#### Emptying an Array
There are few different resolution in emptying an array.

```js
let numbers = [1, 2, 3, 4];
// let another = numbers;

// Solution 1
numbers = []; // []
console.log(another) // (4) [1, 2, 3, 4]

// Solution 2
numbers.length = 0; // []
console.log(another) // []

// Solution 3
numbers.splice(0, numbers.length) // []

// Solution 4
while (numbers. length > 0)
  numbers.pop(); // []

console.log(numbers)
```

**Note**:  
The old array is still in the memory, so if there's no other reference to the object eventually it will be remove by the garbage collector.

So, if we have another variable pointing to the same object, the original array will not be garbage collected.

If we reassign the variable, that variable is pointing to the new object in memory, but another new variable is still pointing to the old object.

#### Combining and Slicing Array
`concat()` method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

`slice()` method returns a shallow copy of a portion of an array into a new array object selected from **begin** to **end** (**end** not included). The original array will not be modified.

```js
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);

const slice = combined.slice(2, 4);

console.log(combined); // (6) [1, 2, 3, 4, 5, 6]
console.log(slice); // (2) [3, 4]
```

#### The Spread Operator
There is another way to combine two arrays using **spread operator** in ES6.

**Spread syntax** allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

```js
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, ...second];

// const copy = combined.slice(2, 4);
const copy = [...combined];
```

#### Iterating an Array
Iterate an array using `for...of` or

`forEach()` method executes a provided function once for each array element.

```js
const numbers = [1, 2, 3];

// for...of
for (let number of numbers)
  console.log(number); // 1 | 2 | 3

// forEach
numbers.forEach(function(number) {
  console.log(number); // 1 | 2 |3
});

// forEach() arrow function
numbers.forEach(number => console.log(number)); // 1 | 2 | 3

// forEach() with index
numbers.forEach((number, index) => console.log(index, number)); // 0 1 | 1 2 | 2 3
```

**Note** that the `callback function` that we pass to the `forEach()` method can optionally take a second parameter and that's the index.

You can't get index with `for...of`, but if you need that you can use `for...in` loop

#### Joining Arrays
`join()` method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.

```js
const numbers = [1, 2, 3];
const joined = numbers.join(',');
console.log(joined); // 1,2,3


const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts); // (5) ["This", "is", "my", "first", "message"]



const combined = parts.join('-');
console.log(combined); // This-is-my-first-message
```

This technique is particularly useful when building a URL slug, you cannot have white space in URLs, so all the white spaces are replace with an hyphen. So as part of converting the title to a URL slug, you'll have to split the string perhaps throughout some of the words maybe replace some words with other words and then eventually combine them using a hyphen

#### Sorting Arrays
`sort()` method sorts the elements of an array in place and returns the array.

`reverse()` method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

```js
const numbers = [2, 3, 1];
numbers.sort();
console.log(numbers); // (3) [1, 2, 3]

numbers.reverse();
console.log(numbers) // (3) [3, 2, 1]
```

`sort()` method is pretty useful when you have numbers and a strings in an array, but when you objects, it doesn't work by default, you need to do some extra work.

```js
const courses = [
  { id: 1, name: 'Node.js' },
  { id: 2, name: 'JavaScript' },
];

courses.sort(function(a, b) {
  /*
  a < b => -1
  a > b => 1
  a === b => 0
  */

  // exclude case sensitivity when comparing these name
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});
console.log(courses);
```

Each character in a computer is internally represented using a number.

`ASCII`(American Standard Code for Information Interchange) a standard way of representing numbers and letters in a computer file so that they can be read by most computers.

#### Testing the Elements of an Array
`every()` method tests whether all elements in the array pass the test implemented by the provided function. Returns **true** for any condition put on an empty array.

`some()` method tests whether at least one element in the array passes the test implemented by the provided function. Returns **false** for any condition put on an empty array.


```js
const numbers = [1, -1, 2, 3];
```

```js
// every() method
const allPositive = numbers.every(function(value) {
  return value >= 0;
});
console.log(allPositive);
```

```js
// some() method
const atLeastOnePositive = numbers.some(function(value) {
  return value >= 0;
});
console.log(atLeastOnePositive);
```

#### Filtering an Array
`filter()` method creates a new array with all elements that pass the test implemented by the provided function.

```js
const numbers = [1, -1, 2, 3];

// call back function
const filtered = numbers.filter(function(value) {
  return value >= 0;
});

console.log(filtered);
```

```js
// arrow function | value 
const filtered = numbers.filter(n => n >= 0);
```

Here we are dealing with an array of numbers, in a real world application, you would be using array of objects.

For example, in yelp website we can clickon the button Open Now to find the only restaurants that are open now, that's one kind of filtering. If you want to implement something like that, instead of an array of numbers, you would have an array of restaurants and each restaurant has opening hours, so you could filter restaurants that are currently open and return them.

#### Mapping an Array
`map()` method creates a new array with the results of calling a provided function on every element in the calling array.

mapping the numbers to strings:
```js
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => '<li>' + n + '</li>'); // (3) ["<li>1</li>", "<li>2</li>", "<li>3</li>"]

const html = '<ul>' + items.join('') + '</ul>'; // <li>1</li> <li>2</li> <li>3</li>

console.log(html);
```

mapping to objects:

```js
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);

/*
const items = filtered.map(n => {
  return { value: n };
}); // (3) [{...}, {...}, {...}]

const items = filtered.map(n => { value: n }); // (3) [undefined, undefined, undefined]
*/

const items = filtered.map(n => ({ value: n })); // (3) [{...}, {...}, {...}]

console.log(items);
```

Both `filter()` and `map()` method return a new array, they don't modify the original array. These methods are chainable, which means we can call them one afer another in a chain.

```js
// Chaining
const items = numbers
  .filter(n => n >= 0)
  .map(n => ({ value: n }))
  .filter(obj => obj.value > 1) // calling additional filter
  .map(obj => obj.value); // Again calling the map method | map each object to a number

console.log(items);
```

#### Reducing an Array
To calculate the sum of all the numbers in the array, this is also similar to calculating the total cost of all the item in the shopping cart.

So each number here will represent the price of an item in the shopping cart.

```js
const numbers = [1, -1, 2, 3];
```

```js 
let sum = 0;
for (let n of numbers)
  sum += n;

console.log(sum);
```

There is a cleaner and more elegant way to write the same code, using the `reduce()` method in arrays.

`reduce()` method executes a **reducer** function (that you provide) on each member of the array resulting in a single output value.

```js
/*
Here's what's happening in the background
a = 0, c = 1 => a = 1
a = 1, c = -1 => a = 0
a = 0, c = 2 => a = 2
a = 2, c = 3 => a = 5
*/

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum);
```

Much shorter code:
```js
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sum);
```

#### Exercise 1: Array from Range
Write a function `arrayFromRange` that takes two parameters `min` and `max`

```js
const numbers = arrayFromRange(-10, -4);
console.log(numbers); // (7) [-10, -9, -8, -7, -6, -5, -4]

function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i < max; i++)
    output.push(i);
  return output;
}
```

#### Exercise 2: Includes
Create a function called `include` that takes an `array` and `searchElement`, if we have the search element in the array return `true`, otherwise return `false`.

```js
const numbers = [1, 2, 3, 4];
console.log(numbers.includes(1));

function includes(array, searchElement) {
  for (let element of array)
    if (element === searchElement)
      return true;
  return false;
}
```

#### Exercise 3: Except
We have a `numbers` array and a function called `except` that takes an `array (`numbers)`, and another array. And with another array we can add the values we want to be excluded from the original array. So the function should return a new array without the values that we have pass in another array.

```js
const numbers = [1, 2, 3, 4];
const output = except(numbers, [1]); // (3) [2, 3, 4]
const output = except(numbers, [1, 2]); // (2) [3, 4]
console.log(output);

function except(array, excluded) {
  const output = [];
  for (let element of array)
    if (!excluded.includes(element))
      output.push(element);
  return output;
}
```

#### Exercise 4: Moving an Element
We have this function called `move` and we use that to move an element in an array. So we give it an `array`, `index` of an element we want to move, and an `offset`. If we pass more than the length of an array in `offset`, we get an error `Invalid offset.` To display an error use the `console.error()` method.

**Note** that `offset` can be negative number, and the original array is unaffected, so we get a new array with items reorder.

```js
const numbers = [1, 2, 3, 4];
const output = move(numbers, 0, 1);

console.log(output);

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error('Invalid offset.');
    return;
  }

  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}
```

#### Exercise 5: Count Occurences
Create a function called `countOccurences` that takes an `array` and a `searchElement` and returns the number of times that `searchElement` has occured in this `array`, otherwise it will return 0 if it didn't occur the `searchEleemnt` in the `array`.

```js
const numbers = [1, 2, 3, 4, 1];
const count = countOccurences(numbers, 1); // 2
console.log(count);

function countOccurences(array, searchElement) {
  /*
  let count = 0
  for (let element of array)
    if (element === searchElement)
      count++;
  return count;
  */

  // reduce() method
  return array.reduce((accumulator, current) => {
    const occurence = (current === searchElement) ? 1 : 0;
    console.log(accumulator, current, searchElement)
    return accumulator + occurence;
  }, 0);
}
```

#### Exercise 6: Get Max
Create a function `getMax` that takes an `array` as a parameter and it returns that largest number in that `array`, if we give it an empty array we get `undefined`.

```js
const numbers = [1, 2, 3, 4];
const max = getMax([1, 3, 4, 6]);
console.log(max);

function getMax(array) {
  if (array.length === 0)
    return undefined;
  /*
  let max = array[0];
  for (let i = 1; i < array.length; i++)
    if (array[i] > max)
      max = array[i];
  return max;
  */

  // reduce() method
  return array.reduce((accumulator, current) => {
    /*
    if (current > accumulator)
      return current;
    return accumulator;
    */

    // Conditional operator
    return (accumulator > current) ? accumulator : current;
  });
}
```

Much shorter code:
```js
function geMax(array) {
  if (array.length === 0) return undefined;
  return array.reduce((a, b) => (a > b) ? a : b);
}
```

#### Exercise 7: Movies
1. Write code the get all the `movies` in `2018` with `rating > 4`.
2. Sort them by their `rating` in descending order.
3. Pick only their `title` property and display in to the console.
4. Result should `'b'` and `'a'`

```js
const movies = [
  { title: 'a', year: 2018, rating: 4.5 },
  { title: 'b', year: 2018, rating: 4.7 },
  { title: 'c', year: 2018, rating: 3 },
  { title: 'd', year: 2017, rating: 4.5 },
];

const titles = movies
  .filter(m => m.year === 2018 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map(m => m.title)

console.log(titles);
```

---

## Functions

#### Function Declaration vs Expressions
There are two ways to define a function.

1. Function Declarion
```js
function walk() {
  console.log('walk');
}
```

2. Function Expression
```js
// Named Function Expression
let run = function walk() {};

// Anonymous Function Expression
let run = function() {
  console.log('run');
};
let move = run;
run(); // run
move(); // run
```

#### Hoisting
The key difference between **Function Declaration** and **Function Expression** is that we can call the function declaration syntax before it is define, but we cannot do this with function expression.

1. Function Declarion
```js
walk();

function walk() {
  console.log('walk'); // walk
}
```

2. Function Expression
```js
run();

const run = function run() {
  console.log('run'); // Uncaught ReferenceError: run is not defined
};
```

This is exactly like using a variable or constant before it's define.

Reason for this is because when javaScript engine executes this code it moves all the function declarations to the top, so our code will look like this in run time:

```js
function walk() {
  console.log('walk'); // walk
}

walk();
```

**Hoisting** is the process of moving function declarations to the top of the file, and this is done automatically by the javaScript engine that is executing the code.


#### Arguments
JavaScript is a dynamic language so we can declare a variable set it to **number**, and then change it's type and set it to **string**. This is perfectly fine from the perspective of the javaScript engine. This is one of the characteristics of the dynamic language.

```js
let x = 1;
x = 'a';
```

We have the same concept in the _arguments_ of a function.

```js
function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2)); // 3
```

But in javaScript it doesn't matter that this function has 2 two parameters, we can pass one argument, an we get a `NaN` (Not a number), because here `a` is `1` and `b` by default is `undefined`. So when we have `1` + `undefined` the result is `NaN`. this is not a valid _arithmetic operation_.

The same happen if we don't pass any arguments, we don't get an error, get `NaN` as a result.

```js
console.log(sum(1, 2, 3, 4, 5)) // 3
```

By the same token we can pass additional arguments, so in this case we passed five arguments, and this is perfectly valid javaScript code, but we still get `3`, because only the first two arguments are used.

But when we want to have a varying number of parameters in a function, or flexibility to pass as many arguments as we want and get their sum.

Every `function` in javaScript has a special object called `arguments`

```js
console.log(arguments);

/*
Arguments(5) [1, 2, 3, 4, 5, calle: f, Symbol (Symbol.iterator): f]
0: 1
1: 2
2: 3
3: 4
4: 5
calle: f sum(a, b)
length: 5
*/
```

We can see that it kinda looks like an array, but it's an array, it's an object. But the keys we have for this object are indexes of the arguments passed to this function.

Changing the function to return the sum of all the arguments.

We can use the `for...of` loop on arrays, but technically this loop can be use on any object that has an iterator.

```js
// function sum(a, b) {
function sum() {
  let total = 0;
  for (let value of arguments)
    total += value;
  return total;
}
console.log(sum(1, 2, 3, 4, 5, 10)); // 25
```

Interesting thing is we can completely remove the parameters, because technically we are working with the `arguments` object to access the arguments that has passed.

We are not referencing `a` or `b` in the body of the function, so we can simplify the code and remove the parameters.

#### The Rest Operator
In modern javaScript, if you want to have a varying number of parameters, we can use the **rest operator**.

```js
function sum(...args) {
  let total = 0;
  for (let value of arguments)
    total += value;
  return total;
}
console.log(sum(1, 2, 3, 4, 5, 10)); // 25
```

Don't confuse this with **spread operator**, because both are exact look the same.

**Spread operator** we can spread an array, which means taken it's individual elements, but when we this along with the parameter of the function we refer to this as the **rest operator**.

```js
function sum(...args) {
  console.log(args);
}
console.log(sum(1, 2, 3, 4, 5, 10)); // (6) [1, 2, 3, 4, 5, 10]
```

When we apply the **rest operator** to a parameter of the function, we can pass varying number of arguments and the **rest operator** will take all of them and put them in an array.

Now if we want to get the sum of all the numbers in an array, we can use the `reduce()` method.

```js
function sum(...args) {
  return args.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4, 5, 10));
```

Imagine we're gonna use this function to calculate the total costs of items in a shopping cart, and have a discount factor.

```js
function sum(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}
console.log(sum(0.1, 20, 30));
```

We cannot have a parameter after using the **rest operator**.

#### Default Parameters
There are times we want to supply default values to the parameters of a function.

Imagine a function for calculating the total interest.

```js
function interest(principal, rate, years) {
  return principal * rate / 100 * years;
}

console.log(interest(10000, 3.5, 5)); // 1750
```

What if we want to have a default values for interest rate and number of years.

```js
rate = rate || 3.5;
years = years || 5;
```

Cleaner way to achieve the same thing.

```js
function interest(principal, rate = 3.5, years = 5) {
  return principal * rate / 100 * years;
}

console.log(interest(10000, 3.5, 5));
```

If one of the parameter is not set it's value, put `undefined` in the argument, but this is not advisable because it will make your code look ugly better to define its value in parameter.

#### Gettters and Setters
Imagine a `person` object with two properties, `firstName` and `lastName`. Somewhere in the application we want to display a person's full name.

```js
const person = {
  firstName: 'Genesis',
  lastName: 'Gabiola'
};

// console.log(person.firstName + ' ' + person.lastName);

// template literal
console.log(`${person.firstName} ${person.lastName}`);
``` 

However, the problem with this approach is that maybe there are multiple places in our application where we want to display someone's full name. With the current implementation we will have to repeat the **template literal** in multiple places.

A better approach is to define a method in the object call full name, wheneve we want to display the person's full name we simply call that method.

```js
const person = {
  firstName: 'Genesis',
  lastName: 'Gabiola',
  fullName() {
    return `${person.firstName} ${person.lastName}`;
  }
};

console.log(person.fullName());
```

However, there are couple of problems with this approach.

1. First Problem is that `person.fullName()` is read-only, in other words, we cannot set the `person.fullName()` from the outside.

2. Not want to call it like a method, it will be nice if we can treat it like a property so we can drop the parenthesis like this `person.fullName`.


**getters** => to access the properties of an object

**setters** => to change or mutate them.

```js
const person = {
  firstName: 'Genesis',
  lastName: 'Gabiola',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

person.fullName = 'John Smith';

console.log(person);
```

#### Try and Catch
We assumed that value is a valid string, but if we pass a boolen we get an error because `split()` is a method belongs to strings. Boolean doesn't have a `split()` method. But if we pass `null` or `undefined` we get a different error, for the same reason, we cannot call the `split()` on a null

```js
const person = {
  firstName: 'Genesis',
  lastName: 'Gabiola',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

person.fullName = true; // Uncaught TypeError: value.split is not a function at Object.set fullName [as fullName]

person.fullName = null; // Uncaught TypeError: Cannot read property 'split' of null at Object.set fullName [as fullName]

console.log(person);
```

We need to add a error handling typically in situation like this, we should do error handling at the beginning of a function or a method, this is what we called **Defensive programming**.

We want to make sure that the values that are coming in are valid, they are in the right shape, so we can execute are logic.

```js
set fullName(value) {
  if (typeof value !== 'string') return;
```

So the `null` we passed will not take effect.

But sometimes we want to report an error in our application thats where we need to throw an exception.

Throwing an exeption is a technical jargon in a lot of programming languages.

Error is **Constructor function** because here we have _Pascal case_, calling it using the `new` operator to create a new error object.

```js
throw new Error('Value is not a string.');
```

Some people confuse `errors` with `exception`, but there is a slight difference between the two.

```js
const e = new Error();
```

Error object is just a plain javaScript object, there's nothing special about it, but the moment we throw this error we refer to that as exception.

```js
const e = new Error();
throw e;
```

So this method is throwing an exception and somewhere else we need to catch that exception, and quiet often when we catch that exception we display an error to the user.

```js
const parts = value.split(' ');
if (parts.length !== 2)
  throw new Error('Enter the first and last name');

try {
  // person.fullName = null;
  person.fullName = '';
}
catch (e) {
  alert(e);
}
```


```js
const person = {
  firstName: 'Genesis',
  lastName: 'Gabiola',
  set fullName(value) {
    if (typeof value !== 'string')
      throw new Error('Value is not a string.');

    const parts = value.split(' ');
    if (parts.length !== 2)
      throw new Error('Enter the first and last name');

    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

try {
  person.fullName = null;
  // person.fullName = '';
}
catch (e) {
  alert(e);
}

console.log(person)
```

#### Local vs Global Scope
This is all about scoping. A scope of a variable or a constant determines where the variable or constant is accessible. 

When we declare a variable with `let` and `const` their scope is limited to the block in which they are defined.

```js
{
  const message = 'hi';
  console.log(message); // hi
}
console.log(message); // Uncaught ReferenceError: message is not defined
```

```js
for (let i = 0; i < 5; i++) {
  console.log(i); // 0 | 1 | 2 | 3 | 4
}
  console.log(i); // Uncaught ReferenceError: i is not defined
```

We can have two same name variables in two different function.

```js
const color = 'red';
function start() {
  const message = 'hi';
  console.log(color); // red
}

function stop() {
  const message = 'bye';
}
```

`const color` has a global scope. _Global_ means its accessible everywhere globally, so it's accessible in all of the _functions_ we have in the program.

Local variables or constants in a _function_ take precedence over global variables or constants.

```js
const color = 'red';
function start() {
  const color = 'blue';
  console.log(color); // blue
}
```

In general, it should avoid to declare global variables or constants, that is considered bad practice. And it's because they're accessible everywhere globally, and each _function_ can accidentally changed their value, this will lead to all kinds of bugs and issues in the program.

**Methaphor**  
Imagine _variable_ is a toothbrush and each _function_ is a person. You don't want a toothbrush that is shared with multiple people. Each person should have their own toothbrush.

#### Let vs Var

It has still the same concept even when removing the curly braces block.

`let`:
```js
function start() {
  for (let i = 0; i < 5; i++) {
    console.log(i); // 0 | 1 | 2 | 3 | 4
  }
  console.log(i); // Uncaught ReferenceError: i not defined
}
start();
```

`var`:
```js
function start() {
  for (var i = 0; i < 5; i++) {
    console.log(i); // 0 | 1 | 2 | 3 | 4
  }
  console.log(i); // 0 | 1 | 2 | 3 | 4 | 5
}
start();
```

It turns out that `i` is accessible outside the `for` block.

This is the issue with the `var` keyword. When you declare a variable with `var` its scope is not limited to the block in which its defined. Its limited to the function in which its defined.

Before ES6 `var` is the only way to declare a variables and constants, starting from ES6 (ES2015) now we have two new keywords `let` and `const` to define variables and constants, these two keywords create _block-scoped_ variables, but `var` creates _function-scoped_ variables.

```js
function start() {
  if (true) {
    var color = 'red';
  }
  console.log(color); // red
}
```

Technically in most programming languages, color variable should only accessible in the block where its defined, but `var` is used to defined it, color variable is accessible anywhere in the _function_.

```js
function start() {
  if (true) {
    let color = 'red';
  }
  console.log(color); // Uncaught ReferenceError: color is not defined
}
```

Replaced `var` with `let`, we get an error, because color variable is not accessible outside the block, and that's how most languages work.

That's the first problem with `var` keyword, the second is with global variables.

When `var` is used outside of a _function_ this creates a global variable and attaches that global variable to the window object in the browser.

```js
var color = 'red';
let age = 30;

window.color // "red"
window.age // undefined
```

It is bad to attach a variable to the window object, because window object central is something central there's only one instance of the window objec.

Let's say you're using a third party library, if that third party library also has a variable  with the same name, that variable can overwrite your variable, so it should avoid adding stuff to the window object, otherwise you're going to create all sorts of issues in your program.

#### The "this" Keyword
`this` references the _object_ that is executing the current function.

1. Fist Rule: If the function is part of an object we call that function a _method_. If that function is a method in an object, `this` references that object itself.

2. Second Rule: Otherwise if that function is just a regular function which means its not part of an object, `this` references to the global object, which is the window object in the browsers and global in node.

First Rule:
```js
const video = {
  title: 'a',
  play() {
    console.log(this);
  }
};

video.stop = function() {
  console.log(this);
};

video.stop(); // {title: "a", play: f, stop: f}
```

`play()` is a method in the `video` object, `this` references the object itself, we added another method which is `stop()` and got the same result.

Second Rule:
```js
// ...
function playVideo() {
  console.log(this);
};

playVideo(); // Window {postMessage: f, blur: f, focus: f, close: f, frames: Window, ...}
```

`this` in here has the global object which is window in browsers and global in node.

Using a **Constructor Function**,  `new` operator
```js
// ...
function Video(title) {
  this.title = title;
  console.log(this);
};

const v = new Video('b'); // Video {title: "b"}
```

In here, instead of a window object we got a new object which is the Video object, when you use the `new` operator, this new operator creates a new empty object like this `{}` and set `this` point to the same object.

Another example:
```js
const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function(tag) {
      // console.log(tag); // a | b | c
      console.log(this.title, tag) // undefined "a" || undefined "b"|| undefined "c"
    });
  }
};
video.showTags();
```

`this` in here is referencing the window object, because the function in here is in a call back function and this function is just a regular function. It's not a method in the video object. The only method here is `showTags()`.

To fix it and show the title of the video next to each tag.

`forEach` has two parameters is call back function, second parameter is `thisArg`, so we can pass an object here and `this` will reference that object.

```js
// ...
      console.log(this.title, tag)
    }, this); // a a || a b || a c
  }
};
video.showTags();
```

But not all the methods in javaScript give you the ability to pass the `this` argument.

#### Changing the Value of "this"
Here are the few different solutions to change the value of `this` in a function.

Imagine `forEach` method doesn't have the second parameter.

1. First Approach  
Before calling the `forEach` method we can define a `const` _self_ or some people call this _that_, it's one of personal preference and set it to `this`.  
Now self is referencing the video object. So in our call back function we can use self instead of `this`, because the value of `this` changes when a new function is called.

```js
const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    const self  = this;
    this.tags.forEach(function(tag) {
      console.log(self.title, tag)
    }, this); // a a || a b || a c
  }
};
video.showTags();
```

This is not the preferred approach, but it's something that you can see in a lot of javaScript applications out there.  
Understand it but don't use this approach.

2. Second Approach  
Functions are objects in javaScript, `playVideo()` is technically a object, so it has properties and methods that we can access using the _dot notation_.

We have three methods, `apply()`, `bind()` and `call()`, with these methods we can change the value of `this` for this function.

The Simplest is `call()` method, the first parameter of this method is `thisArg`, so here we can pass an object and `this` will reference that object.

`call()`
```js
// ...
function playVideo() {
  console.log(this);
}
playVideo.call({ name: 'Genesis'}); // {name: "Genesis"}
```

In contrast when we call this function using the standard function call syntax, this references to this objects.

```js
// ...
playVideo.call(); // Window object
```

`apply()`
```js
// ...
playVideo.apply({ name: 'Genesis'}); // {name: "Genesis"}
```

We get the same result, what we pass as the first argument, will be use as the value of `this`.

The difference between `call()` and `apply` is only about passing argument.

```js
// call()
playVideo.call({ name: 'Genesis'}, 1, 2);

// apply()
playVideo.apply({ name: 'Genesis'}, [1, 2 ]);

// bind()
playVideo.bind({ name: 'Genesis'});
```

`bind()` method doest not call the playVideo() function, it returns a new function and sets `this` to point to the object that we passed permanently. So no matter how we call that function this will always point to the object that we pass.

So this returns a new function and store the result in a `const` and call the function just like a regular function.

Going back to the previous example:

```js
// ...
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(this.title, tag)
    }.bind(this)); // a a || a b || a c
  }
};
video.showTags();
```

`bind` method is the second solution to solve this problem, but thereis a new and better solution.

Starting ES6, we have **arrow functions**, the good thing about this is that inherit the `this` value.

So removing the call to the `bind()` method and change the function to _arrow function_.

```js
// ...
  showTags() {
    this.tags.forEach(tag => {
      console.log(this.title, tag)
    }); // a a || a b || a c
  }
};

video.showTags();
```

 With this we get the same result without doing anything extra. The reason for this is _arrow functions_ inherit `this` from the containing function. So in the `showTags()` function `this` reference to the `video` object, so when we pass an arrow function to the `forEach` the same `this` value is used in the arrow function. In other words, `this` is not rebound to a new object.

 #### Exercise 1: Sum of Arguments
 Create a function called `sum()` that takes a varying number of arguments and returns their sum. And then to challenge yourself modify the sum() function to be able to accept an array and still return the same result.

 Use `Array.isArray()` method to detect if it's array.

 ```js
 console.log(sum([1, 2, 3, 4]));

function sum(...items) {
  if (items.length === 1 && Array.isArray(items[0]))
    items = [...items[0]];
  return items.reduce((a, b) => a + b);
}
 ```

 #### Exercise 2: Area of Circle
Create a `circle` object using the _Object Literal_ syntax, this object should have a reduce property that we can read or write to. We should also have an area property that is read-only, we should not be able to set the area in the outside, but should be able to read it.

```js
const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  }
}

console.log(circle.area);
```

#### Exercise 3: Error Handling
This function has a tiny problem, here we are assuming that the first argument is a valid an array, but if we call this function with a boolean, null, undefined or number we get an error.

We need to modify this function  and add error handling.

```js
const numbers = [1, 2, 3, 4];
const count = countOccurences(numbers, 1); // 1
console.log(count);

function countOccurences(array, searchElement) {
  return array.reduce((accumulator, current) => {
    const occurence = (current === searchElement) ? 1 : 0;
    return accumulator + occurence;
  }, 0);
}
```

If the first argument is not an array, throw an exception then wrap these 2 lines `const count` and `console.log` with a `try catch` block. Catch the exception and log it in the console.

```js
try {
  const numbers = [1, 2, 3, 4];
  const count = countOccurences(numbers, 1); // 1
  console.log(count);
}
catch(e) {
  console.error(e.message);
}

function countOccurences(array, searchElement) {
  if (!Array.isArray(array))
    throw new Error('Invalid array!');
  return array.reduce((accumulator, current) => {
    const occurence = (current === searchElement) ? 1 : 0;
    return accumulator + occurence;
  }, 0);
}
```