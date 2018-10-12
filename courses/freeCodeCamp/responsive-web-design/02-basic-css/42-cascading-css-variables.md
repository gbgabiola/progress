# [Cascading CSS variables](https://learn.freecodecamp.org/responsive-web-design/basic-css/cascading-css-variables)

When you create a variable, it becomes available for you to use inside the element in which you create it. It also becomes available within any elements nested within it. This effect is known as _cascading_.

Because of cascading, CSS variables are often defined in the `:root` element.

You can think of the `:root` element as a container for your entire HTML document, in the same way that an `html` element is a container for the `body` element.

By creating your variables in `:root`, they will be available throughout the whole web page.

---

Define a variable named `--penguin-belly` in the `:root` selector and give it the value of `pink`. You can then see how the value will cascade down to change the value to pink, anywhere that variable is used.

## Solution

```css
:root {
  --penguin-belly: pink;
}
```