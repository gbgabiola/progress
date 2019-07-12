# [Modern HTML & CSS From The Beginning (Including Sass)](https://www.udemy.com/course/modern-html-css-from-the-beginning)

## Introduction
### How The Web Works (Summarized)
#### The Internet
- **A global network of computers**
- Each computer/router has a **IP address** 73.158.6.61
- Computers talk to each other using the **TCP/IP** protocol
- **HTTP** handles web traffic (requests/responses)

#### Web Servers
- **Websites/Webpages** are files stored on computers that run a piece of software called a **web server** (Apache, Nginx, etc)
- **Hosting companies** provide space on a server for your website
- **Domain names** can be purchased from registrars and linked to your hosting account/web server
- **DNS** is used to map IP addresses to domain names

### The Roles Of HTML & CSS In Web Development
#### HTML
- Hypertext Markup Language
- HTML is not a programming language
- Markup for creating webpages/documents
- HTML is extremely important & relevant but is also just the beginning

#### CSS
- Cascading Style Sheets
- Styling/Stylesheet Language
- Used for styling HTML elements
- Can be extended with Sass/Less

#### The Roles Of Web Technologies
- HTML = Content Display/Structure
- CSS = Style & Design
- JavaScript = Dynamic Front End Programming
- PHP, Python, C#, JS = Backend Programming
- MySQL, MongoDB = Database/Storage

#### What Can HTML & CSS Do?
- Build static websites - Portfolios, small business sites, informational & brochure websites, etc
- Build the **visual** part of anything - Stores, social networks, etc


## HTML Basics
### Create & Open HTML Pages
#### Tag Syntax
- Elements surrounded in angle brackets
- Usually have a start & end tag
- Some tags close themeselves (Remnant of XHTML)

```html
<!-- Start & End Tag -->
<h1>Hello</h1>
<p>Welcome to my websites</p>

<!-- Self Closing Tags -->
<br> <!-- Valid in HTML5 -->
<br /> <!-- Valid in HTML5 & XHTML -->
```

### Doctype & Basic Layout
```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <!-- This is a comment -->
    <h1>My Website</h1>
    <p>This is my very first website.</p>
  </body>
</html>
```

### Meta Tags & Search Engines
#### Attributes
- describe the properties of the tag

```html
<meta charset="UTF-8"> <!-- specifies the character encoding of the page which is the default for unicode -->

<meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- very important for responsive web design, making the website responsive to different screen sizes -->

<meta http-equiv="X-UA-Compatible" content="id=edge"> <!-- ie referring to the old internet explorer browser which is not used very much at all anymore, windows switch to edge so were basically saying we want to use edge standards -->
```

#### Search Engine related Tag
```html
<title>My Website</title>

<meta name="description" content="This is my website description">

<meta name="keywords" content="web development, web design"> <!-- 8-12 words -->
<meta name="robots" content="NOINDEX, NOFOLLOW"> <!-- Do not index page, If you don't want your site to rank in search engine -->
```

### Headings, Paragraphs & Typography
```html
<!-- Headings -->
<h1>Heading 1</h1> <!-- Good practice to only have one h1 per page-->
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>

<!-- Paragraph -->
<p>Lorem ipsum dolor sit <strong>exercitationem</strong>! Facilis <em>voluptates</em> autem itaqosam <del>impedit</del> explicabo mlla in.</p>

<!-- Line Break -->
<br>
<br>
Itaque ratione iusto, dolor culpa pariatur!

<!-- Horizontal Rule -->
<hr>
<p>facilis obcaecati dolor deleniti dolores?</p>
```

### Links, Images & Attributes
```html
<!-- External link on the same tab-->
<a href="https://google.com">Google link</a>

<!-- External link on a new tab-->
<a href="http://google.com" target="_blank">Google link on a new tab</a>

<!-- Internal link -->
<a href="/reference.html">Reference</a>

<!-- Local image -->
<img src="./img/sample.jpg" alt="My Image" width="200">

<!-- Remote image -->
<img src="https://source.unsplash.com/200x200/?building" alt="My Image 2">
```

### Lists & Tables
```html
<!-- Unordered lists -->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<!-- Ordered Lists -->
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>

<!-- Nested lists -->
<ul>
  <li>Item 1</li>
  <li>Item 2
    <ul>
      <li>Nested Item 1</li>
    </ul>
  </li>
  <li>Item 3</li>
</ul>

<!-- Tables -->
<table style="width: 600px">
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>Doe</td>
      <td>jdoe@gmail.com</td>
    </tr>
    <tr>
      <td>Kate</td>
      <td>Smith</td>
      <td>kate@gmail.com</td>
    </tr>
  </tbody>
</table>
```

