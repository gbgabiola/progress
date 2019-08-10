# Document Object Model (DOM)

## Goals

- Learn the tree structure of HTML based websites.
- Traverse through the document using object notation.
- Separation of concerns and coding best practices.
- Manipulate and change the HTML elements using your understanding of the DOM.


##  Introduction to the DOM

Dominating the DOM to add functionality to HTML elements

HTML without javaScript is static. JavaScript in HTML makes the site interactive, like adding a click event when the user click a button javaScript will respond by changing the appearance of the website.

The problem is, you need the user to do something first everytime before applying the changes. That's what the DOM solves.

**DOM** catalogs the webpage into individual objects that we can select and manipulate.

**Browser Object Model (BOM)** is the one that converts the HTML file into DOM when you load up the webpage. Elements and associated data turns into a tree structure that has a lot of objects the you can select and manipulate.

The tree will show the structure like descendants, parents, and child objects.

```js
var heading = document.firstElementChild.lastElementChild.firstElementChild;

heading.innerHTML = "Good Bye"; // Changed the content of h1

heading.style.color = "red"; // Changed the style of h1

document.querySelector("input").click(); // Click the checkbox
```

**Objects** inside the DOM can have _properties_ and _methods_.

- **Properties** describes about the object.
- **Methods** are the things that the object can do.

| Object   | Properties                                 | Methods                                      |
| :------- | :----------------------------------------: | :------------------------------------------: |
| `car`    | `colour`, `numberOfSeats`, `numberOfDoors` | `break()`, `drive()`, `park()`
| `button` | `innerHTML`, `style`, `firstChild`         | `click()`, `appendChild()`, `setAttribute()`

**Manipulate:**

```js
// Get Property
car.colour; // red

// Set Property
car.numberOfDoors = 0;

// Call Method
car.drive();
```

Difference between _method_ and _function_ is that method is a function that the object can do with _parenthesis_. It has to be associated with an object.

Elements is plural means it will fetch all the elements that have the same tag name, class, ids, etc into a _Array_. Even it has only one item, you still have to select the first item using brackets (`[]`) and index `0`.

### Selecting HTML Elements

- **`getElementsByTagName()`** will look through the webpage and searches for the element with a particular tag name.

  ```js
  document.getElementsByTagName("li")[2].style.color = "red";
  ```

- **`getElementsByClassName()`** will select elements based on the name of the class.

- **`getElementById()`** will select elements based on the name of the ID and only get back one item instead of an _Array_. The reason is, on a single webpage every IDs should be unique, so you shouldn't have the same id on more than one element.

- **`querySelector()`** return only a single item or the first item if they're many selector, and it accepts combined selector strings. It means you use tag names, class ids or any combined selectors.

  ```js
  document.querySelector("li a");
  document.querySelector("#list .item");
  ```

- **`querySelectorAll("#list .item")`** will select the list of all elements with same selector in the form of an _Array_.

`querySelector` and `querySelectorAll` allow for more complex queries, because they're able to specify id, class, tag names elements and combined them in order to target the element we want.

### Manipulating and Changing Styles of HTML Elements

camelCase is the standard naming convention methods and properties in JavaScript.

All values should be represented as a string even it is a number

```js
document.querySelector("#list a").style.color = "red";
document.querySelector("h1").style.fontSize = "8rem";
document.querySelector("button").style.backgroundColor = "yellow";
```

### The Separation of Concerns Structure vs Style vs Behaviour

In order to keep our code tidy and easy to debug, keep in mind the idea of separation of concern at all times.

- HTML for content only
- CSS is for styling the website
- JavaScript is for behaviour

CHanging the style from JavaScript is not a good practice, style should be coming from CSS.

To change the style from the fly, like when the user clicks the button then the background changes, there's another way we can do that with JavaScript.

- **`classList`** shows the list of classes attached to the element.

  ```js
  document.querySelector("button").classList;
  ```

- **`add()`** to add a class on the the element, then add the styles of the class on the CSS.

  ```js
  document.querySelector("button").classList.add("invisible");
  ```

- **`remove()`** is the same thing as the add, but opposite. It will remove the selected class on the list and to remove the styles applied to it.

  ```js
  document.querySelector("button").classList.remove("invisible");
  ```

- **`toggle()`** is a combination of both `.add()` and `.remove()`. If class is already applied then remove it, if it is not applied then apply it. 

  ```js
  document.querySelector("button").classList.toggle("invisible");
  ```

### Text Manipulation and the Text Content Property

- **`innerText`** only showing "human-readable" elements.

  ```js
  document.querySelector("h1").innerText; // "hello"
  ```

- **`innerHTML`** returns HTML and use to retrieve or write text inside an element.

  ```js
  document.querySelector("h1").innerHTML; // "<em>Hello</em>"
  ```

- **`textContent`** gets the content of all elements, including `<script>` and `<style>` elements and has better performance because its value is not parsed as HTML.

  ```js
  document.querySelector("h1").textContent; // "<em>Hello</em>"
  ```

### Manipulating HTML Element Attributes

- **`attributes`** property returns the list of all the attributes currently attached to the HTML element.
  - is a key/value pair of strings that represents any information regarding that attribute.

  ```js
  document.querySelector("a").attributes; // {0: href, href: href, length: 1}
  ```

- **`getAttribute()`** returns the value of a specified attribute on the element. If the given attribute does not exist, the value returned will either be `null` or `""`.

  ```js
  document.querySelector("a").getAttribute("href"); // "https://www.google.com"
  ```

- **`setAttribute()`** sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.
  - Accepts two parameters, the _name_ of the attribute and its _value_.

  ```js
  document.querySelector("a").setAttribute("href", "https://www.bing.com");
  ```

## Resources

