# [Intermediate Algorithm Scripting: Diff Two Arrays](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays)

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Try to pair program. Write your own code.

**Note**  
You can return the array with its elements in any order.

## Setup
```js
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```

## Solution
```js
// Basic Solution (Imperative Solution): Using For loop
function diffArray(arr1, arr2) {
  const newArr = [];
  function onlyInFirst(first, second) {
    // Looping through an array to find elements that don't exist in another array
      for (let i = 0; i < first.length; i++) {
        if (second.indexOf(first[i]) === -1) {
          // Pushing the elements unique to first to newArr
          newArr.push(first[i]);
        }
      }
    }

    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // [4]
```

## Solution 2
```js
// Intermediate Solution (Declarative Solution): Using concat(), filter(), and includes()
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(
        item => !arr1.includes(item) || !arr2.includes(item)
    )
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // [4]
```

## Solution 3
```js
// Advanced Solution (Declarative Solution): Using concat(), filter(), and includes()
function diffArray(arr1, arr2) {
  return arr1
    .filter(el => !arr2.includes(el))
    .concat(
      arr2.filter(el => !arr1.includes(el))
    )
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); [4]
```

## Solution 4
```js
// Advanced Solution Alternative (Declarative Solution)
function diffArray(arr1, arr2) {
  return [
    ...diff(arr1, arr2),
    ...diff(arr2, arr1)
  ]
  
  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // [4]
```