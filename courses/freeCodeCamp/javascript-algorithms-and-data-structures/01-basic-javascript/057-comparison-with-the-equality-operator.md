# [Basic JavaScript: Comparison with the Equality Operator](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator)

There are many _Comparison Operators_ in JavaScript. All of these operators return a boolean `true` or `false` value.

The most basic operator is the equality operator `==`. The equality operator compares two values and returns `true` if they're equivalent or `false` if they are not. Note that equality is different from assignment ( `=` ), which assigns the value at the right of the operator to a variable in the left.

```js
function equalityTest(myVal) {
if (myVal == 10) {
return "Equal";
}
return "Not Equal";
}
```

If `myVal` is equal to `10`, the equality operator returns `true`, so the code in the curly braces will execute, and the function will return `"Equal"`. Otherwise, the function will return `"Not Equal"`.

In order for JavaScript to compare two different `data types` (for example, `numbers` and `strings`), it must convert one type to another. This is known as "Type Coercion". Once it does, however, it can compare terms as follows:

```js
1 == 1 // true
1 == 2 // false
1 == '1' // true
"3" == 3 // true
```

---

Add the `equality operator` to the indicated line so that the function will return "Equal" when `val` is equivalent to `12`

```js
// Setup
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(12); // Equal
```