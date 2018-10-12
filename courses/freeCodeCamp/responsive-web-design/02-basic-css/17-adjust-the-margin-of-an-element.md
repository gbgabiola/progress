# [Adjust the Margin of an Element](https://learn.freecodecamp.org/responsive-web-design/basic-css/adjust-the-margin-of-an-element)

An element's `margin` controls the amount of space between an element's `border` and surrounding elements.

Here, we can see that the blue box and the red box are nested within the yellow box. Note that the red box has a bigger `margin` than the blue box, making it appear smaller.

When you increase the blue box's `margin`, it will increase the distance between its border and surrounding elements.

---

Change the `margin` of the blue box to match that of the red box.

## Solution

```css
.blue-box {
  background-color: blue;
  color: #fff;
  padding: 20px;
  margin: 20px;
}
```