# [Change an Element's Relative Position](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/change-an-elements-relative-position)

CSS treats each HTML element as its own box, which is usually referred to as the `CSS Box Model`. Block-level items automatically start on a new line (think headings, paragraphs, and divs) while inline items sit within surrounding content (like images or spans). The default layout of elements in this way is called the `normal flow` of a document, but CSS offers the position property to override it.

When the position of an element is set to `relative`, it allows you to specify how CSS should move it _relative_ to its current position in the normal flow of the page. It pairs with the CSS offset properties of `left` or `right`, and `top` or `bottom`. These say how many pixels, percentages, or ems to move the item _away_ from where it is normally positioned. The following example moves the paragraph 10 pixels away from the bottom:

```css
p {
  position: relative;
  bottom: 10px;
}
```

Changing an element's position to relative does not remove it from the normal flow - other elements around it still behave as if that item were in its default position.

**Note**  
Positioning gives you a lot of flexibility and power over the visual layout of a page. It's good to remember that no matter the position of elements, the underlying HTML markup should be organized and make sense when read from top to bottom. This is how users with visual impairments (who rely on assistive devices like screen readers) access your content.

---

Change the `position` of the `h2` to `relative`, and use a CSS offset to move it 15 pixels away from the `top` of where it sits in the normal flow. Notice there is no impact on the positions of the surrounding h1 and p elements.

## Solution

```css
h2 {
  position: relative;
  top: 15px;
}
```