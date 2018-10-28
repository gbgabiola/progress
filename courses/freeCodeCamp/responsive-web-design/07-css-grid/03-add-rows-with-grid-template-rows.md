# [Add Rows with grid-template-rows](https://learn.freecodecamp.org/responsive-web-design/css-grid/add-rows-with-grid-template-rows)

The grid you created in the last challenge will set the number of rows automatically. To adjust the rows manually, use the `grid-template-rows` property in the same way you used `grid-template-columns` in previous challenge.

---

Add two rows to the grid that are `50px` tall each.

## Solution

```css
.container {
  font-size: 40px;
  width: 100%;
  background: LightGray;
  display: grid;
  grid-template-columns: 100px 100px 100px;
  
  grid-template-rows: 50px 50px;
}
```