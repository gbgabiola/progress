# HTML

## Table of Contents <!-- omit in toc -->

- [History](#history)
- [Document](#document)
- [Comments](#comments)
- [Elements](#elements)


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
