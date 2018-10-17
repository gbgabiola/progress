# [Create Visual Balance Using the text-align Property](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/create-visual-balance-using-the-text-align-property)

This section of the curriculum focuses on Applied Visual Design. The first group of challenges build on the given card layout to show a number of core principles.

Text is often a large part of web content. CSS has several options for how to align it with the `text-align` property.

`text-align: justify;` causes all lines of text except the last line to meet the left and right edges of the line box.

`text-align: center;` centers the text

t`ext-align: right;` right-aligns the text

And `text-align: left;` (the default) left-aligns the text.

---

Align the `h4` tag's text, which says "Google", to the center. Then justify the paragraph tag which contains information about how Google was founded.

## Solution

```css
h4 {
  text-align: center;
}
p {
  text-align: justify;
}
```