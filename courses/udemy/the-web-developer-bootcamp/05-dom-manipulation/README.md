# DOM Manipulation and Advanced DOM Manipulation

## Objectives
- Define what DOM is
- Understand why DOM Manipulation is awesome
- List a few examples of sites that use JS to manipulate the DOM
- Understand the SELECT, then Manipulate workflow
- DOM Manipulation
  - changing an element's style
  - adding/removing classes
  - changing the content of a tag
  - changing attributes(src, href, etc.)
- Advanced DOM Manipulation: DOM Events (Making things interactive)
  - Clicking on a button
  - Hovering over a link
  - Dragging and Dropping
  - Pressing the Enter key

### DOM Manipulation

#### Why Should You Care? A few examples:
- Games
- Scrolling Effects
- Dropdown Menus
- Form Validations
- Interactivity
- Animations
- Every awesome site ever
- google
- udemy
- patatap.com

#### The DOM
- The Document Object Model is the interface between you JavaScript and HTML+CSS
- The browser turns every HTML tag into a javaScript object that we can manipulate
- Everything is stored inside of the _document_ object

#### The Process
- SELECT an element and then MANIPULATE
  ```js
  // SELECT
  var h1 = document.querySelector('hi1');

  // MANIPULATE
  h1.style.color = 'pink';
  ```

- Change the `<body>` and change its color every second
  ```js
  var body = document.querySelector('body'); // SELECT
  var isBlue = false;

  setInterval(function() { // MANIPULATE
    if (isBlue) {
      body.style.background = 'white';
    } else {
      body.style.background = '#3498db';
    }
    isBlue = !isBlue;
  }, 1000);
  ```

#### DOM Selectors
- Document- It all starts with the document, the root node
  ```js
  document.URL;
  document.head;
  document.body;
  document.links;
  ```
- 5 Main Methods:
```js
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.querySelector()
document.querySelectorAll()
```

#### Manipulating Style
The style property is one way to manipulate an element's style
```js
// SELECT
var tag = document.getElementById('highlight');

// MANIPULATE
tag.style.color = 'blue';
tag.style.border = '10px solid red';
tag.style.fontSize = '70px';
tag.style.background = 'yellow';
tag.style.marginTop = '200px';
```

It is recommended for styles to be defined in a separate file or files. The style property allows for quick styling, for example for testing purposes. - MDN

- Separatoion of Concerns:
  - Structure - HTML
  - Presentation - CSS
  - Behavior - JS

Rather than directly manipulating style with JS, we can define a CSS class and then toggle it on or off with JS

```js
// INSTEAD OF THIS:
var tag = document.getElementById('highlight');
tag.style.color = 'blue';
tag.style.border = '10px solid red';

// ADD THE NEW CLASS TO THE SELECTED ELEMENT
tag.classList.add('.some-class');
```

```css
/* DEFINE A CLASS IN CSS */
.some-class {
  color: blue;
  border: 10px solid red;
}
```

- `classList`: A read-only list that contains the classes for a given element. **It is not an array.**
  ```js
  // ADD A CLASS TO THE SELECTED ELEMENT
  tag.classList.add('another-class');

  // REMOVE A CLASS
  tag.classList.remove('another-class');

  // TOGGLE A CLASS
  tag.classList.toggle('another-class');
  ```

- `textContent`: Returns a string of all the text contained in a given element.
  ```html
  <p>This is an <strong>awesome</strong> paragraph</p>
  ```

  ```js
  // Select the <p> tag:
  var tag = document.querySelector('p');

  // Retrieve the textContent:
  tag.textContent; // This is an awesome paragraph

  // alter the textContent:
  tag.textContent = 'blah blah blah';
  ```

- `innerHTML`: Similar to `textContent`, except it returns a string of all the HTML contained in a given element.

  ```js
  // Select the <p> tag:
  var tag = document.querySelector('p');

  // Retrieve the innerHTMK:
  tag.innerHTML; // This is an <strong>awesome</strong> paragraph

  // alter the textContent:
  tag.textContent = 'blah blah blah';
  ```

- Attributes: Use `getAttribute()` and `setAttribute()` to read and write attributes like `srcset` or `href`

  ```html
  <a href="www.google.com">I am a link</a>
  <img src="logo.png">
  ```

  ```js
  var link = document.querySelector('a');
  link.getAttribute('href'); // 'www.google.com'
  // CHANGE HREF ATTRIBUTE
  link.setAttribute('href', 'www.dogs.com'); // <a href="www.dogs.com">I am a link</a>

  // TO CHANGE THE IMAGE SRC
  var img = document.querySelector('img');
  img.setAttribute('srcset', 'corgi.png'); // <img src="corgi.png">
  ```

### Advanced DOM

#### The Process
We select an element and then add an event listener
- "Listen for a click on this <button>"
- "Listen for a hover event on the <h1>"
- "Listen for a keypress event on text input"

#### The Syntax
To add a listener, we use a method called _addEventListener_
```js
element.addEventListener(type, functionToCall);

var button = document.querySelector('button');
button.addEventListener('click', function() {
  console.log('SOMEONE CLICKED THE BUTTON!');
});
```

#### An Example
Display a message when a button is clicked
```html
<button>Click Me</button>
<p>No One Has Clicked Me Yet</p>
```

```js
var button = document.querySelector('button');
var paragraph = document.querySelector('p');

// SETUP CLICKED LISTENER
button.addEventListener('click', function() {
  paragraph.textContent = 'Someone Clicked the Button!');
});
```

We could also rewrite it using a named function
```js
button.addEventListener('click', changeText);

function changeText() {
  paragraph.textContent = 'Someone Clicked the Button!');
}
```

## Learned
- Defined the DOM
- SELECT and MANIPULATE the target element
- Used the most important selector methods
- Changed an element's style
- Adding/Removing classes
- Use `classList` to add, remove, or toggle a class
- Manipulate the `textContent` or `innerHTML`
- Manipulate attributes(src, href, etc.)
- other type of events like: `mouseover` and `mouseout`