# [Basic Data Structures: Add Key-Value Pairs to JavaScript Objects](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-data-structures/add-key-value-pairs-to-javascript-objects)

At their most basic, objects are just collections of _key-value pairs_, or in other words, pieces of data mapped to unique identifiers that we call _properties_ or _keys_. Let's take a look at a very simple example:

```js
let FCC_User = {
  username: 'awesome_coder',
  followers: 572,
  points: 1741,
  completedProjects: 15
};
```

The above code defines an object called `FCC_User` that has four _properties_, each of which map to a specific value. If we wanted to know the number of `followers FCC_User` has, we can access that property by writing:

```js
let userData = FCC_User.followers;
// userData equals 572
```

This is called _dot notation_. Alternatively, we can also access the property with brackets, like so:

```js
let userData = FCC_User['followers']
// userData equals 572
```

Notice that with _bracket notation_, we enclosed `followers` in quotes. This is because the brackets actually allow us to pass a variable in to be evaluated as a property name (hint: keep this in mind for later!). Had we passed `followers` in without the quotes, the JavaScript engine would have attempted to evaluate it as a variable, and a `ReferenceError: followers is not defined` would have been thrown.

---

Using the same syntax, we can also **_add new_** key-value pairs to objects. We've created a `foods` object with three entries. Add three more entries: `bananas` with a value of `13`, `grapes` with a value of `35`, and `strawberries` with a value of `27`.

## Setup
```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};
// change code below this line
// change code above this line
console.log(foods);
```

## Solution
```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;

console.log(foods); // {apples: 25, oranges: 32, plums: 28, bananas: 13, grapes: 35, oranges: 32, plums: 28, strawberries: 27}
```