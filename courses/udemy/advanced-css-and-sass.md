# [Advanced CSS and SASS - Flexbox, Grid, Animations and More!](https://www.udemy.com/advanced-css-and-sass/)

## How CSS Works A Look Behind the Scenes

### **Three Pillars of Writing Good HTML and CSS (Never Forget Them)**
1. Responsive Design
   - Fluid layouts
   - Media queries
   - Responsive images
   - Correct units
   - Desktop-first vs mobile first
2. Manintanable Code
   - Clean
   - Easy-to-understand
   - Growth
   - Reusable
   - How to organize files
   - How to name classes
   - How to structure HTML
3. Web Performance
   - Less HTTP requests
   - Less code
   - Compress code
   - Use a CSS preprocessor
   - Less images
   - Compress images


### **How CSS Works Behind the Scenes**
Load HTML -> Parse HTML -> Document Object Model (DOM) -> Render tree

Parse HTML -> Load CSS -> Parse CSS [Resolve conflicting CSS declarations (cascade), Process final CSS values] -> CSS Object Model (CSSOM) -> Render tree

Render tree -> Website rendering: visual formatting model -> Final rendered website


### **How CSS is Parsed Part 1 The Cascade and Specificity**
The Cascade (The "C" in CSS)

**Cascade** process of combining different stylesheets and resolving conflicts between different CSS rules and declarations, when more than one rule applies to a certain element.

`same IMPORTANCE? > same SPECIFICITY > SOURCE ORDER`

1. IMPORTANCE
   1. User !important declarations
   2. Author !important declarations
   3. Author declarations
   4. User declarations
   5. Default browser declarations

2. SPECIFICITY
   1. Inline styles
   2. IDs
   3. Classes, pseudo-classes, attribute
   4. Elements, pseudo-elements

3. SOURCE ORDER
   - The last declaration in the code will override all other declarations and will be applied


### **Specificity in Practice**
```css
.button { background-color: blue; }

a { background-color: purple; }

#nav div.pull-right a.button { background-color: orangered; }

#nav a.button: hover { background-color: yellow; }
```


### **How CSS is Parsed Part 2 Value Processing**

**What you need to know:**
- Each property has an initial value, used if nothing declared.
- Browsers specify a root font-size for each page (usually 16px).
- Percentages and relative values are always converted to pixels.
- Percentages are measured relative to their parent's font-size, if used to specify font-size.
- Percentages are measured relative to their parent's width, if used to specify font-size.
- em are measured relative to their parent font-size, if used to specify font-size.
- em are measured relative to the current font-size, if used to specify lengths.
- rem are always measures relative to the document's root font-size.
- vh and vw are simply percentage measurements of the viewport's height and width.

```html
<div class="section">
    <p class="amazing">CSS is absolutely amazing</p>
</div>
```

```css
.section {
    font-size: 1.5rem;
    width: 280px;
    background-color: orangered;
}

p {
    width: 140px;
    background-color: green;
}

.amazing {
    width: 66%;
}
```

