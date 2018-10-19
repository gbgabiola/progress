# [Make Links Navigatable with HTML Access Keys](https://learn.freecodecamp.org/responsive-web-design/applied-accessibility/make-links-navigatable-with-html-access-keys)

HTML offers the `accesskey` attribute to specify a shortcut key to activate or bring focus to an element. This can make navigation more efficient for keyboard-only users.

HTML5 allows this attribute to be used on any element, but it's particularly useful when it's used with interactive ones. This includes links, buttons, and form controls.

Here's an example:

```html
<button accesskey="b">Important Button</button>
```

---

Camper Cat wants the links around the two blog article titles to have keyboard shortcuts so his site's users can quickly navigate to the full story. Add an `accesskey` attribute to both links and set the first one to "g" (for Garfield) and the second one to "c" (for Chuck Norris).

## Solution

```html
<h2><a id="first" href="" accesskey="g">The Garfield Files: Lasagna as Training Fuel?</a></h2>

<h2><a id="second" href="" accesskey="c">Is Chuck Norris a Cat Person?</a></h2>
```