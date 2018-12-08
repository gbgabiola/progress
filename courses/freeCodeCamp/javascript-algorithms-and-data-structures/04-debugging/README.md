# [Debugging](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/debugging)

Debugging is a valuable and (unfortunately) necessary tool for programmers. It follows the testing phase of checking if your code works as intended, and discovering it does not. Debugging is the process of finding exactly what isn't working and fixing it. After spending time creating a brilliant block of code, it is tough realizing it may have errors. These issues generally come in three forms: 1) syntax errors that prevent a program from running, 2) runtime errors when code fails to execute or has unexpected behavior, and 3) semantic (or logical) errors when code doesn't do what it's meant to.

Modern code editors (and experience) can help identify syntax errors. Semantic and runtime errors are harder to find. They may cause your program to crash, make it run forever, or give incorrect output. Think of debugging as trying to understand why your code is behaving the way it is.

Example of a syntax error - often detected by the code editor:
```js
funtion willNotWork( {
  console.log("Yuck");
}
// "function" keyword is misspelled and there's a missing parenthesis
```

Here's an example of a runtime error - often detected while the program executes:
```js
function loopy() {
  while(true) {
    console.log("Hello, world!");
  }
}
// Calling loopy starts an infinite loop, which may crash your browser
```

Example of a semantic error - often detected after testing code output:
```js
function calcAreaOfRect(w, h) {
  return w + h; // This should be w * h
}
let myRectArea = calcAreaOfRect(2, 3);
// Correct syntax and the program executes, but this gives the wrong answer
```

Debugging is frustrating, but it helps to develop (and follow) a step-by-step approach to review your code. This means checking the intermediate values and types of variables to see if they are what they should be. You can start with a simple process of elimination.

For example, if function A works and returns what it's supposed to, then function B may have the issue. Or start checking values in a block of code from the middle to try to cut the search space in half. A problem in one spot indicates a bug in the first half of the code. If not, it's likely in the second.

This section will cover a couple helpful tools to find bugs, and some of the common forms they take. Fortunately, debugging is a learnable skill that just requires a little patience and practice to master.

- [x] [Use the JavaScript Console to Check the Value of a Variable](01-use-the-javascript-console-to-check-the-value-of-a-variable.md)
- [x] [Understanding the Differences between the freeCodeCamp and Browser Console](02-understanding-the-differences-between-the-freecodecamp-and-browser-console.md)
- [x] [Use typeof to Check the Type of a Variable](03-use-typeof-to-check-the-type-of-a-variable.md)
- [x] [Catch Misspelled Variable and Function Names](04-catch-misspelled-variable-and-function-names.md)
- [x] [Catch Unclosed Parentheses, Brackets, Braces and Quotes](05-catch-unclosed-parentheses-brackets-braces-and-quotes.md)
- [x] [Catch Mixed Usage of Single and Double Quotes](06-catch-mixed-usage-of-single-and-double-quotes.md)
- [x] [Catch Use of Assignment Operator Instead of Equality Operator](07-catch-use-of-assignment-operator-instead-of-equality-operator.md)
- [x] [Catch Missing Open and Closing Parenthesis After a Function Call](08-catch-missing-open-and-closing-parenthesis-after-a-function-call.md)
- [x] [Catch Arguments Passed in the Wrong Order When Calling a Function](09-catch-arguments-passed-in-the-wrong-order-when-calling-a-function.md)
- [x] [Catch Off By One Errors When Using Indexing](10-catch-off-by-one-errors-when-using-indexing.md)
- [x] [Use Caution When Reinitializing Variables Inside a Loop](11-use-caution-when-reinitializing-variables-inside-a-loop.md)
- [x] [Prevent Infinite Loops with a Valid Terminal Condition](12-prevent-infinite-loops-with-a-valid-terminal-condition.md)

---

Credits to [FreeCodeCamp](https://www.freecodecamp.org/)