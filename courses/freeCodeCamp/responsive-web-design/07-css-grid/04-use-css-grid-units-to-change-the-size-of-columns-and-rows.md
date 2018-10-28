# [Use CSS Grid units to Change the Size of Columns and Rows](https://learn.freecodecamp.org/responsive-web-design/css-grid/use-css-grid-units-to-change-the-size-of-columns-and-rows)

You can use absolute and relative units like `px` and `em` in CSS Grid to define the size of rows and columns. You can use these as well:

`fr`: sets the column or row to a fraction of the available space,

`auto`: sets the column or row to the width or height of its content automatically,

`%`: adjusts the column or row to the percent width of its container.

Here's the code that generates the output in the preview:

```css
grid-template-columns: auto 50px 10% 2fr 1fr;
```

This snippet creates five columns. The first column is as wide as its content, the second column is 50px, the third column is 10% of its container, and for the last two columns; the remaining space is divided into three sections, two are allocated for the fourth column, and one for the fifth.

---

Make a grid with three columns whose widths are as follows: 1fr, 100px, and 2fr.

## Solution

```css
.container {
  font-size: 40px;
  width: 100%;
  background: LightGray;
  display: grid;
  grid-template-rows: 50px 50px;

  grid-template-columns: 1fr 100px 2fr;
}
```