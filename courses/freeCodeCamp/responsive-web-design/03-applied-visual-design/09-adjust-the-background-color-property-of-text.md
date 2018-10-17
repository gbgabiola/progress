# [Adjust the background-color Property of Text](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/adjust-the-background-color-property-of-text)

Instead of adjusting your overall background or the color of the text to make the foreground easily readable, you can add a `background-color` to the element holding the text you want to emphasize. This challenge uses `rgba()` instead of `hex` codes or normal `rgb()`.

    rgba stands for:
      r = red
      g = green
      b = blue
      a = alpha/level of opacity

The RGB values can range from 0 to 255. The alpha value can range from 1, which is fully opaque or a solid color, to 0, which is fully transparent or clear. `rgba()` is great to use in this case, as it allows you to adjust the opacity. This means you don't have to completely block out the background.

You'll use `background-color: rgba(45, 45, 45, 0.1)` for this challenge. It produces a dark gray color that is nearly transparent given the low opacity value of 0.1.

---

To make the text stand out more, adjust the `background-color` of the h4 element to the given `rgba()` value.

Also for the `h4`, remove the `height` property and add `padding` of 10px.

## Solution

```css
h4 {
  text-align: center;
  background-color: rgba(45, 45, 45, 0.1);
  padding: 10px;
}
```