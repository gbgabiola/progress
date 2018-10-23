# [Apply the flex-direction Property to Create Rows in the Tweet Embed](https://learn.freecodecamp.org/responsive-web-design/css-flexbox/apply-the-flex-direction-property-to-create-rows-in-the-tweet-embed)

The `header` and `footer` in the tweet embed example have child items that could be arranged as rows using the `flex-direction` property. This tells CSS to align the children horizontally.

---

Add the CSS property `flex-direction` to both the `header` and `footer` and set the value to row.

## Solution

```css
header {
  display: flex;
  flex-direction: row;
}

footer {
  display: flex;
  flex-direction: row;
}
```
