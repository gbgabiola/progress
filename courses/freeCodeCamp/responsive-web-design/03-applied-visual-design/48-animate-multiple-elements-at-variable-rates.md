# [Animate Multiple Elements at Variable Rates](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/animate-multiple-elements-at-variable-rates)

In the previous challenge, you changed the animation rates for two similarly animated elements by altering their `@keyframes` rules. You can achieve the same goal by manipulating the `animation-duration` of multiple elements.

In the animation running in the code editor, there are three "stars" in the sky that twinkle at the same rate on a continuous loop. To make them twinkle at different rates, you can set the `animation-duration` property to different values for each element.

---

Set the `animation-duration` of the elements with the classes `star-1`, `star-2`, and `star-3` to 1s, 0.9s, and 1.1s, respectively.

## Solution

```css
.star-1 {
  animation-duration: 1s;
  animation-name: twinkle;
}

.star-2 {
  animation-duration: 0.9s;
  animation-name: twinkle;
}

.star-3 {
  animation-duration: 1.1s;
  animation-name: twinkle;
}
```