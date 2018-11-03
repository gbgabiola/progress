# Document Ready

## Objectives
- Set up a call to `document.ready()`
- Explain why `document.ready` is important

## Introduction

We don't ever want to write our JavaScript and jQuery inside our HTML files. For the same reasons that we want to separate out our CSS from our HTML, we want to separate out our JavaScript from our HTML, too.

But so far we've written our JavaScript code at the bottom of our HTML `<body>` so that the code would run once the page loads. How can we run our code when it's in a totally different file? We need to guarantee that the HTML document is loaded before our other files are triggered.

## Separating and Linking Code

This lesson doesn't render as a lab, but there are files within this repository you'll need to code along. Click on the Github icon in Learn, and fork and clone this repository.

If you take a look at `index.html`, you'll notice we have jQuery-flavored JavaScript code written at the bottom. Our goal is to refactor this site to move that code out into `script.js`

The first thing we need to do is load `script.js` in `index.html`. In the olden days (the 1990s and 2000s), we used to import our scripts in the `<head>` of our HTML documents. As our applications grew more interactive, our JavaScript files grew larger and our pages took longer to load. This was because the browser loads _everything_ in between the `<head>` tags before it attempts to render the page. Once the browser gets to `<body>`, it starts to load things in order (synchronously).

When that's just painting tags with the appropriate styles, the browser simply hums along; but when it encounters a `<script>` tag, it either needs to evaluate the script or else make a request to the location specified in the `<script>` tag's `src` attribute. These requests take time, so nowadays, we put all of our `<script>` tags at the bottom of `<body>`, below all of the static HTML content. Go ahead and add a `<script>` tag for "script.js" at the bottom of `<body>`:

```html
<script src="script.js"></script>
```

Now that our HTML file can find our JavaScript File, let's remove the code between the `script` tags from the bottom of our HTML file and move it to `script.js`.

In this simple example, you should already see `"this is so freaking cool."` appended to `div#text`. But normally, it's not safe to execute JavaScript code until the browser tells us it's ready.

## Document Ready

Thankfully, the browser has a built-in way to determine when a page is loaded. You'll be coding along in `index.html` and `script.js`.

In `script.js`, we need to set up a document ready in order to detect when our HTML page has loaded, and the document is ready to be manipulated:

```js
$(document).ready(function() {
  // code to be executed goes here
});
```

The `$` is a shortcut for `jQuery`, and provides an interface to the library. Every time you see `$`, think `jQuery`.

Once the `load` event fires (which we've told jQuery to listen for with `$(document).ready()`), the rest of the code will fire. Place the document ready around the jQuery already in `script.js`. Save your changes, and refresh in the browser. You should see the text appear in the browser!

## Resources

- [Learn jQuery](http://learn.jquery.com/using-jquery-core/document-ready/)
- [jQuery Docs](https://api.jquery.com/ready/)

---

## Practice

```js
$(document).ready(function() {
  $("#text").append("this is so freaking cool.");
});
```

```html
<p id="text">jQuery is so cool. It lets me add text to my page programmatically. </p>
  
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
<script src="script.js"></script>
```