# [Sass: Split Your Styles into Smaller Chunks with Partials](https://learn.freecodecamp.org/front-end-libraries/sass/split-your-styles-into-smaller-chunks-with-partials)

`Partials` in Sass are separate files that hold segments of CSS code. These are imported and used in other Sass files. This is a great way to group similar code into a module to keep it organized.

Names for `partials` start with the underscore (`_`) character, which tells Sass it is a small segment of CSS and not to convert it into a CSS file. Also, Sass files end with the `.scss` file extension. To bring the code in the `partial` into another Sass file, use the `@import` directive.

For example, if all your `mixins` are saved in a `partial` named "_mixins.scss", and they are needed in the "main.scss" file, this is how to use them in the main file:

```scss
// In the main.scss file

@import 'mixins'
```

Note that the underscore is not needed in the `import` statement - Sass understands it is a `partial`. Once a `partial` is imported into a file, all variables, `mixins`, and other code are available to use.

---

Write an `@import` statement to import a `partial` named `_variables.scss` into the main.scss file.

## Setup
```scss
// The main.scss file

```

## Solution
```scss
@import 'variables'
```