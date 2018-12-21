# [Basic Algorithm Scripting: Chunky Monkey](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey)

Write a function that splits an array (first argument) into groups the length of `size` (second argument) and returns them as a two-dimensional array.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Write your own code.

## Setup
```js
function chunkArrayInGroups(arr, size) {
  // Break it up.
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
```

## Solution
```js
function chunkArrayInGroups(arr, size) {
  let temp = [];
  const result = [];

  for (let a = 0; a < arr.length; a++) {
    if (a % size !== size - 1)
      temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) {
    result.push(temp);
  }
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); // [["a", "b"], ["c", "d"]]
```

## Solution 2
```js
// Intermediate Code Solution
function chunkArrayInGroups(arr, size) {
  const arr2 = [];
  for (let i = 0; i < arr.length; i += size) {
    arr2.push(arr.slice(i , i+size));
  }
  return arr2;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); // [["a", "b"], ["c", "d"]]
```

## Solution 3
```js
// Advanced Code Solution
function chunkArrayInGroups(arr, size) {
  const newArr = [];
  let i = 0;
  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size));
    i += size;
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); // [["a", "b"], ["c", "d"]]
```

## Solution 4
```js
// Advanced Code Solution 2
function chunkArrayInGroups(arr, size) {
  const newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); // [["a", "b"], ["c", "d"]]
```

## Solution 5
```js
// Advanced Code Solution 3
function chunkArrayInGroups(arr, size) {
  if (arr.length <= size){
    return [arr];
  }
  else {
    return [arr.slice(0,size)].concat(chunkArrayInGroups(arr.slice(size),size));
  }
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); // [["a", "b"], ["c", "d"]]
```