# [Adjust the Tone of a Color](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/adjust-the-tone-of-a-color)

The `hsl()` option in CSS also makes it easy to adjust the tone of a color. Mixing white with a pure hue creates a tint of that color, and adding black will make a shade. Alternatively, a tone is produced by adding gray or by both tinting and shading. Recall that the 's' and 'l' of `hsl()` stand for saturation and lightness, respectively. The saturation percent changes the amount of gray and the lightness percent determines how much white or black is in the color. This is useful when you have a base hue you like, but need different variations of it.

---

The navigation bar on this site currently inherits its `background-color` from the `header` element. Starting with that color as a base, add a `background-color` to the `nav` element so it uses the same cyan hue, but has 80% saturation and 25% lightness values to change its tone and shade.

## Solution

```css
header {
  background-color: hsl(180, 90%, 35%);
  color: #ffffff;
}

nav {
  background-color: hsl(180, 80%, 25%);
}
```