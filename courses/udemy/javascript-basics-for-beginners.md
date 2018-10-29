# [JavaScript Basics for Beginners](https://www.udemy.com/javascript-basics-for-beginners/)

## Getting Started

### What is JavaScript
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

---

### Setting Up the Development
1. Download Editor
   - Visual Studio Code (VSCode)
   - Sublime Text
   - Atom
2. Download [Node](nodejs.org)

---

### JavaScript in Browsers
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
console.log('Hello World');
```

The content inside the quotes are **string**.  
A **String** is a sequence of characters.

Comment is not executed by javaScript, and it is intended for documenting your code.
```js
// This is a comment
```

---

## Basics

---

### Variables
We use a variable to store data temporarily in a computer's memory

```js
let name = 'Genesis';
console.log(name);

// Variables:
// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive

let firstName = 'Genesis', lastName = 'Gabiola';

// Modern best practice is to define each variable in a single line

let firstName = 'Genesis';
let lastName = 'Gabiola';
```

---

### Constant
Best practice: If you don't need to reassign, const should be the default choice, otherwise if you need to reassign a variable use let

```js
const interestRate = 0.3;
interestRate = 1;
console.log(interestRate);
```

---

### Primitives
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
let name = 'Genesis'; // String Literal
let age = 25; // Number Literal
let isApproved = true; // Boolean Literal
let firstName = undefined;
let selectedColor = null;
```

---

### Dynamic Typing
Two Types of Programming Languages
1. Static (Statically-typed)
    - when declared a variable, the type of that variable is set and it cannot be change in the future
    
    ```
    string name = 'John';
    ```

2. Dynamic (Dynamically-typed)
    - the type of the variable can change

    ```js
    let name = 'John';
    ```

---

### Objects
Reference Types:
- `Object`
- `Array`
- `Function`

An `Object` in javaScript and in other programming languages is like an object in real life.  
Ex. A person has name, age, address and so on... these are the properties of a person.

```js
let person = { // Object Literal
  name: 'Genesis',
  age: 25
};

console.log(person);
```

Properties of the person object:
| key | value     |
| --- | --------- |
| name| 'Genesis' |
| age | 25        |


Two ways to work with the properties:
1. **Dot Notation** is a bit more concise and shorter and should be the default choice

```js
person.name = 'John';
```

2. Bracket Notation `[ ]` has it's own uses, sometimes you don't know the name of the target property until the run time.

```js
person['name'] = 'Mary';
```

---

### Arrays
`Array` is a data structure to present a list of items.

```js
let selectedColors = ['red', 'blue']; // Array Literal
selectedColors[2] = 1;
console.log(selectedColors);
```

---

### Functions
`Functions` are one of the fundamental building blocks in javaScript, a `function` is basically a set of statement that performs a task or calculates and return a value.


```js
function greet(name, lastName) { // declaring the function with parameter name
  console.log('Hello World' + name + ' ' + lastName);
}

greet('John', 'Smith'); // Calling the function with argument

// Output: Hello John Smith
```

`Parameter` is a like variable inside the parenthesis and only meaningful inside the function. 

`Argument` is the actual value that will supply the parameter.

---

### Types of Functions

```js
// Performing a task
function greet(name, lastName) {
  console.log('Hello World' + name + ' ' + lastName);
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

---

### Arithmetic Operators
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

---

### Assignment Operators
Assigning a value to `x`.
```js
let x = 10;

x++; // x = x + 1;
x += 5; // x = x + 5;
x *= 3; // x = x * 3;
```

---

### Comparison Operators
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

---

### Equality Operators
1. **Strict Equality Operator** ensures that both have the same Type and same Value.

2. **Loose Equality Operator** doesn't care about the types matching. If the types don't match it will convert it to be the same type, and will only check if the values are the same.

```js
// Strict Equality (Type and Value)
console.log(1 === 1); // true
console.log('1' === 1); // false

// Loose Equality (Value)
console.log(1 == 1); // true
console.log('1' == 1); // true | ('1' == '1')
console.log(true == 1); // true | (true == true)
```
**Note**:
Best practices is to always use strict equality operator because it's more precise and accurate.

---

### Ternary Operators

```js
// If a customer has more than 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.

let points = 110;
let type = points > 100 ? 'gold' : 'silver';