### Forms & Input
```html
<form action="process.php">
  <!-- Text -->
  <label for="name">Name</label><br>
  <input type="text" id="name" name="name" value="John Doe">

  <!-- Email -->
  <label for="email">Email</label><br>
  <input type="email" name="email" id="email" placeholder="Enter an email">

  <!-- Number -->
  <label for="age">Age</label><br>
  <input type="number" name="age" id="age">

  <!-- Date -->
  <label for="bithdate">Birthdate</label><br>
  <input type="date" name="birthdate" id="birthdate">

  <!-- Textarea -->
  <label for="message">Message</label>
  <textarea name="message" id="message" cols="50" rows="5"></textarea>

  <!-- Select -->
  <label for="gender">Gender</label>
  <select name="gender" id="gender">
    <option value="male" selected>Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>

  <!-- Radio -->
  <label for="membership">Membership</label>
  <input type="radio" name="membership" value="simple" id="simple"> Simple
  <input type="radio" name="membership" value="standard" id="standard" checked> Standard
  <input type="radio" name="membership" value="super" id="super"> Super

  <!-- Checkbox -->
  <label for="membership">I Like..</label>
  <input type="checkbox" name="likes" value="bike" id="bike"> Bike
  <input type="checkbox" name="likes" value="car" id="car"> Car
  <input type="checkbox" name="likes" value="boat" id="boat"> Boat

  <!-- Input submit -->
  <input type="submit" value="Submit">

  <!-- Button submit -->
  <button type="submit">Submit</button>
  <button type="reset">Reset</button>
</form>
```

### Block & Inline Level Elements
**Block level** it goes across the whole page and pushes the next one into the next line.

**Inline Level** it goes next to it, and it does not push it into the next line because it does not span all the way across.

### Divs & Spans, Classes & Ids
**Classes** and **Ids** does not have functional difference, they don't behave differently, can style them the exact way.
- **Classes** can repeat, can have the same class in the same page, can have multiple classes separated by space
- **Ids** good practice not to repeat id's in the same page.

**Divs** and **span** are only use for styling purposes, they have no semantic meaning.
- **Div** is a block level element pushes the next thing down
- **Span** is a inline level element, stay in its place

### HTML Entities
```html
<!-- Non breaking space -->
<p>Hello, my name is &nbsp; &nbsp; &nbsp; &nbsp;Joe</p>

<!-- Greater than and less than -->
<p>5 &gt; 2</p>
<p>5 &#62; 2</p>
<p>1 &lt; 2</p>
<p>1 &#60; 2</p>

<!-- Copyright -->
<p>&copy;</p>
<p>&reg;</p>

<!-- Currency -->
<p>&cent;</p>
<p>&pound;</p>
<p>&yen;</p>
<p>&euro;</p>

<!-- Suits -->
<p>&spades;</p>
<p>&clubs;</p>
<p>&hearts;</p>
<p>&diams;</p>

<!-- Computer code -->
<code>
  &lt;?php echo 'Hello' ?&gt;
</code>
<p>Save the file by pressing <kbd>Ctrl + S</kbd></p>
```

### HTML5 Semantic Tags
```html
<header> <!-- Usually goes at the top -->
<footer> <!-- Usually goes at the bottom -->
<nav> <!-- Navigation sometimes inside the header or underneath -->
<main> <!-- Some wrap around the whole content -->
<section> <!-- about, features -->
<article> <!-- article, blog post -->
<aside> <!-- sidebar content, it's not the focus of the page, can be ads or category section of the -->
```


## CSS Basics
### Implementing CSS
#### CSS Syntax
```css
h1 { color: red; }
```

- **h1** is a _selector_
- **{** is a declaration start
- **color** is a _property_
- **:** is a property/value _separator_
- **red** is a _value_
- **;** is a declaration separator
- **}** is a declaration end

#### Inline CSS
```html
<h1 style="color: red;">Heading One</h1>
```

#### Internal CSS
```html
<style>
  h1 { color: green; }
</style>
```

#### External CSS
External CSS is the preferred way of doing it.

```html
<link rel="stylesheet" href="css/style.css">
```

**Note**: Separation of concerns, keep your styling out of your marking.

### Basic CSS Selectors
#### Element Selectors
```css
h2 { color: green; }
```

#### . is for Classes
```css
.primary-heading { color: blue; }
```

#### # is for IDs
```css
#welcome { color: red; }
```

#### Multiple Selectors
Separated by commas (,)
```css
#welcome,
.primary-heading,
h2 {
  color: coral;
}
```

