# [Use Clockwise Notation to Specify the Margin of an Element](https://learn.freecodecamp.org/responsive-web-design/basic-css/use-clockwise-notation-to-specify-the-margin-of-an-element)

Let's try this again, but with `margin` this time.

Instead of specifying an element's `margin-top`, `margin-right`, `margin-bottom`, and `margin-left` properties individually, you can specify them all in one line, like this:

`margin: 10px 20px 10px 20px;`

These four values work like a clock: top, right, bottom, left, and will produce the exact same result as using the side-specific margin instructions.

---

Use `Clockwise Notation` to give the element with the `blue-box` class a margin of `40px` on its top and left side, but only `20px` on its bottom and right side.

## Solution

```css
.blue-box {
  background-color: blue;
  color: #fff;
  margin: 40px 20px 20px 40px;
}
```