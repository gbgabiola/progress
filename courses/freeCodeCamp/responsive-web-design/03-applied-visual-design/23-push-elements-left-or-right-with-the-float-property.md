# [Push Elements Left or Right with the float Property](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/push-elements-left-or-right-with-the-float-property)

The next positioning tool does not actually use `position`, but sets the `float` property of an element. Floating elements are removed from the normal flow of a document and pushed to either the `left` or `right` of their containing parent element. It's commonly used with the `width` property to specify how much horizontal space the floated element requires.

---

The given markup would work well as a two-column layout, with the `section` and `aside` elements next to each other. Give the `#left` item a `float` of `left` and the `#right item a float` of `right`.

## Solution

```css
#left {
  float: left;
  width: 50%;
}
#right {
  float: right;
  width: 40%;
}
```