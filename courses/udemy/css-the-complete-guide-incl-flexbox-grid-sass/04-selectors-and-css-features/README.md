# More on Selectors, Properties & Values

- selectors
  - we can use multiple classes to an element
  - we can chain selectors into one selector, e.g., `a.active`, `.priority.highlighted`, etc.
    - difference to a combinator is that we're not selecting an element with the class that's nested in an element but select the element with the class
  - `class` selectors are the most used type of CSS selectors
- CSS class selectors vs ID selectors
  - CSS `class` selectors are reusable and can be added to any HTML element
    - allows to **mark** and name things for styling purposes only
  - CSS `id` selectors are only used once per page
    - id's has no CSS meaning on the page, however it allows us to link on the page
- `!important` overwrites specifity and all other selectors
  - **In general**: **Don't use `!important`**
    - use specifity and rules to style website
    - leads to a bad code and will messed up the CSS code
- `:not()` pseudo class allows us to reverse a certain rule or exclude a certain selector
  - use with caution but when needed to exclude certain elements


## Resources

- [classes vs IDs](https://stackoverflow.com/questions/12889362/difference-between-id-and-class-in-css-and-when-to-use-it)
- [When Using !important is The Right Choice](https://css-tricks.com/when-using-important-is-the-right-choice/)
- [:not() pseudo class](https://developer.mozilla.org/en-US/docs/Web/CSS/:not)
- [Can I Use](https://caniuse.com/)
