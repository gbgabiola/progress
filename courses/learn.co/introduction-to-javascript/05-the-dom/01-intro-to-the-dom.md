# Introduction to the DOM

## Problem Statement

We know how to write HTML and style it with CSS. But what if we want to do more with the content in our pages, such as adding or deleting elements or modifying them? It's time to move on to interactivity, and understanding the Document Object Model, or DOM, will give us the bridge to get there.

## Objectives

1.  Identify the Document Object Model
2.  Interact with the Document Object Model
3.  Explore how JavaScript manipulates the DOM

## Identify the Document Object Model

Just as your DNA represents a code-based version of you, the DOM represents a code-based version of a web page. Because of this, when you change the DOM, you change what's displayed in the browser. Adding elements, removing elements, changing elements in the DOM changes what you see in the browser screen. Thanks to the DOM and the way it creates a representative model of document elements, we can use a language such as JavaScript to work with those elements and add to
them, delete them or modify them.

To see the DOM in action, let's take a look at the HTML that constructs every website we visit.

> **NOTE**: We recommend that you use Google Chrome. (You can download chrome [here](https://www.google.com/chrome/browser/desktop/index.html)). Because Chrome has several developer-friendly features, it's a preferred development tool.

### Change the URL of a web page to view the source

In a Google Chrome browser, go to the URL `https://learn.co/tracks/welcome-to-learn-verified`. To see the HTML of that page, add `view-source:` to the front of the URL. The complete final URL will be `view-source:https://learn.co/tracks/welcome-to-learn-verified`.

By using the `view-source` URL prefix, all the page's source HTML will be revealed to you. It will look something like this:

![html-source](https://s3.amazonaws.com/learn-verified/html-javascript-lesson.png)

The browser reads this HTML, along with CSS and JavaScript, to create the DOM.

Notice that what we see in our the `view-source` tab looks very similar to HTML you may have seen previously.

```html
<!DOCTYPE html>
	<html>
	  <head>
	    <meta charset="utf-8">
	    <title></title>
	      <link rel="stylesheet" href="style.css">
  	</head>
  <body>
    <header>....</header>
    <img id="kitten" class="" src="http://makeameme.org/media/templates/120/grumpy_cat.jpg" alt="" width="120" height="120">
  </body>
  <script src="https://raw.githubusercontent.com/learn-co-curriculum/js-and-the-web/master/spin.js" charset="utf-8"></script>
</html>
```

It may look like our browser is displaying the HTML that we see, but it is not. Instead, our browser is displaying the Document Object Model of the respective
web page.

## Interact with the Document Object Model

The best way to understand the Document Object Model is to interact with it. Let's practice.

1. Open the Google Developer console

![opening-console](https://s3.amazonaws.com/learn-verified/opening-console.gif)

> From this web page, look at the Chrome menubar at the top of the page. Click on "View", then select "Developer", then "Developer Tools". This will open the Google Developer Console.

2. Manipulate the DOM

![delete-header](http://web-dev-readme-photos.s3.amazonaws.com/js/header-click.png)

When you open the Google Developer Console, you will see what looks like HTML. There are head tags, body tags, divs, etc. Now from inside the developer console, click on the element that says `header`, and then press the delete button on your keyboard. You should see the header at the top turn white. You just deleted it!

![deleted-header](http://web-dev-readme-photos.s3.amazonaws.com/js/deleted-header.png)

Now did you just delete the HTML? No. Let's prove it.

View the page source. Right click (or two fingers click on the mac) on the lesson page in the browser and select view page source. You will see the that the HTML is just as it always was, with a header tag and lots of other elements inside.

![html-source](https://s3.amazonaws.com/learn-verified/html-javascript-lesson.png)

The changes that the **developer console** caused, and the changes the **developer console** currently displays are changes in the _Document Object Model_, but not in our _HTML_. Our webpage now looks blank, reflecting the missing header in our DOM, even though our HTML still has content in the header tags.

So we can conclude that by changing the Document Object Model, we can change the way our web page displays. And we can do this even if our HTML is unchanged. The HTML is essentially the starting point of the page's content. But as we just saw by deleting the header of the page, what is displayed can change. When we change it, we change the Document Object Model, and that changes the appearance in the browser. The HTML, however, once loaded on a webpage, does not change.

## Explore How JavaScript Manipulates the DOM

With JavaScript we can (1) view a current representation of our Document Object Model. With JavaScript we can also (2) select specific portions of the DOM, and manipulate them, which changes what shows up in a browser window.

Let's get to it.

1. Use JavaScript to view the current representation of the DOM

From inside the developer console, click on the tab that says the word "console." At the bottom you will see a cursor. There, type the word `document` and press "Enter.""

You'll get a `#document` returned. Click the triangle and you'll see the DOM. If you followed along above, you'll see a `head` tag, but no `header` tag. So by typing in `document` it looks like our header is gone. However, if we view page source, the HTML is unchanged. Remember, this is the difference between the DOM (current representation of the page) and the HTML (the initial representation of the page).

2. Use JavaScript to manipulate our DOM

**Refresh your browser to get the header back. Let's remove the header now with JavaScript.** Open up the console and type in the following and press "Enter."

```js
document.querySelector('header');
```

This will return something like this: `<header class="site- header">...</header>`. Go ahead and click on that display triangle to see more.

It retrieves the header tag, which contains the lesson title among other things. OK, now let's do something with this header. Open up the console, and type in the following:

```js
document.querySelector('header').remove();
```

Take a look at the top of the page again. The header is gone. But do you think the HTML has just changed? Well, no. As you know, the HTML never changes after it is first rendered. Instead, we accessed the Document Object Model, which altered the model and that altered the appearance of our web page. This is the same as we did before, but with code. **To get the header back, just hit refresh.**

## Resources

- [CSS Tricks - What is the DOM?](https://css-tricks.com/dom/)
- [MDN - The DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

## Conclusion

- HTML is a markup language used to display content in a browser. When we change the appearance of a web page, what we are really changing is the Document Object Model, which directly determines the appearance displayed in the browser.
- We can view and manipulate the Document Object Model by opening our developer tools, but when we do so the HTML is not changed.
- We can also view our Document Object Model by opening the console and typing in the word `document`.
- We can select a specific piece of the DOM by using JavaScript, such as `document.querySelector('header')`, and we can also use JavaScript to alter our DOM with `document.querySelector('header').remove()`
- **To get your header back, just hit refresh**