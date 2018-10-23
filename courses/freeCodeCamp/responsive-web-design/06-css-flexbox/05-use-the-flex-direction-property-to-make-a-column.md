# [Use the flex-direction Property to Make a Column](https://learn.freecodecamp.org/responsive-web-design/css-flexbox/use-the-flex-direction-property-to-make-a-column)

The last two challenges used the `flex-direction` property set to row. This property can also create a column by vertically stacking the children of a flex container.

---

Add the CSS property `flex-direction` to the `#box-container` element, and give it a value of column.

## Solution

```css
#box-container {
  display: flex;
  height: 500px;
  flex-direction: column;
}
```