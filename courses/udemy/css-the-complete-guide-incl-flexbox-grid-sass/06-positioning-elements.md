# Positioning Elements with CSS

- `position` property allows us to change the actual position of an element
  - values: `static` (default), `absolute`, `relative`, `fixed`, `sticky`
  - can be applied to a block level and inline element
- viewport is the visible part/area if the page
- create `fixed` position with width to 100%, top, left, and margin to 0 and `box-sizing: border-box;`
- add a background image with a position fixed
- `z-index` property sets the element position below or above other elements
  - values: `auto` or 0 is the default, add a higher number to position the element above other elements
  - doesn't have impact without position property different from static
- add negative z-index to the background image to display it behind the packages
- absolute position is defined based on two cases:
  - none of the ancestor has position applied, then context of the element is HTML element
  - if we have, closest ancestor that has position applied is the context for the element
- relative position doesn't take the element out of the document flow
  - positioning context is the element itself
    - using position will just move the element from its current position
- add badge to the package
  - add relative position to the package class
  - add `z-index: 1;` to the main-header to make sure navbar is on top when scrolling
- `overflow: hidden;` allows us to hide element when it moves out of parent element
  - if body element is the parent, add it to the html and body element when using relative position to make sure it hides the element
- **the document flow** is the _default_ positioning behaviour of html elements 
  - can be changed with `position` property
  - elements can remain in the document flow or be excluded from it
- move elements using `top`, `bottom`, `left`, and `right` properties
- positioning context defines the anchor point for the position change
  - viewport for `fixed`
  - another element for `absolute`
  - element itself for `relative`
  - viewport and another element for `sticky`
- the stacking context is created by applying `fixed` / `sticky` or `absolute` / `relative` position with `z-index`
  - defines stacking behaviour of child elements

## Resources

- [Positioning theory](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning)
- [position property](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [z-index property](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
- [The stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)
- [sticky value and current browser support](https://caniuse.com/#search=sticky)
