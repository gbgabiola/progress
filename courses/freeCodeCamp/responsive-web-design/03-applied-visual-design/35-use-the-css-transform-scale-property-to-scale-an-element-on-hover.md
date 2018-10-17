# [Use the CSS Transform scale Property to Scale an Element on Hover](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/use-the-css-transform-scale-property-to-scale-an-element-on-hover)

The `transform` property has a variety of functions that lets you scale, move, rotate, skew, etc., your elements. When used with pseudo-classes such as `:hover` that specify a certain state of an element, the `transform` property can easily add interactivity to your elements.

Here's an example to scale the paragraph elements to 2.1 times their original size when a user hovers over them:

```css
p:hover {
  transform: scale(2.1);
}
```

---

Add a CSS rule for the `hover` state of the `div` and use the `transform` property to scale the `div` element to 1.1 times its original size when a user hovers over it.

## Solution

```css
div:hover {
  transform: scale(1.1);
}
```