 # Bootstrap

**Bootstrap** is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.

_Responsive_ doest not mean about being fast.
  - means it is responsive to the viewport, it should have different layout for different sizes of devices.

## Goal

- Learn the fundamentals of implementing responsive web design.
- How to use Balsamiq to mockup and wireframe websites.
- The fundamentals of UI design for websites.
- How to install the Bootstrap framework.
- Understanding the Bootstrap grid layout system.
- How to use bootstrap containers to layout your website easily.
- Learn to use other Bootstrap components such as buttons.
- Adding symbols using Font Awesome.
- Learn to use Bootstrap carousels.
- Add Bootstrap cards to your website.
- Using Bootstrap navigation bars.

## Installing Bootstrap

Three Ways to install bootstrap:

1. Using CDN
2. Using starter template on their website.
3. Download the compiled CSS and JavaScript source code.

**Content Delivery Network (CDN)** or **content distribution network** is a geographically distributed network of proxy servers and their data centers. The goal is to provide high availability and high performance by distributing the service spatially relative to end-users.

```html
<!-- Bootstrap CSS -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
```

## Web Design 101

Workflow of the designer:
1. Look at othe people's website
2. Look up for UI patterns
3. Sketch Wireframe
4. Mockup (Optional) - Realistic future website
5. Prototypes - with animations

**Wireframes** are a low fidelity representation of your design.
   - meant to be done with pencil and paper that can be very quick.
   - will need you to settle on a design first before implementing it.

**Mockups** is a opposite of wireframes and it must be a high fidelity representation of your app/design.
   - is what you see and will end up getting.
   - can get you end up stack on choosing colors, icon, img & etc.

## Navbars

### How it works
- Navbars require a wrapping `.navbar` with `.navbar-expand{-sm|-md|-lg|-xl}` for responsive collapsing and color scheme classes.
Navbars and their contents are fluid by default. Use optional containers to limit their horizontal width.
- Use the spacing and flex utility classes for controlling spacing and alignment within navbars.
- Navbars are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our Collapse JavaScript plugin.
- Navbars are hidden by default when printing. Force them to be printed by adding `.d-print` to the `.navbar`. See the display utility class.
- Ensure accessibility by using a `<nav>` element or, if using a more generic element such as a `<div>`, add a `role="navigation"` to every navbar to explicitly identify it as a landmark region for users of assistive technologies.

### Supportend content

Navbars come with built-in support for a handful of sub-components. Choose from the following as needed:

- `.navbar-brand` for your company, product, or project name.
- `.navbar-nav` for a full-height and lightweight navigation (including support for dropdowns).
- `.navbar-toggler` for use with the collapse plugin and other navigation toggling behaviors.
- `.form-inline` for any form controls and actions.
- `.navbar-text` for adding vertically centered strings of text.
- `.collapse.navbar-collapse` for grouping and hiding navbar contents by a parent breakpoint.

## Grid System

### How it works
Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive.

- Containers provide a means to center and horizontally pad your site’s contents. Use `.container` for a responsive pixel width or `.container-fluid` for `width: 100%` across all viewport and device sizes.
- Rows are wrappers for columns. Each column has horizontal `padding` (called a gutter) for controlling the space between them. This `padding` is then counteracted on the rows with negative margins. This way, all the content in your columns is visually aligned down the left side.
- In a grid layout, content must be placed within columns and only columns may be immediate children of rows.
- Thanks to flexbox, grid columns without a specified `width` will automatically layout as equal width columns. For example, four instances of `.col-sm` will each automatically be 25% wide from the small breakpoint and up.
- Column classes indicate the number of columns you’d like to use out of the possible 12 per row. So, if you want three equal-width columns across, you can use `.col-4`.
- Column `width`s are set in percentages, so they’re always fluid and sized relative to their parent element.
- Columns have horizontal `padding` to create the gutters between individual columns, however, you can remove the `margin` from rows and `padding` from columns with `.no-gutters` on the `.row`.
- To make the grid responsive, there are five grid breakpoints, one for each responsive breakpoint: all breakpoints (extra small), small, medium, large, and extra large.
- Grid breakpoints are based on minimum width media queries, **meaning they apply to that one breakpoint and all those above it** (e.g., `.col-sm-4` applies to small, medium, large, and extra large devices, but not the first `xs` breakpoint).
- You can use predefined grid classes (like `.col-4`) or Sass mixins for more semantic markup.

### Grid options

See how aspects of the Bootstrap grid system work across multiple devices.

| Sizes                 | Max width   | Class prefix |
| :-------------------- | :---------: | :----------: |
| Extra small < 576px   | None (auto) | `.col-`
| Small >= 576px        | 540px       | `.col-sm-`
| Medium >= 768px       | 720px       | `.col-md-`
| Large >= 992px        | 960px       | `.col-lg-`
| Extra large >= 1200px | 1140px      | `.col-xl-`


### Containers

**Containers** are the most basic layout element in Bootstrap and are **required when using the default grid system**. Choose from a responsive, fixed-width container (meaning its `max-width` changes at each breakpoint) or fluid-width (meaning it’s `100%` wide all the time).

While containers _can_ be nested, most layouts do not require a nested container.

## Buttons

Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.

> #### Conveying meaning to assistive technologies
> Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the `.sr-only` class.

### Button tags

The `.btn` classes are designed to be used with the `<button>` element. However, you can also use these classes on `<a>` or `<input>` elements (though some browsers may apply a slightly different rendering).

When using button classes on `<a>` elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a `role="button"` to appropriately convey their purpose to assistive technologies such as screen readers.

### Outline buttons

Replace the default modifier classes with the `.btn-outline-*` ones to remove all background images and colors on any button.

### Sizes

Fancy larger or smaller buttons? Add `.btn-lg` or `.btn-sm` for additional sizes.

Create block level buttons, those that span the full width of a parent by adding `.btn-block`.

### Active state

Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. **There’s no need to add a class to `<button>`s as they use a pseudo-class**. However, you can still force the same active appearance with `.active` (and include the `aria-pressed="true"` attribute) should you need to replicate the state programmatically.

### Disabled state

Make buttons look inactive by adding the `disabled` boolean attribute to any `<button>` element.

Disabled buttons using the `<a>` element behave a bit different:

- `<a>`s don’t support the `disabled` attribute, so you must add the `.disabled` class to make it visually appear disabled.
- Some future-friendly styles are included to disable all `pointer-events` on anchor buttons. In browsers which support that property, you won’t see the disabled cursor at all.
- Disabled buttons should include the `aria-disabled="true"` attribute to indicate the state of the element to assistive technologies.


## Resources

- [Bootstrap](https://getbootstrap.com/)
- [awwwards](https://www.awwwards.com/)
- [User Interface Design patterns](http://ui-patterns.com/)
- [dribbble](https://dribbble.com/)
- [SNEAKPEEKIT](https://sneakpeekit.com/)
- [Balsamiq](https://balsamiq.com/)
- [fontawesome](https://fontawesome.com/)