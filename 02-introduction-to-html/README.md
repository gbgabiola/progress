# Introduction to HTML

## Goal
- Learn the anatomy of HTML syntax to structure your websites.
- Understand the HTML boilerplate and HTML doctypes.
- How to structure text in HTML.
- How to structure HTML lists to create unordered and ordered lists.
- How to insert images using HTML.
- How to create hyperlinks using anchor tags.
- Understand how to use HTML tables for content.
- How to use tables for layout.
- Learn HTML best practices.
- Understand about HTML forms and create a simple contact me form.
- HTML Divs and how to separate content for CSS styling.

## HTML
- is the foundation of all websites. Other files like css or javaScript cannot stand on their own to create websites, but HTML can.
- HyperText <u>Markup</u> Language
- tag must be close when you open it except for some tags.
- **`<h1>` - `<h6>` elements** represent six levels of section headings. `<h1>` is the largest heading level and `<h6>` is the smallest heading level.

## The Anatomy of an HTML Tag
- HTML with _Start_ and _End_ tag
- HTML with _Self-closing_ tag
- HTML with _Attributes_


### HTML element with Start and End tag
```html
<h1>Hello World</h1>
```
- `<h1>` is the _Start_ tag.
- `Hello World!` is the _Content_.
- `</h1>` is the _End_ tag.


### HTML element with Self-closing tag
`<br>`
- element produces line break in text.
- is a _Self-closing_ tag.

`<hr>`
- is a horizontal rule.
- element represents a thematic break between paragraph.
- is _Self-closing_ tag.

### HTML element with Attributes
```html
<hr size="3">
```
- `hr` is the html element
- `size` is the html attribute
- `3` is the html

### Comments
To explain what's the code for, not only for you but also for the future programmers.

```html
<!-- The 
Self-closing 
tag-->
```

## What is The HTML Boilerplate
- **Boilerplate** is a code template that can be reuse for each different project.
- **`<!DOCTYPE html>`** to use the latest version of html which is _HTML5_.
- **`<html>`** is the one that indicates that everything inside of it is html.
- **`<head>`** holds the information about webpage, and tells how it should handle the page.
  - **`<title>`** it to display the title of the webpage on the tab of the browser.
  - **`<meta>`** 
    - **charset="UTF-8"** using the standard encoding to display the page correctly. `UTF-8` uses all the characters around the world.
    - description
    - keywords
    - author
    - viewport

## How to Structure Text in HTML
- **`<p>`** element represents a paragraph text.
- **`<em>`** element marks text that has stress emphasis. Use `<em>` instead of `<i>` to convey more meaning on the subject.
- **`strong`** element gives text strong importance, and is typically displayed in bold. Use `<strong>` instead of `<b>` to give a strong importance to the subject.

## HTML Lists
- **`<ul>`** element represents an unordered list of items, typically rendered as a bullet list.
- **`<ol>`** element represents an ordered list of items, typically rendered as a number list.

## HTML Image Elements
**`<img>`** element represents an image in the document and it's a _self-closing_ tag

```html
<img src="genesis.png" alt="genesis-profile">
```

### Attributes
- `src` to get the path of the image.
- `alt` is an alternative text to display when the image is not available anymore.

## HTML Links and Anchor Tags
**`<a>`** (anchor) element creates a hyperlink toother web pages, files, location within the same page, email address, or any other URL.

### Anchor Tag Structure
```html
<a href="https://">Click</a>
```
- `<a>` is the html element
- `href` is attribute that contains a URL that the hyperlink points to.
- `https://` is a link destination
- `Click` is the link text.

### Attribute
- `download` is an attribute to download any resources ~~in the internet~~ inside your website.

## Resources
- [HTML MDN](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [HTML w3schools](https://www.w3schools.com/html/)
- [HTML devdocs](https://devdocs.io/html/)
- [Internet Archive WayBack Machine](http://web.archive.org/)
- [Emmet Documentation](https://docs.emmet.io/cheat-sheet/)
- [Unicode® Character Table](https://unicode-table.com/en/)
- [The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets (No Excuses!)](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/)