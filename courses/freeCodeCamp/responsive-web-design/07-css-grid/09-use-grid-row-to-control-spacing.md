# [Use grid-row to Control Spacing](https://learn.freecodecamp.org/responsive-web-design/css-grid/use-grid-row-to-control-spacing)

Of course, you can make items consume multiple rows just like you can with columns. You define the horizontal lines you want an item to start and stop at using the `grid-row` property on a grid item.

---

Make the element with the `item5` class consume the last two rows.

## Solution

```css
.item5 {
  background: PaleGreen;
  grid-column: 2 / 4;

  grid-row: 2 / 4;
}
```