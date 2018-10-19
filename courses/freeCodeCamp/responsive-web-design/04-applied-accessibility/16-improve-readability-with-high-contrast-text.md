# [Improve Readability with High Contrast Text](https://learn.freecodecamp.org/responsive-web-design/applied-accessibility/improve-readability-with-high-contrast-text/)

Low contrast between the foreground and background colors can make text difficult to read. Sufficient contrast improves the readability of your content, but what exactly does "sufficient" mean?

The Web Content Accessibility Guidelines (WCAG) recommend at least a 4.5 to 1 contrast ratio for normal text. The ratio is calculated by comparing the relative luminance values of two colors. This ranges from 1:1 for the same color, or no contrast, to 21:1 for white against black, the strongest contrast. There are many contrast checking tools available online that calculate this ratio for you.

---

Camper Cat's choice of light gray text on a white background for his recent blog post has a 1.5:1 contrast ratio, making it hard to read. Change the `color` of the text from the current gray (`#D3D3D3`) to a darker gray (`#636363`) to improve the contrast ratio to 6:1.

## Solution

```css
body {
  color: #636363;
  background-color: #fff;
}
``