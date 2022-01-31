# DOM

## Table of Contents <!-- omit in toc -->

- [Topics](#topics)
- [The DOM](#the-dom)


## Topics

- **Crucial**
  - ...
  - Intro to the DOM
  - _getElementbyId_
  - _querySelector_
  - innerHTML and Text
  - _Changing Styles_
  - classList
  - _Creating/Removing Elements_
- **Important**
  - ...
  - _Manipulating Attributes_
  - _Traversing the DOM_
- **Nice To Have**
  - ...


## The DOM

- **Document Object Model** is a JS representation of a webpage
  - It's JS window into the contents of a webpage
  - Bunch of objects that can be interacted with via JS
- **Document** object is our entry point ino the world of the DOM
  - Contains representation of all the content on a page, plus tons of useful methods and properties
- **Selecting**
  - `getElementById` returns the element found with that id, otherwise undefined
  - `getElementByTagName` returns `HTMLCollection` of elements with the given tag name
  - `getElementByClassName` returns `HTMLCollection` of elements with the given class name
  - `querySelector` returns the element first match
    - Can be used for any selectors
  - `querySelectorAll` returns a collection of matching elements
- **Propeties and Methods** (the important ones)
  - `classList`
  - `getAttribute()`
  - `setAttribute()`
  - Create new element
    - `createElement`
    - `appendChild()`
    - `append()` can be used to append text
      - Append more than one element
    - `prepend()`
    - `inserAdjacentElement()`
  - Remove element
    - `removeChild()`
    - `remove()`
  - `innerText`
  - `textContent`
  - `innerHTML`
  - `value`
  - Traversing
    - `parentElement`
    - `children`
    - `nextSibling`
    - `previousSibling`
  - `style`
- `window.getComputedStyle()` provides the current styles of the given element