| | width (paragraph) | padding (paragraph) | font-size (root) | font-size (section) | font-size (paragraph) |
| - |-|-|-|-|-|
| 1. Declared value (autor declarations                         | 140px   | -   | - | 1.5rem | - |
| 2. Cascaded value (after cascade)                             | 66%     | -   | 16px (browser default) | 1.5rem | - |
| 3. Specified value (defaulting, if there's no cascaded value) | 66%     | 0px (initial value) | 16px | 1.5rem | 24px |
| 4. Computed value (converting relative values to absolute)    | 66%     | 0px | 16px | 24px (1.5 * 16px) | 24px |
| 5. Used value (final calculations, based on layout)           | 184.8px | 0px | 16px | 24px | 24px |
| 6. Actual value (browser and device restrictions)             | 185px   | 0px | 16px | 24px | 24px |


How Units are Converted from Relative to Absolute (PX) in order to calculate `Computed value` and `Used value`

```css
html, body {
    font-size: 16px;
    width: 80vw;
}

header {
    font-size: 150%;
    padding: 2em;
    margin-bottom: 10rem;
    height: 90vh;
    width: 100%;
}

.header-child {
    font-size: 3em;
    padding: 10%;
}
```

|              | Example (x) | How to convert to pixels         | Results in pixels                  |
| ------------ | ----------- | -------------------------------- | ---------------------------------- |
| % (fonts)    | 150%        | x% * parent's computed font-size | 24px                               |
| % (lengths)  | 10%         | x% * parent's computed **width** | 100px                              |
| em (fonts)   | 3em         | x * parent computed font-size    | 72px (3 * 24)                      |
| em (lengths) | 2em         | x * **current element** computed font-size | 48px                     |
| rem          | 10rem       | x *  **root** computed font-size | 160px                              |
| vh           | 90vh        | x * 1% of viewport height        | 90% of the current viewport height |
| vw           | 80vw        | x * 1% of viewport width         | 80% of the current viewport width  |


### **How CSS is Parsed Part 3 Inheritance**
**Inheritance: What You Need to Know:**
- Inheritance passess the values for some specific properties from parents to children - **more maintainable code.
- Properties related to text are inherited: font-family, font-size, colors, etc.
- The computed value of a property is what gets inherited, **not** the declared value.
- Inheritance of a property only works if no one declares a value for that property.
- The inherit keyword forces inheritance on a certain property.
- The initial keyword resets a property to its initial value.


### **How CSS Renders a Website: The Visual Formatting Model**
**Definition:**
Algorithm that calculates box and determines the layout of theses boxes, for each element in the render tree, in order to determine the final layout of the page.
- **Dimensions of boxes**: the box model
- **Box type**: inline, block and inline-block
- **Positioning scheme**: floats and positioning
- **Stacking contexts**
- Other elements in the render tree
- Viewport size, dimensions of images, etc.


1. THE BOX MODEL
   - **Content**: text, images, etc.
   - **Padding**: transparent area around the content, inside of the box
   - **Border**: goes around the padding and the content
   - **Margin**: space between boxes
   - **Fill area**: area that gets filled with background color or background image

**total width** = right border + right padding + specified width + left padding + left border

**total height** top border + top padding + specified height + bottom padding + bottom border

**Example**: height = 0 + 20px + 100px + 20px + 0 = 140px

2. BOX TYPES: INLINE, BLOCK-LEVEL and INLINE-BLOCK
   1. Block-level boxes
      -  Elements formatted visually as blocks
      - 100% of parent's width
      - Vertically, one after another
      - `Box-model applies as showed`
      ```css
      display: block
      (display: flex)
      (display: list-item)
      (display: table)
      ```

   2. Inline boxes
      - Content is distributed in lines
      - `Occupies only content's space`
      - `No line-breaks`
      - No height and widths
      - Paddings and margins only horizontal (left and right)

      ```css
      display: inline
      ```

   3. Inline-block boxes
      - A mix of block and inline
      - `Occupies only content's space`
      - `No line-breaks`
      - `Box-model applies as showed`

      ```css
      display: inline-block;
      ```

3. POSITIONING SCHEMES: NORMAL FLOW, ABSOLUTE POSITIONING AND FLOATS

   1. Normal flow
      - Default positioning scheme
      - **NOT** floated
      - **NOT** absolutely positioned
      - Elements laid out according to their source order

      ```css
      position: relative
      ```

   2. Floats
      - **Elements is removed from the normal flow**
      - Text and inline elements will wrap around the floated element
      - The container will not adjust it's height to the element

      ```css
      float: left
      float: right
      ```

   3. Absolute positioning
      - **Elements is removed from the normal flow**
      - No impact on surrounding content or elements
      - We use top, bottom, left and right to offset the element from its relatively positioned container

      ```css
      position: absolute;
      position: fixed;
      ```

4. STACKING CONTEXTS
   - are what determined in which order elements are rendered on the page.
   - are like layers to form a stack

   ```css
   z-index: 3
   position: relative
   ```
   ```css
   z-index: 2
   position: absolute
   ```
   ```css
   z-index: 1
   position: relative
   ```


### **CSS Architecture Components and BEM**
THINK -> BUILD -> ARCHITECT MINDSET
1. **THINK** about the layout of your webpage or web app before writing code.
   - **COMPONENT-DRIVEN DESIGN**
     - **Modular building blocks** that makes up interfaces
     - Help together by the **layout** of the page
     - **Re-usable** across a project, and between projects
     - **Independent**, allowing us to use them anywhere on the page

2. **BUILD** your layout in HTML and CSS with a consistent structure for naming classes.
   - **BEM**
     - **B**lock **E**lement **M**odifier
     - **BLOCK**: standalone component that is meaningful on its own.
     - **ELEMENT**: part of a block that has no standalone meaning.
     - **MODIFIER**: a different version of a block or an element.

3. Creating a logical **ARCHITECTURE** for your CSS with files and folders.
   - **THE 7-1 PATTERN**
     - 7 different folders for  partial Sass files, and 1 main Sass file to import all other files into a compiled CSS stylesheet.

     THE 7 FOLDERS
     - base/
     - components/
     - layout/
     - pages/
     - themes/
     - abstracts/
     - vendors/

---

## Introduction to Sass and NPM
**SASS** is a CSS preprocessor, an extension of CSS that adds power and elegance to the basic language.

`SASS SOURCE CODE` -> Sass compiler -> `COMPILED CSS CODE`

**MAIN SASS FEATURES**
- **Variables**: for reusable values such as colors, font-sizes, spacing, etc.
- **Nesting**: to nest selectors inside of one another, allowing us to write less code.
- **Operators**: for mathematical operations right inside of CSS.
- **Partials and imports**: to write CSS in different files and importing them all into one single file.
- **Mixins**: to write reusable pieces of CSS code.
- **Functions**: similar to mixins, with the difference that they produce a value that can be used.
- **Extends**: to make different selectors inherit declarations that are common to all of them.
- **Control directives**: for writing complex code using conditionals and loops.


**SASS AND SCSS: CLEARING UP THE CONFUSION**

There are 2 SASS syntaxes

**SASS syntax** is indentation sensitive, and doesn't use curly braces and semicolon.
```css
.navigation
  list-style: none
  float: left

  & li
    display: inline-block
    margin-left: 30px
```

**SCSS syntax** preserves the original CSS looks like.
```scss
.navigation {
  list-style: none;
  float: left;

  & li {
    display: inline-block;
    margin-left: 30px;
  }
}
```

**Node**: Allows developers to write and run JavaScript applications on the server. Developers started using node.js to also write tools to help them with web development.

**NPM** is a simple command line interface that allows developers to install and manage packages on their local computers. There are all kinds of open-source **tools**, **libraries** and **frameworks** needed for moderm development. Modern web development could simply not exist without a package manager.


The steps to be able to use SASS in the project:
- `npm init` the first step when using npm on a new project, to create package.json

- `npm install node-sass --save-dev` adding --save-dev to use it as a development dependencies

- add `"compile:sass": "node-sass sass/main.scss css/style.css -w"` in the package.json scripts, adding `-w` to keep watching all the changes made on the saas file.

- `npm install live-server -g` adding `-g` for globally to install it to the computer itself not just in the local development.

- `npm run compile:sass` to watch and load it the file.

---

## Advanced Responsive Design
### Mobile-First vs Desktop-First and Breakpoints
RESPONSIVE DESIGN STRATEGIES

Desktop-First
- Start writing CSS for the desktop: large screen
- Then, media queries shrink design to smaller screens
    ```css
    html { font-size: 20px; }
    @media (max-width: 600px) {
        html { font-size: 16px; }
    }
    ```

Mobiel-First
- Start writing CSS for mobile devices: small screen
- Then, media queries expand design to a large desktop screen
- Forces us to reduce websites and apps to the absolute essentials
    ```css
    html { font-size: 16px; }
    @media (min-width: 600px) {
        html { font-size: 20px; }
    }
    ```

RESPONSIVE DESIGN STRATEGIES: MAX-WIDTH and MIN-WIDTH

Desktop-First
- infinity -> 1200px 
Our initial desktop-first goes here

- 600px -> 0px  
`max-width: 600px` -> **Maximum** width at which media query still applies  
(iswidth <= 600px ?)

- 900px -> 600px  
`max-width: 900px`  
(iswidth <= 900px ?)

500px -> Media queries don't add any importance or specifity to selectors, so code order matters - **media queries at the end**

- 1200px -> 900px  
`max-width: 1200px`  
(iswidth <= 1200px ?)

Mobile-First
- 600px -> 900px  
(iswidth >= 600px ?)  
`min-width: 600px` -> **Minimum** width at which media query starts to apply

- 900px -> 1200px  
(iswidth >= 900px ?)  
`min-width: 900px`

- 1200px -> infinity  
(iswidth >= 1200px ?)  
`min-width: 1200px`

Mobile-First PROS
- 100% optimised for the mobile experience
- Reduces websites and apps to the absolute essentials
- Results in smaller, faster and more efficient products
- Prioritizes content over aesthetic design, which may be desirable

Mobile-First CONS
- The desktop version might feel overly empty and simplistic
- More difficult and counterintuitive to develop
- Less creative freedom, making it more difficult to create distinctive products
- Clients are used to see a desktop version of the site as a prototype
- Do your users even use the mobile internet? What's the purpose of your website?

**Note:** No matter what you choose, always keep both desktop and mobile in mind.


SELECTING OUR BREAKPOINTS: THE OPTIONS
- BAD
  - use the popular device as the breakpoints, like apple, ipad
  - ignoring all the user of other devices
  - it's not future proof, not reusable and maintainable code

- GOOD
  - we check all the most used device width in the internet
  - group them together in a logical way, then pick a breakpoint from that
  - a lot better than the first way because we use a lot of devices and most popular width
  - not setting breakpoints for the specific point but between similar devie width

- PERFECT
  - ignore devices altogether and only look your content in your design
  - begin in one size either mobile or desktop and then start increasing or decreasing your screen width
  - then as soon as the design breaks which means the design no longer work or look okay then insert a new breakpoint.
  - just put a breakpointa whenever your design starts to look weird and out of place
  - don't think any device at all
  - this approach is extremely difficult and many people are not doing it

SELECTING OUR BREAKPOINTS: A GOOD APPROACH

PHONE ONLY
300px -> 600px


| 0px - 600px | 600px - 900px  | 900px -1200px    | 1200px - 1800px | 1800px ---> |
| ----------- | -------------- | ---------------- | --------------- | ----------- |
| 320 x 568   | 720 x 1280     | 1024 x 768       | 1280 x 800      | 1920 x 1080 |
| 360 x 640   | 768 x 1024     |                  | 1280 x 1024     |             |
| 375 x 667   |                |                  | 1366 x 768      |             |
| 480 x 800   |                |                  | 1440 x 900      |             |
|             |                |                  | 1600 x 900      |             |
| PHONE ONLY  | TABLET PORTRAIT| TABLET LANDSCAPE |     DESKTOP     | BIG DESKTOP |


### Responsive Images
The goal of responsive images is to serve the **right image** to the **right screen size** and device, in order to avoid downloading unnecessary large images on smaller screens.

WHEN TO USE RESPONSIVE IMAGES: THE 3 USE CASES
- RESOLUTION SWITCHING: Large screen -> Small screen `(Decrease image resolution on smaller screen)`
- DENSITY SWITCHING: @2x screen (high-res) -> @1x screen (low-res) `(Half the image resolution on @1x screen)`
- ART DIRECTION: Lasrge screen -> Small screen -> Image details were preserved, but the image is different `(Different image on smaller screen)`

### Setting up a Simple Build Process with NPM Scripts

**Build Process** is a sequence of task that we perform automatically after we finish developing a product, or a certain feature of a product. And the result of the build process are one or more final files which are ready for production which means ready to be deployed to the web server.

- COMPILATION -> start with the main sass file then compile it to a css file
- CONCATENATION -> merge the content of the css file with the css in an icon font file, 2 css file into 1
- PREFIXING -> automatically add prefixes
- COMPRESSING -> compress the whole code

---

## Philosophy Behind Flexbox
**FLEXBOX**
- is a new module in CSS3 that makes it easy to align elements to one another, in different directions and order.
- the main idea behind flexbox is to give the container the ability to expand and to shrink elements to best use all the available space.
- replaces float layouts, using less, and more readable and logical code.
- completely changes the way that we build one-dimensional layouts.

Flex container -> Flex items
```css
display: flex
(display: flex-inline)
```

CONTAINER Properties
- `flex-direction: row` | row-reverse | column | column-reverse
- `flex-wrap: no-wrap` | wrap | wrap-reverse
- `justify-content: flex-start` | flex-end | center | space-between | space-around | space-evenly
- `align-items: stretch` | flex-start | flex-end | center | baseline
- `align-content: stretch` | flex-start | flex-end | center | space-between | space-around

ITEM Properties
- `align-self: auto` | stretch | flex-start | flex-end | center | baseline
- `order: 0` | <integer>
- `flex: 0 1 auto` | <int> <int> <len>
  - `flex-grow: 0` | <integer>
  - `flex-shrink: 1` | <integer>
  - `flex-basis: auto` | <length>


---

## WHY CSS Grid - A Whole New Mindset
**CSS GRID**
- is a brand new module that brings a two-dimensional grid system to CSS for the first time.
- replaces float layouts, using less, and more readable and logical CSS and HTML.
- CSS Grid works perfectly together with Flexbox, which is best to handle one-dimentsional components and layouts.
- completely changes the way that we envision and build two-dimensional layouts.

Grid container -> Grid items
```css
display: grid
(display: grid-inline)
```

CONTAINER Properties
- `grid template`
  - `grid-template-rows`
  - `grid-template-columns`
  - `grid-template-areas`
- `grid-gap`
  - `grid-row-gap`
  - `grid-column-gap`
- `justify-items`
- `align-items`
- `justify-content`
- `align-content`
- `grid-auto-rows`
- `grid-auto-columns`
- `grid-auto-flow`

ITEM Properties
- `grid-area`
  - `grid-row`
    - `grid-row-start`
    - `grid-row-end`
  - `grid-column`
    - `grid-column-start`
    - `grid-column-end`
- `justify-self`
- `align-self`
- `order`

### 3 methods in organizing CSS grid
- LINE NUMBERS
- LINE NAMES
- NAME GRID AREAS