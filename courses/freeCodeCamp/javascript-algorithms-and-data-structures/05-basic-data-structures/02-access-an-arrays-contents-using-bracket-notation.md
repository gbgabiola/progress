# [Basic Data Structures: Access an Array's Contents Using Bracket Notation](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-data-structures/access-an-arrays-contents-using-bracket-notation)

The fundamental feature of any data structure is, of course, the ability to not only store data, but to be able to retrieve that data on command. So, now that we've learned how to create an array, let's begin to think about how we can access that array's information.

When we define a simple array as seen below, there are 3 items in it:

```js
let ourArray = ["a", "b", "c"];
```

In an array, each array item has an _index_. This index doubles as the position of that item in the array, and how you reference it. However, it is important to note, that JavaScript arrays are _zero-indexed_, meaning that the first element of an array is actually at the **_zeroth_** position, not the first.

In order to retrieve an element from an array we can enclose an index in brackets and append it to the end of an array, or more commonly, to a variable which references an array object. This is known as _bracket notation_.

For example, if we want to retrieve the `"a"` from `ourArray` and assign it to a variable, we can do so with the following code:

```js
let ourVariable = ourArray[0];
// ourVariable equals "a"
```

In addition to accessing the value associated with an index, you can also set an index to a value using the same notation:

```js
ourArray[1] = "not b anymore";
// ourArray now equals ["a", "not b anymore", "c"];
```

Using bracket notation, we have now reset the item at index 1 from `"b"`, to `"not b anymore"`.

---

In order to complete this challenge, set the 2nd position (index `1`) of `myArray` to anything you want, besides `"b"`.

## Setup
```js
let myArray = ["a", "b", "c", "d"];
// change code below this line

//change code above this line
console.log(myArray);
```

## Solution
```js
let myArray = ["a", "b", "c", "d"];

myArray[1] = 'b changed to B'

console.log(myArray); // (4) ["a", "b changed to B", "c", "d"]
```