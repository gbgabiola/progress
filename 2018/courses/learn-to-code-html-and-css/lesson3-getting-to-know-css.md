# [Getting to Know CSS](https://learn.shayhowe.com/html-css/getting-to-know-css/)

## The Cascade
Within CSS, all styles cascade from the top of a style sheet to the bottom, allowing different styles to be added or overwritten as the style sheet progresses.
```css
p {
  background: orange;
  font-size: 24px;
}
p {
  background: green;
}
```
### Cascading Properties
The cascade also works with properties inside individual selectors.
```css
p {
  background: orange;
  background: green;
}
```
## Calculating Specificity
 1. **type selector** has the lowest specificity weight and holds a point value of 0-0-1.
 2. **class selector** has a medium specificity weight and holds a point value of 0-1-0.
 3. **ID selector** has a high specificity weight and holds a point value of 1-0-0.

 ### Specificity Points
 The higher the specificity weight of a selector, the more superiority the selector is given when a styling conflict occurs. 
 
 ## Combining Selector
 When selectors are combined they should be read from right to left. The selector farthest to the right, directly before the opening curly bracket, is known as the key selector. The key selector identifies exactly which element the styles will be applied to. Any selector to the left of the key selector will serve as a prequalifier.

 ### Spaces Within Selectors
 The best practice is to not prefix a class selector with a type selector. Generally we want to select any element with a given class, not just one type of element.

 ### Specificity Within Combined Selectors
 When selectors are combined, so are the specificity weights of the individual selectors. These combined specificity weights can be calculated by counting each different type of selector within a combined selector.

 Comparing the two selectors, the second selector, with its two classes, has a noticeably higher specificity weight and point value. As such it will take precedence within the cascade. If we were to flip the order of these selectors within our style sheet, placing the higher-weighted selector above the lower-weighted selector as shown here, the appearance of their styles would not be affected due to each selector’s specificity weight.

 ## Layering Styles with Multiple Classes
One way to keep the specificity weights of our selectors low is to be as modular as possible, sharing similar styles from element to element. And one way to be as modular as possible is to layer on different styles by using multiple classes.

Let’s take a look at buttons, for example. Say we want all of our buttons to have a font size of 16 pixels, but we want the background color of our buttons to vary depending on where the buttons are used. We can create a few classes and layer them on an element as necessary to apply the desired styles.

HTML
```html
<a class="btn btn-danger">...</a>
<a class="btn btn-success">...</a>
```
CSS
```css
.btn {
  font-size: 16px;
}
.btn-danger {
  background: red;
}
.btn-success {
  background: green;
}
```

## Common CSS Property Values
### Color
four primary ways to represent sRGB colors within CSS: keywords, hexadecimal notation, and RGB and HSL values.

1. Keywords (e.g. red, blue)
2. Hexadecimal notation (e.g. #ff000, #0f0)
3. RGB/RGBa (e.g. rgba(0,255,0,.5))
4. HSL/HSLa(e.g. hsla(300, 50%, 25%, .3))

A complete list of these keyword names can be found within the [CSS specification](http://www.w3.org/TR/css3-color/).

1. **Keyword Colors** Keyword color values are names (such as red, green, or blue) that map to a given color. These keyword names and their corresponding colors are determined by the CSS specification.

2. **Hexadecimal Colors** Hexadecimal color values consist of a pound, or hash, #, followed by a three- or six- character figure. The figures use the numbers 0 through 9 and the letters a through f, upper or lower case. These values map to the red, green, and blue color channels.

3. **RGB & RGBa Colors** The function accepts three comma-separated values, each of which is an integer from 0 to 255. A value of 0 would be pure black; a value of 255 would be pure white.

4. **HSL & HSLa Colors** HSL color values are stated using the hsl() function, which stands for hue, saturation, and lightness. Within the parentheses, the function accepts three comma-separated values, much like rgb().

The first value, the hue, is a unitless number from 0 to 360. The numbers 0 through 360 represent the color wheel, and the value identifies the degree of a color on the color wheel.

The second and third values, the saturation and lightness, are percentage values from 0 to 100%. The saturation value identifies how saturated with color the hue is, with 0 being grayscale and 100% being fully saturated. The lightness identifies how dark or light the hue value is, with 0 being completely black and 100% being completely white.

## Lengths
Length values come in two different forms, absolute and relative, each of which uses different units of measurement.

1. **Absolute Lengths**
are the simplest length values, as they are fixed to a physical measurement, such as inches, centimeters, or millimeters. The most popular absolute unit of measurement is known as the pixel and is represented by the px unit notation.
    * **Pixels** is equal to 1/96th of an inch; thus there are 96 pixels in an inch. The exact measurement of a pixel, however, may vary slightly between high-density and low-density viewing devices.

2. **Relative Lengths** In addition to absolute length values, there are also relative length values. Relative length values are a little more complicated, as they are not fixed units of measurement; they rely on the length of another measurement.
   * **Percentages lengths** are defined in relation to the length of another object. For example, to set the width of an element to 50%, we have to know the width of its parent element, the element it is nested within, and then identify 50% of the parent element’s width.

    * **Em** unit is represented by the em unit notation, and its length is calculated based on an element’s font size. A single em unit is equivalent to an element’s font size. So, for example, if an element has a font size of 14 pixels and a width set to 5em, the width would equal 70 pixels (14 pixels multiplied by 5).

When a font size is not explicitly stated for an element, the em unit will be relative to the font size of the closest parent element with a stated font size.

The em unit is often used for styling text, including font sizes, as well as spacing around text, including margins and paddings.