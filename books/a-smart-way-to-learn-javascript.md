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


## Chapter 10 - _if_ statements
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


## Chapter 12 - _if...else_ and _else if_ statements
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

  `Over 65 or under 21 | Resident of U.S.`

- If the person is over 65 and living anywhere or is under 21 and a resident of the U.S.
 
  `Over 65 | under 21 and U.S. resident`

It's the same problem  when you combine mathematical expressions. And solved it the same way: with parentheses.  
If the subject is over 65 and a U.S. resident, it's a pass. Or, if the subject is under 21 and a U.S. resident, it's a pass.

```js
if ((age > 65 || age < 21) && res === "U.S.") {
```

If the subject is over 65 and living anywhere, it's a pass. Or, if the subject is under 21 and living in the U.S., it's a pass.

```js
if (age > 65 || (age < 21 && res === "U.S.")) {
```


## Chapter 14 - _if_ statements nested
If either of the first conditions is true, and, in addition, the third
condition is true, then `g` is assigned `h`. Otherwise, `e` is assigned `f`.

```js
if ((x === y || a === b) && c === d) {
  g = h;
}
else {
  e = f;
}
```

Another way using _nesting_.

```js
if (c === d) {
  if (x === y) {
    g = h;
  }
  else if (a === b) {
    g = h;
  }
  else {
    e = f;
  }
}
else {
  e = f;
}
```

Nest levels are communicated to JavaScript by the positions of the curly brackets. There are three blocks nested inside the top-level _if_. If the condition tested by the top-level _if_—that `c` has the same value as `d`—is false, none of the blocks nested inside executes. The opening curly bracket on line 1 and the closing curly bracket on line 11 enclose all the nested code, telling JavaScript that everything inside is second-level.

For readability, a lower level is indented 2 spaces beyond the level above it.

In the relatively simple set of tests and outcomes it's better to use the more concise structure of multiple conditions. But when things get really complicated, nested ifs are a good way to go.


## Chapter 15 - Arrays
```js
var city0 = "Atlanta";
var city1 = "Baltimore";
var city2 = "Chicago";
var city3 = "Denver";
var city4 = "Los Angeles";
var city5 = "Seattle";
```

```js
alert("Welcome to " + city3); // Welcome to Denver
```

Ordinary variable has a single value assigned to it.  
**Array** is a variable that can have multiple values assigned to it.

```js
var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];
```

