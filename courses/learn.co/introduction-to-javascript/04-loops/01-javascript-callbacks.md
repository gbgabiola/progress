# JavaScript Callbacks

## Objectives

1. Explain what a callback is
2. Explain how callbacks are used in JavaScript
3. Practice writing functions that take callbacks

## Introduction

When I was your age, I had a boat.

![Boat](https://user-images.githubusercontent.com/17556281/28758193-16bc31b8-7562-11e7-8539-cc39b31def8f.jpeg)

It was not a fancy boat or a particularly nice boat, but it was my boat.

Boats, as you know, have many moving parts. And these parts need to be cleaned.

Now, I could have cleaned every part separately, _iterating_ through the piles of barnacle-encrusted tools one by one, preparing to clean each individual piece with a bit of a care.

Or I could get a bit smarter about it. I could prepare once for each group of related items, so that I wouldn't have to prepare to clean each item individually. In code, that might look like:

```js
function clean(item) {
  console.log(`I just cleaned a ${item}`)
}

var nails = ["rusty nail", "rusty nail", "bent nail", "clean nail"]

for (var i = 0; i < nails.length; i++) {
  clean(nails[i])
}

var planks = ["splintered plank", "straight plank", "bent plank"]

for (var i = 0; i < planks.length; i++) {
  clean(planks[i])
}

console.log('done!')
```

And so on and so forth. Well now, this wasn't so bad, but I noticed that I was preparing to clean everything — and cleaning everything, really — in the same way. What if I could just group all of the things that I needed to clean, and prep for the cleaning once?

```js
function groupAndClean(items, cleaningMethod, done) {
  for (var i = 0; i < items.length; i++) {
    cleaningMethod(items[i])
  }

  done()
}

groupAndClean(nails.concat(planks), clean, function() {
  console.log('Whew, that was a lot of work!')
})
```

So went the days of my youth, when I learned to pass **functions as arguments** to other functions.

And my boat was cleaner for it.

## Functions as arguments

In JavaScript, we have the ability to pass functions as arguments. This makes it really easy to abstract functionality out of our programs, making the programs easier to reason about by breaking them into smaller chunks.

For example, let's say we have a function that lets us do anything we want to the number 5 (follow along in the browser's console!):

```js
function doTo5(anything) {
  return anything(5)
}
```

Well, let's try it out. Can we divide with it?

```js
function divide10ByN(n) {
  return 10 / n
}

doTo5(divide10ByN) // 2
```

Cool, cool. Can we append it to a string?

```js
function appendToHello(s) {
  return `Hello, ${s}!`
}

doTo5(appendToHello) // 'Hello, 5!'
```

Some things to note:

- neither `divide10ByN()` nor `appendToHello()` knows that it's going to receive `5` specifically — these functions only know that they're going to receive _an argument_. They're very generic.

- We do not _call_ `divide10ByN` or `appendToHello` when we pass them as functions to `doTo5()` — that is, we pass just their name without any parentheses after it. That's because the calling actually happens _inside_ `doTo5()`, when `doTo5()` _calls back_ to the "outside world." Because of this process of _calling back_, we often call functions that we pass to other functions **callbacks**.

## Other uses for callbacks

Callbacks can also be useful for when we finish an expensive operation and want to return to a previous function's context (similarly to how `done()` was used in the boat example).

```js
function somethingExpensive(callback) {
  // do something crazy,
  // like fetching a bajillion websites
  // then pass their data to callback:

  // (supposing that we have defined `data`
  // along the way)
  callback(data)
}
```

## Resources

- [JavaScript Is Sexy: Callbacks][JIS: Callbacks]
- [StackOverflow: Explain Callbacks in Plain English][SO: Callbacks]

[JIS: Callbacks]: http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/
[SO: Callbacks]: http://stackoverflow.com/questions/9596276/how-to-explain-callbacks-in-plain-english-how-are-they-different-from-calling-o