# jQuery

## Goals

- Installing and using the jQuery framework.
- Learning about jQuery functionality
- Introduction to functions in jQuery
- Manipulating text, styles and attributes with jQuery
- Create animations and customizations with jQuery
- Use your jQuery knowledge to make your website interactive
- Responding to user initiated events with jQuery

## What is jQuery

**jQuery** is the most popular javaScript library created by John Resig. jQuerty is the most downloaded javaScript library.

Library is a bunch of code that somebody wrote that can be incorporate into your own project to make your life much easier.

```js
// regular javaScript
for (var i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    document.querySelector("h1").style.color = "red";
  });
}

//  jQuery
$("button").click(function() {
  $("h1").css("color", "red");
});
```

## Incorporate jQuery into Websites

jQuery CDN must be put before your custom script, so that you won't have any problems displaying your custom styles using custom script.

**Two ways to get jQuery:**

1. Download the jquery files
2. CDN 

**Two ways to add jQuery:**

1. Check if your jQuery is ready by:

  ```js
  $(document).ready(function() {
    $("h1").css("color", "red");
  });
  ```
2. Alternatively, you can add the jQuery below before the closing tag of the body.

## How Minification Works to Reduce File Size

Minified files has the spaces, new lines, comments removed, to try to reduce the file size

Reasons to minify the files:

- the code has to be loaded by the user's browser, depending on the internet speed that may take a short time or a long time.
- browsers doesn't care about tabs indent, spaces or comments, it completely ignores all of it.
- to load the website much faster

## Selecting ELements

jQuery is very similar with `querySelector` and `querySelectorAll` we specify the selector because it's the most flexible, adaptable and can be very specific.

There's no differece between selecting one or selecting many, `querySelector` and `querySelectorAll` can be replace by just (`$`).

Regular JavaScript:

```js
document.querySelector("h1");
document.querySelector("h1.title");
document.querySelectorAll("button");
```

jQuery Syntax:

```js
$("h1");
$("h1.title");
$("button");
```

## Manipulating Styles

We can manipulate the css style of a selected element by simply using `.css` method from jQuery.

Parameter:

- first param is just getting the current value of css property.
- second param can be set to value that you like.

  ```js
  $("h1").css("font-size"); // 32px

  $("h1").css("font-size", "5rem");
  ```

Remember the separation of concerns, we should follow that rule even with jQuery. Define the class using css files, then add it using jQuery.

Define css class:

```css
.big-title {
  font-size: 5rem;
  color: red;
  font-family: cursive;
}

.margin-50 { margin: 50px; }
```

**Methods**

- **`addClass()`** to add the define style using jQuery
- **`removeClass()`** to remove the added class:
- **`hasClass()`** to check if an element has a particular class

  ```js
  // Add Multiple class separated by space
  $("h1").addClass("big-title margin-50");

  $("h1").removeClass("big-title");

  $("h1").hasClass("margin-50"); // true
  ```

## Manipulating Text

- **`text()`** to change the current text of an element
- **`html()`** is similar with `innerHTML`, you can add html

  ```js
  $("h1").text("Good Bye!");
  // every text buttons will be update
  $("button").text("Don't Click");

  $("button").html("<em>Click Me Again! </em>");
  ```

## Manipulating Attributes

Get and Set the attributes of the selected element.

- **`attr()`** accepts two param for
  - first is get the current src
  - second is setting the src

  ```js
  // get the current src
  $("img").attr("src")

  // set the src of the element
  $("a").attr("href", "https://www.yahoo.com")
  ```

## Adding Event Listeners

```js
// Regular JavaScript
for (var i = 0; i < 5; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    document.querySelector("h1").style.color = "purple";
  });
}

// jQuery
$("button").click(function() {
  $("h1").css("color", "purple");
})
```

- **`click()`** to add a click event listener
- **`keydown()`** to detect the key strokes.
- **`on()`** method is even more flexible of adding event listener and any javaScript events will work.

  ```js

  $("h1").click(function() {
    $("h1").css("color", "purple");
  });

  // keydown
  $("input").keydown(function(event) {
    console.log(event.key);
  });
  
  // on
  $("h1").on("mouseover", function() {
    $("h1").css("color", "purple");
  });
  ```

## Adding and Removing Elements

- **`before()`** to add a new html element before the current element.
- **`after()`** to add a new html element after the current element.
- **`prefend()`** will add a new html element into an element you selected just after the opening tag, but before the content and end tag of the selected element.
- **`append()`** will add a new html element into an element you selected just after the opening tag and content, but before the end tag of the selected element.

  ```js
  $("h1").before("<button>New</button>"); // before

  $("h1").after("<button>New</button>"); // after

  $("h1").prefend("<button>New</button>"); // prefebd

  $("h1").append("<button>New</button>"); // append
  ```

## Website Animations

- **`hide()`** will make the selected selector hide
- **`show()`** will make the selected selector reappear
- **`toggle()`** to toggle the appearance of the selected selector to hide or show.
- **`fadeOut()`** will make the selected selector reduce the opacity then hide it.
- **`fadeIn()`** will make the selected selector appear and fade in to full opacity.
- **`fadeToggle()`** will make the selected selector to full opacity and appear or reduce the opacity and hide it.
- **`slideUp()`** will make the selected element collapses
- **`slideDown()`** will make the selected element uncollapse
- **`slideToggle()`** will make the selected element collapse or uncollapse with toggle
- **`animate()`** allows you to define custom css to gradually animate
  - in between the curly braces, you can only add css rules that have numeric value

  ```js
  $("button").on("click", function() {
    $("h1").hide(); // hide
    $("h1").show(); // show
    $("h1").toggle(); // toggle
    $("h1").fadeOut(); // fadeOut
    $("h1").fadeIn(); // fadeIn
    $("h1").fadeToggle(); // fadeToggle
    $("h1").slideUp(); // slideUp
    $("h1").slideDown(); // slideDown
    $("h1").slideToggle(); // slideToggle

    $("h1").animate({opacity: 0.5}); // animate

    // Chaining methods
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
  });
  ```

## Resources

- [jQuery Site](https://code.jquery.com/)
- [Google jQuery CDN](https://developers.google.com/speed/libraries#jquery)
- [CSS AND JS MINIFIER](https://www.minifier.org/)