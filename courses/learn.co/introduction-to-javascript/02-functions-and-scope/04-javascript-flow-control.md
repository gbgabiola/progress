# JavaScript Flow Control

## Objectives

- Write `if` statements in JS
- Write `if`-`else if`-`else` statements in JS
- Use the ternary operator in JS
- Write `switch` statements in JS

## About

Sometimes, we only want to allow the execution of code under certain conditions.

Think of it this way. When you're driving a car, you can only go through a light **if** the light is green. **Otherwise**, if the light is yellow, you prepare to slow down; and if the light is red, you stop. Notice that we have distinct cases that we want to check for.

In programming, when we check for a statement in this way, we check to see whether the statement is `true` or `false`. JavaScript, being the friendly language that it is, uses `true` and `false` directly to mean exactly what they say.

## Comparisons

The example above might be written, in pseudo-JavaScript (for once, this won't work in the browser console), like this:

```js
if (lightIsGreen) {
  go();
} else if (lightIsRed) {
  stop();
} else if (lightIsYellow) {
  slowDown();
}
```

When we get down to it, every `if` statement like the above is saying, "If the thing in the parentheses is `true`, then do what's between the curly braces."

But before we dive in to `if` statements, how do the things in parentheses _become_ `true` or `false`?

JavaScript lets us compare things. Most of these comparisons come straight from math: we can ask if something is less than something else (enter these in your console!):

```js
3 < 5; // true
3 < 2; // false
3 < 3; // false
3 < 10000000; // true
"alpha" < "beta"; // true (!)
```

We can ask if something is greater than something else:

```js
5 > -1; // true
5 > 5; // false
20 > 30; // false
"gamma" > "beta"; // true (!)
```

We can even ask if something is less-than-or-equal-to something else:

```js
20 <= 30; // true
20 <= 20; // true
20 <= 10; // false
```

or greater-than-or-equal-to something:

```js
5 >= 5; // true
5 >= 1; // true
5 >= 10; // false
```

How do we test if something is _exactly_ equal to something else? We know that we can't just use `=`, because that's how we assign values to variables. Instead, we need to use `===`:

```js
5 === 5; // true
4 === 5; // false
"5" === 5; // false
parseInt("5", 10) === 5; // true
```

**Top Tip**: Sometimes you'll see only `==` for comparison in JavaScript. It's best to use `===`, as the former will try to _coerce_ values in order to compare them, meaning that it's not always comparing what it _says_ it's comparing!

## Combining Comparisons

We can combine these comparisons together using `&&` (pronounced "and") and `||` ("or"):

```js
5 === 5 && 10 < 11; // true
5 === 6 && 10 < 11; // false
5 === 5 && 10 < 9; // false

4 > 5 || 20 <= 20; // true
4 > 5 || 20 < 19; // false
4 > 3 || 20 < 19; // true
```

With `&&`, _both_ statements (to the left and right of `&&`) must be `true` in order for the entire _expression_ (that is, the entire _phrase_) to be `true`; with `||`, only one of the statements needs to be `true`.

Keep in mind that JavaScript reads these combinations from left to right, returns the last statement it saw, and only evaluates as many statements as necessary. So if we write,

```js
5 === 5 && 1;
```

JavaScript won't return `true`, it will return `1`. If instead we write,

```js
5 === 4 && 0;
```

JavaScript will return `false`, because it stops evaluating the `&&` expression (again, this just means the entire phrase of comparisons) on its first false encounter. Similarly, if we write,

```js
200 < 100 || "alphabet";
```

JavaScript will return 'alphabet', because it needs to evaluate the right-hand side of `||` (since `200 < 100` is `false`). But if we write,

```js
200 > 100 || "treasure";
```

JavaScript simply returns `true` — it doesn't even check the right-hand side of `||`.

## Controlling the flow of our programs

JavaScript lets us control what blocks of code to execute using `if` statements, `if`-`else` statements, `if`-`else if`-`else` statements, ternary operators, and `switch` statements.

You'll be writing your code in `flow-control.js`. Make sure to run the tests using `learn`.

### `if` Statements

`if` statements look like this:

```javascript
if (something) {
  // do something
}
```

They work as the name implies: _if_ `something` is _truthy_ (so the boolean `true` or anything other than the empty string (`''`), `0`, `false`, `null`, or `undefined`), the code in between the curly braces runs; if not, the code between the curly braces is skipped.

Now, in `flow-control.js` let's write a function called `basicTeenager` that accepts an age as a parameter. The function should contain an if-statement that checks to see if the age is a teenager. If the age is between 13 and 19, return `"You are a teenager!"`

### `if`-`else` Statements

You will often see an `if` statement used in combination with an `else` clause. An `else` clause will only get executed if the previous `if` statement is falsey.

Syntax:

```js
if (conditionToTest) {
  // executed if `conditionToTest` is truthy
} else {
  // executed if `conditionToTest` is falsey
}
```

- Define a function `teenager` that accepts an age as a parameter. If the age is between 13 and 19 it should return `"You are a teenager!"`. Otherwise, the function should return `"You are not a teenager"`.

### `if`/`else if` Statements

`if` statements can also be combined with an `else if` clause. This is like an `else` statement, but with its own condition. It will only run if its condition is true, and the previous statement's condition was false.

```js
if (conditionToTest1) {
  // condition is false hence code is not executed
} else if (conditionToTest2) {
  // execute this code if `conditionToTest1`statement is falsey AND `conditionToTest2` is truthy
}
```

You can optionally add a final `else` statement after all of your `else if` statements. You can probably guess what will happen: if _all of the other statements_ are falsey, this final `else` block will execute; otherwise, an earlier statement executes and the `else` block is skipped.

```js
if (conditionToTest1) {
  // condition is false hence code is not executed
} else if (conditionToTest2) {
  // execute this code if `conditionToTest1` statement is falsey AND `conditionToTest2` is truthy
} else {
  // execute this code if none of the other conditions are met
}
```

- Define a function `ageChecker` that takes in an age as a parameter. If the age is between 13-19 it should return `"You are a teenager!"`. If the age is 12 or below, it should return `"You are a kid"`. If the age is above 19, it should return `"You are a grownup"`

**Top tip**: Remember, if you place a `return` statement before the end of the function, anything after `return` **won't get executed**. We can use this to make code terser:

```js
function canGo(lightColor) {
  if (lightColor === "green") {
    return true;
  }

  return false;
}
```

The above function will return `true` if `lightColor` is `'green'` — go ahead
and try it out.

```js
canGo("green"); // true
```

And `false` otherwise:

```js
canGo("red"); // false
```

Notice that we didn't have to use an `else` statement; we can just depend on
`return`.

We need to be careful with `return`, however, because it's easy to return too
early and not execute important parts of the function. For example,

```js
function canGo(lightColor) {
  return true;

  if (lightColor === "red") {
    return false;
  }
}
```

will _always_ return `true`, even if `lightColor` is `'red'`. Try it!

```js
canGo("red"); // true
```

And that's a great way to cause an accident.

### Ternary Operator

You can think of it as a shortcut for the `if-else` statement.

This operator tests a condition; if the condition is truthy, it evaluates the left-hand side of the colon; otherwise it evaluates the right-hand side of the colon.

Syntax:

```js
conditionToTest ? valueToBeReturnedIfTrue : valueToBeReturnedIfFalse;
```

- Define a function `ternaryTeenager` that accepts age as a parameter. The body of the function should use the ternary operator to return `"You are a teenager"` if age is between 13-19 and returns `"You are not a teenager"` if the age is anything else.

**Top tip**: In order for the function to actually **return** the evaluation of the ternary operator, you'll need to prepend `return` to the expression:

```js
return conditionToTest ? valueToBeReturnedIfTrue : valueToBeReturnedIfFalse;
```

## Switch Statements

Switch statements acts like a big if/else if/else chain. The switch expression is evaluated once and the value of the expression is compared with the values of each case. If there is a match, the associated block of code is executed.

Syntax:

```js
switch (expression) {
  case n:
    // code to be executed if case n is true
    break; // break out of switch statement once code executed
  case m:
    // code to be executed if case m is true
    break; // break out of switch statement once code executed
  default: // all other cases
  // code to be executed if case n and case m false
}
```

Example:

```js
var mood = "hungry";
switch (mood) {
  case "happy":
    console.log("Dance to Pharrell's 'Happy'");
    break;
  case "sad":
    console.log("You should eat a pint of ice cream");
    break;
  case "anxious":
    console.log("Take some deep breaths");
    break;
  case "hungry":
    console.log("You should eat a big chocolate cake");
    break;
  default:
    console.log("That's not a mood we support");
}
```

In the example above, we'll see `"You should eat a big chocolate cake"` printed to the console. If we change the value of the `mood` variable to `sad` you'll see `"You should eat a pint of ice cream"`. If the value of `mood` changed to `"grumpy"`, the default statement would trigger and print out `"That's not a mood we support"`.

- Define a function `switchAge` that accepts an age as a parameter. The case statement should switch on `age` and return `"You are a teenager"` if the age is 13, 14, 15, 16, 17, 18, or 19, and return `"You have an age"` as the default.

As with any function, `return` will halt execution at any point. Thus if we
wrote,

```js
function feelings(mood) {
  switch (mood) {
    case "happy":
      return "Dance to Pharrell's 'Happy'";
    default:
      return "I don't recognize that mood.";
  }

  console.log("Let us know how you're feeling tomorrow!");
}
```

the `console.log()` statement at the bottom of the function will
_never run_. This is a major difference between `return` and `break`:
`return` _exits_ the function and _returns_ a value; `break` exits a
_block_ and does not (generally speaking) have a value associated with it.

## Resources

- [Codecademy - if/if else/if else if else](http://www.codecademy.com/glossary/javascript/if-statement)
- [MDN - if..else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [Codecademy - Ternary Operator](http://www.codecademy.com/glossary/javascript/ternary-operator)
- [Codecademy - Switch Statements](http://www.codecademy.com/glossary/javascript/switch-statements)

---

## Solution

```js
function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  }
}

function teenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  } else {
    return "You are not a teenager";
  }
}

function ageChecker(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  } else if (age <= 12) {
    return "You are a kid";
  } else {
    return "You are a grownup";
  }
}

function ternaryTeenager(age) {
  return age >= 13 && age <= 19
    ? "You are a teenager"
    : "You are not a teenager";
}

function switchAge(age) {
  switch (true) {
    case age >= 13 && age <= 19:
      return "You are a teenager";
      break;
    default:
      return "You have an age";
      break;
  }
}
```