# [Add a box-shadow to a Card-like Element](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/add-a-box-shadow-to-a-card-like-element)

The `box-shadow` property applies one or more shadows to an element.

The `box-shadow` property takes values for `offset-x` (how far to push the shadow horizontally from the element), `offset-y` (how far to push the shadow vertically from the element), `blur-radius`, `spread-radius` and a color value, in that order. The `blur-radius` and `spread-radius` values are optional.

Here's an example of the CSS to create multiple shadows with some blur, at mostly-transparent black colors:

```css
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
```

---

The element now has an id of `thumbnail`. With this selector, use the example CSS values above to place a `box-shadow` on the card.

## Solution

```css
#thumbnail {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
```