# [Add New Properties to a JavaScript Object](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/add-new-properties-to-a-javascript-object)

You can add new properties to existing JavaScript objects the same way you would modify them.

Here's how we would add a `"bark"` property to `ourDog`:

```js
ourDog.bark = "bow-wow";
```

or

```js
ourDog["bark"] = "bow-wow";
```

Now when we evaluate `ourDog.bark`, we'll get his bark, "bow-wow".

---

Add a `"bark"` property to `myDog` and set it to a dog sound, such as "woof". You may use either dot or bracket notation.

## Setup

```js
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
// Only change code below this line.
```

## Solution

```js
// Dot Notation
myDog.bark = "woof";


// Bracket Notation
myDog["bark"] = "woof";
```