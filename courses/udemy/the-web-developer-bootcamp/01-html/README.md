# HTML

## Table of Contents <!-- omit in toc -->

- [Topics](#topics)
- [History](#history)
- [Document](#document)
- [Comments](#comments)
- [Elements](#elements)
- [Attributes](#attributes)
- [Entity References](#entity-references)


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


## Document

- individual elements combined to form an entire HTML page
- **Doctype**: `<!DOCTYPE html>`
  - required for every HTML document
- **Root Element**: `<html>`
  - wraps around all content on the entire page
- **Head Element**: `<head>`
  - provides general information about the document which user doesn't see on the page, e.g., keywords and descriptions that will appear in search results, CSS, character set declarations, etc.
- **Character Set**: `<meta charset="UTF-8">`
  - allows document to use "utf-8" character set, which includes most characters from all known human languages
- **Title**: `<title>`
  - sets the title that appears in browser tab
  - appears as the search result in Google
- **Body**: `<body>`
  - contains all the contents that is visible to the user


## Comments

- write comments in the code that are invisible to the user by wrapping them in special markers
- `<!--` and `-->`


## Elements

- content + opening/closing tags
- [MDN Element Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) for a complete list of elements

### Block Elements

- forms a visible block on a page, e.g., paragraphs, lists, navigation menus, footers, etc.
- **Paragraph**: `<p>`
- **Divider**: `<hr>`
- **Headings**: `<h1>` to `<h6>`
  - **NOTE**: As a general rule, try to have only one `<h1>` tag in your HTML document, and it should be the biggest text element on the page
- Generic **Container**: `<div>`
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

- contained within block level elements and do not cause new lines to appear
- **Italics**: `<em>`
- **Bold**: `<strong>`
- Generic **Container**: `<span>`


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


## Entity References

- make special HTML syntax characters appear as normal text
- `<` = `&lt;`
- `>` = `&gt;`
- `"` = `&quot;`
- `'` = `&apos;`
- `&` = `&amp;`
