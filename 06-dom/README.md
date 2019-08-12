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


## Advanced Javascript and DOM Manipulation

### Adding Event Listener

**`addEventListener()`** methods sets up a function to be called whenever the specified event is delivered to the target.

**Parameters:**

- **`type`** a case-sensitive string representing the event type to listen for.
- **`listener`** is the object which receives a notification when an event of the specified type occur, it's usually a javaScript function.

```js
target.addEventListener(type, listener[, options]);
```

**Analogy:**

Event listeners are like when you go to the party and asking your dad to pick you up, you're giving him an event listener by telling him to wait for a message from you that tells him to pick you up, by doing this you're adding an event listener to your dad. Then when you're bored to the party you decided to message your dad, and when he receives that message, he carry a function namely picking you up.

- **`click`** event is a pointing device button that has been pressed and released on an element.

When you add the function with a parenthesis the function will run immediately, usually we do not like that.

Pass the name of the function as an input instead of calling it with parenthesis, so it will not run immediately. It will run only when the event (like `click`) is triggered.

```js
// Do not do this
// document.querySelector("button").addEventListener("click", handleClick());

// Do this
document.querySelector("button").addEventListener("click", handleClick);
```

### Higher Order Functions and Passing Functions as Arguments

**Higher Order Functions** are functions that can take other functions as inputs.

```js
// element.addEventListener(input1, input2);
element.addEventListener("click", respondToClick);

function respondToClick() {
  console.log("I got clicked");
}

```

### Deeper Understanding of JavaScript Objects

```js
// Bell Boy 1 variables
var bellBoy1Name = "Timmy";
var bellBoy1Age = 19;
var bellBoy1HasWorkPermit = true;
var bellBoy1Languages = ["French", "English"];
alert("Hello, my name is " + bellBoy1Name);
```

**Create Object with properties**

```js
var bellBoy1 = {
  name = "Timmy",
  age = 19,
  hasWorkPermit = true,
  languages = ["French", "English"]
}
alert("Hello, my name is " + bellBoy1.name);
```

**Object constructor** creates an object wrapper for the given value. If the value is null or undefined, it will create and return an empty object, otherwise, it will return an object of a Type that corresponds to the given value. If the value is an object already, it will return the value.

```js
function BellBoy(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
}
```

**Initialize Object**

```js
var bellBoy1 = new Bellboy("Timmy", 19, true, ["French", "English"]);
```

Difference between constructor and calling a normal function is the keywork `new` and the name of the function is _capitalize_ from the beginning.

### Objects, their Methods and the Dot Notation

**Methods** is a function that's associated with an object.

```js
var bellBoy1 = {
  name = "Timmy",
  age = 19,
  hasWorkPermit = true,
  languages = ["French", "English"],
  moveSuitcase: function() { // method
    alert("May I take your suitcase?");
    pickUpSuitcase();
    move();
  }
}
```

**Call Method**

When using a properties or calling a method we are always using dot notation, and difference between the method and properties are the parenthesis.

```js
bellboy1.moveSuitcase();
```

### Switch Statements

- **`switch` statements** evaluates an _expression_, matching the expression's value to a case clause, and executes _statements_ associated with that case, as well as statements in cases that follow the matching case.
  - will take the code to a different track depending on the value of a variable.

**Syntax:**

- **`expression`** whose result is matched against each case clause.
- **`case valueN`** `case` clause used to match against `expression`.
  - If the expression matches the specified `valueN`, the statements inside the case clause are executed until either the end of the `switch` statement or a `break`.
- **`default`** clause; if provided, this clause is executed if the value of `expression` doesn't match any of the `case` clauses.

```js
switch (expression) {
  case value1:
    //Statements executed when the
    //result of expression matches value1
    [break;]
  [default:
    //Statements executed when none of
    //the values match the value of the expression
    [break;]]
}
```

### Using Keyboard Event Listeners

- **`keydown`** event is fired when a key is pressed.
  - is fired for all keys, regardless of whether they produce a character value.
- **`keypress`** event is fired when a key that produces a character value is pressed down.
  - This event is deprecated and no longer recommended, use `keydown` instead.

```js
eventTarget.addEventListener('keydown', event);
```

### Understanding Callbacks and How to Respond to Events

A function that returns a function is called a **Higher-Order Function**.

**callback function** is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

- `addEventListener` is a higher order function
- `respondToKey(event)` is a input for higher order function and a callback function because it's allows it to wait for something to finish happening (like waiting for a click event), and then callback function gets called back and executed.

```js
document.addEventListener("keydown", respondToKey(event));

function respondToKey(event) {
  console.log("Key press.");
}
```

### Adding Animation to Websites

**`setTimeout()`** method calls a function or evaluates an expression after a specified number of milliseconds.

**Parameter Values**

- function that will be executed
- milliseconds to wait before executing the code. If omitted, the value 0 is used

```js
// setTimeout(function, milliseconds, param1, param2, ...)

// Display an alert box after 3 seconds (3000 milliseconds):
setTimeout(function(){ alert("Hello"); }, 3000);
```


## Resources

- [HTML Tree Generator](https://chrome.google.com/webstore/detail/html-tree-generator/dlbbmhhaadfnbbdnjalilhdakfmiffeg)
- [DOM Documentation by MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [DOM Documentation by w3schools](https://www.w3schools.com/js/js_htmldom.asp)