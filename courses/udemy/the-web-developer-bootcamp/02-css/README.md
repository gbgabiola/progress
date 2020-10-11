# CSS

## Table of Contents <!-- omit in toc -->

- [The General Rule](#the-general-rule)
- [CSS Location](#css-location)
- [Specificity](#specificity)
- [The Box Model](#the-box-model)
- [Colors](#colors)
- [Backgrounds](#backgrounds)
- [Borders](#borders)
- [Fonts](#fonts)
- [Floats](#floats)


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


## Colors

- **Hexadecimal** system combines the octothorpe (`#`) with a string of 6 hexadecimal "numbers" from 0-F, e.g.: `color: #5FE2D1;`
  - follows an RGB scheme in which the first two numbers modify the amount of "red", the second two modify "green", and the last two modify "blue"
- **RGB** system: 3 channels consisting of red, green, and blue, with each ranging from 0-255, e.g.: `color: rgb(0, 0, 255)`;
- **Transparent** through the **RGBA** system
  - RGB but with an alpha (transparency) channel ranging from 0.0-1.0, e.g.: `color: rgba(255, 59, 63, .8);`


## Backgrounds

- follows the same format as colors, e.g., `background: #5FE2D1`;
- `background` property can also set a background image, e.g.: `background: url(http://www.website.com/image.png);`
  - prevent the background from Repeating an image: `background-repeat: no-repeat;`
  - allow the background image to Stretch out across the entire body: `background-size: cover;`


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


## Fonts

- **Font-Family** specifies the font for an element: `font-family: Arial;`
  - while not always necessary, you may sometimes have to put quotation marks around the font name, particularly when the font name begins with a number
  - [CSS Font Stack](https://www.cssfontstack.com/) shows what percentages of operating systems have a given system font (useful for choosing a safe bet on system compatibility)
    - better to use [Google Fonts](https://fonts.google.com/), choose a font, and embed the font's stylesheet link in HTML `<head>` prior to the CSS link, e.g.: `<link href="https://fonts.googleapis.com/css2?family=Roboto" rel="stylesheet">`
- **Font-Size** specifies how big the font appears (typically in pixels): `font-size: 22px;`
  - `em` unit dynamically sets font size in relation to a parent
element
  - `rem` unit sets font size in relation to the "root" element on the page
  - **Note**:
    - what constitutes the "standard" `1em` (i.e., the default font size on a page without CSS markup) varies from browser to browser, although the size is typically around `16px`
      - to ensure uniformity among browsers, it is useful to set the body's font size at the outset
- **Font-Weight** specifies how thick or thin the font appears
  - typically involves absolute values of `normal` or `bold`, or relative (to parent) values of `lighter` and `bolder`, but can also be assigned a numeric value in increments of 100 generally from "100" to "800" depending on the font itself
- **Line-Height** controls the height of a given line
  - larger font will result in larger spacing)
- **Text-Align** controls where an element's text is aligned on the page
  - typically `left`, `right`, and `center`
- **Text-Decoration** is used to give text effects
  - such as `underline`, `overline`, or `line-through`


## Floats

- normally, block level elements are stacked directly underneath the preceding element on the page
  - to change this, use `float` property and specify a value of the direction in which the element should float (`left`, `right`, `none`).
- when an element is floated, it is taken out of the normal flow of the document (though still remaining part of it)
  - and shifted to the left or right until it touches the edge of its containing box, or another floated element
- when `<img>` tags are laid out in a consecutive sequence, HTML automatically places some small amount of white space between the images
  - `float` can be used to remove that white space
