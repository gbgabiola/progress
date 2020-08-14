# Diving Deeper into CSS

- the box model: every element in HTML is interpreted as a box by CSS
  - content: blue are
  - padding is the internal space from the content
  - border surrounds an element and directly comes after the padding
  - margin is not part of the core element, comes after the border
- height & width
- `display` property
- properties worth to remember
- pseudo classes & elements
- **margin collapsing** is when two element's margin overlap each other, bigger margin wins
  - **Note**:
    - collapsible margins are only possible with **block level elements**
    - **margins only collapse vertically**
    - adding **padding, borders, or clearance**, collapsing will not be applied
       - adding sine separation between the margins
    - use either `margin-top` or `margin-bottom` to avoid collapsing occurring
- **shorthand properties** are combined values of multiple properties in a single property
  - `border-width: 2px`, `border-style: dashed` | `solid`, `border-color: orange` to `border: 2px dashed orange`
  - `margin-top: 5px`, `margin-right: 10px`, `margin-bottom: 5px`, `margin-left: 10px` to `margin: 5px 10px 5px 10px` or `margin: 5px 10px`
  - padding also works the same as the margin
- `box-sizing: content-box` is the default, meaning we only set width and height to the content, not to the entire box including padding and border
- `box-sizing: border-box` now width and height include padding and border, and not margin
- **universal** selector is used to reset all elements to have certain behavior
- `display` property allows us to change the behavior of an element
  - `block` to `inline` or even to `inline-block` or `none` to remove it from the DOM
  - `block` always take the full available width, `margin-top` and `margin-bottom` can be set
  - `inline` only takes the required width for the content
    - setting a `width` or `height` has no effect
  - `inline-block` mixes the behavior of both inline and block level elements
    - elements can go next to each other like inline elements but still behave like block level elements when it comes to setting top, bottom margins, and padding
  - `none` _removes the element from the document flow_ and other elements can take its place, but can still access it via JS
- `visibility: hidden` hides the element, but keeps its place, meaning _it's not removed from the document flow_
- **pseudo class** defines the style of a special state of an element, e.g., `:hover`, `:active`, `:first-of-type`, `:first-child`, `:focus`, etc.
- **pseudo element** defines the style of a specific part of an element, e.g., `::first-letter`, `::before`, `::after`, etc.
- `content` property can only be set on `::before` and `::after` pseudo elements
- properties worth to remember:
  - `color`
  - `background-color`
  - `display`
  - `padding`
  - `border`
  - `margin`
  - `width`
  - `height`


## Resources

- [CSS Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model)
- [Mastering margin collapsing](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
- [box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
- [CSS height & width](https://www.w3schools.com/css/css_dimension.asp)
- [The display Property](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
- [Block Level vs Inline Elements](https://academind.com/learn/html/beginner-s-guide/diving-deeper-into-html/#block-level-vs-inline-elements)
- [Understanding the CSS box model for inline elements](https://hacks.mozilla.org/2015/03/understanding-inline-box-model/)
- [Pseudo Classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
- [Pseudo Elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)
