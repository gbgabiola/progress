# [Use the order Property to Rearrange Items](https://learn.freecodecamp.org/responsive-web-design/css-flexbox/use-the-order-property-to-rearrange-items)

The `order` property is used to tell CSS the order of how flex items appear in the flex container. By default, items will appear in the same order they come in the source HTML. The property takes numbers as values, and negative numbers can be used.

---

Add the CSS property `order` to both `#box-1` and `#box-2`. Give `#box-1` a value of 2 and give `#box-2` a value of 1.

## Solution

```css
#box-1 {
  background-color: dodgerblue;
  order: 2;
  height: 200px;
  width: 200px;
}

#box-2 {
  background-color: orangered;
  order: 1;
  height: 200px;
  width: 200px;
}
```