#### Nested Selectors
```css
/* Targetting the paragraph inside the id welcome. */
#welcome p {
  font-size: 20px;
}
```

### Fonts In CSS
_Web Safe Fonts_ are mostly available in all browsers.

Google Fonts
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
```

```css
body {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  line-height: 1.6em;
  /* font-weight: bold; */
  /* font-style: italic; */
}
```

#### CSS Units: Absolute
- **cm** | Centimeters
- **mm** | Millimeters
- **in** | Inches
- **px** | Pixels (1px = 1/96th of 1in)
- **pt** | Points (1pt = 1/72 of 1in)
- **pc** | Picas picas (1pc = 12 pt)

#### CSS Units: Relative
- **%**  | To parent element
- **em** | To font-size of parent element
- **rem**| To font-size of root element
- **vw** | To 1% of viewport width
- **vh** | To 1% of viewport height

### Color Types
#### Color Name
```css
/* Color Name */
h1 { color: red; }

/* RGB (0-255) */
h1 { color: rgb(255, 0, 0); }

/* HEX (0-9/A-F) */
h1 { color: #ff0000; }
```

### Backgrounds & Borders
```css
.box-1 {
  background-color: blue;
  /* border-width: 3px;
  border-style: solid; 
  border-color: red; */ /* dotted, dashed*/
  border: 3px solid red; /* preferred way*/
  /* border-top: 3px solid blue; */
  border-radius: 10px;
  /* border-top-right-radius: 10px; */
}

.box-3 {
  /* background-image: url('./img/stars.jpg');
  background-repeat: no-repeat;
  background-position: 100px 100px;
  background-position: center top;
  background-size: cover; */
  background: url('./img/stars.jpg') no-repeat center center/cover;
  /* background-attachment: fixed; */
}
```

### Box Model, Margin & Padding
#### Four Layers of Box Model
1. **Element**
2. **Padding** space inside the element
3. **Border**
4. **Margin** space outside the element

**CSS Reset** removes all the default styling.

```css
/* CSS Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.box {
  background-color: #f4f4f4;
  border: 2px solid #777;
  width: 500px;

  /* Padding on all sides */
  padding: 20px;

  /* Padding on per side */
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;

  /* Padding shorthand = top right bottom left */
  padding: 10px 20px 10px 20px;

  /* Padding shorthand = top/bottom left/right */
  padding: 10px 20px;


  /* Margin on all sides */
  margin: 20px;

  /* Margin on per side */
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-left: 20px;

  /* Margin shorthand = top right bottom left */
  margin: 10px 20px 10px 20px;

  /* Margin shorthand = top/bottom left/right */
  margin: 10px 20px;
}
```

### Float & Alignment
To center your content/layout, you need a _container_ element with a **class/id**, have a **width** to it and set the **margin** to _auto_.

```css
/* Adding box-sizing property for padding issues of float */
* {
  box-sizing: border-box;
}

.container {
  /* Using max-width for responsive design */
  max-width: 960px;
  margin: 30px auto;
}

/* Clear after using float */
.clr {
  clear: both;
}

.box p {
  /* Text Align */
  text-align: left;
  text-align: right;
  text-align: center;
  text-align: justify;
}

/* Add a width when doing a float */
#box-2 {
  width: 68%;
  float: left;
}
#box-3 {
  width: 30%;
  float: right;
}
```

### Link State & Button Styling
```css
a {
  color: #333;
  text-decoration: none; /* to remove underline for links */
}

/* HOVER state, change style when hover */
a:hover {
  color: coral;
  /* font-size: 17px; */
  /* text-decoration: underline; */
}

/* VISITED state, style when link was visited */
a:visited {
  color: red;
}

/* ACTIVE state, style when we click */
a:active {
  color: red;
}

/* Button Styling */
.btn {
  background-color: #4c6ca0;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #446190;
  color: #f4f4f4;
}
```

### Navigation Menu Styling
```html
<ul class="navbar">
  <li>Home</li>
  <li>About</li>
  <li>Services</li>
  <li>Contact</li>
</ul>

<ul class="side-menu">
  <li>Home</li>
  <li>About</li>
  <li>Services</li>
  <li>Contact</li>
</ul>
```

```css
/* Navbar Styling */
.navbar {
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #4c6ca0;
  border-radius: 5px;
  overflow: auto; /* to fix the background issue when using float */
}

.navbar li {
  float: left;
}

.navbar li a {
  display: block; /* to add padding */
  color: #fff;
  text-decoration: none;
  padding: 15px 20px;
}

