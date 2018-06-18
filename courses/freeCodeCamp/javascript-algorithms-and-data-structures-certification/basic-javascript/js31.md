# [Basic JavaScript: Understand String Immutability](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/understand-string-immutability)

In JavaScript, `String` values are _immutable_, which means that they cannot be altered once created.

For example, the following code:

```js
var myStr = "Bob";
myStr[0] = "J";
```

cannot change the value of `myStr` to "Job", because the contents of `myStr` cannot be altered. Note that this does not mean that myStr cannot be changed, just that the individual characters of a _string literal_ cannot be changed. The only way to change `myStr` would be to assign it with a new string, like this:

```js
var myStr = "Bob";
myStr = "Job";
```

---

Correct the assignment to `myStr` so it contains the string value of `Hello World` using the approach shown in the example above.

```js
// Setup
var myStr = "Jello World";

myStr = "Hello World";
```