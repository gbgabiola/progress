# JavaScript Basics: Arrays

## Objectives
- Define and then add and remove data to array
- Utilize built-in array methods
- Exercise: Console Todo List
- Iterate in an Array using `for` and `forEach`

Arrays let us group data together in lists
```js
var friends = ['Charlie', 'Liz', 'David', 'Mattias'];
```

| Charlie  | Liz  | David | Mattias |
| -------- | ---- | ----- | ------- |
|   0      | 1    |  2    |  3      |

#### Arrays
- Array are indexed starting at 0. Every slot has a corresponding number
- We can use those indeces to retrieve data
  ```
  friends[0] // 'Charlie'
  ```
- We can update arrray
  ```js
  friends[0] = 'Chuck';
  ```
- We can add new data
  ```js
  friends[4] = 'Amelie';
  ```
- Two ways to initialize an empty array:
  ```js
  var friends = [];
  var friends = new Array();
  ```
- Arrays can hold any type of data
  ```js
  var random_collection = [49, true, 'Hermione', null];
  ```
- Arrays have a length property
  ```js
  var nums = [45, 37, 89, 24];
  nums.length; // 4
  ```

#### Array Methods
Arrays come with a few built-in methods that make our life easier
- Use `push()` to add to the end of an array
  ```js
  var colors = ['red', 'orange', 'yellow'];
  colors.push('green'); // ['red', 'orange', 'yellow', 'green']
  ```
- Use `pop()` to remove that last item in an array
  ```js
  var colors = ['red', 'orange', 'yellow'];
  colors.pop(); // ['red', 'orange']

  // pop() returns the removed element
  var col = colors.pop(); // orange
  ```
- Use `unshift()` to add to the front of an array
  ```js
  var colors = ['red', 'orange', 'yellow'];
  colors.unshift('infrared'); // ['infrared', 'red', 'orange', 'yellow']
  ```
- Use `shift()` to remove that first item in an array
  ```js
  var colors = ['red', 'orange', 'yellow'];
  colors.shift(); // ['orange', 'yellow']

  // shift() returns the removed element
  var col = colors.shift(); // orange
  ```
- Use `indexOf()` to find the index of an item in an array
  ```js
  var friends = ['Charlie', 'Liz', 'David', 'Mattias', 'Liz'];

  // returns the first index at which a given element can be found
  friends.indexOf('David'); // 2
  friends.indexOf('Liz'); // 1, not 4

  // returns -1 if the element is not present
  friends.indexOf('Hagrid'); // -1
  ```
- Use `slice()` to copy parts of an array
  ```js
  var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
  // use slice to copy the 2nd and 3rd fruits
  // specify index where the new array starts(1) and ends(3)
  var citrus = fruits.slice(1, 3);

  // this does not alter the original fruits array
  // citrus contains ['Orange', 'Lemon']
  // fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']

  // you can also use slice() to copy an entire array
  var nums = [1, 2, 3];
  var otherNums = num.slice(); // both arrays are [1, 2, 3]
  ```

#### Array Iteration
```js
var colors = ['red', 'orange', 'yellow', 'green'];
```
- To loop over an array using `for` loop, we need to make use of array's _length_ property
  ```js
  for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
  }
  ```
- JavaScript provides an easy build-in way of iterating over an array: `forEach`
  ```js
  arr.forEach(someFunction);
  ```
  ```js
  colors.forEach(function(color) {
    // color is a placeholder, call it whatever you want
    console.log(color);
  });
  ```

## Learned
- Understand arrays conceptually
- Write code using JS arrays
- Used built Array methods
  - `push()`/`pop()`, `shift()`/`unshift()`, `indexOf()`, `slice()`
- Use a `for` loop and `forEach` to iterate over an array
- Compare and contrast `for` loops and `forEach`
- Use `splice()` to delete an specific item in an array, that takes 2 arguments, the position to delete, and number of how many items to delete after the index
- Refactor code into separate functions
- BUilding my own `forEach`