# [Move a Relatively Positioned Element with CSS Offsets](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/move-a-relatively-positioned-element-with-css-offsets)

The CSS offsets of `top` or `bottom`, and `left` or `right` tell the browser how far to offset an item relative to where it would sit in the normal flow of the document. You're offsetting an element away from a given spot, which moves the element away from the referenced side (effectively, the opposite direction). As you saw in the last challenge, using the top offset moved the `h2` downwards. Likewise, using a left offset moves an item to the right.

![Gif offset](https://i.imgur.com/eWWi3gZ.gif)

---

Use CSS offsets to move the `h2` 15 pixels to the right and 10 pixels up.

## Solution

```css
h2 {
  position: relative;
  left: 15;
  bottom: 10;
}
```