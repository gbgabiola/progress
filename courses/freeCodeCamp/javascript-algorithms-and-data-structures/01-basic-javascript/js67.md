# [Basic JavaScript: Comparisons with the Logical Or Operator](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparisons-with-the-logical-or-operator)

The _logical or_ operator ( `||` ) returns true if either of the _operands_ is `true`. Otherwise, it returns `false`.

The _logical or_ operator is composed of two pipe symbols ( `|` ). This can typically be found between your Backspace and Enter keys.

The pattern below should look familiar from prior waypoints:

```js
if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
```

will return "Yes" only if `num` is between `5` and `10` (5 and 10 included). The same logic can be written as:

```js
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
```

---

Combine the two if statements into one statement which returns `"Outside"` if `val` is not between `10` and `20`, inclusive. Otherwise, return `"Inside"`.

```js
function testLogicalOr(val) {

  if (val < 10 || val > 20 ) {
    return "Outside";
  }
  return "Inside";
}

// Change this value to test
testLogicalOr(15); // "Inside"
```