# [Basic Data Structures: Iterate Through the Keys of an Object with a for...in Statement](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-data-structures/-iterate-through-the-keys-of-an-object-with-a-for---in-statement)

Sometimes you may need to iterate through all the keys within an object. This requires a specific syntax in JavaScript called a _for...in_ statement. For our `users` object, this could look like:

```js
for (let user in users) {
  console.log(user);
};

// logs:
Alan
Jeff
Sarah
Ryan
```

In this statement, we defined a variable `user`, and as you can see, this variable was reset during each iteration to each of the object's keys as the statement looped through the object, resulting in each user's name being printed to the console.

**NOTE:**  
Objects do not maintain an ordering to stored keys like arrays do; thus a keys position on an object, or the relative order in which it appears, is irrelevant when referencing or accessing that key.

---

We've defined a function, `countOnline`; use a _for...in_ statement within this function to loop through the users in the `users` object and return the number of users whose `online` property is set to `true`.

## Setup
```js
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  // change code below this line

  // change code above this line
}

console.log(countOnline(users));
```

## Solution
```js
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  let result = 0;
  for (let user in obj) {
    if (obj[user].online === true) {
      result++;
    }
  }
  return result;
}

console.log(countOnline(users)); // 2
```