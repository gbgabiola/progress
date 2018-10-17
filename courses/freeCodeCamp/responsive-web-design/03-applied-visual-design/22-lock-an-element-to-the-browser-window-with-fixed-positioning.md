# [Lock an Element to the Browser Window with Fixed Positioning](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/lock-an-element-to-the-browser-window-with-fixed-positioning)

The next layout scheme that CSS offers is the `fixed` position, which is a type of absolute positioning that locks an element relative to the browser window. Similar to absolute positioning, it's used with the CSS offset properties and also removes the element from the normal flow of the document. Other items no longer "realize" where it is positioned, which may require some layout adjustments elsewhere.

One key difference between the `fixed` and `absolute` positions is that an element with a fixed position won't move when the user scrolls.

---

The navigation bar in the code is labeled with an id of `navbar`. Change its `position` to `fixed`, and offset it 0 pixels from the `top` and 0 pixels from the `left`. Notice the (lack of) impact to the `h1` position, it hasn't been pushed down to accommodate the navigation bar and would need to be adjusted separately.

## Solution

```css
#navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #767676;
}
```