console.log(type); // gold
```

---

### Logical Operators
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
console.log('Eligible', eligibleForLoan);

let applicationRefused = !eligibleForLoan;

console.log('Application Refused', applicationRefused); // Eligible is false | Application Refused is true
```

---

### Logical Operators with NonBooleans
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
false || true // true
false || 'Genesis' // "Genesis"
false || 1 // 1
```

Anything that is not `Falsy` -> `Truthy`

```js
// Short-circuiting
false || 1 || 2 // 1

// As soon as we find an operand that is truthy that operand is returned.
```

```js
// Real World Example:
// User has to pick a color or we're gonna use the default color.
// Maybe this is the color of the t-shirt they want to buy.

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor); // red

// if userColor is set to undefined
console.log(currentColor); // blue

// If the user selected a color (userColor) we're gonna use that otherwise we're gonna use our defaultColor and that determines the currentColor which we're going to display on the screen.
```

---

### Bitwise Operators
We humans represents decimal system to represent numbers (1 2 3 4 5), but in computers these numbers are stored in a binary format, which is a combination of `0's` and `1's`.

8 digits: each digit is a bit  
8 bits represents 1 byte of information in a computer

| Dec. | Binary   |
| ---- | -------- |
|  1   | 00000001 |
|  2   | 00000010 |
|  3   | 00000011 |

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

let message = 
  (myPermission & readPermission) ? 'yes': 'no';

console.log(message);
```

---

### Operator Precedence
When working with complex expressions use parenthesis to determine how this operators are applied.

```js
let x = 2 + 3 * 4;
let y = (2 + 3) * 4;

console.log(x); // 14
console.log(y); // 20
```

---

### Exercise Swapping Variables
Swap the value of these 2 variables.

```js
let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;

console.log(a); // red
console.log(b); // blue
```

---

## Control Flow

---

### If...else
Two types of Conditional Statements:
1. `If...else`
2. `Switch...case`

```js
if (condition) statement // one statement
else if (anotherCondition) {
  statement
  statement
} // 2 or more statement
else
  statement
```

In an application we're going to get the current hour, and depending on it's value we're going to greet the user with the different message.

```js
// Hour
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

let hour = 10;

if (hour >= 6 && hour < 12) 
  console.log('Good morning!');
else if (hour >= 12 && hour < 18)
  console.log('Good afternoon!')
else
  console.log('Good evening!');
```

---

### Switch...case
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
let role = 'guest';

switch (role) {
  case 'guest': 
    console.log('Guest User');
    break;
  
  case 'moderator':
    console.log('Moderator User');
    break;

  default:
    console.log('Unknown User');
}
// Guest User
```

You can do it also with if..else statement.

```js
if (role === 'guest') console.log('Guest User');
else if (role === 'moderator') console.log('Moderator User');
else console.log('Unknown User');
```

If and else statement is cleaner and shorter, you don't need to worry about the break, default, curly braces.

---

### For
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
  console.log('Hello World'); // Print Hello World 5 times
}
```

Print odd numbers in `for` loop.
```js
for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i); // Print odd numbers
}
```

---

### While
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
  i++
}
```

---

### Do...while
**Do...while** loops are always excuted at least once, even if the condition is evaluates to false.

```js
let i = 0;
do {
  if (i % 2 !== 0) console.log(i);
  i++;
} while (i <= 5);
```

---

### Infinite Loops
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

---

### For...in
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
const colors = ['red', 'green', 'blue'];

for (let index in color)
  console.log(index); // 0 | 1 | 2
  
  console.log(index, colors[index]); // 0 red | 1 green | 2 blue
```

---

### For...of
Starting EcmaScript 6 or ES6, we have a new way to iterate over arrays.

```js
for (let color of colors)
  console.log(color); // red, gree, blue
```
Use the `for...in` loop to iterate over the properties of an object and `for...of` loop to iterate over the elements or items in an array.

---

### Break and Continue
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

---

### Exercise: Max of Two Numbers
Write a function that takes two numbers and returns the maximum of the two.

```js
let number = max(1, 2);
console.log(number);

function max(x, y) {
  if (x > y) return x;
  return y;

  // cleaner way with same result
  return (x > y) ? x : y;
}
```

---

### Exercise: Landscape or Portrait
Write a function `isLandscape` that takes two parameters `width` and `height` of an image and returns `true` if the image is landscape which means `width > height`, otherwise it will return `false`.

