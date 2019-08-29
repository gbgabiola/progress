# Khan Academy

- [ ] [Computer Programming](https://www.khanacademy.org/computing/computer-programming)
  - [x] [Intro to JS: Drawing & Animation](https://www.khanacademy.org/computing/computer-programming/programming)
  - [ ] [Intro to HTML/CSS: Making webpages](https://www.khanacademy.org/computing/computer-programming/html-css)
  - [ ] [Intro to SQL: Querying and managing data](https://www.khanacademy.org/computing/computer-programming/sql)
  - [ ] [Advanced JS: Games & Visualizations](https://www.khanacademy.org/computing/computer-programming/programming-games-visualizations)
  - [ ] [Advanced JS: Natural Simulations](https://www.khanacademy.org/computing/computer-programming/programming-natural-simulations)
  - [ ] [HTML/JS: Making webpages interactive](https://www.khanacademy.org/computing/computer-programming/html-css-js)
  - [ ] [HTML/JS: Making webpages interactive with jQuery](https://www.khanacademy.org/computing/computer-programming/html-js-jquery)
  - [ ] [Meet the professional](https://www.khanacademy.org/computing/computer-programming/meet-the-computing-professional)


## Computer Programming

### Intro to JS: Drawing & Animation

- **JavaScript** is one of the most popular programming languages in the world.
- A **programming language** typically includes ways to store data in computer memory, manipulate that data, organize code and run code repeatedly. I learnt how to do all of that in JavaScript via:
  - **Variables**: how to declare variables, assign, re-assign, and local vs. global scope.
  - **Data** types: numbers, booleans, strings, arrays, and objects.
  Functions: how to group code into functions, pass arguments to them, and return values from them.
  - **Conditionals**: how to use if/else statements and logical expressions.
  - **Loops**: how to use while and for loops to repeat code.
- **ProcessingJS** is the "library" we used to make a drawing & animation.
- **Library** is a collection of functions that other programmers created, and those functions know how to draw pixels into a canvas on the page. Examples:
  - **Shapes**: like `rect()`, `ellipse()`, and `line()`
  - **Colors**: like `fill()`, `stroke()`, and `background()`
  - **Text**: like `text()` and `textSize()`
  - **Events**: like `draw()` and `mousePressed()`
  - **Math**: like `random()` and `dist()`

### Intro to HTML/CSS: Making webpages

- **Web** is a network of computers that have websites. 
  - **Server** is a computer that serves the website.
  - website is made of three languages:
    - **HTML** for marking up the website content
    - **CSS** for styling the website
    - **JavaScript** for making it interactive
  - **Browser** is an application used to access website.
    - Google Chrome, Mozilla Firefox, Safari, Edge, Opera, Internet Explorer, & etc...
  - **Clients** are the ones we used to open a browser and access websites.
    - Computer, Laptop, iPad, Tablet, iPhone, Smartphones, etc...
- **HTML (HyperText Markup Language)** is the standard markup language for documents designed to be displayed in a web browser.
  -  tags, starts (`<element>`) and ends (`</element>`) with angle bracket (`< >`).
  - The contents of an HTML tag are the stuff that goes between the opening and closing tags.
  - Any content that is visible on the web page should go between the opening `<body>` tag and the closing `</body>` tag
  - Headings are based on most important to least important, `<h1>` to `<h6>`
  - `<p>` tag is used to make paragraph.
  - browser ignores line breaks and whitespace, use `<br>` to render a line break
  - <em> is used to emphasize the word/s, `<strong>` will make the word/s bold to stand out
  - `<li>` to make a list inside of `<ul>` for unordered list or `<ol>` for ordered list
  - `<img>` to add image, `src` attribute to add/source the url of the image and `alt` attribute to add image description
- **CSS (Cascading Style Sheets)** language used for describing the presentation of a document written in HTML
  - **selector** is the way of CSS to style html elements and are case sensitive
  - css declaration starts with selector followed by curly braces (`{` and `}`), property and values are declared inside
  - **element selector** are tag names without brackets (`<` and `>`)
  - `color` property specifies the color of text
    - `RGB` color value is specified with: `rgb(red, green, blue)`.
  - `background-color` property sets the background color of an element.
  - **id selector** is came from one of the html elements with an attribute of `id="nameOfId"`, **Note**: ID should be unique
  - **class selector** is came from one of the html elements with an attribute of `class="nameOfClass"`, classes can be repeated to a number of elements to style them in the group
- **More HTML tags**
  - hypertext is a text connected to other text that the reader can immediately jump to.
  - Tim Berners-Lee invented HTML, HTTP and etc, to connect text to other text.
  - `<a>` or anchor tag to make a link or hyperlink
    - `href` or hypertext reference attribute to add url or the address
    - `target="_blank"` to make the link open to another window tab
    - internal links are links on the same webpage targetting the id attribute, so it should start with `#` sign
  - `<table>` to make a table
    - `<thead>` to start the header, inside it `<tr>`, then `<th>` for the columns
    - `<tbody` to add the contents of the table, `<tr>` for row and then add `<td>` for table data
  - `<!-- comments -->` for humans to read, it can instructions for future maintainers of the site, browser/computers will ignore comments
- **CSS text properties**
  - CSS Zen Garden is an example of how powerful CSS is. It's a gallery of designs of different developers that uses the same HTML and add their own CSS.
  - `font-family` specifies the font for an element.
    - can hold several font names as a "fallback" system. If the browser does not support the first font, it tries the next font.
    - **family-name**:"`times`", "`courier`", "`arial`", etc.
    - **generic-family**: "`serif`", "`sans-serif`", "`cursive`", "`fantasy`", "`monospace`".
    - usually code editors uses `monospace` font which is a fixed width
  - `font-size` sets the size of a font.
    - `px` for pixels, `em` is a relative unit to his parent element
  - `font-style` specifies the font style for a text, and is mostly used to specify italic text
  - `font-weight` sets how thick or thin characters in text should be displayed.
  - `font` is a shorthand property for: `font-style`, `font-weight`, `font-size` and `font-family`
  - `line-height` specifies the height of a line.
  - `text-align` specifies the horizontal alignment of text in an element.
  - `text-decoration` specifies the decoration added to text
    - values: `underline` or `none`
  - **inheritance** controls what happens when no value is specified for a property on an element, until another property overrides it


<!--
### Intro to SQL: Querying and managing data
### Advanced JS: Games & Visualizations
### Advanced JS: Natural Simulations
### HTML/JS: Making webpages interactive
### HTML/JS: Making webpages interactive with jQuery
### Meet the professional
-->