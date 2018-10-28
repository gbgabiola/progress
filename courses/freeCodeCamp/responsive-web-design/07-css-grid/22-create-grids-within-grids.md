# [Create Grids within Grids](https://learn.freecodecamp.org/responsive-web-design/css-grid/create-grids-within-grids)

Turning an element into a grid only affects the behavior of its direct descendants. So by turning a direct descendant into a grid, you have a grid within a grid.

For example, by setting the `display` and `grid-template-columns` properties of the element with the `item3` class, you create a grid within your grid.

---

Turn the element with the `item3` class into a grid with two columns with a width of `auto` and `1fr` using `display` and `grid-template-columns`.

## Solution

```css
.item3 {
  background: PaleTurquoise;
  grid-area: content;

  display: grid;
  grid-template-columns: auto 1fr;
}
```