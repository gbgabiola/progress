# [Create a Column Gap Using grid-column-gap](https://learn.freecodecamp.org/responsive-web-design/css-grid/create-a-column-gap-using-grid-column-gap)

So far in the grids you have created, the columns have all been tight up against each other. Sometimes you want a gap in between the columns. To add a gap between the columns, use the `grid-column-gap` property like this:

```css
grid-column-gap: 10px;
```

This creates 10px of empty space between all of our columns.

---

Give the columns in the grid a 20px gap.

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

  grid-column-gap: 20px;
}
```