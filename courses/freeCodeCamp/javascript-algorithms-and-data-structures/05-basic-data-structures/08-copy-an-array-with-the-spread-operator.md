# [Basic Data Structures: Copy an Array with the Spread Operator](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-data-structures/copy-an-array-with-the-spread-operator)

While `slice()` allows us to be selective about what elements of an array to copy, among several other useful tasks, ES6's new _spread operator_ allows us to easily copy _all_ of an array's elements, in order, with a simple and highly readable syntax. The spread syntax simply looks like this: `...`

In practice, we can use the spread operator to copy an array like so:

```js
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// thatArray equals [true, true, undefined, false, null]
// thisArray remains unchanged, and is identical to thatArray
```

---

We have defined a function, `copyMachine` which takes `arr` (an array) and `num` (a number) as arguments. The function is supposed to return a new array made up of `num` copies of `arr`. We have done most of the work for you, but it doesn't work quite right yet. Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!).

## Setup
```js
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line

    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));
```

## Solution
```js
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    
    newArr.push([...arr]);

    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2)); // [[true, false, true], [true, false, true]]
```