# Exiting Loops

## Objectives

1. Explain when to `break` out of a loop
2. Explain when to `continue` in a loop
3. Explain when to `return` in a loop

## Introduction

Imagine you're making a sandwich. (We're big fans of sandwiches here at the Flatiron School.) You're going through each ingredient, piling it onto some fresh bread, when suddenly, out of nowhere, you notice _worms_ on the spinach. You don't have to scrap the whole sandwich, but you're starting to get queasy and you want to stop going through the subsequent ingredients while you clean up those worms.

In programmer speak, we want to _break out of the loop_!

So far, we've been treating loops as things that we want to go the whole way through. But it's easy to imagine a case where we wouldn't want to loop through _every_ object in an iterable. What if we were only looking for one object, or if we didn't need to change every element but just those that matched certain criteria?

That's where `break`, `continue`, and even the venerable `return` come in handy. Let's dive in.

## I hate to `break` it to you...

Sometimes when we're looping, we want to exit a loop after encountering a certain element. Let's say, for example, that we have a mixed array, `["dog", 1, "cat"]`, but we have a loop that calls a function on each element of an array if and only if every element is a string. We could write something like the following:

```js
const array = ["dog", 1, "cat"]

for (let i = 0; i < array.length; i++) {
  if (typeof array[i] !== 'string') {
    break
  }

  doSomethingToString(array[i])
}
```

In the above example, we'd only call `doSomethingToString()` on `"dog"` before exiting out of the loop entirely. Another way we might use `break` is to find the first element that matches given criteria for, e.g., assigning to a variable:

```js
const mostlyOne = [1, 1, 1, 1, 2, 1, 1, 3]

let notOne = null

for (let i = 0; i < mostlyOne.length; i++) {
  if (mostlyOne[i] !== 1) {
    notOne = mostlyOne[i]
    break
  }
}
```

Without that `break` statement, `notOne` would end up being equal to `3`; but with the `break`, `notOne` is assigned `2`, since `2` is the first element of the array that isn't `1`.

## Return of `return`

The final case, above, can be useful for a one-off example, but it feels a little messy: we have to initialize a variable, `notOne`, and subsequently assign a value to it. It's like we're asking for bugs if more than one part of our code needs to touch that variable (which might very well end up being the case).

In many instances, we can rewrite that final `break` example by encapsulating it in a function and using `return` to break out of the loop.

```js
function firstNotOne(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 1) {
      return array[i]
    }
  }
}

const notOne = firstNotOne([1, 1, 1, 1, 1, 2, 1, 1, 1, 3])
```

If we evaluate the above in console, we'll see that `notOne` is still equal to `2`. Let's make an even more generic function, and this time use a `debugger` statement to verify that it's only looping as much as we think it is.

```js
function firstNotEqual(array, value) {
  for (let i = 0; i < array.length; i++) {
    debugger
    if (array[i] !== value) {
      return array[i]
    }
  }
}
```

Above, we define a function, `firstNotEqual`, that takes an array and a value. When we encounter an element of the array that does not equal `value`, we return that element. Try it out!

```js
firstNotEqual(["dog", "dog", "dog", "cat", "mouse"], "dog") // "cat"
firstNotEqual([1, 1, 1, 1, 1, 1], 1) // undefined -- why?
```

This is already an improvement over `firstNotOne`, but it's still tied down to a pretty specific implementation. How can we make it even more flexible? With a function!

```js
function find(array, criteriaFunc) {
  for (let i = 0; i < array.length; i++) {
    if (criteriaFunc(array[i])) {
      return array[i]
    }
  }
}
```

We can define a very generic `find` that accepts an array and a function. It calls the function on each element of the array, and the first element for which `criteriaFunc()` returns `true` (or a truthy value) will be returned by `find()`.


```js
// Find the first even number in an array
find([1, 1, 3, 1, 5, 6, 8, 10], (n) => n % 2 === 0) // 6

// Find the first string whose length is > 3
find(["dog", "cat", "horse", "mouse", "ant", "cow", "antelope"], (s) => s.length > 3) // "horse"
```

## To Be `continue`d

What if we want to perform a certain operation on all of the elements of an array, but we want to skip elements that don't need to change or that would otherwise mess up our applications if they underwent the given operation?

This is where we use `continue`!

```js
const scores = [3, 4, 10, 5, 11, 6]

// increment all scores < 10
for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 10) {
    continue
  }

  scores[i]++
}

scores // [4, 5, 10, 6, 11, 7]
```

Continue is particularly helpful when we need to apply a few different operations within one loop — if at any point a given element doesn't need to enter into the operations, we can just `continue` with the rest of the elements in the iterable.

## Resources

- [continue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)
- [break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)