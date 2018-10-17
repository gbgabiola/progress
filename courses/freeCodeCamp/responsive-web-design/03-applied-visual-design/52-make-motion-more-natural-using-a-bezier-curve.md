# [Make Motion More Natural Using a Bezier Curve](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/make-motion-more-natural-using-a-bezier-curve)

This challenge animates an element to replicate the movement of a ball being juggled. Prior challenges covered the `linear` and `ease-out` cubic Bezier curves, however neither depicts the juggling movement accurately. You need to customize a Bezier curve for this.

The `animation-timing-function` automatically loops at every keyframe when the `animation-iteration-count` is set to infinite. Since there is a keyframe rule set in the middle of the animation duration (at `50%`), it results in two identical animation progressions at the upward and downward movement of the ball.

The following cubic Bezier curve simulates a juggling movement:

```css
cubic-bezier(0.3, 0.4, 0.5, 1.6);
```

Notice that the value of y2 is larger than 1. Although the cubic Bezier curve is mapped on an 1 by 1 coordinate system, and it can only accept x values from 0 to 1, the y value can be set to numbers larger than one. This results in a bouncing movement that is ideal for simulating the juggling ball.

---

Change value of the `animation-timing-function` of the element with the id of `green` to a `cubic-bezier` function with x1, y1, x2, y2 values set respectively to 0.311, 0.441, 0.444, 1.649.

## Solution

```css
#green {
  background: green;
  left: 75%;
  animation-timing-function: cubic-bezier(0.311, 0.441, 0.444, 1.649);
}
```