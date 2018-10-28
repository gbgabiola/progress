# [Create a Row Gap using grid-row-gap](https://learn.freecodecamp.org/responsive-web-design/css-grid/create-a-row-gap-using-grid-row-gap/)

You can add a gap in between the rows of a grid using `grid-row-gap` in the same way that you added a gap in between columns in the previous challenge.

---

Create a gap for the rows that is `5px` tall.

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

  grid-row-gap: 5px;
}
```