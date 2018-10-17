# [Change Animation Timing with Keywords](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/change-animation-timing-with-keywords)

In CSS animations, the `animation-timing-function` property controls how quickly an animated element changes over the duration of the animation. If the animation is a car moving from point A to point B in a given time (your `animation-duration`), the `animation-timing-function` says how the car accelerates and decelerates over the course of the drive.

There are a number of predefined keywords available for popular options. For example, the default value is `ease`, which starts slow, speeds up in the middle, and then slows down again in the end. Other options include `ease-out`, which is quick in the beginning then slows down, `ease-in`, which is slow in the beginning, then speeds up at the end, or `linear`, which applies a constant animation speed throughout.

---

For the elements with id of `ball1` and `ball2`, add an `animation-timing-function` property to each, and set `#ball1` to `linear`, and `#ball2` to `ease-out`. Notice the difference between how the elements move during the animation but end together, since they share the same `animation-duration` of 2 seconds.

## Solution

```css
#ball1 {
  left: 27%;
  animation-timing-function: linear;
}
#ball2 {
  left: 56%;
  animation-timing-function: ease-out;
}
```