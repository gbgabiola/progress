# [A Smarter Way to Learn JavaScript](https://www.amazon.com/Smarter-JavaScript-tech-assisted-approach-requires/dp/1497408180/ref=tmm_pap_swatch_0) by Mark Myers


## Chapter 1 - Alerts

`alert` is a keyword—that is, a word that has special meaning for JavaScript. It means,
"Display, in an alert box, the message that follows.

`alert("Thanks for your input!");`

In coding, the quoted text "Thanks for your input!" is called a _text string_ or simply a _string_.

JavaScript ignores spaces (except in text strings).

In scripting, a
careful coder ends every statement with a semicolon, (sometimes complex, paragraph-like
statements end with a curly bracket instead of a semicolon).

**Coding alternatives to be aware of:**
- Some coders write `window.alert` instead of, simply, `alert`. This is a highly formal but perfectly correct way to write it. Most coders prefer the short form.
- Some coders would use single rather than double quotation marks. This is legal, as long as it's a matching pair.


## Chapter 2 - Variables for Strings

A variable is created when you write `var` (for variable) followed by the name that you
choose to give it. It takes on a particular value when you assign the value to it. This is a JavaScript statement that creates the variable `name` and assigns the value "Mark" to it.

`var name = "Mark";`

The value that a variable refers to can change.

name = "Ace";

Remember, `var` is the keyword that creates a variable and declares it. Once a variable has been declared, you don't have to declare it again. You can just assign the new value to it

You can declare a variable in one statement, leaving it _undefined_. Then you can assign a
value to it in a later statement, without declaring it again.

```js
var nationality;
nationality = "U.S.";
```

In the example above, the assignment statement follows the declaration statement
immediately. But any amount of code can separate the two statements, as long as the
declaration statement comes first.

