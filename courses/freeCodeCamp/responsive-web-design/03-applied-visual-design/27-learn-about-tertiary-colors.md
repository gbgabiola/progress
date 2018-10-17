# [Learn about Tertiary Colors](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/learn-about-tertiary-colors)

Computer monitors and device screens create different colors by combining amounts of red, green, and blue light. This is known as the RGB additive color model in modern color theory. Red (R), green (G), and blue (B) are called primary colors. Mixing two primary colors creates the secondary colors cyan (G + B), magenta (R + B) and yellow (R + G). You saw these colors in the Complementary Colors challenge. These secondary colors happen to be the complement to the primary color not used in their creation, and are opposite to that primary color on the color wheel. For example, magenta is made with red and blue, and is the complement to green.

Tertiary colors are the result of combining a primary color with one of its secondary color neighbors. For example, red (primary) and yellow (secondary) make orange. This adds six more colors to a simple color wheel for a total of twelve.

There are various methods of selecting different colors that result in a harmonious combination in design. One example that can use tertiary colors is called the split-complementary color scheme. This scheme starts with a base color, then pairs it with the two colors that are adjacent to its complement. The three colors provide strong visual contrast in a design, but are more subtle than using two complementary colors.

Here are three colors created using the split-complement scheme:

| Color     | Hex Code |
| --------- | -------- |
| orange    | #FF7D00  |
| cyan      | #00FFFF  |
| raspberry | #FF007D  |

---

Change the `background-color` property of the `orange`, `cyan`, and `raspberry` classes to their respective colors. Make sure to use the hex codes as orange and raspberry are not browser-recognized color names.

## Solution

```css
.orange {
  background-color: #ff7d00;
}

.cyan {
  background-color: #00ffff;
}

.raspberry {
  background-color: #ff007d;
}
```