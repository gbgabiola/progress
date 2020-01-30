# CSS3

## Goal

- Understand what are cascading style sheets and how you can use it to style your website.
- How to use CSS selectors and properties.
- Learn about how to use inline, internal and external CSS.
- Understand CSS coding best practices.
- Learn about CSS sizing methods.
- Learn the anatomy of CSS syntax and structure.
- CSS specificity and implementing style hierarchy.
- Class vs. Ids and how to target each.
- CSS display and how to implement layout.
- How to use CSS static, relative and absolute positioning systems.
- Font styling using CSS and web safe fonts.
- Centering elements using CSS.
- Website design fundamentals and typography.
- How to use CSS float and clear.
- How combine CSS selectors and understand selector priority.

## Introduction to CSS

**Cascading Style Sheets (CSS)**
- is a stylesheet language used to describe the presentation of a document written in HTML or XML.
- describes how elements should be rendered on screen, on paper, in speech, or on other media.
- is one of the core languages of the open Web and is standardized across Web browsers according to the W3C specification.

Inline CSS:
```html
<body style="background-color: #eaf6f6;">
```

Internal CSS:
```html
<style>
  body { background-color: #eaf6f6; }
</style>
```

External CSS:
```html
<link rel="stylesheet" href="style.css">
```

```css
body { ackground-color: #eaf6f6; }
```

### Properties

- **`background-color` property** sets the background color of an element.
- **`color` property** sets the foreground color value of an element's text and text decorations, and sets the currentcolor value.
- **`width` property** sets an element's width. By default, it sets the width of the content area.
- **`height` property** specifies the height of an element. By default, t propertyhe defines the height of the content area.
- **`border-color` property** sets the color of an element's border.
- **`border-style` property** sets the line style for all four sides of an element's border.
- **`border-width` property** sets the width of an element's border.

**Note**:  
Inline styles added to an element always overwrite any styles in external stylesheets, and thus can be thought of as having the highest specificity.

### The Anatomy of CSS Syntax

CSS Syntax is the _grammar_ of the CSS Language.

- selector = who?
- property = what?
- value = how?

```css
selector { property: value; }
h1 { color: red; }
```

### Selectors

**`Type`** or **`tag` selector** matches elements by node name. In other words, it selects all elements of the given type within a document.

```css
h2 { color: gray; }
```

**`Class` selector** matches elements based on the contents of their `class` attribute.

```css
.bacon { background: green; }
```

**`ID` selector** matches an element based on the value of its `id` attribute. In order for the element to be selected, its `ID` attribute must match exactly the value given in the selector.

```css
#broccoli { background: red; }
```

**pseudo-class** is a keyword added to a selector that specifies a special state of the selected element(s).

```css
img:hover { color: gold; }
```

**Note**:  
**`id` global attribute** defines an identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS).

**`class` global attribute** is a space-separated list of the classes of the element.

## Intermediate CSS

**favicon** (short for "favorites icon", referring to its use in the "favorites" or "bookmarks" lists in browsers).

```html
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
```

**Content Division element (`<div>`)** is the generic container for flow content. It has no effect on the content or layout until styled using CSS.


### The Box Model

**box model** is the foundation of layout on the Web, each element is represented as a rectangular box, with the box's content, padding, border, and margin built up around one another like the layers of an onion. As a browser renders a web page layout, it works out what styles are applied to the content of each box, how big the surrounding onion layers are, and where the boxes sit in relation to one another.

- **`padding`** refers to the _inner_ margin of a CSS box, between the outer edge of the content box and the inner edge of the border. The size of this layer can be set on all four sides at once with the `padding` shorthand property, or one side at a time with the `padding-top`, `padding-right`, `padding-bottom` and `padding-left` properties.

- **`margin`** surrounds a CSS box, and pushes up against other CSS boxes in the layout. It behaves rather like `padding`; the shorthand property is `margin` and the individual properties are `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.

- **`border`** of a CSS box sits between the outer edge of the padding and the inner edge of the margin. By default the border has a size of 0, making it invisible, but you can set the thickness, style and color of the border to make it appear.

### Display Property

**`display` property** sets whether an element is treated as a `none`, `block`, `inline` or `inline-block` element and the layout used for its children, such as `grid` or `flex`.

- **`block`-level element** always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).

- **`inline` element** does not start on a new line and only takes up as much width as necessary.

- **`inline-block`** is very similar to inline in that it will set inline with the natural flow of text (on the "baseline"). The difference is that you are able to set a `width` and `height` which will be respected.

- **`none`** will totally removes the element from the page. Note that while the element is still in the DOM, it is removed visually and any other conceivable way (you can't tab to it or its children, it is ignored by screen readers, etc).

**`visibility`  property** shows or hides an element without changing the layout of a document.

```css
p { display: inline; }
span { display: block; }
img { display: inline-block; }
h1 { display: none; }
```

#### Common Inline Elements

- **`<span>` element** is a generic inline container for phrasing content, which does not inherently represent anything.
  - It can be used to group elements for styling purposes.
  - It should be used only when no other semantic element is appropriate.
  - `<span>` is very much like a `<div>` element, but `<div>` is a _block-level element_ whereas a `<span>` is an _inline element_.
- **`<img>` element** embeds an image into the document. It is a replaced element.
- **`<a>`** or **anchor element**, along with it's href attribute, creates a hyperlink to other web pages, files, locations within the same page, email addresses, or any other URL.

### Positioning

**`position` property** sets how an element is positioned in a document. The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.

The first thing to realize is that even without css, your HTML elements already has pre-defined rules for how it should be displayed on the webpage.

Rules to understand before changing the default position to avoid getting confused and getting stacked:

1. Content is Everything
   - inline elements only take up as much width and as much height as the content.
   - block elements even if they take up 100% of the width, the height is still determined by the content.
2. Order Comes From Cod 
   - default layout order is determined by HTML
3. Children Sit On Parents
   - by default, all HTML elements that are children, they will sit on top of the parent element.


#### Position Values

- **`static`** is positioned according to the normal flow of the document.
  - The `top`, `right`, `bottom`, `left`, and `z-index` properties have no effect.
  - is the default value.
- **`relative`** is positioned according to the normal flow of the document, and then offset relative to itself based on the values of `top`, `right`, `bottom`, and `left`.
  - The offset does not affect the position of any other elements; thus, the space given for the element in the page layout is the same as if position were `static`.
- **`absolute`** is removed from the normal document flow, and no space is created for the element in the page layout.
  - is positioned relative to its closest positioned ancestor, if any; otherwise, it is placed relative to the initial containing block.
  - final position is determined by the values of `top`, `right`, `bottom`, and `left`.
- **`fixed`** is removed from the normal document flow, and no space is created for the element in the page layout.
  - is positioned relative to the initial _containing block_ established by the viewport, except when one of its ancestors has a `transform`, `perspective`, or `filter` property set to something other than none, in which case that ancestor behaves as the containing block.  
  - final position is determined by the values of top, right, bottom, and left.
- **`sticky`** is positioned according to the normal flow of the document, and then offset relative to its _nearest scrolling ancestor_ and _containing block_, including table-related elements, based on the values of `top`, `right`, `bottom`, and `left`.
  - The offset does not affect the position of any other elements.

### Centering an Element

- **`text-align` property** sets the horizontal alignment of a block element.
- **`auto` value** will set the browser to select a suitable margin to use.
  - can be used to center an element.

```css
h1 { text-align: center; }

