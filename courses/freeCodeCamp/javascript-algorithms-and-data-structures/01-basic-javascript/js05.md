# Basic JavaScript: Understanding Uninitialized Variables

When JavaScript variables are declared, they have an initial value of `undefined`. If you do a mathematical operation on an `undefined` variable your result will be `NaN` which means _"Not a Number"_. If you concatenate a string with an `undefined` variable, you will get a literal _string_ of `"undefined"`.

---

Initialize the three variables `a`, `b`, and `c` with `5`, `10`, and `"I am a"` respectively so that they will not be `undefined`.

```js
var a = 5;
var b = 10;
var c = "I am a";
```