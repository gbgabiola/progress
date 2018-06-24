# [Basic JavaScript: Delete Properties from a JavaScript Object](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/delete-properties-from-a-javascript-object)

We can also delete properties from objects like this:

`delete ourDog.bark;`

---

Delete the `"tails"` property from `myDog`. You may use either dot or bracket notation.

```js
// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
// Dot Notation
delete myDog.tails;

// Bracket Notation
// delete myDog["tails"];
```