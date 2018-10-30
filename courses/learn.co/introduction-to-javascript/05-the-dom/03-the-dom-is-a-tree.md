# The DOM Is a Tree

## Objectives

1. Explain what a tree is in computer science
2. Describe how the DOM works as a tree
3. Practice exploring the DOM

## A tree? Like, with leaves?

What do we mean when we say that the DOM is a tree? Are we saying it has leaves?

Well, yes, metaphorically.

Trees make a good metaphor for the DOM because we intuitively understand how we might traverse them. Starting at the roots, one can climb up the tree and out to the farthest — and thinnest — branches.

The thicker a branch is, the stronger its connections are: the more it holds within it.

Likewise, the thinner a branch is, the less it holds inside.

The DOM works basically the same way, except we usually talk about the root as being at the top of the DOM and the leaves being the most deeply nested HTML elements. So basically, we can imagine a tree turned on its head.

## The DOM

An interesting property of trees is that every tree can contain _subtrees_, which we can, for all intents and purposes, treat independently of their parent trees.

Practically speaking, the DOM begins at `<html>`, but we should think carefully about manipulating what's between the `<head></head>` tags. Instead, we can look at the DOM subtree with its root at `<body>` and only deal with things that will be visible on the page. Within that tree, we might also deal with subtrees. So, for example, if we have

```html
<body>
  <div>
    <p>Hi!</p>
  </div>

  <div>
    <p>Bye!</p>
  </div>
</body>
```

We would have a tree that looks like

```sh
        body
        /  \
      div   div
      /      \
     p        p
    /          \
 "Hi!"        "Bye!"
```

Pretty simple, right? Similarly, if we had a DOM subtree that looked like

```html
<div>
  <div>
    <h1>Hello!</h1>
  </div>

  <div>
    <h5>Sup?</h5>
  </div>
</div>
```

We could simply treat it as the tree

```sh
         div
        /  \
      div   div
      /      \
    h1        h5
    /          \
 "Hello!"     "Sup?"
```

### Finding a Node

Remember when we said that we could organize our tree in such a way that a node's metadata didn't interfere with finding its children? It turns out that not only does providing additional information about a node make it more _useful_, it also makes it easier to find.

JavaScript exposes a few ways of finding DOM nodes more or less directly, courtesy of the `document` object.

#### `document.getElementById()`

This method provides the quickest access to a node, but it requires that we know something very specific about it — its `id`. Since IDs must be unique, this method only returns one element. (If you have two elements with the same ID, this method returns the first one — keep your IDs unique!) Given the following DOM tree

```html
<div>
  <h5 id="greeting">Hello!</h5>
</div>
```

we could find the `h5` element with `document.getElementById('greeting')`. Notice how the `id` that we pass to `getElementById` is identical to the `id` in `<h5 id="greeting">`. We can assign properties to HTML nodes (or elements) simply by including them between the `<>` tags at the start of the element (so not in the `</h5>` tag, in this case).

**Try it out!**

Open up your web inspector (command+option+j on OS X) and find an element on the page — make note of its `id`. Then open up your console, type `document.getElementById('theIdYouTookNoteOf')`, and check out your handy dandy DOM node. Try changing a few of its properties!

#### `document.getElementsByClassName()`

This method, as its name implies, finds elements by their `className`. Unlike `id`, `className` does not need to be unique; as such, this method returns an HTMLCollection (basically a list of DOM nodes — note that it is _not_ an array, even though it has a `length` property) of all the elements with the given class. You can iterate over an HTMLCollection with a simple `for` loop.

Given the following DOM tree

```html
<!-- the `className` attribute is called `class` in HTML -- it's a bummer -->
<div>
  <div class="banner">
    <h1>Hello!</h1>
  </div>

  <div class="banner">
    <h1>Sup?</h1>
  </div>

  <div class="banner">
    <h5>Tinier heading</h5>
  </div>
</div>
```

we could find all of the elements with `className === 'banner'` by calling `document.getElementsByClassName('banner')`.

**Try it out!**

Inspect the web page again, this time making note of a className. Get all elements with that className and give 'em a look. Remember, you can use a `for` loop to loop through them. (You can also assign the return value of `document.getElementsByClassName()` to a variable: `var elements = document.getElementsByClassName('banner')`.)

#### `document.getElementsByTagName()`

Suppose you don't know an element's ID but you do know its tag name (the tag name is the main thing between the `<>`, e.g., `'div'`, `'span'`, `'h1'`, etc.). Since tag names aren't unique, this method returns an HTMLCollection of 0 to many nodes with the given tag.

**Try it out!**

Explore the DOM in console by typing `document.getElementsByTagName('div')`. Remember, you can iterate through these elements using a simple `for` loop.

### Finding a Node without knowing anything about it

What if we know next to nothing about an element? Or what if we're just interested in finding out more about the child nodes of a given element? This is where our knowledge of trees and nested data structures comes in handy!

Given the following DOM tree (which you can find in `index.html` — feel free to open the file up [in your browser](https://learn-co-curriculum.github.io/the-dom-is-a-tree/) to play along!)

```html
<main>
  <div>
    <div>
      <p>Hello!</p>
    </div>
  </div>
  <div>
    <div>
      <p>Hello!</p>
    </div>
  </div>
  <div>
    <div>
      <p>Hello!</p>
    </div>
  </div>
</main>
```

how would we go about changing only the second "Hello!" to "Goodbye!"? We couldn't just iterate over `document.getElementsByTagName('div')`, checking for `textContent === "Hello!"`, because we'd inadvertently change all three "Hello!"s. More importantly, the DOM might change (more on that later), and we want to make sure that we're updating the right element.

Let's start by getting the `<main>` element:

```js
const main = document.getElementsByTagName('main')[0]
```

Then we can get the children of `main` using `main.children`, so we can get the second child with `main.children[1]`.

```js
const div = main.children[1]
```

Finally, we can get and update our `<p>` element with

```js
// we can call getElementsByTagName() on an _element_
// to constrain the search to its children!
const p = div.getElementsByTagName('p')[0]

p.textContent = "Goodbye!"
```

Obviously, this way of accessing that text isn't fully generic, but it does a good job of demonstrating the basic tools available to us for finding and manipulating HTML elements.

## Resources

- [MDN - Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)