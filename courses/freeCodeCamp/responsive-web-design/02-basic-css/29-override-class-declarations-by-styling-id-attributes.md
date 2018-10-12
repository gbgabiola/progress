# [Override Class Declarations by Styling ID Attributes](https://learn.freecodecamp.org/responsive-web-design/basic-css/override-class-declarations-by-styling-id-attributes)

We just proved that browsers read CSS from top to bottom. That means that, in the event of a conflict, the browser will use whichever CSS declaration came last.

But we're not done yet. There are other ways that you can override CSS. Do you remember id attributes?

Let's override your `pink-text` and `blue-text` classes, and make your `h1` element orange, by giving the `h1` element an id and then styling that id.

---

Give your `h1` element the `id` attribute of `orange-text`. Remember, id styles look like this:

```html
<h1 id="orange-text">
```

Leave the `blue-text` and `pink-text` classes on your `h1` element.

Create a CSS declaration for your `orange-text` id in your `style` element. Here's an example of what this looks like:

```css
#brown-text {
  color: brown;
}
```

Note: It doesn't matter whether you declare this CSS above or below `pink-text` class, since id attribute will always take precedence.

## Solution

```css
body {
  background-color: black;
  font-family: monospace;
  color: green;
}
.pink-text {
  color: pink;
}
.blue-text {
  color: blue;
}
#orange-text {
  color: orange;
}
```

```html
<h1 class="pink-text blue-text" id="orange-text">Hello World!</h1>
```