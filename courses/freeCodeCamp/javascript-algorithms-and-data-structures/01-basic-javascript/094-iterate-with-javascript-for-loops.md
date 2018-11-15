# [Iterate with JavaScript For Loops](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-for-loops)

You can run the same code multiple times by using a loop.

The most common type of JavaScript loop is called a " `for loop` " because it runs "for" a specific number of times.

For loops are declared with three optional expressions separated by semicolons:

```js
for ([initialization]; [condition]; [final-expression])`
```

The `initialization` statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.

The `condition` statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to `true`. When `condition` is `false` at the start of the iteration, the loop will stop executing. This means if `condition` starts as `false`, your loop will never execute.

The `final-expression` is executed at the end of each loop iteration, prior to the next `condition` check and is usually used to increment or decrement your loop counter.

In the following example we initialize with `i = 0` and iterate while our condition `i < 5` is true. We'll increment `i` by `1` in each loop iteration with `i++` as our `final-expression`.

```js
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
```

`ourArray` will now contain `[0,1,2,3,4]`.

---

Use a `for` loop to work to push the values 1 through 5 onto `myArray`.

## Setup

```js
var myArray = [];
// Only change code below this line.
```

## Solution

```js
for (var i = 1; i <= 5; i++) {
  myArray.push(i);
}
```