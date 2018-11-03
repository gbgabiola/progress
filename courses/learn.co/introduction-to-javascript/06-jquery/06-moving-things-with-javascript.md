# Moving Things with JavaScript

## Objectives

1. Explain how to update an element's position on the page
2. Practice updating an element's position on the page
3. Practice moving an element in response to a browser event

## Introduction

Think back to the first video game you played. (If you've never played a video game, try [this one](http://terrycavanaghgames.com/dontlookback/).)

It was probably mesmerizing to think about how the game worked. It responded to your whims through a set of clear and easy-to-use interactions. It pulled you into its story by giving you a window into its world and a way of interacting with — shaping, even — that world.

_Programming means that you can create such a world for other people._ Sure, it'll be a while before you're ready to build something like [Braid](http://braid-game.com/) or even [Don't Look Back](http://terrycavanaghgames.com/dontlookback/), but we can start with small steps. Let's learn how to move things on a page.

## Updating an element's position

Open up `index.html` in your favorite browser (we'll be using Chrome). Open the console, and let's get a hold of what we're calling the "dodger":

```js
var dodger = document.getElementById('dodger')
```

Awesome. Now let's change its color:

```js
dodger.style.backgroundColor = "#000000"
```

Whoa, where'd it go? Well, we changed the color to "#000000", which is another way of saying "black". So it just blends in with the background.

Let's change it to something more visible.

```js
dodger.style.backgroundColor = '#FF69B4'
```

Awesome.

![pink dodger](https://curriculum-content.s3.amazonaws.com/skills-based-js/pink_dodger.png)

What have we been doing here? Well, we've been accessing the `style` property of the `dodger` element. This lets us change things like the `backgroundColor`, the `height`, `width`, etc.

We can also, it turns out, change an element's position on the page.

To start, let's read out the element's coordinates — we'll read these as if the bottom left of the black box were at coordinate (0, 0).

```js
dodger.style.left // "180px"
dodger.style.bottom // "0px"
```

So the dodger's bottom left edge is currently at (180, 0). (Keep in mind that these coordinates are relative to the black box.)

Let's start by moving the element up.

```js
dodger.style.bottom = '100px'
```

Whoa!

![up 100px](https://curriculum-content.s3.amazonaws.com/skills-based-js/pink_dodger_bottom_100.png)

Notice the annoying thing about this, though: even though we're talking about _numeric_ coordinates, we need to move the dodger by assigning it a different string. Let's return it to where we started:

```js
dodger.style.bottom = '0px'
```

That's better.

## Moving in response to an event

Remember event listeners? Turns out, we can use those to respond to an event and move the dodger.

Let's say we want to move the dodger to the left. First we have to figure what the left arrow key's numeric value is. We could look it up, but we're programmers — let's explore!

```js
document.addEventListener('keydown', function(e) {
  console.log(e.which)
})
```

Entering the above in our console, if we now click on the window (where the dodger is rendered) press the left arrow key, we should see in our console:

![left arrow keydown](https://curriculum-content.s3.amazonaws.com/skills-based-js/left_arrow_keydown.png)

(Don't worry if you only see `37` :) ).

Cool, so we know that we need to look for `37` to trigger a move to the left. Let's start moving left then:

```js
document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    var leftNumbers = dodger.style.left.replace('px', '')
    var left = parseInt(leftNumbers, 10)

    dodger.style.left = `${left - 1}px`
  }
})
```

So what are we doing here? Well, if we catch a left arrow keydown, we move the dodger 1 pixel to the left. (We have to parse the pixels as integers and then convert them back to the pixel string.) Otherwise (if it's not a left arrow keydown), we do zilch.

But you'll notice that, even though we're currently going one pixel at a time, eventually our dodger will zoom (well, relatively speaking) right out of view.

How can we prevent this? Well, we want to check to see where the left edge of the dodger is, and we want to prevent it from going past the left edge of the black screen.

It seems like it's time to break the dodger's movement out into a separate function. First, let's refresh the page and code with a blank slate.

Then let's grab the dodger again

```js
var dodger = document.getElementById('dodger')
```

and work on that function:

```js
function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}
```

We're doing essentially the same as above, but we first ensure that the dodger's left edge has not gone past the left edge of its container. (Remember, position is relative to the container.)

Let's wire this up

```js
document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
})
```

Now try moving the dodger past the left edge. No can do!

## Your turn!

While this isn't tested, and this was meant as a code-along, we have not yet implemented moving the dodger to the right. Can you do it?

Think about what needs to change to make a `moveDodgerRight()` function. We'll need another `e.which` in the event listener, and instead of moving the dodger `${left - 1}px`, we'll be moving it `${left + 1}px` (or `${right - 1}px`, if you prefer). To prevent the dodger from escaping off the right-hand side, you can make sure that `dodger.style.right` is always greater than `0px`.

## Resources

- [Don't Look Back](http://terrycavanaghgames.com/dontlookback/)
- [Braid](http://braid-game.com/)

---

## Solution 1

```js
const dodger = document.getElementById('dodger');
dodger.style.backgroundColor = '#FF69B4';
// dodger.style.bottom = '100px';

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 15}px`;
    // console.log(leftNumbers);
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);

  if (left < 360) {
    dodger.style.left = `${left + 15}px`;
    // console.log(leftNumbers);
  }
}

document.addEventListener('keydown', function(e) {
  // console.log(e.code);
  // console.log(e.which);
  if (e.which === 37) {
    moveDodgerLeft();
  }
  if (e.which === 39) {
    moveDodgerRight();
  }
});
```

## Solution 2

Simplify the code a little.
```js
const dodger = document.getElementById('dodger');
dodger.style.backgroundColor = '#FF69B4';
// dodger.style.bottom = '100px';

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);

  (left > 0) ? dodger.style.left = `${left - 15}px` : 0;
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);

  (left < 360) ? dodger.style.left = `${left + 15}px` : 0;
}

document.addEventListener('keydown', function(e) {
  (e.which === 37) ? moveDodgerLeft() : 0;
  (e.which === 39) ?moveDodgerRight() : 0;
});
```