You _can use_ just any word (as long as it doesn't break the rules of variable-naming), but you'll want to give your variables meaningful names, because it'll help you and other coders understand your code.

## Chapter 3 - Variables for Numbers

You can also assign a number to a variable. Unlike a string, a number is not enclosed in quotes. A number, or any combination of characters starting with a number, can't be used as a variable name. If it's a number, JavaScript rejects it as a variable.

`var weight = 150;`

You can use this variable in math calculations. If you ask JavaScript to add 25 to `weight`...

`weight + 25`

If you enclose a number in quotation marks, it's a string. JavaScript can't do addition on it. It can do addition only on numbers not enclosed in quotes.

```js
var originalNum = 23;
var newNum = originalNum + 7;
```

In the second statement in the code above, JavaScript substitutes the number 23 when it encounters the variable `originalNum`. It adds 7 to 23. And it assigns the result, 30, to the variable `newNum`.

JavaScript can also handle an expression made up of nothing but variables. For
example...

```js
var originalNum = 23;
var numToBeAdded = 7;
var newNum = originalNum + numToBeAdded;
```

A variable can be used in calculating its own new value.

```js
var originalNum = 90;
originalNum = originalNum + 10;
```

If you enclose a number in quotation marks and add 7 it won't work, because JavaScript can't sum a string and a number. JavaScript interprets
"23" as a word, not a number

Conveniently, if you specify a number instead of a string as an alert message...

`alert(144);`

..or if you specify a variable that represents a number as an alert message...

```js
var caseQty = 144;
alert(caseQty);
```

...JavaScript automatically converts it to a string and displays it.


## Chapter 4 - Variable Names Legal and Illegal

Rules in naming variables.
- You can't enclose it in
quotation marks.
- The name can't be a number or start with a number.
-It can't be any of JavaScript's keywords—the special words that act as programming instructions, like `alert` and `var`.
- A variable name can't contain any spaces.
- A variable name can contain only letters, numbers, dollar signs, and underscores.
- Though a variable name can't be any of JavaScript's keywords, it can contain keywords.
For example, userAlert and myVar are legal.
- Capital letters are fine, but be careful. Variable names are case sensitive.
- Use camelCase as a variable naming convention when there are words, it'll make your variable names more readable.

  ```js
  userResponse
  userResponseTime
  userResponseTimeLimit
  response
  ```

- Make your variable names descriptive, so it's easier to figure out what your code means
when you or someone else comes back to it three weeks or a year from now.


## Chapter 5 - Math expressions: Familiar operators
Wherever you can use a number, you can use a math expression.

```js
var popularNumber = 4;
var popularNumber = 2 + 2;
alert(2 + 2);
```

This displays the messge "4" in an alert box. When it sees a math expression, JavaScript always does the math and delivers the result

```js
var popularNumber = 12 - 24; // subtracts 24 from 12, assigning -12 to the variable
var popularNumber = 3 * 12; // assigns the product of 3 times 12, 36, to the variable

var num = 10; // 10 is assigned to a variable
var popularNumber = num + 200; // then 10 is added to the variable, and the sum, 210, is assigned to popularNumber
// you can mix variables and numbers.
```

You can also use nothing but variables.
```js
var num = 10;
var anotherNum = 1;
var popularNumber = num + anotherNum;
```

Arithmetic operators, +, -, *, /, and %.

`%` is the _modulus operator_. It doesn't give you the result of dividing one number by another. It gives you the _remainder_ when the division is executed.

If one number divides evenly into another, the modulus operation returns 0. In the
following statement, 0 is assigned to the variable.

`var whatsLeftOver = 9 % 3; // 0`


## Chapter 6 - Math expressions: Unfamiliar operators

To increments and decrements the variable by 1.

```js
num++;
num--;
// is just the same as
num = num + 1;
num = num - 1;
```

You can use these expressions in an assignment.  

```js
var num = 1;
var newNum = num++;
```

The original value of `num` is assigned to `newNum`, and `num` is incremented afterward. If `num` is originally assigned 1 in the first statement, the second
statement boosts its value to 2. `newNum` gets the original value of `num`, 1.

```js
var num = 1;
var newNum = ++num;
```

In the statements above, both `num` and `newNum` wind up with a value of 2.
If you put the minuses after the variable, the new variable is assigned the original value,
and the first variable is decremented.

```js
var num = 1;
var newNum = num--;
```

`num` is decremented to 0, and `newNum` gets the original value of `num`, 1.

But if you put the minuses before the variable, `newNum` is assigned the decremented, not the original, value. Both `num` and `newNum` wind up with a value of 0.

```js
var num = 1;
var newNum = --num;
```


## Chapter 7 - Math expressions: Eliminating ambiguity

In JavaScript as in algebra, the ambiguity is cleared up by precedence rules. You can finesse
the issue by using parentheses to eliminate ambiguity. Parens override all the built-in precedence rules. They force JavaScript to complete operations enclosed by parens before completing any other operations.

When you use parens to make your intentions clear to JavaScript, it also makes your code
easier to grasp, both for other coders and for you when you're trying to understand your own
code a year down the road.

`var resultOfComputation = (2 * 4) * 4 + 2;`

By placing the first multiplication operation inside parentheses, you've told JavaScript to
do that operation first. But then what? The order could be..

1. Multiply 2 by 4.
2. Multiply that product by 4.
3. Add 2 to it.  
...giving `resultOfComputation` a value of 34.  
Or the order could be...
   1. Multiply 2 by 4.
   2. Multiply that product by the sum of 4 and 2.  
   ...giving resultOfComputation a value of 48.  
   The solution is more parentheses.

If you want the second multiplication to be done before the 2 is added, write this..

`resultOfComputation = ((2 * 4) * 4) + 2;`

But if you want the product of 2 times 4 to be multiplied by the number you get when you total 4 and 2, write this...

`resultOfComputation = (2 * 4) * (4 + 2)`


## Chapter 8 - Concatenating text strings

When the user provided her name, we assigned it to the variable `userName`.

`alert("Thanks, " + userName + "!");`

Using the plus operator, the code combines—concatenates—three elements into the
message: the string "Thanks, " plus the string represented by the variable `userName` plus the string "!"

**Note** that the first string includes a space. Without it, the alert would read,
"Thanks,Susan!".

You can assign a concatenation to a variable.

```js
var message = "Thanks, ";
var userName = "Susan";
var banger = "!";
var customMess = message + userName + banger;
alert(customMess); // Thanks, Susan!
```

If you put numbers in quotes, JavaScript concatenates them as strings rather than adding
them.

`alert("2" + "2");`  
displays the message`"22"` 

`alert("2 plus 2 equals " + 2 + 2);`  
...JavaScript automatically converts the numbers to strings, and displays the message "2
plus 2 equals 22".


## Chapter 9 - Prompts


### Interactive Coding exercise:
- [Chapter 1](http://www.asmarterwaytolearn.com/javascript/1.html)
- [Chapter 2](http://www.asmarterwaytolearn.com/javascript/2.html)
- [Chapter 3](http://www.asmarterwaytolearn.com/javascript/3.html)
- [Chapter 4](http://www.asmarterwaytolearn.com/javascript/4.html)
- [Chapter 5](http://www.asmarterwaytolearn.com/javascript/5.html)
- [Chapter 6](http://www.asmarterwaytolearn.com/javascript/6.html)
- [Chapter 7](http://www.asmarterwaytolearn.com/javascript/7.html)
- [Chapter 8](http://www.asmarterwaytolearn.com/javascript/8.html)