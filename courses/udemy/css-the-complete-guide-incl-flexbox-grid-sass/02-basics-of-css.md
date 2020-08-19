# Basics of CSS

- 3 different ways to add CSS in HTML
  - **inline** style
    - using `style` attribute
    - not recommended because it will be hard to maintain with a lot of declaration to each element
  - **internal** style
    - using `style` tag with CSS rules
  - **external** style
    - using `.css` file
    - recommended by many
    - separation of HTML and CSS
- **declaration** is defining what you want to style and how you want to style it
- **selectors** are element in the DOM which is inside the body, can also use property and value assignment
  - **element** selector sets equal style for the elements 
  - **class** selector set equal style for elements with the same class
    - uses `class` attribute in HTML and `.` in CSS
  - **universal** selector style every element on the page
    - uses `*` in CSS
  - **ID** selector sets style to one specific element
  - **attribute** selector sets equal styles to all elements with attributes
- serif, sans-serif, monospace always use the browser defaults
- [google fonts](https://fonts.google.com/)
- kebab case is recommended naming for classes
- we can also assign multiple classes with a space between classes, e.g., `class="section-title article-title"`
- **cascading** means multiple rules can be applied to the same element
- **specificity** resolves conflicts arising from multiple rules
  - inline styles > `#id` selector > `.class`, `:pseudo-class` and `[attribute]` selectors > `<Tag>` and `::pseudo-element` selectors
- **inheritance** means that element inherits some styles of the parent element
  - important concept for passing styles down without explicitly selecting an element
  - set styles in the body or any parent element to apply inheritance
- **combinator** selector allows to combine multiple selectors to be more precise on what we want to select
  - meaning the rule with more information wins overs rules with less information
- 4 combinator selectors
  - **adjacent sibling** 
    - elements share the same parent
    - second element comes immediately after first element tag, e.g., `h2 + p {}`
  - **general sibling**
    - elements share the same parent
    - second element comes after first element, e.g., `h2 ~ p {}`
  - **child**
  - second element is a direct child of first element, e.g., `div > p {}`
  - **descendant**
    - second element is a descendant of the first element, e.g., `div p {}`

|   Selectors   |     Properties     |  Values   |
| :-----------: | :----------------: | :-------: |
|     `div`     | `background-color` |   `red`   |
| `.blog-post`  |      `width`       |   `30%`   |
| `#main-title` |       color        | `#fa923f` |
| `[disabled]`  |      `margin`      |  `10px`   |
|      `*`      |     `display`      |  `block`  |

- values are tightly coupled to specific property

| Pre-defined Options |       Color        | Length, Sizes & Numbers |        Functions         |
| :-----------------: | :----------------: | :---------------------: | :----------------------: |
|  `display: block;`  | `background: red;` |    `height: 100px;`     | `background: url(...);`  |
|  `overflow: auto;`  | `color: #fa923f;`  |      `width: 20%;`      | `transform: scale(...);` |
|                     |   `color: #ccc;`   |       `order: 1;`       |                          |


## Resources

- [Complete CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [MDN CSS Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Common CSS Properties Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)
- [CSS Combinators](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Combinators_and_multiple_selectors)
- [CSS Specifity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
