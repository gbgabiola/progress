# [Modify Fill Mode of an Animation](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/modify-fill-mode-of-an-animation)

That's great, but it doesn't work right yet. Notice how the animation resets after `500ms` has passed, causing the button to revert back to the original color. You want the button to stay highlighted.

This can be done by setting the `animation-fill-mode` property to `forwards`. The `animation-fill-mode` specifies the style applied to an element when the animation has finished. You can set it like so:

```css
animation-fill-mode: forwards;
```

---

Set the `animation-fill-mode` property of `button:hover` to `forwards` so the button stays highlighted when a user hovers over it.

## Solution

```css
button:hover {
  animation-name: background-color;
  animation-duration: 500ms;
  animation-fill-mode: forwards;
}
```