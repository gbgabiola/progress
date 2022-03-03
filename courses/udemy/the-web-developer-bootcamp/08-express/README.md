# Express

## Table of Contents <!-- omit in toc -->

- [Topics](#topics)
- [Creating Servers With Express](#creating-servers-with-express)
- [Templating](#templating)
- [RESTful Routes](#restful-routes)


## Topics

- **Crucial**
  - What are frameworks?
  - _Our First Express App_
  - _Routing Basics_
  - _Path Parameters_
  - _Working With Query Strings_
  - What Is Templating
  - _Configuring Express With EJS_
  - _Passing Data to Templates_
  - **EJS Loops & Conditionals**
  - Serving Static Assets
  - _Creating Partials_
  - GET vs. POST Requests
  - Parsing Request Body
  - _Handling Post Requests in Express_
  - **Forms + Express**
- **Important**
  - Nodemon
  - _Method Override_
  - **RESTful Routing**
- **Nice To Have**


## Creating Servers With Express

- **Express** is a _"fast, unopinionated, minimalist web framework for Node.js"_
  - Helps us:
    - Start up a server to listen for requests
    - Parse incoming requests
    - Math those requests to particular routes
    - Craft our http response and associated content
  - It's an NPM package which comes with lots of methods and optional plugins that we can use to build web application and API's
- **Library** is a code that someone else wrote and we can include and use in our app
  - We are in charge
  - We Can control the flow of the application code
  - Decide when to use the library
- **Framework**
  - Control is inverted
  - Framework is in charge and we are merely participant
  - Tells us where to plug in the code
- **Types of Frameworks**:
  - heavyweight (opinionated) framework has little 'blanks' that can fill in; apps are created faster but sometimes you have no idea what's going on behind the scenes, e.g., _Rails_
  - lightweight (unopinionated) framework has more blanks and more flexible, e.g., _Express_
- **Request & Response Objects**
  - Express creates these objects automatically for us by parsing the incoming HTTP request information
  - `req` and `res` are standard name for request and response
  - `send()` method sends the HTTP response
- **Routes and Route Parameters**
  - Takes incoming request and path that is requested and match into into some code and response
  - Routes are how we listen for a particular request, and then run some other code depending on the request that we get
- **Splat or Star (`*`) Route Matcher**
  - Have some sort of catch-all, some message we respond to every other route that we didn't specify, e.g., display a page not found if link is not specified in routes
- **Order of Routes**
  - First route that matches is the only route that will be run
  - Evaluated in the order they were added
  - Always put `*` route after all the custom routes so we can make all routes will run first before this
- **Query Strings** using `query`
  - Starts with `?` and separated by `&`


## Templating

- **Templating** allows us to define a preset "pattern" for a webpage, that we can dynamically modify, e.g.:
  - We could define a single "Search" template that displays all the results for a given search term
  - We don't know what the term is or how many results there are ahead of time
  - The webpage is created on the fly
- Templates are used to render a page with dynamic HTML files in Express instead of writing plain HTML
- **EJS (Embedded JavaScript)** lets us embed JS (variables, if statements, loops, etc.) inside html
  - `views` folder is the default directory of ejs files
  - `ejs` file extensions are optional when rendering it
  - `set()` method is used to set a `view engine` and `views` directory
    - Set a view engine, e.g., `app.set('view engine', 'ejs')`
    - Set a custom views directory, e.g., `app.set('views', path.join(__dirname, '/views'))`
  - `path.join()` takes multiple segments and joined them together to create a single path
  - `__dirname` refers to the directory name where `index.js` or current file is located, regardless where it was executed
  - `render()` method returns rendered HTML of a view, e.g., `res.render('home')`
  - `process.cwd()` displays the current working directory
- **EJS Tags**
  - `<%` script tag for control-flow, no output
  - `<%=` displays the value into the template (w/o HTML)
  - `<%-` displays the unescaped value into the template
  - `<%#` comment tag, no execution, no output
- **Serving Static Assets in Express**
  - `express.static()` is a middleware like a request coming in and response going out
    - Accepts an argument (folder) where to serve the assets from
- **Partials** AKA includes are files (templates) that we can write and include in other templates
  - DRY (Don't Repeat Yourself) principle to reduce duplication
  - Used to Avoid writing html boilerplates manually for every `.ejs` files
  - Remember that paths are very important especially for the assets of the app
    - `/` means to look in the root directory


## RESTful Routes

- **GET vs. POST requests**
  - GET
    - Used to retrieve information
    - Data is sent via query string
    - Information is plainly visible in the URL
    - Limited amount of data can be sent
  - POST
    - Used to post data to the server
    - Used to write/create/update
    - Data is sent via request body, not a query string
    - Can send any sort of data (JSON)
- **Parsing the Request Body** with express built-in middleware functions:
  - `express.urlencoded([options])` parses incoming requests with urlencoded payloads and is based on `body-parser` package
  - `express.json([options])` parses incoming requests with JSON payloads
- **REST (REpresentational State Transfer)** is an architectural style or paradigms for distributed hypermedia systems
  - Set of guidelines for how a client + server communicates and perform CRUD (Create, Read, Update, Destroy) operations on a given resource
  - Treats data on the server-side as resource than can be CRUDed
  - Most common ways of approaching REST in in formatting the URLs and HTTP verbs in the applications
  - **Note**: browser forms don't support PUT or DELETE requests, they return it as a GET
    - Include `method-override` package to change that, e.g., Add `?_method=PUT` to the action afterwards

  |  Name   |         Path         |   Verb   |              Purpose               |
  | :-----: | :------------------: | :------: | :--------------------------------: |
  |  Index  |     `/comments`      |  `GET`   |        Display all comments        |
  |   New   |   `/comments/new`    |  `GET`   |     Form to create new comment     |
  | Create  |     `/comments`      |  `POST`  |   Creates new comment on server    |
  |  Show   |   `/comments/:id`    |  `GET`   |  Details for one specific comment  |
  |  Edit   | `/comments/:id/edit` |  `GET`   |   Form to edit specific comment    |
  | Update  |   `/comments/:id`    | `PATCH`  | Updates specific comment on server |
  | Destroy |   `/comments/:id`    | `DELETE` | Delete specific comment on server  |