img {
  width 30px;
  margin 0 auto;
}
```

### Fonts

There are two types of font family names:

- **family-name** - The name of a font family. For example, "Times" and "Helvetica" are font families.
  - Font family names containing whitespace should be quoted.
- **generic-name** - a group of font families with a similar look (like "Serif" or "Monospace")

#### Generic Font

- **`serif`** fonts have small finishing strokes, lines, flared or tapering ends on some characters, or have actual serifed endings.
  - E.g. Lucida Bright, Lucida Fax, Palatino, "Palatino Linotype", Palladio, "URW Palladio", serif.
- **`sans-serif`** "Sans" means without, these fonts do not have the lines at the ends of characters.
  - E.g. "Open Sans", "Fira Sans", "Lucida Sans", "Lucida Sans Unicode", "Trebuchet MS", "Liberation Sans", "Nimbus Sans L", sans-serif.
- **`monospace`** characters have the same fixed width.
  - E.g. "Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace.
- **`cursive`** fonts generally have either joining strokes or other cursive characteristics beyond those of italic typefaces.
  - are partially or completely connected, and the result looks more like handwritten pen or brush writing than printed letterwork.
  - E.g. "Brush Script MT", "Brush Script Std", "Lucida Calligraphy", "Lucida Handwriting", "Apple Chancery", cursive.
- **`fantasy`** fonts are primarily decorative fonts that contain playful representations of characters.
  - E.g. Papyrus, Herculanum, Party LET, Curlz MT, Harrington, fantasy.


### Sizing

If you haven't set the font size anywhere on the page, then it is the browser default, which is often `16px`.

#### Absolute-size

- **Pixels (`px`)** `font-size` is a good choice when you need pixel accuracy. 
  - is static.
  - is an OS-independent and cross-browser way of literally telling the browsers to render the letters at exactly the number of pixels in height that you specified.

#### Relative-size 

- **Percentage (`%`)** value, is relative to the parent element's `font-size`.
- **`em`** value is dynamic.
  - is equal to the size of the font that applies to the parent of the element in question.
  - `1em` = `16px`, and `2em` = `32px`.
  - formula = desired element pixel value / parent element `font-size` in pixels.
- **`rem`** values were invented in order to sidestep the compounding problem.
  - values are relative to the root `html` element, not the parent element.
  - it lets you specify a `font-size` in a relative fashion without being affected by the size of the parent, thereby eliminating compounding.

### Font Properties

- **`font-size` property** sets the size of the font. This property is also used to compute the size of `em`, `ex`, and other relative `<length>` units.
- **`font-weight` property** sets the weight (or boldness) of the font. The weights available depend on the `font-family` you are using.
- **`line-height` property** sets the height of a line box.
  - commonly used to set the distance between lines of text.
- **`color` property** sets the foreground `color` value of an element's text and text decorations, and sets the currentcolor value.
- **`text-decoration` property** sets the appearance of decorative lines on text.

### CSS Float and Clear

**`float` property** places an element on the left or right side of its container, allowing text and inline elements to wrap around it.
  - will remove the element from the normal flow of the page, though still remaining a part of the flow (in contrast to `absolute` positioning).

**`clear` property** sets whether an element must be moved below (cleared) _floating_ elements that precede it.
  - property applies to floating and non-floating elements.


## Resources

- [Toasty Technology's classic 90s style website](http://toastytech.com/evil/index.html)
- [Sean Halpin's beautiful personal website](http://seanhalpin.io/)
- [CSS MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS devdocs](https://devdocs.io/css/)
- [Overview of default CSS applied by the browser](https://www.w3schools.com/cssref/css_default_values.asp)
- [Curated colour palettes](https://colorhunt.co/)
- [Emojipedia](https://emojipedia.org/)
- [Interactive Box Model Demo](http://markusvogl.com/web1/interactive_box_model/css_box_demo.html)
- [CSS Font Stack](https://www.cssfontstack.com/)
- [FLATICON](https://www.flaticon.com/)
- [GIPHY](https://giphy.com/)