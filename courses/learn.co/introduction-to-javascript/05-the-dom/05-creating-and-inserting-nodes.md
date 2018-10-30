# Creating and Inserting DOM Nodes

## Objectives

By the end of this lesson, you'll be able to

1. Create DOM elements programmatically
2. Insert elements into the DOM
3. Remove elements from the DOM

## `document.createElement()`

Creating an element in JavaScript couldn't be easier. Simply call `document.createElement(tagName)`, where `tagName` is the string representation of any valid HTML tag (e.g., `'p'`, `'div'`, `'span'`, etc.).

Open this lesson's `index.html` file in your browser or use `httpserver` to serve it temporarily. Once open, [open up the browser's console](https://developers.google.com/web/tools/chrome-devtools/console/). In the console, enter:

```js
var element = document.createElement('div');
```

Type `element.` (or whatever you named your newly minted element), and explore the properties available. It's a living, breathing DOM element, but it doesn't yet appear in the DOM.

We can set properties on it:

```js
element.innerHTML = 'Hello, DOM!';
element.style.backgroundColor = '#f9f9f9';
```

Feel free to set as many properties as you'd like — this is a good chance to look around and explore different properties of DOM elements!

But notice that no matter what properties we add, the element doesn't show up on the page. What gives?

## `appendChild()`

To get an element to appear in the DOM, we have to append it to an existing DOM node. We can start as high up on the tree as `document.body`, or we can find a more specific element using any of the techniques we've learned for traversing the DOM. Let's append `element` to `body` to start:

```js
document.body.appendChild(element);
```

If you've been following along, you should see `"Hello, DOM!"` on the page now (and it should have a light gray background).

We can continue to update `element`, since we have a reference to it:

```js
element.style.textAlign = 'center';
```

And now our element's text is centered.

We can append elements to that element:

```js
var ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

element.appendChild(ul);
```

Hm, that looks a bit ugly. Let's fix it

```js
ul.style.textAlign = 'left';
```

That's better.

## `removeChild()`

Now let's remove one of those `li`s.

```js
ul.removeChild(ul.querySelector('li:nth-child(2)'));
```

Boom. Second element is gone.

What if we want to remove the whole unordered list (`ul`)?

## `element.remove()`

We can just call `remove()` on the element itself:

```js
ul.remove();
```

And it's gone!

## Resources

- [document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [appendChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)

---

## Solution

```js

```