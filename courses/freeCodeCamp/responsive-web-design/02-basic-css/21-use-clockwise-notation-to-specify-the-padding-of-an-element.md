# [Use Clockwise Notation to Specify the Padding of an Element](https://learn.freecodecamp.org/responsive-web-design/basic-css/use-clockwise-notation-to-specify-the-padding-of-an-element)

Instead of specifying an element's `padding-top`, `padding-right`, `padding-bottom`, and `padding-left` properties individually, you can specify them all in one line, like this:

`padding: 10px 20px 10px 20px;`

These four values work like a clock: top, right, bottom, left, and will produce the exact same result as using the side-specific padding instructions.

---

Use Clockwise Notation to give the ".blue-box" class a `padding` of `40px` on its top and left side, but only `20px` on its bottom and right side.

## Solution

```css
.blue-box {
  background-color: blue;
  color: #fff;
  padding: 40px 20px 20px 40px;
}
```