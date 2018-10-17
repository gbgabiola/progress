# [Adjust the Hue of a Color](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/adjust-the-hue-of-a-color)

Colors have several characteristics including hue, saturation, and lightness. CSS3 introduced the `hsl()` property as an alternative way to pick a color by directly stating these characteristics.

**Hue** is what people generally think of as 'color'. If you picture a spectrum of colors starting with red on the left, moving through green in the middle, and blue on right, the hue is where a color fits along this line. In `hsl()`, hue uses a color wheel concept instead of the spectrum, where the angle of the color on the circle is given as a value between 0 and 360.

**Saturation** is the amount of gray in a color. A fully saturated color has no gray in it, and a minimally saturated color is almost completely gray. This is given as a percentage with 100% being fully saturated.

**Lightness** is the amount of white or black in a color. A percentage is given ranging from 0% (black) to 100% (white), where 50% is the normal color.

Here are a few examples of using `hsl()` with fully-saturated, normal lightness colors:

| Color   | HSL                 |
| ------- | ------------------- |
| red     | hsl(0, 100%, 50%)   |
| yellow  | hsl(60, 100%, 50%)  |
| green   | hsl(120, 100%, 50%) |
| cyan    | hsl(180, 100%, 50%) |
| blue    | hsl(240, 100%, 50%) |
| magenta | hsl(300, 100%, 50%) |

---

Change the `background-color` of each `div` element based on the class names (`green`, `cyan`, or `blue`) using `hsl()`. All three should have full saturation and normal lightness.

## Solution

```css
.green {
  background-color: hsl(120, 100%, 50%);
}

.cyan {
  background-color: hsl(180, 100%, 50%);
}

.blue {
  background-color: hsl(240, 100%, 50%);
}
```