.navbar li a:hover {
  background-color: #446190;
  color: #f4f4f4;
}
```

```css
/* Side Menu Styling */
.side-menu {
  width: 300px;
  list-style: none; /* remove the bullets */
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
}
.side-menu li  {
  line-height: 2.4em;
  border-bottom: 1px dotted #ddd;
}
.side-menu li:last-child {
  border: none;
}

.side-menu li a {
  color: #333;
  text-decoration: none;
}

.side-menu li a:hover {
  color: coral;
}
```

### Inline, Block & Inline-Block Display
```css
/* By default list items are block level, but can be change to be inline to create a horizontal menu navigation. */
li {
  display: inline;
}

/* Cannot set the margin to auto on an inline element, it needs to be block level. */
img {
  display: block;
  margin: auto;
}

/* Be default divs are display as block, inline-block is suitable */
.box {
  display: inline-block;
  width: 32.8%;
  padding: 20px;
  margin-bottom: 15px;
}
```

### Positioning
Everything by default has a position of static.

#### Position Values
- **Static** | Not affected by tblr (top, bottom, left, right) properties/values
- **Relative** | tblr values cause element to be moved from its normal position
- **Absolute** | Positioned relative to its parent element that is positioned "relative"
- **Fixed** | Positioned relative to the viewport
- **Sticky** | Positioned based on scroll position

The heigher the **z-index**, then the closer to you.

```css
.box {
  width: 100px;
  height: 100px;
}
.container {
  position: relative;
  width: 500px;
  height: 500px;
  background-color: #333;
}
#box-1 {
  position: relative;
  top: 50px;
  left: 50px;
  z-index: 1;
  background-color: red;
}
#box-2 {
  position: absolute;
  top: 100px;
  left: 100px;
  background-color: yellow;
}
#box-3 {
  position: absolute;
  top: 100px;
  left: 100px;
  background-color: green;
}
#box-4 {
  position: fixed;
  background-color: blue;
}
#box-5 {
  position: sticky;
  top: 0;
  z-index: -1;
  background-color: orange;
}
```

### Aside: Visibility, Order & Negative Margin
```css
h1 {
  /* Completely remove the content from the DOM */
  display: none;

   /* Hide the content but still takes up the space */
  visibility: hidden;

  /* Important flag to take precedence over the other styles */
  color: red !important;
  color: blue;

  /* Negative margin is possible but its good to avoid it as much as possible */
  margin-top: -30px;
}
```

## Intro To Responsive Layouts
### Responsive Design
Using **HTML/CSS** to make a website or app layout adapt to different screen sizes
- It is a necessity to build responsive layouts
- Layouts should render on any form factor

#### Practice To Use
- Set the viewport/scale
- Use fluid widths as oppose to fixed
- Media queries - Different css styling for different screen sizes
- Rem units over px
- Mobile first method

### Media Queries
```css
h1 { display: none; }

/* Smartphones */
@media(max-width: 500px) {
  body { background-color: red; }
  #smartphone h1 { display: block; }
}

/* Smartphones */
@media(min-width: 501px) and (max-width: 768px) {
  body { background-color: blue; }
  #tablet h1 { display: block; }
}

/* Normal */
@media(min-width: 769px) and (max-width: 1200px) {
  body { background-color: green; }
  #normal h1 { display: block; }
}

/* Widescreen */
@media(min-width: 1201px) {
  body { background-color: black; }
  #widescreen h1 { display: block; }
}

