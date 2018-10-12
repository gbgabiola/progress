# [Add Different Margins to Each Side of an Element](https://learn.freecodecamp.org/responsive-web-design/basic-css/add-different-margins-to-each-side-of-an-element)

Sometimes you will want to customize an element so that it has a different `margin` on each of its sides.

CSS allows you to control the `margin` of all four individual sides of an element with the `margin-top`, `margin-right`, `margin-bottom`, and `margin-left` properties.

---

Give the blue box a `margin` of `40px` on its top and left side, but only `20px` on its bottom and right side.

## Solution

```css
.blue-box {
  background-color: blue;
  color: #fff;
  margin: 40px 20px 20px 40px;
}
```