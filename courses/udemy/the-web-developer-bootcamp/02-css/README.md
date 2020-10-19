# CSS

## Table of Contents <!-- omit in toc -->

- [Topics](#topics)
- [CSS Basics](#css-basics)
- [CSS Location](#css-location)
- [Color Systems](#color-systems)
- [Backgrounds](#backgrounds)
- [Text Properties](#text-properties)
- [Selectors](#selectors)
- [Specificity](#specificity)
- [The Box Model](#the-box-model)
- [Borders](#borders)
- [Floats](#floats)


## Topics

- **Crucial**
  - Conceptual Overview of CSS
  - Basic CSS Syntax
  - Including Styles Correctly
  - Color Systems: RGB, Hex, etc.
  - `font-family` property
  - Element Selector
  - Class Selector
  - ID Selector
  - Descendant Selector
  - _CSS Specificity_
- **Important**
  - _Common Text Properties_
  - Adjacent Selector
  - Direct Descendant Selector
  - Attribute Selector
  - Pseudo Selector
  - Pseudo Classes
- **Nice To Have**
  - 


## CSS Basics

- Cascading Style Sheets (CSS)
  - cascade is the order of styles that are declared and linked
- language for describing how documents are presented visually, how they are arranged and styled


## CSS Location

- inline styles
  - write styles directly inline on each element
  - **not a good practice** most of the time
- `<style>` element
  - write styles inside `<style>` element
  - impossible to share styles between documents
  - **not recommended either**
- external stylesheet
  - write styles in a `.css` file and include a `<link>` element in the `<head>` of html document
  - **preferred method**


## Color Systems

- **named colors**
  - modern browsers supports 140 named color
  - e.g., `hotpink`, `mediumorchid`, `firebrick`, `darkkhaki`, `gold`, `mediumaquamarine`, `lightskyblue`, `tomato`
- **RGB** system
  - red, green, and blue channels
  - each ranging from 0-255, e.g.: `color: rgb(0, 0, 255)`;
- **Hexadecimal** system
  - combines the octothorpe (`#`) with a string of 6 hexadecimal "numbers"
  - each ranges from 0-255 but represented with hexadecimal (0-F), e.g.: `color: #5FE2D1;`
  - follows an RGB scheme in which the first two numbers modify the amount of "red", the second two modify "green", and the last two modify "blue"
- **Transparent** through the **RGBA** system
  - RGB but with an alpha (transparency) channel ranging from 0.0-1.0, e.g.: `color: rgba(255, 59, 63, .8);`


## Backgrounds

- follows the same format as colors
- `background` property can also set a background image, e.g.: `background: url(http://www.website.com/image.png);`
  - prevent the background from Repeating an image: `background-repeat: no-repeat;`
  - allow the background image to Stretch out across the entire body: `background-size: cover;`


## Text Properties

- `text-align` property controls where an element's text is aligned on the page
  - `left`, `right`, and `center`
- `font-weight` property specifies how thick or thin the font appears
  - involves absolute values of `normal` or `bold`
  - relative (to parent) values of `lighter` and `bolder`
  - can also be assigned a numeric value in increments of 100 from "100" to "900" depending on the font itself
- `text-decoration` property is used to give or remove text effects
  - `underline`, `none`, `overline`, or `line-through`
- `line-height` property controls the height of a given line
  - larger font will result in larger spacing
  - `normal`, and different units can be used
- `letter-spacing` property controls the horizontal spacing behavior between text characters
  - `normal`, and different units can be used
- `font-size` property specifies how big the font appears
- font units
  - **relative**
    - `em` unit dynamically sets font size in relation to a parent
element
    - `rem` unit sets font size in relation to the "root" element on the page
    - `vh`
    - `vw`
    - `%`
    - and more
  - **absolute**
    - `px` commonly used absolute units
      - `1px` doesn't necessarily equal the width of exactly one pixel
      - not recommended for responsive websites
    - `pt`
    - `cm`
    - `in`
    - `mm`
  - **Note**:
    - what constitutes the "standard" `1em` (i.e., the default font size on a page without CSS markup) varies from browser to browser, although the size is typically around `16px`
      - to ensure uniformity among browsers, it is useful to set the body's font size at the outset
- `font-family` property specifies the font for an element
  - while not always necessary, you may sometimes have to put quotation marks around the font name, particularly when the font name begins with a number
  - [CSS Font Stack](https://www.cssfontstack.com/) shows what percentages of operating systems have a given system font
  - better to use [Google Fonts](https://fonts.google.com/), choose a font, and embed the font's stylesheet link in HTML `<head>` prior to the CSS link


## Selectors

- `selector { property: value; }`
- **Universal** (`*`) selector applies to every element on the page
- **Element** selectors select all instances of a given element, e.g., `div` is a CSS element selector that will modify the properties of all `<div>` HTML tags
- **Selector List** combines multiple selectors in a list separated by comma (`,`)
- **ID** selector selects a unique element with an octothorpe (`#`) symbol (only one per page)
- **Class** selector selects all elements in a given class, prepend with a period (`.`)
- **Descendant** selector applies to selectors that have been _nested_ under another, e.g., `li a`
  - **ID** or **Class** may be used within a **Descendant** selector
- **Adjacent** (`+`) selector selects only the element that comes _immediately_ after another element (_sibling_ element), e.g., `h1 + p`
  - `~` more generalized sibling combinator can also be used to select _all_ `<ul>` tags after any `<h4>` tag, e.g., `h4 ~ ul`
- **Direct Child** (`>`) combinator selects only the _direct_ first-tier child, e.g., `.container > ul`
- **Attribute** selector allows the selection of any element based on any attributes, e.g., `a[href="https://www.google.com/"]`
  - can also be used to select all images of a particular source, or all inputs of a particular type, e.g., `input[type="checkbox"]`
  - [MDN Attribute Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) for a complete list of attribute selectors
- **Pseudo Classes** are keyword added to a selector that specifies a special state of the selected element(s)
  - `:active` starts when user presses down the primary mouse button
  - `:checked` selector toggled the element to an _on_ state
  - `:first`
  - `:first-child`
  - `:hover` triggered when user hovers over an element
  - `:not()`
  - `:nth-child()`
  - `:nth-of-type()` takes a specific number and selects the "-nth" instance of an element, e.g., `li:nth-of-type(2)`
    - use `even` or `odd` instead of a specific number to select every other tag
- **Pseudo Elements** are keyword added to a selector that lets you style a particular part of selected element(s)
  - `::after`
  - `::before`
  - `::first-letter`
  - `::first-line`
  - `::selection` applies styles to the part of a document that has been highlighted by the user
- check [The 30 CSS Selectors You Must Memorize](https://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048) for more advanced selectors


## Specificity

- browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied
  - measure of how specific a given selector is
  - the more specific selector _wins_
  - e.g., if the body is styled to have red text, but a paragraph within the body is styled to have green text, then the text will be green because the green text style is more relevant to the specific paragraph than the general body
- list of selector types increases by specificity (magnitudes of 10):
  1. **Element** and **Pseudo-Element** selectors
  2. **Class**, **Attributes** and **Pseudo-Class** selectors
  3. **ID** selectors
  4. Inline Styles & `!important`
     - not recommended because it ignores specificity
- [Specificity Calculator](https://specificity.keegan.st/)


## The Box Model

- each element is represented as a box and described using the standard "box model", which has four edges:
  1. Content
  2. Padding
     - space between the border and the element within the border
  3. Border
  4. Margin
     - space between the border and everything outside of the border
- Content edge can be controlled by setting the `width` and `height` properties in `px` or `%` (percentage in relation to the parent element), which in turn pushes out the border edge as well, as there is direct contact between the content and border (if no padding has yet been set)
  - using `max-width` property in conjunction with `width`, you can tell the browser to make an element's width a certain percentage, but cap that width to a maximum number of pixels
- space can be added between the content edge and border edge (and between the border edge and the next element's edge) by using the `padding` and `margin` properties respectively (`px` or `%`)
  - by default, padding and borders are set to go around all edges of an element, but can be limited by using more specific properties for top, right, bottom, and left, such as `padding-left` or `margin-top`
  - alternatively, shorthand can be used (setting top property, and the remainder moving in a clockwise fashion): `margin: 20px 40px 60px 80px;`
- **Note**: By setting the `margin` property to `auto` on the left and right, an element will automatically be horizontally centered: `margin: 0 auto;`


## Borders

- three key properties: `width` (typically in pixels), `color`, and `style` (solid, dotted, or dashed)
  - all three properties must be present in order for a border to take effect, e.g.:

  ```css
  p {
    border-width: 5px;
    border-style: solid;
    border-color: purple;
  }
  ```

- shorthand syntax may also be used: `border: 5px solid purple;`


## Floats

- normally, block level elements are stacked directly underneath the preceding element on the page
  - to change this, use `float` property and specify a value of the direction in which the element should float (`left`, `right`, `none`).
- when an element is floated, it is taken out of the normal flow of the document (though still remaining part of it)
  - and shifted to the left or right until it touches the edge of its containing box, or another floated element
- when `<img>` tags are laid out in a consecutive sequence, HTML automatically places some small amount of white space between the images
  - `float` can be used to remove that white space
