# [Use the s Tag to Strikethrough Text](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/use-the-s-tag-to-strikethrough-text)

To strikethrough text, which is when a horizontal line cuts across the characters, you can use the `s` tag. It shows that a section of text is no longer valid. With the `s` tag, the browser applies the CSS of `text-decoration: line-through;` to the element.

---

Wrap the `s` tag around "Google" inside the `h4` tag and then add the word Alphabet beside it, which should not have the strikethrough formatting.

## Solution

```html
<h4><s>Google</s>Alphabet</h4>
```