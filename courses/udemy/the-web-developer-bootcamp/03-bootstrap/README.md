# Boostrap

## Table of Contents <!-- omit in toc -->

- [Topics](#topics)
- [Introduction](#introduction)
- [Containers](#containers)
- [Buttons](#buttons)
- [Jumbotron](#jumbotron)
- [Typography](#typography)
- [Badge](#badge)
- [Button Group](#button-group)
- [Alerts](#alerts)
- [Grid System](#grid-system)
- [Forms](#forms)
- [Navbar](#navbar)
- [Icons](#icons)
- [Utilities](#utilities)
- [Other Stuff](#other-stuff)


## Topics

- **Crucial**
  - WTF Is Bootstrap
  - Working With CSS Frameworks
  - Including 3rd Party CSS & CDNS
- **Important**
  - _Bootstrap Grid_
  - _Responsive Bootstrap Grid_
  - _Bootstrap Navbars_
- **Nice To Have**
  - Icons
  - Typography and Utilities
  - _Bootstrap Forms_
  - Bootstrap Buttons


## Introduction

- Frameworks
  - skeleton for building things
  - develop things on top of it
  - helps to speed up the process
- Bootstrap is the most popular CSS framework for developing responsive, mobile-first projects
  - helps us quickly create nice looking responsive modern websites
  - provides starting point
  - consist of 2 main things: Components and Grid System
- **Components**: gives us access to a bunch of pre-built components that we can incorporate into our own websites
  - buttons, card, carousel, forms, jumbotron, navbars, progress
- **Grid System**: helps us construct our own custom, responsive layouts
- include Bootstrap using either:
  - downloaded bootstrap file, placing it into the project's directory, and creating a `<link>` tag for the bootstrap file
  - or get the direct link for the bootstrap.css file, which is hosted online using Content Delivery Network (CDN)
  - scripts are optional and only needed for certain components that needs JS
    - jQuery, Popper.js, JS plugins
- works through classes
- similar tools: Bulma, Foundation, Semantic UI
- **Note**: The semantics in Bootstrap have been criticized as being sometimes meaningless, and another contender for performing these tasks is Semantic UI


## Containers

- Bootstrap's most basic layout element and **required when using default grid system**
- used to contain, pad and center the content within them
- can be nested, but most layouts do not require a nested container
- `container` class is a responsive, fixed-width container
  - its `max-width` changes at each breakpoint
- `container-fluid` class for a full width container, spanning the entire width of the viewport
- responsive containers allows us to specify a class that is 100% wide until the specified breakpoint is reached
  - `container-sm` class
  - `container-md` class
  - `container-lg` class
  - `container-xl` class


## Buttons

- buttons are identified first by a `btn` class followed by a second predefined button styles class
- button styles classes:
  - **Primary** provides extra visual weight; set to be the primary action in a set of buttons: `btn-primary`
  - **Secondary**: `btn-secondary`
  - **Success** indicates successful or positive action: `btn-success`
  - **Danger** indicates a potentially dangerous action: `btn-danger`
  - **Warning** indicates caution should be taken: `btn-warning`
  - **Info** contextual button for informational alerts: `btn-info`
  - **Light**: `btn-light`
  - **Dark**: `btn-dark`
  - **Link** makes button to look like a link while behaving like a button: `btn-link`
- button classes can be added to the `<a>`, `<button>`, or `<input>` elements
- outline buttons without background colors, replace the default modifier classes with `btn-outline-*` classes
  - `btn-outline-primary`
  - `btn-outline-secondary`
  - `btn-outline-success`
  - `btn-outline-danger`
  - `btn-outline-warning`
  - `btn-outline-info`
  - `btn-outline-light`
  - `btn-outline-dark`
- button sizes can be reduced or increased by adding a third size class.
  - **Large**: `btn-lg`
  - **Small**: `btn-sm`
  - **Extra Small**: `btn-xs`
- `btn-block` class to create a block level buttons that span the full width of a parent
- `active` class to make a buttons appear in _active_ state
- `disabled` boolean attribute to make a buttons look inactive: `<button class="btn btn-success btn-xs" disabled="disabled">Text</button>`


## Jumbotron

- extends the entire viewport to enlarge and showcase key content within
- by default, Jumbotron will extend across the entire width of the screen
  - to prevent this behavior, place the `jumbotron` class within a `container` class, which will add padding and margins to center the Jumbotron


## Typography

- **Global settings** sets display, typography and link styles
  - used when more control is needed
- **Headings** all HTML headings from `<h1>` to `<h6>`
- **Display headings** for larger headings with `display-1` to `display-4` classes
  - not responsive by default
- **Lead** makes a paragraph stand out with `lead` class
- **Inline text elements** styling for common inline elements
  - `mark` and `small` classes works the same way with `<mark>` and `<small>`
- **Blockquotes**
  - `blockquote-footer` class for identifying the source
  - wrap the name of the source work in `<cite>`


## Badge

- **Contextual variations** change the appearance of a badge with `badge-*` classes
  - `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`
- **Pill badges** makes badges more rounded using `badge-pill` class


## Button Group

- groups a series of buttons together on a single line using `btn-group` class
- add a correct `role` and label attribute for the assistive technologies
  - `group"` for button groups
  - `toolbar"` for toolbars


## Alerts

- provides feedback messages to the users
- `alert` class is required for every alert component
- contextual classes with `alert-*` classes
  - `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`
- `alert-heading`
- `alert-dismissible` class adds extra padding to the right and positions the `close` class button
- `data-dismiss="alert"` attribute triggers JS functionality
- `fade` and `show` classes must be added to animate alerts
- `role="alert"` attribute for accessibility


## Grid System

- uses containers, row, and columns to layout and align content
- built with flexbox and is fully responsive
- every row in bootstrap has 12 units of space
- column classes indicates the number of columns to use out of the possible 12 per row
  - `col-` for <576px (extra small)
  - `col-sm-` for ≥576px (small)
  - `col-md-` for ≥768px (medium)
  - `col-lg-` for ≥992px (large)
  - `col-xl-` for ≥1200px (extra large)
- **Responsive images**
  - `img-fluid` class to scale image with the parent element
  - `no-guttters` class to remove the extra space between the images


## Forms

- `form-group` class adds some structure to properly group labels, controls, etc.
- `form-control` class improves the style of the normal default appearance of an `<input>`, `<select>`, and `<textare>`
- includes different breakpoint variants
- `form-check` class makes the checkboxes or radios vertically stacked and spaced
  - `form-check-input` and `form-check-label` classes of checkbox input and label
- **Custom forms**
  - `custom-control` and `custom-checkbox` classes for custom checkbox
  - `custom-control` and `custom-radio` classes for custom radio
  - `custom-control` and `custom-switch` classes for switches
  - `custom-control-input` and `custom-control-label` classes for custom input and label
- `form-row` class overrides the default column gutters
  - applying the `help-block` to a `<p>` element modifies the text of a helpful hint to be more subtle and subdued in appearance
- Inline Form
  - basic form will lay its contents by stacking them on top of each other
    - however, by applying the `form-inline` class to the form (which doesn't necessarily have to be a `<form>` element) will place its contents in a line from left to right


## Navbar

- `navbar` class to make a simple navbar
- `navbar-brand` class for for branding
- `h1` class can be added to make it larger
- image can only be added inside `navbar-brand` class
- `active` class display what links you are currently on
- `disabled` class will greyed out the option
- `navbar-expand-*` to make the navbar expand according to the viewport you chose
- `collapse` and `navbar-collapse` classes makes the navbar collapse
- `navbar-toggler` class to make a hamburger button
  - inside is a `<span>` with `navbar-toggler-icon` icon
- `data-target` attribute to connect the toggler to the set Id
- **Placement**
  - `fixed-top`, `fixed-bottom` and `sticky-top` classes


## Icons

- svg (Scalable Vector Graphics) used for modern websites, animations, games and etc.
  - `width` and `height` can be customize
- [fontAwesome](https://fontawesome.com/) is the most popular Icon library


## Utilities

- **Text alignment** with `text-left`, `text-center`, `text-right` classes
- **Colors** with `text-*` classes
  - `primary`, `secondary`, `success`, `danger`, `warning`, `light`, `dark`, `body`, `muted`, `white`, `black-50`, `white-50`
- **Background color** with `bg-*`
  - `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`, `white`, `transparent`
- **Align items** and **Align self** with `align-items-*` and `align-self-*` classes
  - `start`, `end`, `center`, `baseline`, `stretch`
  - includes different breakpoint variants
- **Justify content** with `justify-content-*` classes
  - `start`, `end`, `center`, `between`, `around`
  - includes different breakpoint variants
- **Borders**
  - Additive and Subtractive like `border-top` or `border-top-0` classes
  - Border color
  - border radius with `rounded-*` classes
  - sizes using `rounded-lg` or `rounded-sm` classes
- **Shadows**
  - `shadow-none`, `shadow,` `shadow-sm`, `shadow-lg` classes
- **Spacing** using `{property}{sides}-{size}` for `xs` and `{property}{sides}-{breakpoint}-{size}` for `sm`, `md`, `lg`, `xl`
  - property
    - `m` for margin
    - `p` for padding
  - sides
    - `t` set top
    - `b` sets bottom
    - `l` sets left
    - `r` sets right
    - `x` set both `*-left` and `*-right`
    - `y` sets both `*-top` and `*-bottom`
    - blank for all 4 sides
  - size
    - `0`
    - `1` sets `$spacer * .25`
    - `2` sets `$spacer * .5`
    - `3` sets `$spacer`
    - `4` sets `$spacer * 1.5`
    - `5` sets `$spacer * 3`
    - `auto` sets `margin` to auto
- **Sizing**
  - relative to the parent
    - `w-25`, `w-50`, `w-75`, `w-100`, `w-auto`
  - relative to the viewport
    - `min-vw-100`
    - `min-vh-100`
    - `vw-100`
    - `vh-100`
- **Display**
  - format
    - `d-{value}` for `xs`
    - `d-{breakpoint}-{value}` for `sm`, `md`, `lg`, `xl`
  - value
    - `none`, `inline`, `inline-block`, `block`, `table`, `table-cell`, `table-row`, `flex`, `inline-flex`


## Other Stuff

- **Card** component is like a content container with different options
- **Carousel** component used as slideshow cycling through elements like images
- **Dropdown** component which are toggleable contextual overlays for displaying lists of links
- **Spinners** indicate a loading state of a component or page
- **Progress** bar component with supports for stacked bars, animated backgrounds and text labels
- **Modal** component for adding popup dialogs for lightboxes, notifications, or completely custom content
