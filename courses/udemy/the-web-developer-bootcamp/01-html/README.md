# HTML

## Table of Contents <!-- omit in toc -->

- [Topics](#topics)
- [History](#history)
- [HTML5](#html5)
- [Document](#document)
- [Comments](#comments)
- [Elements](#elements)
- [Attributes](#attributes)
- [Entity Codes](#entity-codes)
- [Semantic Elements](#semantic-elements)


## Topics

- Crucial
  - Paragraph Elements
  - HTML Headings
  - HTML Lists
  - HTML Anchor Tags
  - HTML Images
  - HTML Boilerplate
  - Understanding what HTML5 Actually is
  - Block vs Inline Elements
  - `<span>` and `<div>` elements
  - Semantic Elements
- Important
  - Using MDN as a Resource
  - The Chrome Inspector
- Nice To Have
  - VSCode Formatting On Save
  - VSCode Tip: Emmet
  - `<sub>` elements
  - `<hr>` elements
  - `<sup>` elements
  - `<br>` elements


## History

- created in 1989/1990
- allowed publishing and exchanging of scientific and technical documents
- allowed electronic linking of documents via hyperlinks


## HTML5

- living standard
  - HTML standard is a document that describes the rules of HTML on how it should work
- role of browsers
  - browsers actually have to do the work and implement HTML according to those rules
- HTML5
  - latest evolution of the standard that defines HTML
  - includes new elements & features for browsers to implement


## Document

- individual elements combined to form an entire HTML page
- `<!DOCTYPE html>` required for every HTML document
- `<html>` **Root Element** wraps around all content on the entire page
- `<head>` provides general information about the document which user doesn't see on the page, e.g., keywords and descriptions that will appear in search results, CSS, character set declarations, etc.
- **Character Set**: `<meta charset="UTF-8">`
  - allows document to use "utf-8" character set, which includes most characters from all known human languages
- `<title>` appears in browser tab and as the search result in Google
- `<body>` contains all the contents that is visible to the user


## Comments

- write comments in the code that are invisible to the user by wrapping them in special markers
- `<!--` and `-->`


## Elements

- content + opening/closing tags
- [MDN Element Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) for a complete list of elements

### Block Elements

- take up a whole "block" of space which will cause to add a new line
- **Paragraph**: `<p>`
- **Divider**: Horizontal Rule `<hr>`
- **Headings**: `<h1>` to `<h6>`
  - **Note**: try to have only one `<h1>` tag in a HTML document, and it should be the biggest text element on the page
- generic block **Container**: `<div>`
- **Lists** (each item within a type of list needs to be identified by the `<li>` tag):
- **Ordered Lists**: `<ol>`
- **Unordered Lists**: `<ul>`
- **Tables**: `<table>`
  - **Table Row**: `<tr>`
  - **Table Header**: `<th>`
    - should be nested within `<thead>` under main table
  - **Table Data**: `<td>`
    - should be nested within `<tbody>` under main table
  - **Borders** can be added using `<table border="1">`, but it is discouraged, CSS should be used for styling
- **Forms** is an interactive controls to submit information to a web server: `<form>`
  - contains **action** (URL to send form data to) and **method** (type of HTTP request, such as "GET" to receive information from the server and "POST" to add information to the server) attributes, e.g.: `<form action="/my-form-submitting-page" method="POST">`
  - **Input** used to accept data from the user: `<input>`
    - depends upon its `type` attribute
      - complete list of attributes: [Form Input Types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)
    - **Text** can be used for user names: `type="text"`
    - **Password**: `type="password"`
    - **Placeholder** a temporary text in input fields; used with `text` and `password` attributes): `placeholder="insert- text-here"`
    - **Button**: `type="button" value="insert-text-here"`
      - simple **Submit** button: `type="submit"`
      - if placed at the end of a form: `<button>insert-text-here</button>`
    - **Checkbox** is a square box for multiple choices: `type="checkbox"`
      - add `checked` attribute to the input to have the checkbox already marked upon loading
    - **Radio Button** a circular icon for one choice: `type="radio"`
      - add `name` attribute, which must be common among all choices to make the user only select one choice
      - `value` attribute is necessary for the query string to understand the meaning behind each choice; otherwise, will only state `"name=on"`
  - **Dropdown Menus**: `<select>`
    - use `<option>` tag for every possible option to select
    - `name` attribute must be included in the `<select>` tag for the query string to understand that an option has been selected from the dropdown menu
    - add `value` attribute to contain text other than the one in the `<option>`
  - **Text Areas** a multi-line plain-text editing control: `<textarea>`
    - `rows` and `cols` attributes can be used to specify how large the text area
    - use `name` attribute for the query string to process the data in the text area
    - e.g., `<textarea name="paragraph" rows="10" cols="50"></textarea>`
  - **Labels** adds a captions for individual items in a form: `<label>`
    - label can be used by placing the control element inside the `<label>` element, or by using the `for` and `id` attributes
    - e.g., `<label>Username<input type="text"></label>`
  - **Validations** ensure that users fill out forms in the correct format, e.g.:
    - `required` boolean attribute makes a field mandatory: `<label>Username<input type="text" required></label>`
      - only works if browser allows it
    - changing type from `text` to `email`, browser will ensure that the field contains an `@` symbol

### Inline Elements

- doesn't cause new lines, it fits in alongside other elements
- **Italics**: `<em>`
- **Bold**: `<strong>`
- generic inline **Container**: `<span>`


### Empty Elements

Contains only a single tag.

- **Image**: `<img src="https://www.google.com/logo.png">`
- **Input**: `<input type="text">`


## Attributes

- adds extra info; does not appear in content; target of style info
- [MDN Attribute Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes) for a complete list of attributes
- **Components**:
  - space between it and the element name
  - attribute name followed by an equals sign, and
  - attribute value surrounded by quotation marks
- e.g.:
  - Class: `<p class="editor-note">content</p>`
  - can be paired with the "anchor" element: `<a>`
    - Hyperlink with Title: `<a href="https://www.google.com/" title="Google">content</a>`
- **Boolean Attributes** can be written without a value:
  - **Disabled**: `<input type="text" disabled="disabled">`
    - creates a text box in which typing is disabled
    - may be written as: `<input type="text" disabled>`


## Entity Codes

- start with an ampersand and end with a semicolon
- used to display reserved characters, that normally would be invalid
- used in place of difficult to type characters
- browser interprets them and render the character instead
- `<` = `&lt;`
- `>` = `&gt;`
- `"` = `&quot;`
- `'` = `&apos;`
- `&` = `&amp;`
- `♠` = `&spades;`
- `♥` = `&hearts;`


## Semantic Elements

- semantic
  - describes the elements meaning to both browser and developer
  - easy to understand, important for screen readers and improving accessibility 
  - essential for Search Engine Optimization (SEO)
- `<main>` represents the main content  
- `<nav>` provides navigation links 
- `<section>` represents a standalone section
- `<article>` self-contained composition in a document, independently distributable or reusable
- `<aside>` represents a portion of a document which is indirectly related to the document's main content, frequently presented as sidebars
- `<header>` used for introductory content
- `<footer>` typically contains information about the author, copyright data or links to related documents
- `time` represents a specific period in time with optional `datetime` attribute
- `figure` represents self-contained content with optional `figcaption` element
- `<summary>`
- `<details>`
- `<abbr>`
- `<data>`
