# [Divide the Grid Into an Area Template](https://learn.freecodecamp.org/responsive-web-design/css-grid/divide-the-grid-into-an-area-template)

You can group cells of your grid together into an _area_ and give the area a custom name. Do this by using `grid-template-areas` on the container like this:

```css
grid-template-areas:
  "header header header"
  "advert content content"
  "footer footer footer";
```

The code above merges the top three cells together into an area named `header`, the bottom three cells into a `footer` area, and it makes two areas in the middle row; `advert` and `content`.

**Note**  
Every word in the code represents a cell and every pair of quotation marks represent a row.

In addition to custom labels, you can use a period (`.`) to designate an empty cell in the grid.

---

Place the area template so that the cell labeled advert becomes an empty cell.

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

  grid-template-areas:
    "header header header"
    ". content content"
    "footer footer footer";
}
```