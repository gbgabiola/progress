# [Use CSS Variables to change several elements at once](https://learn.freecodecamp.org/responsive-web-design/basic-css/use-css-variables-to-change-several-elements-at-once)

CSS _Variables_ are a powerful way to change many CSS style properties at once by changing only one value.

Follow the instructions below to see how changing just three values can change the styling of many elements.

---

In the `penguin` class, change the `black` value to `gray`, the `gray` value to `white`, and the `yellow` value to `orange`.

## Solution

```css
.penguin {
  --penguin-skin: gray;
  --penguin-belly: white;
  --penguin-beak: orange;
}
```