# [Add Different Padding to Each Side of an Element](https://learn.freecodecamp.org/responsive-web-design/basic-css/add-different-padding-to-each-side-of-an-element)

Sometimes you will want to customize an element so that it has different amounts of `padding` on each of its sides.

CSS allows you to control the `padding` of all four individual sides of an element with the `padding-top`, `padding-right`, `padding-bottom`, and `padding-left` properties.

---

Give the blue box a `padding` of `40px` on its top and left side, but only `20px` on its bottom and right side.

## Solution

```css
.blue-box {
  background-color: blue;
  color: #fff;
  padding: 40px 20px 20px 40px;
}
```