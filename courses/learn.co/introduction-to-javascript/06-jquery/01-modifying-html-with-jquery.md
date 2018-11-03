# Modify HTML With jQuery

## Objectives

- Load jQuery in HTML file
- Write inline jQuery to modify HTML
- Explain how jQuery modifies HTML

## Inline jQuery

We're going to use jQuery to add some text to our HTML page.

### Include jQuery Link

This lesson doesn't render as a lab, but there are files within this repository you'll need to code along. Click on the GitHub icon in Learn, and [fork and clone this repository into your IDE](http://help.learn.co/workflow-tips/github/how-to-manually-open-a-lab).

In order to start writing jQuery, we need to include the library in our HTML. One way to do this would be to download a copy of the jQuery library and include it with our project. We can also link to the library hosted by a content delivery network, or CDN. For this example, we'll be loading jQuery from Google's CDN. Copy the code below and paste it in `html/index.html` at the very bottom of the HTML `body` (right above the `</body>` close tag). This `script` tag links our HTML file to the jQuery library.

```html
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js"></script>
```

### Adding Text

Go ahead and open `html/index.html` in the browser. To do this in the IDE, you'll want to run the `httpserver` command in the terminal. You should see something like this: `Serving HTTP on 159.203.117.55:3107`. Paste 159.203.117.55:3107 into your browser's URL bar and you should see a list of files and directories. Click on the one that says `html` and you should see really boring looking website with the text `yo yo yo yo yo yo yo`.

We want to add the text `hey hey hey hey!!!!!` to the end of our paragraph.

Below our `script` tag that loads jQuery, right before the closing `body` tag, we'll want to add an opening and a closing `script` tag:

```html
<script>
</script>
```

Between these tags is where we want to write our inline jQuery. The script tags need to be at the bottom of the page because the code we're going to write is dependent on the `p` tag being already loaded in the browser. Our jQuery will error if there isn't a `p` tag to add text to.

And now, in between the script tags, add the following code:

```js
$("#yo").append("hey hey hey hey!!!!!");
```

Save the changes to `html/index.html` and reload in the browser. You should see `yo yo yo yo yo yo yo hey hey hey hey!!!!!` on the page!!

The `$` is just a function — it's equivalent to `jQuery` (which is also a function that you can call). You might think of it as a fancy alias (with a few tricks up its sleeve) to `document.querySelectorAll`.

`"#yo"` is our jQuery selector -- we're selecting the HTML element with the ID `yo`. We're then using the jQuery `append` function, which adds text to an HTML element, and we're passing in `"hey hey hey hey!!!!!"` which is the text we want to add.

Don't worry too much about the mechanics of these selectors and functions, we'll go over those in way more detail. Just notice that the text appeared on the screen, even though we didn't explicitly add it between the `p` tags.

---

## Practice

```html
<!doctype html>
<head>
</head>
<body>
  <p id="yo"> yo yo yo yo yo yo yo </p>
  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js"></script>
  <script>
  $("#yo").append("hey hey hey hey!!!!!");
  </script>
</body>
```