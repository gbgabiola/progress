# [Give Links Meaning by Using Descriptive Link Text](https://learn.freecodecamp.org/responsive-web-design/applied-accessibility/give-links-meaning-by-using-descriptive-link-text)

Screen reader users have different options for what type of content their device reads. This includes skipping to (or over) landmark elements, jumping to the main content, or getting a page summary from the headings. Another option is to only hear the links available on a page.

Screen readers do this by reading the link text, or what's between the anchor (`a`) tags. Having a list of "click here" or "read more" links isn't helpful. Instead, you should use brief but descriptive text within the `a` tags to provide more meaning for these users.

---

The link text that Camper Cat is using is not very descriptive without the surrounding context. Move the anchor (`a`) tags so they wrap around the text "information about batteries" instead of "Click here".

## Solution

```html
<p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightening speed. But chin up, fellow fighters, our time for victory may soon be near. >Click here for <a href="">information about batteries</a></p>
```