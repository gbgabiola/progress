# [Avoid Colorblindness Issues by Using Sufficient Contrast](https://learn.freecodecamp.org/responsive-web-design/applied-accessibility/avoid-colorblindness-issues-by-using-sufficient-contrast)

Color is a large part of visual design, but its use introduces two accessibility issues. First, color alone should not be used as the only way to convey important information because screen reader users won't see it. Second, foreground and background colors need sufficient contrast so colorblind users can distinguish them.

Previous challenges covered having text alternatives to address the first issue. The last challenge introduced contrast checking tools to help with the second. The WCAG-recommended contrast ratio of 4.5:1 applies for color use as well as gray-scale combinations.

Colorblind users have trouble distinguishing some colors from others - usually in hue but sometimes lightness as well. You may recall the contrast ratio is calculated using the relative luminance (or lightness) values of the foreground and background colors.

In practice, the 4.5:1 ratio can be reached by darkening the darker color and lightening the lighter one with the aid of a color contrast checker. Darker colors on the color wheel are considered to be blues, violets, magentas, and reds, whereas lighter colors are oranges, yellows, greens, and blue-greens.

---

Camper Cat is experimenting with using color for his blog text and background, but his current combination of a greenish `background-color` with maroon text `color` has a 2.5:1 contrast ratio. You can easily adjust the lightness of the colors since he declared them using the CSS `hsl()` property (which stands for hue, saturation, lightness) by changing the third argument. Increase the `background-color` lightness value from 35% to 55%, and decrease the `color` lightness value from 20% to 15%. This improves the contrast to 5.9:1.

## Solution

```css
body {
  color: hsl(0, 55%, 15%);
  background-color: hsl(120, 25%, 55%);
}
```