# [Use CSS Selectors to Style Elements](https://learn.freecodecamp.org/responsive-web-design/basic-css/use-css-selectors-to-style-elements)

With CSS, there are hundreds of CSS `properties` that you can use to change the way an element looks on your page.

When you entered `<h2 style="color: red">CatPhotoApp</h2>`, you were styling that individual `h2` element with `inline` CSS, which stands for `Cascading Style Sheets`.

That's one way to specify the style of an element, but there's a better way to apply `CSS`.

At the top of your code, create a `style` block like this:

```html
<style>
</style>
```

Inside that style block, you can create a `CSS selector` for all `h2` elements. For example, if you wanted all `h2` elements to be red, you would add a style rule that looks like this:

```css
<style>
  h2 {color: red;}
</style>
```

Note that it's important to have both opening and closing curly braces (`{` and `}`) around each element's style rule(s). You also need to make sure that your element's style definition is between the opening and closing style tags. Finally, be sure to add a semicolon to the end of each of your element's style rules.

---

Delete your `h2` element's style attribute, and instead create a CSS `style` block. Add the necessary CSS to turn all `h2` elements blue.

## Solution

```css
h2 {
  color: blue;
}
```