# Listening To Nodes

## Problem Statement

It's been established that we can easily manipulate "nodes" in the DOM, as well as create and remove elements at will. We know that we can, so how exactly _do_ we interact with nodes on the page? Well, we _listen_ for them!

## Objectives

1.  Demonstrate listening to events on a DOM node with `addEventListener()`
2.  Demonstrate triggering events listeners on DOM nodes
3.  Demonstrate preventing the default behavior for DOM nodes
4.  Explain the difference between bubbling and capturing events
5.  Demonstrate stopping propagated behaviors with `stopPropagation()`

#### Instructions for In-Browser Learn IDE Users

If you are using the Learn IDE available in your browser, you will automatically clone down the files you need when you click 'Open IDE', but in order to view `index.html`, you will need to use `httpserver` to serve the HTML page temporarily. In the terminal, type `httpserver` and press enter. You will see that `Your server is running at ...` followed by a string of numbers and dots. This string is a temporary IP address that is hosting your `index.html` file. Copy this string of numbers, open a new tab and paste the string in to the URL bar.

#### Instructions for Students Using an Stand Alone Text-Editor

If you are using an standalone text editor such as Sublime or Atom, before we get started, follow [these instructions](http://help.learn.co/workflow-tips/github/how-to-manually-open-a-lab) to manually fork and clone the lesson repository on GitHub. In your forked and cloned copy, you'll find the `index.html` file, which you can then manually open up in the browser. (For instructions on opening HTML files in the browser from the Learn IDE,\ see [this Help Center article](http://help.learn.co/the-learn-ide/common-ide-questions/viewing-html-pages-in-the-learn-ide).)

## Demonstrate Listening to Events on a DOM Node with `addEventListener()`

Adding an event listener to a DOM node doesn't require much logic — we just call `addEventListener()` on the node. `addEventListener()` takes two arguments: the name of the event, and a function to handle the event.

Start by adding a listener for `click` events to the `main#main` element in `index.html`. Once you've opened `index.html` in the browser, enter the following in the browser's JS console:

```js
const main = document.getElementById('main');

main.addEventListener('click', function(event) {
  alert('I was clicked!');
});
```

## Demonstrate Triggering Events Listeners on DOM Nodes

If you click on the `main` element (you can click its text, "My ID is 'main'!"), you should see an alert: `'I was clicked!'`. How does this work?

The first argument, `'click'` is the name of the event that's being listened for. Click events probably make up a majority of events listened to, but other common events are `change`, `'keydown'`, `'keyup'`, `'load'`, `'mouseover'`, `'mouseout'` — the list goes on. You can find a reasonably comprehensive list on [MDN](https://developer.mozilla.org/en-US/docs/Web/Events).

The second argument is a function that accepts the event as its argument. The event has a number of useful properties on it — keypress, keydown, and keyup events, for example, will have a `which` property that tells us which key was pressed. In the code snippet example below we add an event listener to the `input` element.

```js
const input = document.querySelector('input');

input.addEventListener('keydown', function(e) {
  console.log(e.which);
});
```

If you test out this code, you'll see that pressing "enter" will print `13` in console; pressing "a" prints `65`; etc.

## Demonstrate Preventing the Default Behavior for DOM Nodes

Refresh the page to start with a clean slate. Let's test out preventing the default behavior of the input by keeping it from receiving the "g" character. Enter the following in your console:

```js
const input = document.querySelector('input');

input.addEventListener('keydown', function(e) {
  if (e.which === 71) {
    console.log('default prevented');
    return e.preventDefault();
  } else {
    console.log('Not a "g"');
  }
});
```

Now try to type "g" in the input--not working, right?

Every DOM `event` comes with a `preventDefault` property. `preventDefault` is a function that, when called, will prevent the, well, default event from taking place. It provides us an opportunity to intercept and tweak user interactions (usually in more helpful ways than preventing them from typing "g").

Another, related event property is called `stopPropagation`. Like `preventDefault`, `stopPropagation` is a function that, when called, interrupts the event's normal behavior. In this case, it stops the event from triggering other nodes in the DOM that might be listening for the same event. Yes, one action can trigger multiple events!

## Explain the Difference Between Bubbling and Capturing Events

DOM events propagate by bubbling (starting at the target node and moving up the DOM tree to the root) and capturing (starting from the target node's parent elements and propagating down the tree until it reaches the target) — by default, events nowadays all bubble. We can verify this behavior by attaching listeners to those nested `div`s in `index.html`. Enter the following in your console:

```js
let divs = document.querySelectorAll('div');

function bubble(e) {
  // remember all of those fancy DOM node properties?
  // we're making use of them to get the number
  // in each div here!

  // if `this` is a bit confusing, don't worry —
  // for now, know that it refers to the div that
  // is triggering the current event handler.
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}
```

Now click on the `div` containing "5". You should see

```js
5 bubbled
4 bubbled
3 bubbled
2 bubbled
1 bubbled
```

In the console, you can see the event starts at `div` 5, and then it bubbles up to the topmost node. Along the way, it triggers any other nodes that are listening for the event -- in this case, `'click'`.

Try clicking on a node that's not so deeply nested -- you should still see the event bubble up, starting at the node that you clicked and hitting every node up the tree until it reaches the top.

What about capturing? In order to capture, we need to set the third argument to `addEventListener` to `true`. Let's try it out.

```js
divs = document.querySelectorAll('div');

function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');
}

for (let i = 0; i < divs.length; i++) {
  // set the third argument to `true`!
  divs[i].addEventListener('click', capture, true);
}
```

Now click on `div` 5. You should see

```js
1 captured
2 captured
3 captured
4 captured
5 bubbled
5 captured
4 bubbled
3 bubbled
2 bubbled
1 bubbled
```

As you can see, the event propagates from the top of the page towards the target node, triggering event handlers as appropriate along the way.

Notice that the target node is the _last node to capture the event_, whereas it's the _first node to bubble the event up_. This is the most important takeaway.

**NOTE**: Don't worry if bubbling and capturing seems a bit esoteric. The different event behaviors are the results of the browser wars of the 90s, but most of the time it's safe just to stick to the default (which, for the record, is bubbling). You can read more about bubbling and capture on [StackOverflow](http://stackoverflow.com/questions/4616694/what-is-event-bubbling-and-capturing) and [QuirksMode](http://www.quirksmode.org/js/events_order.html)

## Demonstrate Stopping Propagated Behaviors with `stopPropagation()`

Now that we've explained a bit about the dangers and behavior of bubbling and capturing, you can see how events propagate through the DOM. Much of the time, since we're listening for very specific events, this doesn't matter: our events can propagate up or down, and they'll only trigger the event handler(s) that we want them to trigger. Sometimes, as with these `div`s, we have a fairly generic event that we want to constrain to its target. That's where `stopPropagation` comes in.

Let's rewrite the bubbling example to stop propagation so that only one event is triggered (be sure to reload the page before entering this code!):

```js
const divs = document.querySelectorAll('div');

function bubble(e) {
  // stop! that! propagation!
  e.stopPropagation();

  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}
```

Now try clicking on any node — you should only see one log statement!

## Conclusion

We covered a lot in this lesson. Feel free to edit `index.html`, to write code directly in the document (just put it between `<script></script>` tags), and to play around with different events. It's important to practice so you can get the hang of it! You can practice adding an event listener, using different event triggers, and intercepting user interactions with `e.preventDefault()` and `e.stopPropagation().`

## Resources

- [MDN - Web Events](https://developer.mozilla.org/en-US/docs/Web/Events)
- [StackOverflow - Bubbling and Capturing](http://stackoverflow.com/questions/4616694/what-is-event-bubbling-and-capturing)
- [QuirksMode - Event order](http://www.quirksmode.org/js/events_order.html)

---

## Practice

```js
const main = document.getElementById('main');
main.addEventListener('click', function(event) {
  alert('I was clicked!');
});

const input = document.querySelector('input');
input.addEventListener('keydown', function(e) {
  console.log(e.which);
});

const input = document.querySelector('input');
input.addEventListener('keydown', function(e) {
  if (e.which === 71) {
    return e.preventDefault();
  } else {
      console.log(e.which);
  }
});

let divs = document.querySelectorAll('div');
function bubble(e) {
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}

divs = document.querySelectorAll('div');
function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');
}
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', capture, true);
}

const divs = document.querySelectorAll('div');
function bubble(e) {
  e.stopPropagation();
  console.log(this.firstChild.nodeValue.trim() + ' bubble');
}
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}
```