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
A _prompt box_ asks the user for some information and provides a response field for her answer.

Prompt code is like alert code, with two differences.
- In a prompt, you need a way to capture the user's response. That means you need to start by declaring a variable, followed by an equal sign.
- In a prompt, you can specify a second string. This is the default response that appears in the field when the prompt displays. If the user leaves the default response as-is and just clicks **OK**, the default response is assigned to the variable. It's up to you whether you
include a default response.

Assigning the strings to variables, then specify the variables instead of strings inside the parentheses.

```js
var question = "Your species?";
var defaultAnswer = "human";
var spec = prompt(question, defaultAnswer);
```

The user's response is a text string. Even if the response is a number, it comes back as a string.

```js
var numberOfCats = prompt("How many cats?");
var tooManyCats = numberOfCats + 1;
// example you enter number 3
// "3" + 1 = "31"
```

All responses to prompts come back as strings. When the string, "3", is linked with a plus to the number, 1,
JavaScript converts the 1 to a string and concatenates.

If the user enters nothing and clicks **OK**, the variable is assigned an empty string: "" If the user clicks **Cancel**, the variable is assigned a special value, **null**.

**Coding alternatives to be aware of:**
- Some coders write `window.prompt` instead of, simply, `prompt`. This is a highly formal but perfectly correct way to write it. Most coders prefer the short form. We'll stick to the short form in this training.
- Some coders would use single rather than double quotation marks. This is legal, as long as it's a matching pair


## Chapter 10 - if statements
You prompt that asks, "Where does the Pope live?". If the user answers correctly, display an alert congratulating him.

```js
var x = prompt("Where does the Pope live?");
if (x === "Vatican") {
  alert("Correct!");
}
```

If the user enters "Vatican" in the prompt field, the congratulations alert displays. If he enters something else, nothing happens.  
An if statement always begins with if, then a space betweet if and parenthesis.
It's purely a matter of style, but common style rules sanction this inconsistency.

Following the `if` keyword-plus-space is the condition that's being tested—does the variable that's been assigned the user's response have a value of "Vatican"?  
The condition is enclosed in parentheses.  
If the condition tests true, something happens. Any number of statements might execute.

The first line of an if statement ends with an opening curly bracket. An entire if statement ends with a closing curly bracket on its own line. Note that this is an exception to the rule that a statement ends with a semicolon. It's common to omit the semicolon when it's a complex statement that's paragraph-like and ends in a curly bracket.

Equal sign ( `=` ) is reserved for _assigning_ a value to a variable. If you're _testing_ a variable for a value, you can't use the single equal sign.  
If you forget this rule and use a single equal sign when you should use the triple equal sign, the code won't run properly.  
You can also use a variable instead of a string, and when a condition is met, you can have any number of statements execute.

```js
var correctAnswer = "Vatican";
if (x === correctAnswer) {
  score++;
  userIQ = "genius";
  alert("Correct!");
}
```

**Coding alternatives to be aware of:**
- Some coders write simple if statements without curly brackets, which is legal. Some put the opening curly bracket on its own line. Some put the whole if statement, if it's simple, on a single line.
- In most cases, a double equal sign `==` is just as good as a triple equal sign `===`. To keep things simple, always use the triple equal sign.


## Chapter 11 - Comparison operators
`===` is a type of _comparison operator_, specifically an
equality operator, to _compare_ two things to see if they're _equal_.

You can use the equality operator to compare a variable with a string, a variable with a number, a variable with a math expression, or a variable with a variable. And you can use it to compare various combinations.

```js
if (fullName === "Mark" + " " + "Myers") {
if (fullName === firstName + " " + "Myers") {
if (fullName === firstName + " " + "Myers") {
if (fullName === firstName + " " + lastName) {
if (totalCost === 81.50 + 135) {
if (totalCost === materialsCost + 135) {
if (totalCost === materialsCost + laborCost) {
if (x + y === a - b) {
```

When you're comparing strings, the equality operator is case-sensitive. "Rose" does not equal "rose."

`!==`, is the opposite of `===`. It means _is not equal to_.

```js
if (yourTicketNumber !== 487208) {
  alert("Better luck next time.");
}
```

Like `===`, the not-equal operator can be used to compare numbers, strings, variables, math expressions, and combinations.  
Like `===`, string comparisons using the not-equal operator are case-sensitive. It's true that "Rose" `!==` "rose".

### 4 more comparison operators, usually used to compare numbers.
- `>` is greater than
- `<` is less than
- `>=` is greater than or equal to
- `<=` is less than or equal to

