# [Use grid-area Without Creating an Areas Template](https://learn.freecodecamp.org/responsive-web-design/css-grid/use-grid-area-without-creating-an-areas-template/)

The `grid-area` property you learned in the last challenge can be used in another way. If your grid doesn't have an areas template to reference, you can create an area on the fly for an item to be placed like this:

```css
item1 {
  grid-area: 1/1/2/4;
}
```

This is using the line numbers you learned about earlier to define where the area for this item will be. The numbers in the example above represent these values:

```css
grid-area: horizontal line to start at / vertical line to start at / horizontal
  line to end at / vertical line to end at;
```

So the item in the example will consume the rows between lines 1 and 2, and the columns between lines 1 and 4.

---

Using the `grid-area` property, place the element with `item5` class between the third and fourth horizontal lines and between the first and fourth vertical lines.

## Solution

```css
.item5 {
  background: PaleGreen;

  grid-area: 3/1/4/4;
}
```