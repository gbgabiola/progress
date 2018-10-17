# [Change the Position of Overlapping Elements with the z-index Property](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/change-the-position-of-overlapping-elements-with-the-z-index-property)

When elements are positioned to overlap, the element coming later in the HTML markup will, by default, appear on the top of the other elements. However, the `z-index` property can specify the order of how elements are stacked on top of one another. It must be an integer (i.e. a whole number and not a decimal), and higher values for the `z-index` property of an element move it higher in the stack than those with lower values.

---

Add a `z-index` property to the element with the class name of `first` (the red rectangle) and set it to a value of 2 so it covers the other element (blue rectangle).

## Solution

```css
.first {
  background-color: red;
  position: absolute;
  z-index: 2;
}
.second {
  background-color: blue;
  position: absolute;
  left: 40px;
  top: 50px;
  z-index: 1;
}
```