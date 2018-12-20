# JavaScript Basics: Objects

## Objectives
- Understand objects conceptually
- Write code using JS objects

Objects let us store data in key-value pairs
```js
var person {
  name: 'Travis',
  age: 21,
  city: 'LA'
};
```

Note: unlike arrays, objects have no order
| 'Travis' | 21  | 'LA' |
| -------- | --- | ---- |
|   name   | age | city |

#### Objects
- **Retrieving Data:** Two choices: bracket and dot notation
  ```js
  // bracket notation
  person['name'];

  // dot notation
  person.name;
  ```
- **Difference** between two notations:
  ```js
  // you cannot use dot notation if the property starts with a number
  someObject.1blah; // INVALID
  someObject['1blah']; // VALID

  // you cannot lookup using variable with bracket notation
  var str = 'name';
  someObject.str; // doesn't look for 'name'
  someObject[str]; // does evaluate str and looks form 'name'

  // you cannot use dot notation for property names with spaces
  someObject.fav color; // INVALID
  someObject['fav color']; // VALID
  ```
- **Updating Data:** just like an array: access a property and reassign it
  ```js
  person['age'] = += 1;
  person.city = 'London';
  ```
- **Creating Objects:** Like arrays, there are a few methods of initializing objects
  ```js
  // make an empty object and then add to it
  var person = {};
  person.name = 'Travis';
  person.age = 21;
  person.city = 'LA';

  // another way of initializing an Object
  var person = new Object();

  // all at once
  var person = {
    name: 'Travis',
    age: 21,
    city: 'LA'
  } 
  ```
- **Objects** can hold all sorts of data
  ```js
  var junkObject = {
    age: 57,
    color: 'purple',
    isHungry: true,
    friends: ['Horatio', 'Hamlet'],
    pet: {
      name: 'Rusty',
      species: 'Dog',
      age: 2
    }
  };
  ```

#### Comparing Objects and Arrays
| ARRAYS                                         | OBJECTS                                               | 
| ---------------------------------------------- | ----------------------------------------------------- |
| `var dogs = ['Rusty', 'Lucky', 'Bubba']`       | `var dog = { name: 'Bubba', breed: 'Lab' }`           |
| `dogs // ['Rusty', 'Lucky', 'Bubba']`          | `dog // {name: 'Bubba', breed: 'Lab'}`                |
| `dogs[1] // 'Lucky'`                           | `dog['name']` or `dog.name // 'Bubba'`                |
| `dogs.push('Wyatt') // 4`                      | `dog['age'] = 6` or `dog.age = 6 // 6`                |
| `dogs // ['Rusty', 'Lucky', 'Bubba', 'Wyatt']` | `dog // {name: 'Bubba', breed: 'Lab', age: 6 }`       |
| `dogs[1] = 'Lucy' // 'Lucy'`                   | `dog.breed = 'Black Lab' // 'Black Lab`               |
| `dogs // ['Rusty', 'Lucy', 'Bubba', 'Wyatt']`  | `dog // {name: 'Bubba', breed: 'Black Lab', age: 6 }` |

#### Nested Objects and Arrays
```js
var posts = [
  {
    title: 'What is the best Programming Language',
    author: 'Genesis',
    comments: ['Great choice', 'You are wrong!']
  },
  {
    title: 'Best framework for front-end Developers',
    author: 'Jeffrey',
    comments: ['All are different', 'I like it']
  }
];
posts // [Object, Object]
posts.length // 2
posts[0].title // 'What is the best Programming Language'
posts[1].comments[1] // 'I like it'
```

#### Adding Methods to Objects
Reasons to add methods/functions inside the object:
- It helps the code organized (group things logically together)
  ```js
  var obj = {
    name: 'Chuck',
    age: 45,
    isCool: false,
    friends: ['Bob', 'Tina'],
    add: function(x, y) { // method/function
      return x + y;
    }
  }
  obj.add(10, 5); // 15
  ```
- To also avoid the namespace collisions
  ```js
  var dogSpace = {};
  dogSpace.speak = function() {
    return 'WOOF!';
  }

  var catSpace = {};
  catSpace.speak = function() {
    return 'MEOW!';
  }

  dogSpace.speak(); // 'WOOF!'
  catSpace.speak(); // 'MEOW!'
  ```

Group the code together, so we can have properties, and functions/methods that are name exactly the same way except they're stored in different objects so that they don't conflict.

## Learned
- Storing data in key-value pairs using objects
- Creating, Retrieving, and Updating data
  - dot notation and bracket notation
- Difference between dot and bracket notation
- Comparing Objects and Arrays
- Nested Objects and Arrays
- Added Methods to Objects (function as a property)
- Namespacing
- The Keyword _this_