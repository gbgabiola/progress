# [Use a CSS Class to Style an Element](https://learn.freecodecamp.org/responsive-web-design/basic-css/use-a-css-class-to-style-an-element)

Classes are reusable styles that can be added to HTML elements.

Here's an example CSS class declaration:

```css
<style>
  .blue-text {
    color: blue;
  }
</style>
```

You can see that we've created a CSS class called `blue-text` within the `<style>` tag.

You can apply a class to an HTML element like this:

`<h2 class="blue-text">CatPhotoApp</h2>`

Note that in your CSS `style` element, class names start with a period. In your HTML elements' class attribute, the class name does not include the period.

---

Inside your `style` element, change the `h2` selector to `.red-text` and update the color's value from `blue` to `red`.

Give your `h2` element the `class` attribute with a value of `'red-text'`.

## Solution

```html
<style>
  .red-text {
    color: red;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
```