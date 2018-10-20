# [Make Typography Responsive](https://learn.freecodecamp.org/responsive-web-design/responsive-web-design-principles/make-typography-responsive)

Instead of using `em` or `px` to size text, you can use viewport units for responsive typography. Viewport units, like percentages, are relative units, but they are based off different items. Viewport units are relative to the viewport dimensions (width or height) of a device, and percentages are relative to the size of the parent container element.

The four different viewport units are:

- `vw: 10vw` would be 10% of the viewport's width.
- `vh: 3vh` would be 3% of the viewport's height.
- `vmin: 70vmin` would be 70% of the viewport's smaller dimension (height vs. width).
- `vmax: 100vmax` would be 100% of the viewport's bigger dimension (height vs. width).

---

Set the `width` of the `h2` tag to 80% of the viewport's width and the `width` of the paragraph as 75% of the viewport's smaller dimension.

## Solution

```css
h2 {
  width: 80vw;
}
p {
  width: 75vmin;
}
```