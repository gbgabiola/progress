# [Change the Font Size of an Element](https://learn.freecodecamp.org/responsive-web-design/basic-css/change-the-font-size-of-an-element)

Font size is controlled by the `font-size` CSS property, like this:

```css
h1 {
  font-size: 30px;
}
```

---

Inside the same `<style>` tag that contains your `red-text` class, create an entry for `p` elements and set the `font-size` to 16 pixels (`16px`).

## Solution

```css
.red-text {
  color: red;
}
p {
  font-size: 16px;
}
```