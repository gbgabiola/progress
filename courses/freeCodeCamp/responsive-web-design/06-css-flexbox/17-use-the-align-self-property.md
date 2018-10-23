# [Use the align-self Property](https://learn.freecodecamp.org/responsive-web-design/css-flexbox/use-the-align-self-property)

The final property for flex items is `align-self`. This property allows you to adjust each item's alignment individually, instead of setting them all at once. This is useful since other common adjustment techniques using the CSS properties `float`, `clear`, and `vertical-align` do not work on flex items.

`align-self` accepts the same values as `align-items` and will override any value set by the `align-items` property.

---

Add the CSS property `align-self` to both `#box-1` and `#box-2`. Give `#box-1` a value of center and give `#box-2` a value of flex-end.

## Solution

```css
#box-1 {
  background-color: dodgerblue;
  align-self: center;
  height: 200px;
  width: 200px;
}

#box-2 {
  background-color: orangered;
  align-self: flex-end;
  height: 200px;
  width: 200px;
}
```