```js
console.log(isLandscape(300, 200));

function isLandscape(width, height) {
  // Usual way
  if (width > height) return true;
  return false;

  // Amateur way
  return (width > height) ? true : false;

  // Professional way
  return (width > height);
}
```

---

### Exercise: FizzBuzz
If the number we pass in is divisible by `3` we get `Fizz`, then if the number we pass in is divisible by `5` we get `Buzz`, then if the number we pass in is divisible by `3` and `5` we get `FizzBuzz`, now if the number is not divisible by either `3` or `5` we're gonna get the same number, and if we didn't pass a number we're gonna get a message `Not a number`.

```js
const output = fizzBuzz(3);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== 'number') return NaN;

  if ((input % 3 === 0) && (input % 5 === 0)) return 'FizzBuzz';
  
  if (input % 3 === 0) return 'Fizz';
  
  if (input % 5 === 0) return 'Buzz';
  
  return input;
}
```

---

### Exercise: Demerit Points
Implement this function `checkSpeed` that takes parameter `speed` of the car. In this program assume that speed limit is 70km/h, so if the car is driving under this speed limit we get `Ok` message in the console. Similarly if we pass 70 it's still good we still get the `Ok` message. Now for every 5kms above the speed limit we get 1 point. As for the calculation use one of the built in functions in javaScript that is `Math.floor()` where you give it a floating point number and it will convert it to the greatest integer. Lastly If the driver gets more than 12 point (180kms/h) then the license will be suspended, print `License suspended`.

```js
// Speed Limit = 70km/h
// 5 -> 1 point
// Math.floor(1.3)
// 12 point -> suspended
checkSpeed(130);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log('Ok');
    return;
  }

  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12)
    console.log('License suspended');
  else
    console.log('Points', points);
}
```

---

### Execise: Even and Odd Numbers
Write a function `showNumber` that takes a parameter `limit`. When we pass a number like 10, we should see the number from 0 up to the number we applied as the limit. Next to each number should display if it's `EVEN` or `ODD` label.

```js
showNumbers(10);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {

    if (i % 2 === 0) console.log(i, 'EVEN');
    else console.log(i, 'ODD');

    // much cleaner way
    const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
    console.log(i, message);
  }
}
```

---

### Exercise: Count Truthy
Create a function `countTruthy` that takes an `array` and returns the number of truthy elements in this array.

```js
const array = [1, 2, 3];
console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  for (let value of array)
    if (value)
      count++;
  return count;
}
```

---

### Exercise: String Properties
Create a function `showProperties` that takes an object `obj`, and this function should display all the properties of this object that are type of string.

```js
const movie = {
  title: 'Unbelivable movie',
  releaseYear: 2018,
  rating: 4.5,
  director: 'Unbelievable director'
};

showProperties(movie);

function showProperties(obj) {
  let count = 0;
  for (let key in obj) {
    if (typeof obj[key] === 'string')
      console.log(key, obj[key]);
  }
}
```

---

### Exercise: Sum of Multiples of 3 and 5
Create a function `sum` that takes a `limit` parameter, the function should return the of all multiples of `3` and `5` from `0` up to this `limit`.

```js
console.log(sum(10));

function sum(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++)
    if (i % 3 === 0 || i % 5 === 0)
      sum += i;

  return sum;
}
```

---

### Exercise: Grade
Calculate the grade of the student. The function `calculateGrade` should calculates the average grade.

```js
const marks = [80, 80, 50]; // 210 / 3

// Average = 70;
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  const average = calculateAverage(marks);

  if (average < 60) return 'F';
  if (average < 70) return 'D';
  if (average < 80) return 'C';
  if (average < 90) return 'B';
  return 'A';
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array)
    sum += value;
  return sum / array.length;
}
```

---

### Exercise: Stars
Create a function `showStars` that takes `rows` as a parameter. When we call the function it should display the star and the number of stars in that row depends on the row we are in.

```js
showStars(5);

function showStars(rows) {
  let stars = 0;
  for (let row = 1; row <= rows; row++) {
    let pattern = '';
    for (let i = 0; i < row; i++) {
      pattern += '*';
    }
    console.log(pattern);
  }
}
```

### Exercise: Prime Number
---

## Objects

## Arrays

## Functions