# [Use the CSS Transform scale Property to Change the Size of an Element](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/use-the-css-transform-scale-property-to-change-the-size-of-an-element)

To change the scale of an element, CSS has the `transform` property, along with its `scale()` function. The following code example doubles the size of all the paragraph elements on the page:

```css
p {
  transform: scale(2);
}
```

---

Increase the size of the element with the id of `ball2` to 1.5 times its original size.

## Solution

```css
#ball2 {
  left: 65%;
  transform: scale(1.5);
}
```