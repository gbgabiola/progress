# [Adjust the Color of Various Elements to Complementary Colors](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/adjust-the-color-of-various-elements-to-complementary-colors)

The Complementary Colors challenge showed that opposite colors on the color wheel can make each other appear more vibrant when placed side-by-side. However, the strong visual contrast can be jarring if it's overused on a website, and can sometimes make text harder to read if it's placed on a complementary-colored background. In practice, one of the colors is usually dominant and the complement is used to bring visual attention to certain content on the page.

---

This page will use a shade of teal (`#09A7A1`) as the dominant color, and its orange (`#FF790E`) complement to visually highlight the sign-up buttons. Change the `background-color` of both the `header` and `footer` from black to the teal color. Then change the `h2` text `color` to teal as well. Finally, change the `background-color` of the `button` to the orange color.

## Solution

```css
header {
  background-color: #09a7a1;
  color: white;
  padding: 0.25em;
}
h2 {
  color: #09a7a1;
}
button {
  background-color: #ff790e;
}
footer {
  background-color: #09a7a1;
  color: white;
  padding: 0.5em;
}
```