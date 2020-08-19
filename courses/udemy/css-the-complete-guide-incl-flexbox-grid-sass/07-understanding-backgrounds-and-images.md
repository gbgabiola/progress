# Understanding Backgrounds & Images

- `background` property is a a shorthand property that can consist of different properties:
  - `background-image` property sets one or more background images
  - `background-color` property sets a background color
  - `background-position` property sets initial position, relative to background position layer
    - defined by `background-origin` and only applies to `background-image`
  - `background-size` property sets size of background image
  - `background-repeat` property defines how background images are repeated
  - `background-origin` sets background positioning area
  - `background-clip` defines whether background extends underneath border
  - `background-attachment` sets the scrolling behavior of the background image
- `background-position` property accepts x-axis and y-axis values
  - `center` value is the same `50% 50%`
- images parents should be set to `inline-block` and fixed value first before applying percentage height/width value to the image
- `<img>` vs `background-image`
  - `<img>` is better for accessibility but way more difficult to style
  - `background-image` can be sized and positioned easier
    - should really just be used for backgrounds
    - not part of normal document flow, it doesn't have its own HTML elements to show that it's image
- add html content for customer's page and fix the links
- working on the image layout
  - add `vertical-align: top;` or set the image `display: block;` to remove whitespace in the image that introduced by the inline element behavior
- **linear** and **radial** gradients are treated as images
  - `linear-gradient`: direction + color stops
  - `radial gradient`: shape, size, position and color stops
    - shape: circle or ellipse
    - `at` atrribute can be used to add position, e.g., `circle at top left`
    - two values are needed for the size to work with ellipse
    - keywords than can be used: `farthest-side`, `closest-side`, `farthest-corner`
- `background` property can add multiple images (gradients counts as images), but only one solid color which should be at the last
  - using transparency can create cool effects
  - each images should have their own set of properties assign to them, else default will be used
- `filter` property allows us to change the visual appearance of an element, e.g., `blur()`, `grayscale()`, `contrast()`, etc.
  - `grayscale()` function takes a percentage, defining how much we want to turn it to grey



## Resources

- [`background`](https://developer.mozilla.org/en-US/docs/Web/CSS/background) property
- [styling images](https://www.w3schools.com/css/css3_images.asp)
- [`filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) property
- [styling SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/SVG_and_CSS)
