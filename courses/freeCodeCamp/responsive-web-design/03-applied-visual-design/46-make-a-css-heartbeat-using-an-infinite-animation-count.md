# [Make a CSS Heartbeat using an Infinite Animation Count](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/make-a-css-heartbeat-using-an-infinite-animation-count)

Here's one more continuous animation example with the `animation-iteration-count` property that uses the heart you designed in a previous challenge.

The one-second long heartbeat animation consists of two animated pieces. The heart elements (including the `:before` and `:after` pieces) are animated to change size using the `transform` property, and the background `div` is animated to change its color using the `background` property.

---

Keep the heart beating by adding the `animation-iteration-count` property for both the `back` class and the `heart` class and setting the value to infinite. The `heart:before` and `heart:after` selectors do not need any animation properties.

## Solution

```css
.back {
  animation-iteration-count: infinite;
}

.heart {
  animation-iteration-count: infinite;
}
```