/* Landscape */
@media(max-height: 500px) {
  body { background-color: orange; }
  #landscape h1 { display: block; }
}
```

```html
<!-- External media query stylesheet to apply only in a specific screen width -->
<link rel="stylesheet" media="screen and (max-width: 768px)" href="mobile.css">
```

### Em & Rem Units
html or the root **font-size** is always gonna be **16px** by default.

- Em units are based on their _parent_ element.
- Rem is based on the _root_ element.

Common thing that others do is setting their root element **font-size** to **10px** when using rem units, bacause it's easier to figure out what the sizes are gonna be.

To make it even more responsive set the **font-size** to a _percentage_, **62.5%** which is gonna be **10px**.

Another reason to use rem units is for _accesibility_ and _browser_ settings.

### Vh & Vw Units
Screen is always **100%** viewport size.

Viewport sizes is great for landing page and is used more often for that.


## Intro To Flexbox
- Modern layout mode in **CSS3**
- **"flex"** is a value for the **display** property
- Replaces _floats_ and is much more elegant to work with
- Align items both horizontal (row) and vertical (column)
- Flex items can be re-ordered via CSS

#### How it Works
- **display: flex;** /* Creates a "**flex container**" */
- All direct child elements are "**flex items**" 

### Flex Basics
#### Parent Element (Container)
The flex container becomes flexible by setting the display property to flex

- **flex-direction**: property defines in which direction the container wants to stack the flex items.
  - **column** value stacks the flex items vertically (from top to bottom)
  - **column-reverse** value stacks the flex items vertically (but from bottom to top)
  - **row** value stacks the flex items horizontally (from left to right)
  - **row-reverse** value stacks the flex items horizontally (but from right to left)
- **flex-wrap**: property specifies whether the flex items should wrap or not.
  - **wrap** value specifies that the flex items will wrap if necessary
  - **nowrap** value specifies that the flex items will not wrap (this is default)
  - **wrap-reverse** value specifies that the flexible items will wrap if necessary, in reverse order
- **flex-flow** property is a shorthand property for setting both the **flex-direction** and **flex-wrap** properties.
  - `flex-flow: row wrap;`
- **justify-content**: property is used to align the flex items in the main axis (horizontally)
  - **center** value aligns the flex items at the center of the container
  - **flex-start** value aligns the flex items at the beginning of the container (this is default)
  - **flex-end** value aligns the flex items at the end of the container
  - **space-around** value displays the flex items with space before, between, and after the lines
  - **space-between** value displays the flex items with space between the lines
- **align-items**: property is used to align the flex items cross axis (vertically)
  - **center** value aligns the flex items in the middle of the container
  - **flex-start** value aligns the flex items at the top of the container
  - **flex-end** value aligns the flex items at the bottom of the container
  - **stretch** value stretches the flex items to fill the container (this is default)
  - **baseline** value aligns the flex items such as their baselines aligns
- **align-content**: property is used to align flex lines (extra space in cross axis)
  - **space-between** value displays the flex lines with equal space between them
  - **space-around** value displays the flex lines with space before, between, and after them
  - **stretch** value stretches the flex lines to take up the remaining space (this is default)
  - **center** value displays display the flex lines in the middle of the container
  - **flex-start** value displays the flex lines at the start of the container
  - **flex-end** value displays the flex lines at the end of the container

#### Child Elements (Items)
The direct child elements of a flex container automatically becomes flexible (flex) items.

- **order** property specifies the order of the flex items and value must be a _number_, default value is **0**.
- **flex-grow** property specifies how much a flex item will grow relative to the rest of the flex items and value must be a _number_, default value is **0**.
- **flex-shrink** property specifies how much a flex item will shrink relative to the rest of the flex items and value must be a _number_, default value is **1**.
- **flex-basis** property specifies the initial length of a flex item.
- **flex** property is a shorthand property for the **flex-grow**, **flex-shrink**, and **flex-basis** properties.
- **align-self** property specifies the alignment for the selected item inside the flexible container and it overrides the default alignment set by the container's **align-items** property.

```css
#container {
  display: flex;
  flex-direction: row;
  /* flex-direction: row-reverse; */
  /* flex-direction: column; */
  flex-wrap: wrap;
  /* flex-flow: row wrap; */
  justify-content: space-evenly;
  align-items: baseline;
  align-content: space-between;
}
.item-1 {
  flex-basis: 200px;
  flex: 2;
  order: 2;
}
.item-2 {
  align-self: flex-end;
  order: 1;
}
```


## Website Deployment - Shared Host
### Types of Web Hosting
#### Shared Hosting
- One account of many on a server (same environment)
- Cheapest (aside from free static hosting)
- Used for small websites
- Most include email, FTP, PHP, databases, software
- **$3 to $15 per month**
- Examples: Inmotion Hosting, Hostgator, Bluehost

#### VPS (Virtual Private Server) Hosting
- Your own virtualized server
- Can create multiple shared accounts
- More access & privileges
- Everything shared hosting offers
- **$20 to $100 per month**
- Examples: Inmotion Hosting, Hostgator, Bluehost

#### Reseller Hosting
- Create & manage multiple shared accounts
- Can sell shared accounts to your own customers
- Very similar to a VPS
- Usually comes with reseller software
- **$15 to $100 per month**
- Examples: Inmotion Hosting, Hostgator

#### Dedicated Server
- Your own <u>actual</u> server
- You rent out a physical machine
- Full access & privileges
- Harder to manage but very powerful
- **$100 to $400 per month**
- Examples: Inmotion Hosting, Hostgator, Bluehost

#### Cloud Hosting
- Used for web apps
- Multiple servers work together
- Very scallable and great for large apps
- Not for beginners / harder to manage
- **Pay as you go**
- Examples: Digital Ocean, Linode, Vultr

#### Static Hosting
- Does not come with bells and whistles of managed hosting
- Upload static site via Git
- Great for static websites
- **Free, but pay for extra features**
- Examples: Netlify, Github Pages