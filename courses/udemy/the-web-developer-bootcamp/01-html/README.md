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

- **Crucial**
  - Paragraph Elements
  - HTML Headings
  - HTML Lists
  - HTML Anchor Tags
  - HTML Images
  - _HTML Boilerplate_
  - Understanding what HTML5 Actually is
  - Block vs Inline Elements
  - `<span>` and `<div>` elements
  - _Semantic Elements_
  - _Table Basics: `<table>`, `<tr>`, `<td>`, `<th>`_
  - _Form Element Basics_
  - Button Elements
  - Labels
  - Common Input Types
- **Important**
  - Using MDN as a Resource
  - The Chrome Inspector
  - _Table Sections: `<thead>`, `<tfoot>`, `<tbody>`_
  - Range & Text Areas
  - Form Validations
- **Nice To Have**
  - VSCode Formatting On Save
  - _VSCode Tip: Emmet_
  - `<sub>` elements
  - `<hr>` elements
  - `<sup>` elements
  - `<br>` elements
  - _Table Colspan and Rowspan_


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
- `<p>` element for paragraphs
- `<hr>` Horizontal Rule element **divider**  
- **Headings**: `<h1>` to `<h6>` element
  - **Note**: try to have only one `<h1>` tag in a HTML document, and it should be the biggest text element on the page
- `<div>` element used as generic block **container** 
- `<li>` element used as list item inside a `<ul>` or `<ol>` elements
- `<ol>` element as **ordered lists** 
- `<ul>` element as **unordered lists**
- `<table>` structured sets of data, made up of rows and columns
  - was used for creating page layouts, but today it should only be used for creating an actual data table
  - `<tr>` element defines a row of cells in a table
  - `<th>` element defines a cell as header of a group of table cells
    - should be nested within `<thead>` under main table
    - `rowspan` attribute specifies the number of rows a cell should span
    - `colspan` attribute specifies the number of columns a cell should span
  - `<td>` element defines a cell of a table that contains data
    - should be nested within `<tbody>` under main table
  - **Borders** can be added using `<table border="1">`, but it is discouraged, CSS should be used for styling
- `<form>` element contains an interactive controls for submitting information to a web server
  - `action` attribute specifies WHERE the form data should be sent
  - ``method` attribute specifies which HTTP method should be used)"GET" to receive information from the server and "POST" to add information to the server), e.g.: `<form action="/my-form-submitting-page" method="POST">`
  - `<input>` element used to accept data from the user
    - depends upon its `type` attribute
      - complete list of attributes: [Form Input Types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)
    - `type="text"`
    - `type="password"`
    - `placeholder` attribute is a temporary text in input fields: `placeholder="insert-text-here"`
    - **Button**: `type="button" value="insert-text-here"`
      - simple **Submit** button: `type="submit"`
      - if placed at the end of a form: `<button>insert-text-here</button>`
    - `type="checkbox"` is a square box for multiple choices
      - add `checked` attribute to have the checkbox already marked upon loading
    - `type="radio"` a circular icon for one choice
      - add `name` attribute, which must be common among all choices to make the user only select one choice
      - `value` attribute is necessary for the query string to understand the meaning behind each choice; otherwise, will only state `"name=on"`
    - `type="range"` lets the user specify a numeric value that the user can control the minimum or maximum value
      - `min` and `max` attributes can be used for minimum and maximum value
      - `step` attribute for stepping interval, used both for user interface and validation purposes
  - `<select>` element dropdown menus
    - use `<option>` tag for every possible option to select
    - `name` attribute must be included in the `<select>` tag for the query string to understand that an option has been selected from the dropdown menu
    - add `value` attribute to contain text other than the one in the `<option>`
  - `<textarea>` a multi-line plain-text editing control
    - `rows` and `cols` attributes can be used to specify how large the text area
    - use `name` attribute for the query string to process the data in the text area
    - e.g., `<textarea name="paragraph" rows="10" cols="50"></textarea>`
  - `<label>` element adds a captions for individual items in a form
    - better experience for people using screen readers
    - makes the label clickable when associated with elements
    - can be used by placing the control element inside the `<label>` element, or by using the `for` and `id` attributes
    - e.g., `<label>Username<input type="text"></label>`
  - **Validations** ensure that users fill out forms in the correct format
    - `required` boolean attribute makes a field mandatory: `<input type="password" required>`
      - only works if browser allows it
    - changing type from `text` to `email`, browser will ensure that the field contains an `@` symbol
    - `minlength` and `maxlength` attributes defines the minimum and maximum number of characters
    - `pattern` attribute specifies a regular expression the form control's value should match


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
