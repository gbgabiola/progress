# [Animate Elements Continually Using an Infinite Animation Count](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/animate-elements-continually-using-an-infinite-animation-count)

The previous challenges covered how to use some of the animation properties and the `@keyframes` rule. Another animation property is the `animation-iteration-count`, which allows you to control how many times you would like to loop through the animation. Here's an example:

```css
animation-iteration-count: 3;
```

In this case the animation will stop after running 3 times, but it's possible to make the animation run continuously by setting that value to infinite.

---

To keep the ball bouncing on the right on a continuous loop, change the `animation-iteration-count` property to infinite.

## Solution

```css
#ball {
  animation-iteration-count: infinite;
}
```