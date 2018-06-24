# [Basic JavaScript: Compound Assignment With Augmented Addition](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-addition/)

In programming, it is common to use assignments to modify the contents of a variable. Remember that everything to the right of the equals sign is evaluated first, so we can say:

`myVar = myVar + 5;`

to add `5` to `myVar`. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.

One such operator is the `+=` operator.

```js
var myVar = 1;
myVar += 5;
console.log(myVar); // Returns 6
```

---

Convert the assignments for `a`, `b`, and `c` to use the `+=` operator.

```js
var a = 3;
var b = 17;
var c = 12;

a+= 12;
b+= 9;
c+= 7;
```