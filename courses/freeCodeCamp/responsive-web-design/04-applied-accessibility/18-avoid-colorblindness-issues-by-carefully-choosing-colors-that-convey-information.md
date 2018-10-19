# [Avoid Colorblindness Issues by Carefully Choosing Colors that Convey Information](https://learn.freecodecamp.org/responsive-web-design/applied-accessibility/avoid-colorblindness-issues-by-carefully-choosing-colors-that-convey-information)

There are various forms of colorblindness. These can range from a reduced sensitivity to a certain wavelength of light to the inability to see color at all. The most common form is a reduced sensitivity to detect greens.

For example, if two similar green colors are the foreground and background color of your content, a colorblind user may not be able to distinguish them. Close colors can be thought of as neighbors on the color wheel, and those combinations should be avoided when conveying important information.

**Note**  
Some online color picking tools include visual simulations of how colors appear for different types of colorblindness. These are great resources in addition to online contrast checking calculators.

---

Camper Cat is testing different styles for an important button, but the yellow (`#FFFF33`) `background-color` and the green (`#33FF33`) text `color` are neighboring hues on the color wheel and virtually indistinguishable for some colorblind users. (Their similar lightness also fails the contrast ratio check). Change the text `color` to a dark blue (`#003366`) to solve both problems.

## Solution

```css
button {
  color: #003366;
  background-color: #ffff33;
  font-size: 14px;
  padding: 10px;
}
```