# EJS

## Goal

- Understand what EJS does and how to use it with Node and Express.
- Templating with EJS
- Running code in EJS templates
- Passing data from server to template and vice versa
- Creating layouts/partials with EJS

## Why Do We Need Templates

- Use template to change certain parts of the HTML depending on the logic in our server 
- **EJS (Embedded JavaScript templating)** is a templating language that lets you generate HTML markup with plain JavaScript.

## Creating EJS Templates

- `app.set()` to tell the app to use ejs as its view engine
- create a views folder with `index.ejs` page
- `res.render()` to use the view engine that was set before

  ```js
  app.set('view engine', 'ejs');

  app.get('/', (req, res) => {
    res.render('index', {foo: 'FOO'});
  });
  ```

- add a marker that tells the file where you should place the variable
  - `<%= EJS %>` to replace whatever inside with the value of the variable

## Running Code Inside the EJS Template

- `<%` 'Scriptlet' tag, for control-flow, no output
  - add this tag to a javaScript code
- `<%=` Outputs the value into the template (HTML escaped)

## Passing Data from Webpage to Server

- `toLocaleDateString()` converts a date to a string, returning the date portion using operating system's locale's convention
  - allows you to format your javaScript using whatever format you use

## Scope

- variable inside the function is local scope
  - and cannot be access outside the curly braces
- variable outside the function is global scope
- using `var` inside a loop, or anything other than function, it's still like global variable and can be access outside
- `let` can only access inside the curly braces 
- `const` variable cannot be change or update

## Adding CSS Stylesheets

- add `public` folder to store all your css, img or js files, then tell express to serve this folder as a static resource.

## Understanding Templating vs. Layouts

- use layouts for standardize design across multiple pages
- layouts can be implemented by including headers and footers

  ```js
  <%- include('header'); -%>
  <h1>
    Title
  </h1>
  <p>
    My page
  </p>
  <%- include('footer'); -%>
  ```

## Understanding Node Module Exports How to Pass Functions and Data between Files

- `module` object gives you reference to the object that represents the current module
- create modules by requiring them and get their functionality exported out of the module to be used anywhere in the project
  - this makes it reusable and more useful
- `module.exports` object is created by the Module system
  - get an access to a function then pass the just the name of the function
  - when you add parenthesis on the function name you're calling/activating it right away
- Different ways of declaring functions
  - **function declaration** is made of function keyword followed by function name
  - **function expression** does not start with function keyword
    - setting the function as a variable instead, this means we can pass the function around whenever we need it.
    - anonymous function and set it to a variable with a name, then refer to it by its variable name
- exports shourtcut
  - `module.exports` can be just set as `exports`
- using `const` on **array** it's possible to push an items into it
  - However, assigning a new array to the variable throws an error - Uncaught TypeError: Assignment to constant variable.
- using `const`, attempting to overwrite the object throws an error - Uncaught TypeError: Assignment to constant variable.
  - However, object keys are not protected,
    - `MY_OBJECT.key = 'otherValue';` will work
    - Use `Object.freeze()` to make object immutable
- **Note** when you declare something `const` in JavaScript, it's not protecting the things that are INSIDE weather it's array or object

## Express Routing Parameters

- **Route parameters** are named URL segments that are used to capture the values specified at their position in the URL.
  - The captured values are populated in the `req.params` object, with the name of the route parameter specified in the path as their respective keys.

  ```js
  Route path: /users/:userId/books/:bookId
  Request URL: http://localhost:3000/users/34/books/8989
  req.params: { "userId": "34", "bookId": "8989" }
  ```

  - To define routes with route parameters, simply specify the route parameters in the path of the route

  ```js
  app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
  })
  ```

## Lodash

- **Lodash** makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc. Lodash’s modular methods are great for:
  - Iterating arrays, objects, & strings
  - Manipulating & testing values
  - Creating composite functions
- `_` underscore is their preferred variable to use the library
  - some people call it low dash
- `_.lowerCase([string=''])` 
  - converts string, as space separated words, and returns lower case string.

## Resources

- [Gitignore and the absence of NPM Modules on GitHub Projects](https://github.com/contentful/the-example-app.nodejs)
- [EJS documentation](http://ejs.co/)
- [Lorem Ipsum Text Generator](https://loremipsum.io/)
- [Katacoda NodeJS Playground](https://www.katacoda.com/courses/nodejs/playground)
- [ExpressJS Route Parameters](https://expressjs.com/en/guide/routing.html)
- [Modules](https://nodejs.org/api/modules.html)
- [6 ways to declare JavaScript functions by Dmitri](https://dmitripavlutin.com/6-ways-to-declare-javascript-functions/)