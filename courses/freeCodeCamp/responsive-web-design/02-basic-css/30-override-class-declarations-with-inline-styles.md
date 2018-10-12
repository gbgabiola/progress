# [Override Class Declarations with Inline Styles](https://learn.freecodecamp.org/responsive-web-design/basic-css/override-class-declarations-with-inline-styles)

So we've proven that id declarations override class declarations, regardless of where they are declared in your `style` element CSS.

There are other ways that you can override CSS. Do you remember inline styles?

---

Use an `inline style` to try to make our `h1` element white. Remember, in line styles look like this:

```html
<h1 style="color: green;">`
```

Leave the `blue-text` and `pink-text` classes on your `h1` element.

## Solution

```css
body {
  background-color: black;
  font-family: monospace;
  color: green;
}
#orange-text {
  color: orange;
}
.pink-text {
  color: pink;
}
.blue-text {
  color: blue;
}
```

```html
<h1 id="orange-text" class="pink-text blue-text" style="color: white;">Hello World!</h1>
```