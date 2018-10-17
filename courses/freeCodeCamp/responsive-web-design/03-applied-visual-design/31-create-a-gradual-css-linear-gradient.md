# [Create a Gradual CSS Linear Gradient](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/create-a-gradual-css-linear-gradient)

Applying a color on HTML elements is not limited to one flat hue. CSS provides the ability to use color transitions, otherwise known as gradients, on elements. This is accessed through the `background` property's `linear-gradient()` function. Here is the general syntax:

```css
background: linear-gradient(gradient_direction, color 1, color 2, color 3, ...);
```

The first argument specifies the direction from which color transition starts - it can be stated as a degree, where 90deg makes a vertical gradient and 45deg is angled like a backslash. The following arguments specify the order of colors used in the gradient.

Example:

```css
background: linear-gradient(90deg, red, yellow, rgb(204, 204, 255));
```

---

Use a `linear-gradient()` for the `div` element's `background`, and set it from a direction of 35 degrees to change the color from `#CCFFFF` to `#FFCCCC`.

**Note**  
While there are other ways to specify a color value, like `rgb()` or `hsl()`, use hex values for this challenge.

## Solution

```css
div {
  border-radius: 20px;
  width: 70%;
  height: 400px;
  margin: 50px auto;
  background: linear-gradient(35deg, #ccffff, #ffcccc);
}
```