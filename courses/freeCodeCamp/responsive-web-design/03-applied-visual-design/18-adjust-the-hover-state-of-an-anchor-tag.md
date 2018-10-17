# [Adjust the Hover State of an Anchor Tag](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/adjust-the-hover-state-of-an-anchor-tag)

This challenge will touch on the usage of pseudo-classes. A pseudo-class is a keyword that can be added to selectors, in order to select a specific state of the element.

For example, the styling of an anchor tag can be changed for its hover state using the `:hover` pseudo-class selector. Here's the CSS to change the `color` of the anchor tag to red during its hover state:

```css
a:hover {
  color: red;
}
```

The code editor has a CSS rule to style all `a` tags black. Add a rule so that when the user hovers over the `a` tag, the `color` is blue.

## Solution

```css
a {
  color: #000;
}
a:hover {
  color: blue;
}
```