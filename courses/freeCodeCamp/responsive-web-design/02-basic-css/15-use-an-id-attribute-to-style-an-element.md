# [Use an id Attribute to Style an Element](https://learn.freecodecamp.org/responsive-web-design/basic-css/use-an-id-attribute-to-style-an-element)

One cool thing about `id` attributes is that, like classes, you can style them using CSS.

However, an `id` is not reusable and should only be applied to one element. An `id` also has a higher specificity (importance) than a class so if both are applied to the same element and have conflicting styles, the styles of the `id` will be applied.

Here's an example of how you can take your element with the `id` attribute of `cat-photo-element` and give it the background color of green. In your `style` element:

```css
#cat-photo-element {
  background-color: green;
}
```

Note that inside your `style` element, you always reference classes by putting a `.` in front of their names. You always reference ids by putting a `#` in front of their names.

---

Try giving your form, which now has the id attribute of `cat-photo-form`, a green background.

## Solution

```css
#cat-photo-form {
  background-color: green;
}
```