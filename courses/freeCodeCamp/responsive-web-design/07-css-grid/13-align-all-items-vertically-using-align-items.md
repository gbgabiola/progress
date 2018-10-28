# [Align All Items Vertically using align-items](https://learn.freecodecamp.org/responsive-web-design/css-grid/align-all-items-vertically-using-align-items)

Using the `align-items` property on a grid container will set the vertical alignment for all the items in our grid.

---

Use it now to move all the items to the end of each cell.

## Solution

```css
.container {
  font-size: 40px;
  min-height: 300px;
  width: 100%;
  background: LightGray;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 10px;

  align-items: end;
}
```