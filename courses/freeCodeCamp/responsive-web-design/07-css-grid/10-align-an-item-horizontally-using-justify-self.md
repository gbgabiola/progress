# [Align an Item Horizontally using justify-self](https://learn.freecodecamp.org/responsive-web-design/css-grid/align-an-item-horizontally-using-justify-self)

In CSS Grid, the content of each item is located in a box which is referred to as a cell. You can align the content's position within its cell horizontally using the `justify-self` property on a grid item. By default, this property has a value of `stretch`, which will make the content fill the whole width of the cell. This CSS Grid property accepts other values as well:

`start`: aligns the content at the left of the cell,

`center`: aligns the content in the center of the cell,

`end`: aligns the content at the right of the cell.

---

Use the `justify-self` property to center the item with the class `item2`.

## Solution

```css
.item2 {
  background: LightSalmon;

  justify-self: center;
}
```