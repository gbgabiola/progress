# Modifying HTML with jQuery Lab

## Objectives
- Load jQuery in HTML file
- Use jQuery to manipulate HTML

## Instructions
Everyone loves a good gif of puppies and kids doing funny things, so let's use jQuery to make sure we have a good one on our page.

We'll be coding our solution in `html/index.html`.

- Load jQuery in `index.html` using the following URL `http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js` **Remember**, load scripts at the bottom of the `body`.

- Before the closing body tag, use jQuery to append this gif (https://s3.amazonaws.com/learn-verified/painting-with-dog.gif) to the `div` with the `id` `image`. (Check out the resource below if you need a hint!)

## Resources
- [Stack Overflow](http://stackoverflow.com/questions/941206/jquery-add-image-inside-of-div-tag)

---

## Solution

```html
<!doctype html>
<head>
  <title> Kids Are Weird </title>
</head>
<body>
  <div id="image">
  </div>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js"></script>
  <script>
  $("#image").append("<p>Weird kid playing with the dog's tail.</p>").append('<img id="img" src="https://s3.amazonaws.com/learn-verified/painting-with-dog.gif" alt="Dog and the kid.">');
  </script>
</body>
```