JavaScript numbers the different values, or elements, automatically. (You can control the numbering yourself by defining elements individually.

And you refer to each element by writing the array name which is `cities` in this case, followed by a number enclosed in square brackets. `cities[0]` is "Atlanta", `cities[1]` is "Baltimore", and so on..  
Because JavaScript automatically numbers array elements, you have no say in the numbering. The first element in the list always has an _index_ of 0, the second element an index of 1, and so on.


This is the same alert in the beginning of this chapter, but now specifying an array element instead of an ordinary variable.

```js
alert("Welcome to " + cities[3]); // Welcome to Denver
```

An array can be assigned any type of value that you can assign to ordinary variables. You can even mix the different types in the same array (not that you would ordinarily want to).

`var mixedArray = [1, "Bob", "Now is", true];`

**Things to keep in mind:**
- The first item always has an index of 0, not 1. This means that if the last item in the list has an index of 9, there are 10 items in the list.
- The same naming rules with ordinary variables apply. Only letters, numbers, `$` and `_` are legal. The first character can't be a number. No spaces.
- Coders often prefer to make array names plural—`cities` instead of `city`, since an array is a list of things.
- Like an ordinary variable, you declare an array only once. If you assign new values to an array that has already been declared, you drop the `var`.


## Chapter 16 - Arrays: Adding and removing elements
In variable, you can declare it empty, one that doesn't have a value. Then assign or change the value, that's the same with an array. This is an empty array.

`var pets = []`

Assume that the array `pets` has already been declared. This is how you assign values to it.

```js
pets[0] = "dog";
pets[1] = "cat";
pets[2] = "bird";
```

If you refer to `pets[4]` which is not assigned, you'll get `undefined`.  
If you assign a new value to an array element that already has one, the old value is replaced by the new one.

**pop** keyword, you can remove the last element of an array.  
Suppose you have an array, `pets`, whose elements are "dog", "cat", and "bird". The following code deletes the last element, "bird", leaving a two-element array.

`pets.pop();`

**push** keyword, you can add one or more elements to the end of an array.  
Suppose you have that same array consisting of "dog", "cat", and "bird". The following code adds two new elements to the end of the array.

`pets.push("fish", "ferret");`


## Chapter 17 - Arrays: Removing, inserting, and extracting elements
**shift** method to remove an element from the beginning of an array.  
Suppose you have an array, `pets`, whose elements are "dog", "cat", and "bird". The following removes the first element, "dog", leaving you with a two-element array.

`pets.shift();`

**unshift** method to add one or more elements to the beginning of an array.

`pets.unshift("fish", "ferret");`

**splice** method to insert one or more elements anywhere in an array, while
optionally removing one or more elements that come after it.  
Suppose you have an array with the elements "dog", "cat", "fly", "bug", "ox". The following code adds "pig", "duck", and "emu" after "cat" while removing "fly" and "bug".

`pets.splice(2, 2, "pig", "duck", "emu");`

The first digit inside the parentheses is the index of the position where you want to start adding if you're adding and deleting if you're deleting. The second digit is the number of existing elements to remove, starting with the first element that comes after the element(s) that you're splicing in. The code above leaves you with an array consisting of "dog", "cat", "pig", "duck", "emu", and "ox".  
You could make additions without removing any elements.
adds "pig", "duck", and "emu" without removing any elements

`pets.splice(2, 0, "pig", "duck", "emu")`

You can also remove elements without adding any. If you start with the elements "dog", "cat", "fly", "bug", and "ox", the following code removes two elements starting at index 3—"bug" and "ox". This leaves "dog", "cat", and "fly".

`pets.splice(2, 2);`

Use the `slice` method to copy one or more consecutive elements in any position and put them into a new array. If you start with an array, pets, consisting of "dog", "cat", "fly", "bug", and "ox", the following code copies "fly" and "bug" to the new array `noPets` and leaves the
original array, `pets`, unchanged.

`var noPets = pets.slice(2, 4);`

The first digit inside the parentheses is the index of the first element to be copied. The second digit is the index of the element after the last element to be copied.  
**Two things could trip you up here:**
- Since the first index number inside the parentheses specifies the first element to be copied, you might think the second index number specifies the last element to be copied. In fact, the second number specifies the index number of the element after the last element to be copied.
- You must assign the sliced elements to an array. It could, of course, be the same array from which you're doing the slicing. In that case, you'd be reducing the original array to only the copied elements.


## Chapter 18 - Loops
In coding, suppose you've offered to check if the user's city is one of the 5 cleanest in the U.S. The user has entered her city, and you've assigned her city to the variable `cityToCheck`.  
You've already assigned the list of the 5 cleanest cities to the array `cleanestCities`.

`var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];`

Now you go through the array to see if there's a match with the user's city. If there is, you display an alert telling the user her city is one of the cleanest. If there's no match, you display an alert telling the user her city isn't on the list

```js
if (cityToCheck === cleanestCities[0]) {
  alert("It's one of the cleanest cities");
}
else if (cityToCheck === cleanestCities[1]) {
  alert("It's one of the cleanest cities");
}
else if (cityToCheck === cleanestCities[2]) {
  alert("It's one of the cleanest cities");
}
else if (cityToCheck === cleanestCities[3]) {
  alert("It's one of the cleanest cities");
}
else if (cityToCheck === cleanestCities[4]) {
  alert("It's one of the cleanest cities");
}
else {
  alert("It's not on the list");
}
```

In JavaScrit, there is **_for loop_**.

```js
for (var i = 0; i <= 4; i++) {
  if (cityToCheck === cleanestCities[i]) {
    alert("It's one of the cleanest cities");
  }
}
```

The three specifications that define the loop are inside the parentheses.
1. A variable that counts iterations and also serves as the changing array index is declared and set to a starting value, in this case 0.
2. The limit on the loop is defined. In this case, the loop is to keep running as long as the counter doesn't exceed 4. Since the counter, in this case, is starting at 0, the loop will run 5 times.
3. What happens to the counter at the end of every loop. In this case, the counter is incremented each time.

The three specifications inside the parentheses are always in the same order:
1. What to call the counter (usually i) and what number to start it at (typically 0)
2. How many loops to run (in this case, the number of elements in the array)
3. How to change the counter after each iteration (typically to add 1 each time through)

**Things to keep in mind:**
- In the example, the counter, `i`, serves two purposes. It keeps track of the number of iterations so looping can halt at the right point. And it serves as the index number of the array, allowing the code to progress through all the elements of the array as the counter increments with each iteration.
- There is nothing sacred about using `i` as the counter. You can use any legal variable name. But coders usually use `i` because it keeps the first line compact, and because coders understand that `i` stands for "iteration."
- In the example, the initial count is 0, the index number of the first element of the array. But it could be any number, depending on your needs.
- In the example, the counter increments with each iteration. But, depending on your needs, you can decrement it, increase it by 2, or change it in some other way each time through
- In the example, We specify that the loop is to run as long as `i <= 4`. Alternatively, I could have specified `i < 5`. Either way, since the counter starts at 0, the loop runs 5 times.


## Chapter 19 - _for_ loops: Flags, Booleans, array length, and loopus interruptus
If a match between the user's city and the list of cleanest cities is found, a confirming alert displays. But if there is no match, nothing happens. If no match is found, we need to display an alert saying so.  
We do it with a flag. A flag is just a variable that starts out with a default value that you give it, and then is switched to a different value under certain conditions.

`var matchFound = "no"; // let's say this is the flag`

If a match is found, the value of the flag is changed. At the end, if the flag _hasn't_ been changed—if it still has the original value of "no"—it means no match was found, and so we display an alert saying the city isn't on the list.

```js
var matchFound = "no";
for (var i = 0; i <= 4; i++);
  if (cityToCheck === cleanestCities[i]) {
    matchFound = "yes";
    alert("It's one of the cleanest cities");
  }
}
if (matchFound === "no") {
  alert("It's not on the list");
}
```

This works, but rather than assigning the strings "no" and "yes" to the switch, it's conventional to use the _Boolean_ values `false` and `true`.

```js
var matchFound = false;
for (var i = 0; i <= 4; i++);
  if (cityToCheck === cleanestCities[i]) {
    matchFound = true;
    alert("It's one of the cleanest cities");
  }
}
if (matchFound === false) {
  alert("It's not on the list");
}
```

There are only two Booleans, `true` and `false`. Note that they aren't enclosed in quotes.

Next is that it potentially wastes computing cycles. Suppose on the second loop a match is found and the alert displays. The way the loop is coded, the loop goes on looping all the way to the end. This is unnecessary, since we got our answer in the second loop. The problem is solved with the keyword `break`.

```js
var matchFound = false;
for (var i = 0; i <= 4; i++);
  if (cityToCheck === cleanestCities[i]) {
    matchFound = true;
    alert("It's one of the cleanest cities");
    break;
  }
}
if (matchFound === false) {
  alert("It's not on the list");
}
```


Lastly, we assume that the number of elements in the array is known, but what if it isn't? JavaScript has a way of finding out. The following code assigns the number of elements in the array `cleanestCities` to the variable `numElements`.

`var numElements = cleanestCities.length;`

Now we can limit the number of loops to the count that JavaScript comes up with.

```js
var numElements = cleanestCities.length;
var matchFound = false;
for (var i = 0; i < numElements; i++);
  if (cityToCheck === cleanestCities[i]) {
    matchFound = true;
    alert("It's one of the cleanest cities");
    break;
  }
}
if (matchFound === false) {
  alert("It's not on the list");
}
```

Now the loop keeps going as long as `i` is less than the number of elements. (Since the `length` number is 1-based and the `i` number is 0-based, we need to stop 1 short of the length.)


## Chapter 20 - _for_ loops nested
Atlantic Records has hired you and me to generate a list of names for future rap stars. To make things easy, we'll start by making separate lists of some first names and last names.

      | First names | Last names |
      | ----------- | ---------- |
      | BlueRay     | Zzz        |
      | Upchuck     | Burp       |
      | Lojack      | Dogbone    |
      | Gizmo       | Droop      |
      | Do-Rag      |            |

By combining each of the first names with each of the last names, we can generate 20 different full names for rappers.  
Starting with "BlueRay," we go through the list of last names, generating...
- BlueRay Zzz
- BlueRay Burp
- BlueRay Dogbone
- BlueRay Droop

We move to the next first name, "Upchuck." Again, we go through the list of last names, generating...
- Upchuck Zzz
- Upchuck Burp
- Upchuck Dogbone
- Upchuck Droop

And so on, combining each first name with each last name.  
But look, why not have JavaScript do the repetitive work? We'll use nested for statements.

```js
var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];
for (var i = 0; i < firstNames.length; i++) {
  for (var j = 0; j < lastNames.length; j++) {
    fullNames.push(firstNames[i] + lastNames[j]);
  }
}
```

**Things to think about:**
- The inner loop runs a complete cycle of iterations on each iteration of the outer loop. If the outer loop counter is i and the inner loop counter is j, j will loop through 0, 1, 2, and all the way to the end while i is on 0. Then i will increment to 1, and j will loop through all of its values again. The outer loop is the minute hand of a clock. The inner loop is the second hand.
- You can have as many levels of nesting as you like.
- A nested loop is indented 2 spaces beyond its outer loop


## Chapter 21 - Changing case
..



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
- [Chapter 12](http://www.asmarterwaytolearn.com/javascript/12.html)
- [Chapter 13](http://www.asmarterwaytolearn.com/javascript/13.html)
- [Chapter 14](http://www.asmarterwaytolearn.com/javascript/14.html)
- [Chapter 15](http://www.asmarterwaytolearn.com/javascript/15.html)
- [Chapter 16](http://www.asmarterwaytolearn.com/javascript/16.html)
- [Chapter 17](http://www.asmarterwaytolearn.com/javascript/17.html)
- [Chapter 18](http://www.asmarterwaytolearn.com/javascript/18.html)
- [Chapter 19](http://www.asmarterwaytolearn.com/javascript/19.html)
- [Chapter 20](http://www.asmarterwaytolearn.com/javascript/20.html)