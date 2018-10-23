# [Use the justify-content Property in the Tweet Embed](https://learn.freecodecamp.org/responsive-web-design/css-flexbox/use-the-justify-content-property-in-the-tweet-embed)

The last challenge showed an example of the `justify-content` property. For the tweet embed, this property can be applied to align the items in the `.profile-name` element.

---

Add the CSS property `justify-content` to the header's `.profile-name` element and set the value to any of the options from the last challenge.

## Solution

```css
header .profile-name {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
}
```
