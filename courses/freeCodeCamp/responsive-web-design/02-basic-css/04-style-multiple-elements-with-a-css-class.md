# [Style Multiple Elements with a CSS Class](https://learn.freecodecamp.org/responsive-web-design/basic-css/style-multiple-elements-with-a-css-class)

Classes allow you to use the same CSS styles on multiple HTML elements. You can see this by applying your `red-text` class to the first `p` element.

## Solution

```html
<style>
  .red-text {
    color: red;
  }
</style>

<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>
</main>
```