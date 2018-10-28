# [Use Media Queries to Create Responsive Layouts](https://learn.freecodecamp.org/responsive-web-design/css-grid/use-media-queries-to-create-responsive-layouts)

CSS Grid can be an easy way to make your site more responsive by using media queries to rearrange grid areas, change dimensions of a grid, and rearrange the placement of items.

In the preview, when the viewport width is 300px or more, the number of columns changes from 1 to 2. The advertisement area then occupies the left column completely.

---

When the viewport width is `400px` or more, make the header area occupy the top row completely and the footer area occupy the bottom row completely.

## Solution

```css
@media (min-width: 400px) {
  .container {
    grid-template-areas:
      "header header"
      "advert content"
      "footer footer";
  }
}
```