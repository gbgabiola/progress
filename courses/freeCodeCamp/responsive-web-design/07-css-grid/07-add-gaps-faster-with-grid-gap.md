# [Add Gaps Faster with grid-gap](https://learn.freecodecamp.org/responsive-web-design/css-grid/add-gaps-faster-with-grid-gap)

`grid-gap` is a shorthand property for `grid-row-gap` and `grid-column-gap` from the previous two challenges that's more convenient to use. If `grid-gap` has one value, it will create a gap between all rows and columns. However, if there are two values, it will use the first one to set the gap between the rows and the second value for the columns.

---

Use `grid-gap` to introduce a `10px` gap between the rows and `20px` gap between the columns.

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

  grid-gap: 10px 20px;
}
```