# [Adjust the Padding of an Element](https://learn.freecodecamp.org/responsive-web-design/basic-css/adjust-the-padding-of-an-element)

Now let's put our Cat Photo App away for a little while and learn more about styling HTML.

You may have already noticed this, but all HTML elements are essentially little rectangles.

Three important properties control the space that surrounds each HTML element: `padding`, `margin`, and `border`.

An element's `padding` controls the amount of space between the element's content and its `border`.

Here, we can see that the blue box and the red box are nested within the yellow box. Note that the red box has more `padding` than the blue box.

When you increase the blue box's `padding`, it will increase the distance(`padding`) between the text and the border around it.

---

Change the `padding` of your blue box to match that of your red box.

## Solution

```css
.blue-box {
  background-color: blue;
  color: #fff;
  padding: 20px;
}
```