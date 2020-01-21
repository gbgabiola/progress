# Server Basics

## Why Do We Need a Server?

### What is a Server?

- **Server** is the thing that we can _talk to_ in order to _send_ and _receive_ data
- A user of an app sends a _request_ to a server and then the server sends back a _response_.

### Why do we want to use one?

1. Communication (let users access our app)
2. Trusted environment of our code


## Node.js

- has ability to create new files and folders on your computer's hard drive
- able to listen for incoming network requests
- install node.js recommended lts installer
- to do something complex and interesting, you will need to write multiple lines of code (Text Editors)
  - Visual Studio Code (vscode)
  - Atom
  - Sublime Code
- `http` object is not part of the javaScript language itself, but of node environment (just like `document` object in web browser)
- using node's keyword needs to load, import or require that functionality first
- `listen` method needs an argument which should be a port number, usually `3000`


## Express

- **Express** Fast, unopinionated, minimalist web framework for Node.js
- **Node** on its own is like Legos, there's all kinds of different lego block types some that you'll use and a bunch that you will not use, and you can use these lego blocks to build anything on the otherhand, **Express** still uses Node but it gives us new lego block types that are specifically designed to be used to build a web server
- **Express** is absolutely the industry standard when it comes to creating web servers with node
- `npm` (Node Package Manager) is where we grab all sorts of pre written javascript packages
- when we `require` express, node will look inside a folder name _node_modules_
- `get` method accepts two argument
  - first is the URL that you want to be on the lookout for
  - second is a function that Express is going to run anytime someone sends a request to the URL 
- `GET` request is when you go to a website or click on a link, you're saying to the server you want to get a bit of information
- `POST` request is when you fill out a form and submit, to send along its own data using the browser to the server
- `app.use(express.urlencoded({extended: false}))` is used to enabling the feature in express so that the user's input is easily accessible from request body object
