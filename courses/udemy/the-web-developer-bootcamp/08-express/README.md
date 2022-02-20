# Express

## Table of Contents <!-- omit in toc -->

- [Topics](#topics)
- [Creating Servers With Express](#creating-servers-with-express)


## Topics

- **Crucial**
  - What are frameworks?
  - _Our First Express App_
  - _Routing Basics_
  - _Path Parameters_
  - _Working With Query Strings_
- **Important**
  - Nodemon
- **Nice To Have**



## Creating Servers With Express

- **Express** is a _"fast, unopinionated, minimalist web framework for Node.js"_
  - It helps us:
    - Start up a server to listen for requests
    - Parse incoming requests
    - Math those requests to particular routes
    - Craft our http response and associated content
  - It's an NPM package which comes with a bunch of methods and optionals plugins that we can use to build web application and API's
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
  - 
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
