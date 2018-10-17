# [Create Texture by Adding a Subtle Pattern as a Background Image](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/create-texture-by-adding-a-subtle-pattern-as-a-background-image)

One way to add texture and interest to a background and have it stand out more is to add a subtle pattern. The key is balance, as you don't want the background to stand out too much, and take away from the foreground. The `background` property supports the `url()` function in order to link to an image of the chosen texture or pattern. The link address is wrapped in quotes inside the parentheses.

---

Using the url of `https://i.imgur.com/MJAkxbh.png`, set the `background` of the whole page with the `body` selector.

## Solution

```css
body {
  background: url("https://i.imgur.com/MJAkxbh.png");
}
```