# [Basic JavaScript: Iterate Odd Numbers With a For Loop](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/iterate-odd-numbers-with-a-for-loop)

For loops don't have to iterate one at a time. By changing our `final-expression`, we can count by even numbers.

We'll start at `i = 0` and loop while `i < 10`. We'll increment `i` by 2 each loop with `i += 2`.

```js
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
```

`ourArray` will now contain `[0,2,4,6,8]`.

Let's change our `initialization` so we can count by odd numbers.

---

Push the odd numbers from 1 through 9 to `myArray` using a `for` loop.

```js
// Setup
var myArray = [];

for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}
```