# [Write Reusable JavaScript with Functions](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/write-reusable-javascript-with-functions)

In JavaScript, we can divide up our code into reusable parts called _functions_.

Here's an example of a function:

```js
function functionName() {
  console.log("Hello World");
}
```

You can call or _invoke_ this function by using its name followed by parentheses, like this:

```js
functionName();
```

Each time the function is called it will print out the message `"Hello World"` on the dev console. All of the code between the curly braces will be executed every time the function is called.

---

1. Create a function called `reusableFunction` which prints `"Hi World"` to the dev console.
2. Call the function.

## Solution

```js
function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();
```