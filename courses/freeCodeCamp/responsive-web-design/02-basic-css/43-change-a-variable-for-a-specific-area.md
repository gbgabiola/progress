# [Change a variable for a specific area](https://learn.freecodecamp.org/responsive-web-design/basic-css/change-a-variable-for-a-specific-area)

When you create your variables in `:root` they will set the value of that variable for the whole page.

You can then over-write these variables by setting them again within a specific element.

---

Change the value of `--penguin-belly` to `white` in the `penguin` class.

## Solution

```css
:root {
  --penguin-skin: gray;
  --penguin-belly: pink;
  --penguin-beak: orange;
}

.penguin {
  --penguin-belly: white;
}
```