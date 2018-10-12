# [Add a Negative Margin to an Element](https://learn.freecodecamp.org/responsive-web-design/basic-css/add-a-negative-margin-to-an-element)

An element's `margin` controls the amount of space between an element's `border` and surrounding elements.

If you set an element's `margin` to a negative value, the element will grow larger.

---

Try to set the `margin` to a negative value like the one for the red box.

Change the `margin` of the blue box to `-15px`, so it fills the entire horizontal width of the yellow box around it.

## Solution

```css
.blue-box {
  background-color: blue;
  color: #fff;
  padding: 20px;
  margin: -15px;
}
```