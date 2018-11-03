# jQuery Event Listeners Lab

## Objectives

- Explain what an event listener is and how it's used
- Implement an event listener

## Intro

Ever used a website where an action you took triggered something to happen on the page? You clicked part of a form and suddenly more to fill out appeared. You moused over part of the page and a modal window appeared. On Facebook, you click to see more comments and the rest appear. The list goes on and on and on. When these actions happen, code is responding to an event taken by a user, and responding with an action.

In JavaScript, these things that happen are called **DOM events** and the code written to trigger the action is called an **event listener** or **event handler**.

## Attach Event Handler

In order to trigger events, we need to set up a handler that will respond when we can run our code.

Let's take a basic example:

```html
<h1> This is some text to click</h1>
```

Given the above HTML, let's set up an event handler to pay attention to this `h1` tag:

```js
$('h1').on("eventname", function(){
    //action you want taken
});
```

We use `on` to bind an event to the HTML element we selected (in this case `h1`). The `on` function takes an argument of the name of the event you want the user to take. Whenever that event happens, the code inside the function will run.

#### load

The load event handler triggers an action to happen when the element it's called on is loaded. An image is a good example for when this would be used because images typically load slower than text.

```html
  <img src="https://s3.amazonaws.com/after-school-assets/minion-tongue.jpg">
```

JS:
```js
$('img').on('load', function(){
  //actions you want to happen
});
```

#### keypress, keydown, keyup

The `keypress` event keeps track of every time a key on the keyboard is pressed (excluding ALT, CTRL, SHIFT, ESC). It's important to note that `keypress` isn't covered by browser specifications, so its behavior isn't guaranteed.

`keydown` tracks every time a key is pressed down on the keyboard, and `keyup` checks every time a key press is released.

keypress:
```js
$(document).on('keypress', function(key) {
  if (key.which == 13){
    alert('enter was pressed');
  }
});
```

keyup:
```js
$(document).on('keyup', function(key) {
  if (key.which == 82){
    alert('r was pressed');
  }
});
```

keydown:
```js
$(document).on('keydown', function(key) {
  if(key.which == 83){
      alert('s was pressed');
  }
});
```

The three examples above use `document` as the jQuery selector, so any time a key is pressed anywhere on the screen, the alert will appear. If you want to check if the cursor is in a particular area (like an input field) then you would just need to change the selector.

Let's walk through how `keydown` works. We use `document` as our selector and bind the `keydown` event. We pass `key` to the function as an argument. Inside the function, we set up an `if` statement that checks if the `which` of the pressed key matches. `83` is the ASCII code for `s`. If the `s` key was pressed, the alert `"s was pressed"` will appear.

#### submit

The `submit` event submits a form. Let's set up our submit event so that it only submits the form if a certain value has been entered in the text field:

```js
$("form").on("submit", function() {
  if ($( "input:first" ).val() === "correct") {
    alert('your form is going to be submitted now');
    return;
  }
  alert("you entered the wrong value");
  return;
});
```

In the example above, we are using the `submit` event. We use the HTML `form` as our selector to bind the event on. We then set up an if-statement that checks to see if the value of the first input is `"correct"`. If the user typed `"correct"` then the alert `'your form is going to be submitted now'` will appear, and the function will `return` so that no other lines of code will be executed. If they didn't enter `"correct"` the alert `"you entered the wrong value"` will appear. As of right now, the form is still submitting even with the wrong value, but later we'll learn how to prevent that from happening.


## Instructions

You will write your code in `js/events.js`. You will want to define your functions outside of the document ready, and call them inside of this. This way, your tests will run as expected and you can test your code in the browser as well.

- Define a function `getIt` that does not accept a parameter. The function should bind a `click` event to the `p` tag. When the paragraph is clicked, the function should alert `"Hey!"`.

- Define a function `frameIt` that does not accept a parameter. The function should bind the `load` event that adds the class `tasty` to the image to add a red frame to the image.

- Define a function `pressIt` that does not accept a parameter. The function should bind a `keydown` event to the input field of the form that alerts a user when they have pressed the `G` key.

- Define a function `submitIt` that does not accept a parameter. The function should bind a `submit` event to the form that alerts `"Your form is going to be submitted now."`.

## Resources

There are many, many more jQuery events. Take a look at the docs to learn about all of them!

- [Browser Events](https://api.jquery.com/category/events/browser-events/)
- [ASCII Key Values](http://keycode.info/)

And keep in mind that jQuery events are based on the `Event` class that's built into browsers. You can read more about `Event` here:

- [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)

---

## Solution 1

```js
function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $('form input').on('keydown', function(key) {
    if (key.which == 71) {
      alert("G key was pressed!");
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.");
  });
}
```

## Solution 2
Simplifying the code.
```js
function getIt() {
  $('p').on('click', () => alert("Hey!"));
}

function frameIt() {
  $('img').on('load', () => $('img').addClass('tasty'));
}

function pressIt() {
  $('form input').on('keydown', (key) => (key.which == 71) ? alert("G key was pressed!") : 0);
}

function submitIt() {
  $('form').on('submit', () => alert("Your form is going to be submitted now."));
}


$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
```