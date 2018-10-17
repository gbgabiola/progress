# [Animate Elements at Variable Rates](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/animate-elements-at-variable-rates)

There are a variety of ways to alter the animation rates of similarly animated elements. So far, this has been achieved by applying an `animation-iteration-count` property and setting `@keyframes` rules.

To illustrate, the animation on the right consists of two "stars" that each decrease in size and opacity at the 20% mark in the `@keyframes` rule, which creates the twinkle animation. You can change the `@keyframes` rule for one of the elements so the stars twinkle at different rates.

---

Alter the animation rate for the element with the class name of `star-1` by changing its `@keyframes` rule to 50%.

## Solution

```css
.star-1 {
  margin-top: 15%;
  margin-left: 60%;
  animation-name: twinkle-1;
  animation-duration: 1s;
}
@keyframes twinkle-1 {
  50% {
    transform: scale(0.5);
    opacity: 0.5;
  }
}
```