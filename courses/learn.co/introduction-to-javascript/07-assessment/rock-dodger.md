# Rock Dodger

## Objectives

1. Use JavaScript to build a rock-dodging game
2. Explain how `window.requestAnimationFrame()` is used to animate movement on a page
3. Explain how to use `setInterval()`
4. Show off your JavaScript know-how

## Instructions

You did it — you've made it to the end of the introductory JavaScript curriculum. You've learned how to write JavaScript and how to use JavaScript to manipulate the DOM. Now, only this lab stands between you and ~~freedom~~ the end of this course!

So that we don't catch you off-guard, know that this project is meant to be difficult. We're really testing the limits of what we've learned so far. But know that we've solved the lab using only things that we've taught — well, mostly. There are two things (which we've partially implemented for you) that you should know about.

#### `window.requestAnimationFrame()`

This function tells the browser that we want to animate some change on the page. We'll use it in this lab for animating the movement of rocks and the dodger.

We can use [`window.requestAnimationFrame()`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) by passing it a callback that contains our animation:

```js
function move(el) {
  var top = 0

  function step() {
    el.style.top = `${top += 2}px`

    if (top < 200) {
      window.requestAnimationFrame(step)
    }
  }

  window.requestAnimationFrame(step)
}
```

If we call `move(el)` with a valid DOM element, `window.requestAnimationFrame()` will be called with the function `step`, which moves the `el` down the page in two-pixel increments until it's been moved 200 pixels. Pretty easy, right?