All conditions are true in here:
```js
if (1 > 0) {
if (0 < 1) {
if (1 >= 0) {
if (1 >= 1) {
if (0 <= 1) {
if (1 <= 1) {
```

**Coding alternatives to be aware of:**
- Just as the double equal sign can usually be used instead of the triple equal sign, `!=` can usually be used instead of `!==`.


## Chapter 12 - if...else and else if statements
If the condition is false we can do it like this..

```js
var x = prompt("Where does the Pope live?");
if (x === "Vatican") {
  alert("Correct!");
}
if (x !== "Vatican") {
  alert("Wrong answer");
}
```

but it is much better, concise and, more readable if we do it like these..

```js
if (x === "Vatican") {
  alert("Correct!");
}
else {
  alert("Wrong answer");
}
```

The _else_ part has exactly the same formatting as the _if_ part.  
As in the _if_ part, any number of statements can execute within the _else_ part.

**_else if_** is used if all tests above have failed and you want to test another condition.

```js
var correctAnswer = "Vatican";
if (x === correctAnswer) {
  alert("Correct!");
}
else if (x === "Rome") {
  alert("Incorrect but close");
}
else {
  alert("Incorrect");
}
```
In a series of if tests, JavaScript stops testing whenever a condition tests true.

**Coding alternatives to be aware of:**
- There are so many ways to format if statements and their variations that the range of possibilities is almost endless.


## Chapter 13 - Testing sets of conditions
If the condition is met, one or
more statements execute. But if we need to meet two conditions in order to succeed the test, then we can use `&&` (**AND**) to chain any number of conditions together.

If a guy weighs more than 300 pounds, he's just a great big guy. But if he
weighs more than 300 pounds _and_ runs 40 yards in under 6 seconds? You're going to invite him to try out for the NLF as a lineman.

```js
if (weight > 300 && time < 6 && age > 17 && gender === "male") {
  alert("Come to our tryout!");
}
else {
  alert("Come to our cookout!");
}
```

If any or all of the conditions are true
`||` (**OR**) to test if any or all of the set of conditions are true.

```js
if (SAT > avg || GPA > 2.5 || sport === "football") {
  alert("Welcome to Bubba State!");
}
else {
  alert("Have you looked into appliance repair?");
}
```

Combine any number of _and_ and _or_ conditions. 

`if (age > 65 || age < 21 && res === "U.S.") {`

This can be read in either of two ways:
- If the person is over 65 or under 21 and, in addition to either of these conditions, is also a resident of the U.S. Under this interpretation, both columns need to be true in the following table to qualify as a pass.

  | | |
  | --- | --- |
  | Over 65 or under 21 | Resident of U.S. |
  |

- If the person is over 65 and living anywhere or is under 21 and a resident of the U.S.

  | | |
  | --- | --- |
  | Over 65 | under 21 and U.S. resident |
  |

It's the same problem  when you combine mathematical expressions. And solved it the same way: with parentheses.  
If the subject is over 65 and a U.S. resident, it's a pass. Or, if the subject is under 21 and a U.S. resident, it's a pass.

```js
if ((age > 65 || age < 21) && res === "U.S.") {
```

If the subject is over 65 and living anywhere, it's a pass. Or, if the subject is under 21 and living in the U.S., it's a pass.

```js
if (age > 65 || (age < 21 && res === "U.S.")) {
```


## Chapter 14 - if statements nested




### Interactive Coding exercise:
- [Chapter 1](http://www.asmarterwaytolearn.com/javascript/1.html)
- [Chapter 2](http://www.asmarterwaytolearn.com/javascript/2.html)
- [Chapter 3](http://www.asmarterwaytolearn.com/javascript/3.html)
- [Chapter 4](http://www.asmarterwaytolearn.com/javascript/4.html)
- [Chapter 5](http://www.asmarterwaytolearn.com/javascript/5.html)
- [Chapter 6](http://www.asmarterwaytolearn.com/javascript/6.html)
- [Chapter 7](http://www.asmarterwaytolearn.com/javascript/7.html)
- [Chapter 8](http://www.asmarterwaytolearn.com/javascript/8.html)
- [Chapter 9](http://www.asmarterwaytolearn.com/javascript/9.html)
- [Chapter 10](http://www.asmarterwaytolearn.com/javascript/10.html)
- [Chapter 11](http://www.asmarterwaytolearn.com/javascript/11.html)