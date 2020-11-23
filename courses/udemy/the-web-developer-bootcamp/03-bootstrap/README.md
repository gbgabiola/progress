# Boostrap

## Table of Contents <!-- omit in toc -->

- [Topics](#topics)
- [Introduction](#introduction)
- [Containers](#containers)


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
