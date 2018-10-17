# [Create Visual Direction by Fading an Element from Left to Right](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/create-visual-direction-by-fading-an-element-from-left-to-right)

For this challenge, you'll change the `opacity` of an animated element so it gradually fades as it reaches the right side of the screen.

In the displayed animation, the round element with the gradient background moves to the right by the 50% mark of the animation per the `@keyframes` rule.

---

Target the element with the id of `ball` and add the `opacity` property set to 0.1 at `50%`, so the element fades as it moves to the right.

## Solution

```css
#ball {
  width: 70px;
  height: 70px;
  margin: 50px auto;
  position: fixed;
  left: 20%;
  border-radius: 50%;
  background: linear-gradient(35deg, #ccffff, #ffcccc);
  animation-name: fade;
  animation-duration: 3s;
}

@keyframes fade {
  50% {
    left: 60%;
    opacity: 0.1;
  }
}
```

```html
<div id="ball"></div>
```