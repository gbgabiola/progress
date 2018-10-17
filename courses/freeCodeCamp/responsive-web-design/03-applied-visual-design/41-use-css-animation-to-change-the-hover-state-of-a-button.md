# [Use CSS Animation to Change the Hover State of a Button](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/use-css-animation-to-change-the-hover-state-of-a-button)

You can use CSS `@keyframes` to change the color of a button in its hover state.

Here's an example of changing the width of an image on hover:

```css
img:hover {
  animation-name: width;
  animation-duration: 500ms;
}

@keyframes width {
  100% {
    width: 40px;
  }
}
```

```html
<img src="https://bit.ly/smallgooglelogo" alt="Google's Logo" />
```

---

Note that `ms` stands for milliseconds, where 1000ms is equal to 1s.

Use CSS `@keyframes` to change the `background-color` of the `button` element so it becomes `#4791d0` when a user hovers over it. The `@keyframes` rule should only have an entry for `100%`.

## Solution

```css
@keyframes background-color {
  100% {
    background-color: #4791d0;
  }
}
```