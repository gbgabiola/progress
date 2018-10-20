# [Make an Image Responsive](https://learn.freecodecamp.org/responsive-web-design/responsive-web-design-principles/make-an-image-responsive)

Making images responsive with CSS is actually very simple. Instead of applying an absolute width to an element:

```css
img {
  width: 720px;
}
```

You can use:

```css
img {
  max-width: 100%;
  display: block;
  height: auto;
}
```

The `max-width` property of 100% scales the image to fit the width of its container, but the image won't stretch wider than its original width. Setting the `display` property to block changes the image from an inline element (its default), to a block element on its own line. The `height` property of auto keeps the original aspect ratio of the image.

---

Add style rules for the `img` tag to make it responsive to the size of its container. It should display as a block-level element, it should fit the full width of its container without stretching, and it should keep its original aspect ratio.

## Solution

```css
img {
  max-width: 100%;
  display: block;
  height: auto;
}
```