(Note that we can pass `step` to `window.requestAnimationFrame()` _inside_ of `step`. This is a nifty feature of JavaScript (and other languages) called [_recursion_](https://en.wikipedia.org/wiki/Recursion_(computer_science)). Don't worry if this concept makes your head spin a bit — that feeling is normal. For now, know that we can use `window.requestAnimationFrame()` as demonstrated above.)

#### `setInterval()`

[`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval) takes two arguments: a callback, and an interval in milliseconds. We can use it like so:

```js
function sayHello() {
  console.log('hello')
}

const myInterval = setInterval(sayHello, 1000)
```

The above will print `'hello'` to console once every second.

Note that `setInterval()` returns a reference to the interval. We can stop the interval from executing by calling `clearInterval(myInterval)`.

#### Getting Started

Open up `index.html` in your browser. You should see a black 400-by-400px box with a white square at the bottom. That square is the dodger — it can only move left and right.

Well, it _should_ be able to move only left and right — we'll need to implement that functionality!

Now open `index.js`. You'll see that we've defined a few functions for you, but we've left much of the file blank.

We've left enough comments to get you started, though, and we've defined all of the HTML and CSS that you'll need so that you can just focus on the JavaScript!

Remember to reload the page after updating and saving the file. You've got this!

Good luck!

## Resources

- [window.requestAnimationFrame()](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
- [setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval)

---

## Solution 1

```js
const DODGER = document.getElementById('dodger')
const GAME = document.getElementById('game')
const GAME_HEIGHT = 400
const GAME_WIDTH = 400
const LEFT_ARROW = 37 // use e.which!
const RIGHT_ARROW = 39 // use e.which!
const START = document.getElementById('start')

const ROCKS = []

var gameInterval = null


function checkCollision(rock) {
  const top = positionToInteger(rock.style.top);

  // rocks are 20px high
  // DODGER is 20px high
  // GAME_HEIGHT - 20 - 20 = 360px;
  if (top > 360) {
    const dodgerLeftEdge = positionToInteger(DODGER.style.left);
    const dodgerRightEdge = dodgerLeftEdge + 40;

    const rockLeftEdge = positionToInteger(rock.style.left);
    const rockRightEdge = rockLeftEdge + 20;

    return (
      (rockLeftEdge <= dodgerLeftEdge && rockRightEdge >= dodgerLeftEdge) ||
      (rockLeftEdge >= dodgerLeftEdge && rockRightEdge <= dodgerRightEdge) ||
      (rockLeftEdge <= dodgerRightEdge && rockRightEdge >= dodgerRightEdge)
    );
  }
}

function createRock(x) {
  const rock = document.createElement('div');

  rock.className = 'rock';
  rock.style.left = `${x}px`;

  var top = rock.style.top = 0;

  GAME.appendChild(rock);


  function moveRock() {
    rock.style.top = `${top += 2}px`;
    if (checkCollision(rock)) {
      return endGame();
    }

    if (top < GAME_HEIGHT) {
      window.requestAnimationFrame(moveRock);
    } else {
      rock.remove();
    }
  }

  window.requestAnimationFrame(moveRock);
  ROCKS.push(rock);
  return rock;
}


function endGame() {
  clearInterval();

  ROCKS.forEach(function(rock) {
    rock.remove();
  });

  document.removeEventListener('keydown', moveDodger);

  START.innerHTML = 'Play again?';
  START.style.display = 'inline';

  return alert("YOU LOSE!");
}

function moveDodger(e) {
  const code = e.which;

  if ([LEFT_ARROW, RIGHT_ARROW].indexOf(code) > - 1) {
    e.preventDefault();
    e.stopPropagation();
  }

  if (code === LEFT_ARROW) {
    moveDodgerLeft();
  } else if (code === RIGHT_ARROW) {
    moveDodgerRight();
  }
}

function moveDodgerLeft() {
  window.requestAnimationFrame(function() {
    const left = positionToInteger(DODGER.style.left);

    if (left > 0) {
      DODGER.style.left = `${left - 4}px`;
    }
  });
}

function moveDodgerRight() {
  window.requestAnimationFrame(function() {
    const left = positionToInteger(DODGER.style.left);

    if (left < 360) {
      DODGER.style.left = `${left + 4}px`;
    }
  });
}


/**
 * @param {string} p The position property
 * @returns {number} The position as an integer (without 'px')
 */
function positionToInteger(p) {
  return parseInt(p.split('px')[0]) || 0
}

function start() {
  window.addEventListener('keydown', moveDodger)

  START.style.display = 'none'

  gameInterval = setInterval(function() {
    createRock(Math.floor(Math.random() *  (GAME_WIDTH - 20)))
  }, 1000)
}
```

## Solution 2

```js
const DODGER = document.getElementById('dodger')
const GAME = document.getElementById('game')
const GAME_HEIGHT = 400
const GAME_WIDTH = 400
const LEFT_ARROW = 37 // use e.which!
const RIGHT_ARROW = 39 // use e.which!
const START = document.getElementById('start')

const ROCKS = []

var gameInterval = null


function checkCollision(rock) {
  const top = positionToInteger(rock.style.top);

  // rocks are 20px high
  // DODGER is 20px high
  // GAME_HEIGHT - 20 - 20 = 360px;
  if (top > 360) {
    const dodgerLeftEdge = positionToInteger(DODGER.style.left);
    const dodgerRightEdge = dodgerLeftEdge + 40;

    const rockLeftEdge = positionToInteger(rock.style.left);
    const rockRightEdge = rockLeftEdge + 20;

    return (
      (rockLeftEdge <= dodgerLeftEdge && rockRightEdge >= dodgerLeftEdge) ||
      (rockLeftEdge >= dodgerLeftEdge && rockRightEdge <= dodgerRightEdge) ||
      (rockLeftEdge <= dodgerRightEdge && rockRightEdge >= dodgerRightEdge)
    );
  }
}

function createRock(x) {
  const rock = document.createElement('div');

  rock.className = 'rock';
  rock.style.left = `${x}px`;

  var top = rock.style.top = 0;

  GAME.appendChild(rock);


  function moveRock() {
    rock.style.top = `${top += 2}px`;
    return (checkCollision(rock)) ? endGame() : 0;

    (top < GAME_HEIGHT) ? window.requestAnimationFrame(moveRock) : rock.remove();
  }

  window.requestAnimationFrame(moveRock);
  ROCKS.push(rock);
  return rock;
}


function endGame() {
  clearInterval();

  ROCKS.forEach((rock) => rock.remove());

  document.removeEventListener('keydown', moveDodger);

  START.innerHTML = 'Play again?';
  START.style.display = 'inline';

  return alert("YOU LOSE!");
}

function moveDodger(e) {
  const code = e.which;

  if ([LEFT_ARROW, RIGHT_ARROW].indexOf(code) > - 1) {
    e.preventDefault();
    e.stopPropagation();
  }

  (code === LEFT_ARROW) ? moveDodgerLeft() : 0;
  (code === RIGHT_ARROW) ? moveDodgerRight() : 0;
}

function moveDodgerLeft() {
  window.requestAnimationFrame(() => {
    const left = positionToInteger(DODGER.style.left);

    (left > 0) ? DODGER.style.left = `${left - 4}px` : 0;

  });
}

function moveDodgerRight() {
  window.requestAnimationFrame(function() {
    const left = positionToInteger(DODGER.style.left);

    if (left < 360) ? DODGER.style.left = `${left + 4}px` : 0;
  });
}


/**
 * @param {string} p The position property
 * @returns {number} The position as an integer (without 'px')
 */
function positionToInteger(p) {
  return parseInt(p.split('px')[0]) || 0
}

function start() {
  window.addEventListener('keydown', moveDodger)

  START.style.display = 'none'

  gameInterval = setInterval(function() {
    createRock(Math.floor(Math.random() *  (GAME_WIDTH - 20)))
  }, 1000)
}
```