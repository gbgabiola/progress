# [Appending Variables to Strings](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/appending-variables-to-strings/)

Just as we can build a string over multiple lines out of string _literals_, we can also append variables to a string using the plus equals (`+=`) operator. \*/

---

Set `someAdjective` and append it to `myStr` using the `+=` operator.

## Setup

```js
var someAdjective;
var myStr = "Learning to code is ";
```

## Solution

```js
var someAdjective = "amazing!";
var myStr = "Learning to code is ";
myStr += someAdjective;
```