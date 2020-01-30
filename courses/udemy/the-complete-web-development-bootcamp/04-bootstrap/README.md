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


## Navbar Component

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
Bootstrap's grid system uses a series of containers, rows, and columns to layout and align content. It's built with flexbox and is fully responsive.

- Containers provide a means to center and horizontally pad your site's contents. Use `.container` for a responsive pixel width or `.container-fluid` for `width: 100%` across all viewport and device sizes.
- Rows are wrappers for columns. Each column has horizontal `padding` (called a gutter) for controlling the space between them. This `padding` is then counteracted on the rows with negative margins. This way, all the content in your columns is visually aligned down the left side.
- In a grid layout, content must be placed within columns and only columns may be immediate children of rows.
- Thanks to flexbox, grid columns without a specified `width` will automatically layout as equal width columns. For example, four instances of `.col-sm` will each automatically be 25% wide from the small breakpoint and up.
- Column classes indicate the number of columns you'd like to use out of the possible 12 per row. So, if you want three equal-width columns across, you can use `.col-4`.
- Column `width`s are set in percentages, so they're always fluid and sized relative to their parent element.
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

**Containers** are the most basic layout element in Bootstrap and are **required when using the default grid system**. Choose from a responsive, fixed-width container (meaning its `max-width` changes at each breakpoint) or fluid-width (meaning it's `100%` wide all the time).

While containers _can_ be nested, most layouts do not require a nested container.


## Buttons Component

Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.

> #### Conveying meaning to assistive technologies
> Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the `.sr-only` class.

- Button tags
  - The `.btn` classes are designed to be used with the `<button>` element.
  - When using button classes on `<a>` elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a `role="button"` to appropriately convey their purpose to assistive technologies such as screen readers.
- Outline buttons
  - Replace the default modifier classes with the `.btn-outline-*` ones to remove all background images and colors on any button.
- Sizes
  - Add `.btn-lg` or `.btn-sm` for additional sizes.
  - Add `.btn-block` to create block level buttons, that span the full width of a parent.
- Active state
  - Buttons will appear pressed when active. **There's no need to add a class to `<button>`s as they use a pseudo-class**. However, you can still force the same active appearance with `.active` (and include the `aria-pressed="true"` attribute) should you need to replicate the state programmatically.
- Disabled state
  - Make buttons look inactive by adding the `disabled` boolean attribute to any `<button>` element.
  - Disabled buttons using the `<a>` element behave a bit different:
    - `<a>`s don't support the `disabled` attribute, so you must add the `.disabled` class to make it visually appear disabled.
    - Some future-friendly styles are included to disable all `pointer-events` on anchor buttons. In browsers which support that property, you won't see the disabled cursor at all.
    - Disabled buttons should include the `aria-disabled="true"` attribute to indicate the state of the element to assistive technologies.


## Carousel Component

A slideshow component for cycling through elements, images or slides of text, like a carousel.

### How it works

The carousel is a slideshow for cycling through a series of content, it works with a series of images, text, or custom markup.

**The `.active` class needs to be added to one of the slides** otherwise the carousel will not be visible. Also be sure to set a unique id on the `.carousel` for optional controls, especially if you're using multiple carousels on a single page. Control and indicator elements must have a `data-target` attribute (or `href` for links) that matches the id of the `.carousel` element.

### Things you can add

- Slides only
- With controls
  - Adding previous and next controls
- With indicators
  - You can add the indicators to the carousel, alongside the controls, too.
- With captions
  - Add `.carousel-caption` element within any `.carousel-item`. They can be easily hidden on smaller viewports, with optional display utilities. We hide them initially with `.d-none` and bring them back on medium-sized devices with `.d-md-block`.
- Crossfade
  - Add `.carousel-fade` to your carousel to animate slides with a fade transition instead of a slide.
- Individual `.carousel-item` interval
  - Add `data-interval=""` to a `.carousel-item` to change the amount of time to delay between automatically cycling to the next item.

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-interval=""`.

| Name     | Type              | Default | Description      |
| :------- | :---------------: | :-----: | :----------------:
| Interval | number            | 5000    | The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle.
| Keyboard | boolean           | true    | Whether the carousel should react to keyboard events.
| pause    | string \| boolean | "hover" | If set to `"hover"`, pauses the cycling of the carousel on `mouseenter` and resumes the cycling of the carousel on `mouseleave`. If set to `false`, hovering over the carousel won't pause it.
| ride     | string            | false   | Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
| swap     | boolean           | true    | Whether the carousel should cycle continuously or have hard stops.
| touch    | boolean           | true    | Whether the carousel should support left/right swipe interactions on touchscreen devices.


## Cards Component

A **card** is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.

### Content types

Cards support a wide variety of content, including images, text, list groups, links, and more. 

- Body
  - `.card-body` is the building block of a card. Use it whenever you need a padded section within a card.
- Titles, text, and links
  - Card titles are used by adding `.card-title` to a `<h*>` tag. In the same way, links are added and placed next to each other by adding `.card-link` to an `<a>` tag.
  - Subtitles are used by adding a `.card-subtitle` to a `<h*>` tag. If the `.card-title` and the `.card-subtitle` items are placed in a `.card-body` item, the card title and subtitle are aligned nicely.
- Images
  - `.card-img-top` places an image to the top of the card. With `.card-text`, text can be added to the card. Text within `.card-text` can also be styled with the standard HTML tags.
- List groups
  - Create lists of content in a card with a flush list group.
- Kitchen sink
  - Mix and match multiple content types to create the card you need, or throw everything in there.
- Header and footer
  - Add an optional header and/or footer within a card.


## Media Queries

Since 2016, mobile users overtook desktop users in browsing the web.

Now, always think about responsiveness whenever we design webistes.

Ways to deal with this:

1. Do not ignore it.
2. Make a Separate Mobile Site
3. Make it Responsive!

**Media queries** are useful when you want to modify your site or app depending on a device's general type (such as print vs. screen) or specific characteristics and parameters (such as screen resolution or browser viewport width).

Media queries are used for the following:

1. To conditionally apply styles with the CSS `@media` and `@import` at-rules.
2. To target specific media for the `<style>`, `<link>`, `<source>`, and other HTML elements with the `media= `attribute.
3. To test and monitor media states using the Window.matchMedia() and MediaQueryList.addListener() JavaScript methods.

### Media types

_Media types_ describe the general category of a device. Except when using the `not` or `only` logical operators, the media type is optional and the `all` type will be implied.

- **`screen`** is intended primarily for screens.
- **`speech`** is intended for speech synthesizers.
- **`print`** intended for paged material and documents viewed on a screen in print preview mode.
- **`all`** is suitable for all devices.

### Logical operators

The _logical operators_ `not`, `and`, and `only` can be used to compose a complex media query. You can also combine multiple media queries into a single rule by separating them with commas.

- **`and`** operator is used for combining multiple media features together into a single media query, requiring each chained feature to return true in order for the query to be true. It is also used for joining media features with media types.
- **`not`** operator is used to negate a media query, returning true if the query would otherwise return false. If present in a comma-separated list of queries, it will only negate the specific query to which it is applied. If you use the `not` operator, _you must_ also specify a media type.
- **`only`** operator is used to apply a style only if an entire query matches, and is useful for preventing older browsers from applying selected styles. When not using only, older browsers would interpret the query `screen and (max-width: 500px)` simply as `screen`, ignoring the remainder of the query, and applying its styles on all screens. If you use the `only` operator, you _must also_ specify a media type.
- **`,`** **(comma/s)** are used to combine multiple media queries into a single rule. Each query in a comma-separated list is treated separately from the others. Thus, if any of the queries in a list is true, the entire media statement returns true. In other words, lists behave like a logical `or` operator.

**Syntax:**

```css
@media <type> <feature>

@media screen (min-width: 900px) {}
```


## How to become a Bettter Programmer

### Code Refactoring

1. Readability
   - Easy to understand
2. Modularity
   - Follow the design principle, separation of concern, to separate programs into distinct section.
3. Efficiency
   - Make the site efficient and very fast
4. Length
   - Shorter code

Try doing Code Golf Challenges


## Advanced CSS - Combining Selectors

### Multiple Selectors

Use multiple selectors by using comma/s (`,`) between selectors

```css
selector1, selector2 { }

h1, h2, h3, h4, h5, h6 { color: #0ff; }
```

### Hierarchical Selectors

In order to use this properly, you need to understand how the HTML is structured. Parent selector first, then the child selector separated by a space. Remember, reading of selectors are right to left, so it should be read like, apply the style on the child selector inside the parent selector.

```css
selector1 selector2 { }

#main-section h1 { color: red; }
```

### Combined Selectors

An element with a class or id reading it left to right. Apply the style on a element with a class or id, combining them without a space.

```css
selector1#selector2 { }

h1#title { color: red; }
```

### element .class vs. element.class

`element .class` is read from right to left, because of the space, we can read as, apply the style on `.class` inside the `element`.

`element.class` is read from left to right, we can read as, apply the style on the `element` **with** a `.class`. So it should have the class or id within the same element. No parent child relationship targetting the class or id on the same element.


## Advanced CSS - Selector Priority

List according from least priority to most priority:

1. Top to bottom rule for the HTML elements.
2. Classes are more specific than HTML element.
3. IDs are more specific than classes or HTML elements.
4. Internal styles are more specific than IDs, Classes, or HTML elements.
5. Inline styles beats them all, but do not use it as much as possible.


## Resources

- [Bootstrap](https://getbootstrap.com/)
- [awwwards](https://www.awwwards.com/)
- [User Interface Design patterns](http://ui-patterns.com/)
- [dribbble](https://dribbble.com/)
- [SNEAKPEEKIT](https://sneakpeekit.com/)
- [Balsamiq](https://balsamiq.com/)
- [fontawesome](https://fontawesome.com/)
- [Bootsnipp](https://bootsnipp.com/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [Lambsoft site not mobile friendly](http://home.global.co.za/~lambsoft/home.html)