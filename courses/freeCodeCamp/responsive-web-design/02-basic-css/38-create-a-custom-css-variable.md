# [Create a custom CSS Variable](https://learn.freecodecamp.org/responsive-web-design/basic-css/create-a-custom-css-variable)

To create a CSS Variable, you just need to give it a name with two dashes in front of it and assign it a value like this:

`--penguin-skin: gray;`

This will create a variable named `--penguin-skin` and assign it the value of gray.

Now you can use that variable elsewhere in your CSS to change the value of other elements to gray.

---

In the `penguin` class, create a variable name `--penguin-skin` and give it a value of `gray`

## Solution

```css
.penguin {
  --penguin-skin: gray;
}
```