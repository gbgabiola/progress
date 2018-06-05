# [Lesson 1: Building your first web page](https://learn.shayhowe.com/html-css/building-your-first-web-page/)

## Understanding Common [HTML terms](http://www.scriptingmaster.com/html/HTML-terms-glossary.asp)
1. Elements `<a>, <div>, <span>, <strong>, and <em> elements, and many more.`
2. Tags `<div>...</div>, <a>...</a> and many more.`
3. Attributes `id, class, src, href` example: <a href="http://example.com">Text here</a>

![html-syntax-outline](https://learn.shayhowe.com/assets/images/courses/html-css/building-your-first-web-page/html-syntax-outline.png)


## Setting Up the HTML Document Structure
Self-Closing Elements
`<br>, <embed>, <hr>, <img>, <input>, <link>, <meta>, <param>, <source>, <wbr>`

## Understanding Common CSS Terms
1. Selectors - `p {...}`
2. Properties
```
p {
    color: ...;
    font-size: ...;
}
```
	
3. Values
```
p {
  color: orange;
  font-size: 16px;
}
```

## Working with Selectors
1. _Type_ selectors - target elements by their element type.
2. Class selectors - target the element’s class attribute value.
3. ID selectors - targeting only one unique element based on id attribute
4. Additional Selectors - [advanced selectors](https://learn.shayhowe.com/advanced-html-css/complex-selectors/)

## Referencing CSS
```
<head>
  <link rel="stylesheet" href="main.css">
</head>
```

## CSS Resets
CSS resets take every common HTML element with a predefined style and provide one unified style for all browsers. These resets generally involve removing any sizing, margins, paddings, or additional styles and toning these values down. Because CSS cascades from top to bottom—more on that soon—our reset needs to be at the very top of our style sheet. Doing so ensures that those styles are read first and that all of the different web browsers are working from a common baseline.
1. One of the most popular resets is [Eric Meyer’s reset](http://meyerweb.com/eric/tools/css/reset/)
2. If you are feeling a bit more adventurous, there is also [Normalize.css](http://necolas.github.io/normalize.css/), created by Nicolas Gallagher.