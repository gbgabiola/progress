# [Add Columns with grid-template-columns](https://learn.freecodecamp.org/responsive-web-design/css-grid/add-columns-with-grid-template-columns)

Simply creating a grid element doesn't get you very far. You need to define the structure of the grid as well. To add some columns to the grid, use the `grid-template-columns` property on a grid container as demonstrated below:

.container {
display: grid;
grid-template-columns: 50px 50px;
}
This will give your grid two columns that are 50px wide each.

The number of parameters given to the `grid-template-columns` property indicates the number of columns in the grid, and the value of each parameter indicates the width of each column.

---

Give the grid container three columns that are `100px` wide each.

## Solution

```css
.container {
  font-size: 40px;
  width: 100%;
  background: LightGray;
  display: grid;
  
  grid-template-columns: 100px 100px 100px;
}
```