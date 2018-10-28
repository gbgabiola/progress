# [Create Flexible Layouts Using auto-fit](https://learn.freecodecamp.org/responsive-web-design/css-grid/create-flexible-layouts-using-auto-fit)

`auto-fit` works almost identically to `auto-fill`. The only difference is that when the container's size exceeds the size of all the items combined, `auto-fill` keeps inserting empty rows or columns and pushes your items to the side, while `auto-fit` collapses those empty rows or columns and stretches your items to fit the size of the container.

**Note**  
If your container can't fit all your items on one row, it will move them down to a new one.

---

In the second grid, use `auto-fit` with r`epeat to fill the grid with columns that have a minimum width of` and maximum of `. Then resize the preview to see the difference.

## Solution

```css
.container2 {
  font-size: 40px;
  min-height: 100px;
  width: 100%;
  background: Silver;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 10px;

  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
}
```