# [Basic JavaScript: Passing Values to Functions with Arguments](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/passing-values-to-functions-with-arguments)

_Parameters_ are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "_passed_") into a function when it is called are known as _arguments_.

Here is a function with two parameters, `param1` and `param2`:

```js
function testFun(param1, param2) {
console.log(param1, param2);
}
```

Then we can call `testFun`:

```js
testFun("Hello", "World");
```

We have passed two arguments, `"Hello"` and `"World"`. Inside the function, `param1` will equal "Hello" and `param2` will equal "World". Note that you could call `testFun` again with different arguments and the parameters would take on the value of the new arguments.

---

1. Create a function called `functionWithArgs` that accepts two arguments and outputs their sum to the dev console.
2. Call the function with two numbers as arguments.

```js
function functionWithArgs(a, b) {
  console.log(a + b);
}

functionWithArgs(3, 4);
```