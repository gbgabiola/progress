# [Add Flex Superpowers to the Tweet Embed](https://learn.freecodecamp.org/responsive-web-design/css-flexbox/add-flex-superpowers-to-the-tweet-embed)

To the right is the tweet embed that will be used as the practical example. Some of the elements would look better with a different layout. The last challenge demonstrated `display: flex`. Here you'll add it to several components in the tweet embed to start adjusting their positioning.

---

Add the CSS property `display: flex` to all of the following items - note that the selectors are already set up in the CSS:

`header`, the header's `.profile-name`, the header's `.follow-btn`, the header's `h3` and `h4`, the `footer`, and the footer's `.stats`.

## Solution

```css
header {
  display: flex;
}

header .profile-name {
  display: flex;
  margin-left: 10px;
}

header .follow-btn {
  display: flex;
  margin: 0 0 0 auto;
}

header h3,
header h4 {
  display: flex;
  margin: 0;
}

footer {
  display: flex;
}

footer .stats {
  display: flex;
  font-size: 15px;
}
```