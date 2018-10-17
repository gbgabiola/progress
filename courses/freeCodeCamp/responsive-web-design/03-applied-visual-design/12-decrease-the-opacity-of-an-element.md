# [Decrease the Opacity of an Element](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/decrease-the-opacity-of-an-element)

The `opacity` property in CSS is used to adjust the opacity, or conversely, the transparency for an item.

    A value of 1 is opaque, which isn't transparent at all.
    A value of 0.5 is half see-through.
    A value of 0 is completely transparent.

The value given will apply to the entire element, whether that's an image with some transparency, or the foreground and background colors for a block of text.

---

Set the `opacity` of the anchor tags to 0.7 using `links` class to select them.

## Solution

```css
.links {
  text-align: left;
  color: black;
  opacity: 0.7;
}
```