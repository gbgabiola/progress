# [Basic Data Structures: Modify an Object Nested Within an Object](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-data-structures/modify-an-object-nested-within-an-object)

Now let's take a look at a slightly more complex object. Object properties can be nested to an arbitrary depth, and their values can be any type of data supported by JavaScript, including arrays and even other objects. Consider the following:

```js
let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13
    }
  }
};
```

`nestedObject` has three unique keys: `id`, whose value is a number, `date` whose value is a string, and `data`, whose value is an object which has yet another object nested within it. While structures can quickly become complex, we can still use the same notations to access the information we need.

---

Here we've defined an object, `userActivity`, which includes another object nested within it. You can modify properties on this nested object in the same way you modified properties in the last challenge. Set the value of the `online` key to `45`.

## Setup
```js
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// change code below this line

// change code above this line

console.log(userActivity);
```

## Solution
```js
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

userActivity.data.online = 45;

console.log(userActivity); // {id: 23894201352, date: "January 1, 2017", data: {totalUsers: 51, online: 45}}
```