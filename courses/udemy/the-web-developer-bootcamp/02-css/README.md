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
- [Positioning](#positioning)
- [Other Useful Properties](#other-useful-properties)
- [Floats](#floats)
- [Flexbox](#flexbox)
- [Responsive Design](#responsive-design)
- [Media Queries](#media-queries)


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
  - Width & Height
  - Border
  - Padding
  - Margin
  - _Display Property_
  - _Units - Percentages, EMS, & REMS_
  - Transitions
  - _Position Property_
  - _Media Queries_
  - FOCUS ON CONCEPTS, NOT MEMORIZING THE PROPERTIES!
  - Flex Shorthand
  - _Flex-basis, grow, and shrink_
  - _Align-Items_
  - Flex-wrap
  - _Align-content and align-self_
  - _Justify-Content_
  - _Flex-Direction_
- **Important**
  - _Common Text Properties_
  - Adjacent Selector
  - Direct Descendant Selector
  - Attribute Selector
  - Pseudo Selector
  - Pseudo Classes
  - Opacity & Alpha Channel
  - Google Fonts
  - _The Full Story On The Background Property_
- **Nice To Have**
  - Border Radius
  - _Transforms_


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
  - each ranging from 0-255, e.g., `color: rgb(0, 0, 255)`;
- **Hexadecimal** system
  - combines the octothorpe (`#`) with a string of 6 hexadecimal "numbers"
  - each ranges from 0-255 but represented with hexadecimal (0-F), e.g., `color: #5FE2D1;`
  - follows an RGB scheme in which the first two numbers modify the amount of "red", the second two modify "green", and the last two modify "blue"
- **Transparent**
  - RGB with alpha (transparency) channel ranging from 0.0-1.0, e.g., `color: rgba(255, 59, 63, .8);`
  - `opacity` property sets the opacity of an element
    - opacity is the degree to which content behind an element is hidden
    - opposite of transparency
  - adding two byte hex value (0-F) to hexadecimal for transparency, e.g., `#00cca0b9`


## Backgrounds

- follows the same format as `color`
- `background` is a shorthand property for:
  - `background-attachment`
  - `background-clip`
  - `background-color`
  - `background-image`
  - `background-origin`
  - `background-position` property sets the initial position for each background image
    - keyword values: `top`, `bottom`, `left`, `right`, `center`
    - global values: `inherit`, `initial`, `unset`
  - `background-repeat` property sets how background images are repeated
    - keyword values: `repeat-x`, `repeat-y`, `repeat`, `space`, `round`, `no-repeat`
    - two-values: horizontal | vertical
    - global values: `inherit`, `initial`, `unset`
  - `background-size` property sets the size of the element's background image
    - keyword values: `cover` and `contain`
    - one value: sets the width of the image and height becomes `auto`
    - two values: sets the width and height of the image
    - global values: `inherit`, `initial` and `unset`
- `<bg-size>` value may only be included immediately after `<position>`, separated with the `/` character


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
    - `em` unit dynamically sets font size in relation to a parent element
      - with `font-size`, `1em` equals the `font-size` of the parent, `2em` equals is twice the `font-size` of the parent, etc.
      - with other properties, `2em` is equal to the computed `font-size` of the element itself
      - **Note**: They can stack, grow or short very quickly
    - `rem` unit (root ems) is relative to the **root html element**'s on the page
      - often easier to work with
      - if root `font-size` is `20px`, `1rem` is always `20px`, `2rem` is always `40px`, etc.
    - `vh`
    - `vw`
    - percentages (`%`) are always relative to some other value
      - sometimes it's a value from the parent and other times it's a value from the element itself
      - `width: 50%`: half the width of the parent
      - `line-height: 50%`: half the `font-size` of the element itself
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

- each element is described using the standard "box model" with four edges:
  - Content Box, Padding, Border, Margin
  - **Content Box**
    - Content edge can be controlled by setting the `width` and `height` properties in `px` or `%` (percentage in relation to the parent element), which in turn pushes out the border edge as well, as there is direct contact between the content and border (if no padding has yet been set)
    - using `max-width` property in conjunction with `width`, you can tell the browser to make an element's width a certain percentage, but cap that width to a maximum number of pixels
  - **Padding** is a space between the content box and the border of an element
  - **Border**
  - **Margin** is a space between the border and everything outside of the border
- `border` is a shorthand property for:
  - `border-width` property controls the thickness, pixels are commonly used because generally borders are gonna be small
  - `border-color` property controls the color
  - `border-style` property controls the line style, `solid`, `dotted`, `dashed`, `solid`, etc
- `border-radius` property rounds the corners of an element's outer border edge
- `padding` is a shorthand property for: `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`
  - 1 value: apply to all four sides
  - 2 values: vertical | horizontal
  - 3 values: top | horizontal | bottom
  - 4 values: top | right | bottom | left
  - these values also applies to `margin` property
- `margin` is a shorthand property for: `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`
- `box-sizing` property sets how the total width and height of an element is calculated
  - `content-box` is the default behavior
  - `border-box` tells the browser to account for any border and padding
- `display` property changed the behavior of an element to be treated as:
  - `inline`
    - width & height are ignored
    - margin & padding push elements away horizontally but not vertically
  - `block`
    - block elements break the flow of a document
    - width, height, margin, & padding are respected
  - `inline-block`
    - behaved like an inline element except width, height, margin, & padding are respected
- **Note**: Setting `margin` to `auto` on the left and right, an element will automatically be horizontally centered: `margin: 0 auto;`


## Positioning

- `position` property sets how an element is positioned in a document
  - `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements except for `static`
  - `static` (default) value positions the element according to the normal flow of the document
    - `top`, `right`, `bottom`, `left`, and `z-index` properties have _no effect_
  - `relative` value position the element according to the normal flow of the document
    - offset _relative_ to _itself_ based on `top`, `right`, `bottom`, and `left` properties
  - `absolute` and `fixed` values remove the element from the normal document flow
    - no space is created for the element in the page layout
    - `absolute` is positioned relative to its closest positioned ancestor, if any; otherwise, placed relative to the initial containing block
      - creates new stacking context when the value of `z-index` is not `auto`
        - margins of absolutely positioned boxes do not collapse with other margins
    - `fixed` is positioned relative to the initial containing block established by the viewport
      - except when one of its ancestors has a `transform`, `perspective`, or `filter` property set to something other than `none`, which case that ancestor behaves as the containing block 
  - `sticky` value position the element according to the normal flow of the document
    - offset relative to its _nearest scrolling ancestor_ and containing block
    - offset does not affect the position of any other elements


## Other Useful Properties

- `transition` is a shorthand property for:
  - `transition-property` specifies the name(s) of the CSS properties to which transitions should be applied
  - `transition-duration` specifies the duration over which transitions should occur
  - `transition-timing-function` specifies a function to define how intermediate values for properties are computed
    - keyword values: `ease`, `ease-in`, `ease-out`, `ease-in-out`, `linear`, `step-start`, `step-end`
    - function values: `steps()`, `cubic-bezier()`
    - multiple timing functions: `ease`, `step-start`, `cubic-bezier()`
    - global values: `inherit`, `initial`, `unset`
  - `transition-delay` defines how long to wait between the time a property is changed and the transition actually begins
- `transform` property lets you rotate, scale, skew, or translate an element
  - keyword value: `none`
  - function values: `matrix()`, `matrix3d()`, `perspective()`, `rotate()`, `rotate3d()`, `rotateX()`, `rotateY()`, `rotateZ()`, `translate()`, `translate3d()`, `translateX()`, `translateY()`, `translateZ()`, `scale()`, `scale3d()`, `scaleX()`, `scaleY()`, `scaleZ()`, `skew()`, `skewX()`, `skewY()`
  - multiple function values: `translateX() rotate() translateY()`, `perspective() translate() rotateY()`
  - global values: `inherit`, `initial`, `unset`


## Floats

- normally, block level elements are stacked directly underneath the preceding element on the page
  - to change this, use `float` property and specify a value of the direction in which the element should float (`left`, `right`, `none`).
- when an element is floated, it is taken out of the normal flow of the document (though still remaining part of it)
  - and shifted to the left or right until it touches the edge of its containing box, or another floated element
- when `<img>` tags are laid out in a consecutive sequence, HTML automatically places some small amount of white space between the images
  - `float` can be used to remove that white space


## Flexbox

- Flexbox is one-dimensional layout method for laying out items in rows or columns
  - addition to CSS, included to address common layout frustrations
  - allows us to distribute space dynamically across elements of an unknown size, hence then term "flex"
- change the container `display` to `flex` to use the flexbox properties
- main-axis goes from left-to-right
- cross-axis goes from top-to-bottom
- `flex-direction` property allows us to decide the main-axis direction
  - `row` (default) which goes from left-to-right
  - `row-reverse` will make our main-axis go from right-to-left
  - `column` goes from top-to-bottom
  - `column-reverse` goes from bottom-to-top
- `justify-content` property determines how the element/content is distributed across the main-axis
  - `flex-start`
  - `flex-end`
  - `center` the content along the main-axis
  - `space-between` takes all the space and distribute between the elements but not on the outside edges
  - `space-evenly` takes all the space and distribute between the elements evenly
  - `space-around` items are evenly distributed in the line with equal space around them
- `flex-wrap` property determines whether to wrap the elements along the main-axis onto a new line if it's horizontal or a new column if it'a a vertical main-axis
  - `nowrap` (default) all flex items will be on one line
  - `wrap` flex items will wrap onto multiple lines, from top to bottom
  - `wrap-reverse` flex items will wrap onto multiple lines from bottom to top
- `align-items` property determines how the element/content is distributed across the cross-axis
  - `stretch` (default) fill the container
  - `flex-start` items are placed at the start of the cross axis
  - `flex-end` items are placed at the end of the cross axis
  - `center` items in the cross-axis
  - `baseline` align items in their baselines align
- `align-content` property aligns a container's lines within when there is extra space in the cross-axis
  - only takes effect on multi-line flexible containers, where `flex-flow` is set to either `wrap` or `wrap-reverse`
  - `flex-start` packed items to the start of the container
  - `flex-end` packed items to the end of the container
  - `center` centered items in the container
  - `space-between` evenly distributed items
  - `space-around` evenly distributed items with equal space around each line
  - `stretch` lines stretch to take up the remaining space
- `align-self` property allows the default alignment to be overridden for individual items
  - same values with `align-items` property
- `flex` is a shorthand property for:
  - `flex-grow` property controls the amount of available space an element should take up
  - `flex-shrink` property defines the ability to shrink item if necessary
  - `flex-basis` property defines the default size of an element before the remaining space is distributed


## Responsive Design

- **problem**
  - as a mobile devices and tablets became widely available
  - how to create websites that looks good on all screen sizes
- **one approach**
  - before, very common to create separate stylesheets for different devices
  - or even completely different websites for each size
- **enter responsive**
  - now, create ONE website and stylesheet that responds to different device sizes and features


## Media Queries

- allows us to modify our styles depending on particular parameters like screen width or device type
- usually used with `min-width` property
- combined condition using `and` keyword
- devices category and breakpoint width
  - mobile (portrait): 320px, 375px, 414px
  - mobile (landscape): 568px, 667px, 736px, 812px
  - tablet (portrait): 768px, 834px
  - tablet (landscape): 1024px, 1112px
  - laptop displays: 1366px, 1440px
  - desktop displays: 1680px, 1920px
- using `min-width`
  - small devices: landscape phones, 576px and up
  - medium devices: tablets, 768px and up
  - large devices: desktops, 992px and up
  - extra large devicesL large desktops, 1200px and up
- using `max-width`
  - small devices: landscape phones, less than 768px
  - medium devices: tablets, less than 992px
  - large devices: desktops, 992px and up
  - extra large devicesL large desktops, 1200px and up
