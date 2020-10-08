# CSS

## Table of Contents <!-- omit in toc -->

- [The General Rule](#the-general-rule)
- [CSS Location](#css-location)
- [Specificity](#specificity)


## The General Rule

- `selector { property: value; }`
- **Three Basic Selectors**
  - **Element** selectors select all instances of a given element, e.g., `div` is a CSS element selector that will modify the properties of all `<div>` HTML tags
  - **ID** selector selects a unique element with an octothorpe (`#`) symbol (only one per page)
  - **Class** selector selects all elements in a given class, prepend with a period (`.`)
- **Five More Advanced Selectors**
  - **Star** (`*`) selector applies to every element on the page
  - **Descendant** selector applies to selectors that have been _nested_ under another, e.g., `ul li a`
    - **ID** or **Class** may be used within a **Descendant** selector
    - use `>` combinator to select only the _direct_ first-tier child, e.g., `.container > ul`
  - **Adjacent** (`+`) selector selects only the element that comes _immidiately_ after another element (_sibling_ element), e.g., `h4 + ul`
    - `~` more generalized sibling combinator can also be used to select _all_ `<ul>` tags after any `<h4>` tag, e.g., `h4 ~ ul`
  - **Attribute** selector will allow the selection of any element based off of any attribute, e.g., `a[href="https://www.google.com/"]`
    - can also be used to select all images of a particular source, or all inputs of a particular type, e.g., `input[type="checkbox"]`
    - [MDN Attribute Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) for a complete list of attribute selectors
  - **Nth-of-Type** selector takes a specific number and selects the "-nth" instance of an element, e.g., `li:nth-of-type(2)`
    - use `even` or `odd` instead of a specific number to select every other tag
- check [The 30 CSS Selectors You Must Memorize](https://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048) for more advanced selectors


## CSS Location

- CSS should generally be saved to its own file, but can also be included in the HTML head by using the `<style>`
- preferred method is to use a `<link>` tag in the HTML head to refer to the separate file containing CSS: `<link rel="stylesheet" href="filename.css">`


## Specificity

- means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied
  - e.g., if the body is styled to have red text, but a paragraph within the body is styled to have green text, then the text will be green because the green text style is more relevant to the specific paragraph than the general body
- list of selector types increases by specificity (magnitudes of 10):
  1. **Type** selectors (e.g., `li`) and **pseudo-element** (e.g., `:before`)
  2. **Class** selectors (e.g., `.box`), **Attributes** selectors (e.g., `[type="text"]`) and **pseudo-classes** (e.g., `:hover`)
  3. **ID** selectors (e.g., `#header`)
- [Specificity Calculator](https://specificity.keegan.st/)
