# [ake Screen Reader Navigation Easier with the header Landmark](https://learn.freecodecamp.org/responsive-web-design/applied-accessibility/make-screen-reader-navigation-easier-with-the-header-landmark)

The next HTML5 element that adds semantic meaning and improves accessibility is the `header` tag. It's used to wrap introductory information or navigation links for its parent tag, and works well around content that's repeated at the top on multiple pages.

`header` shares the embedded landmark feature you saw with `main`, allowing assistive technologies to quickly navigate to that content.

**Note**  
`header` is meant for use in the `body` tag of your HTML document. This is different than the `head` element, which contains the page's title, meta information, etc.

---

Camper Cat is writing some great articles about ninja training, and wants to add a page for them to his site. Change the top `div` that currently contains the `h1` to a `header` tag instead.

## Solution

```html
<header>
    <h1>Training with Camper Cat</h1>
</header>
```