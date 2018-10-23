# [Apply the flex-direction Property to Create a Column in the Tweet Embed](https://learn.freecodecamp.org/responsive-web-design/css-flexbox/apply-the-flex-direction-property-to-create-a-column-in-the-tweet-embed/)

The tweet embed `header` and `footer` used the `flex-direction` property earlier with a row value. Similarly, the items inside the `.profile-name` element would work well stacked as a column.

---

Add the CSS property `flex-direction` to the header's `.profile-name` element and set the value to column.

## Solution

```css
header .profile-name {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
```
