# [Center an Element Horizontally Using the margin Property](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/center-an-element-horizontally-using-the-margin-property)

Another positioning technique is to center a block element horizontally. One way to do this is to set its `margin` to a value of auto.

This method works for images, too. Images are inline elements by default, but can be changed to block elements when you set the `display` property to block.

---

Center the `div` on the page by adding a `margin` property with a value of auto.

## Solution

```css
div {
  background-color: blue;
  height: 100px;
  width: 100px;
  margin: auto;
}
```