# Server Side Frameworks and Intermediate Express

## Objectives

#### Introduction to Express
- What is a framework? How is it different from a library?
- What is Express?  
- Why are we using Express?

#### Our First Express App!!!!!
- Review an existing app (DogDemo)
- Review HTTP response/request lifecycle
- Create our own simple Express app!

#### NPM Init and Package.json
- Use the `--save` flag to install packages
- Explain what the package.json file does
- Use `npm init` to create a new package.json

#### More Routing!
- Show the `*` route matcher
- Write routes containing route parameters
- Discuss route order

#### Rendering HTML and Templates
- Use `res.render()` to render HTML(from an EJS file)
- Explain what EJS is and why we use it
- Pass variables to EJS templates

#### EJS Control Flow
- Show examples of control flow in EJS templates
- Write if statements in an EJS file
- Write loops in an EJS file

#### Styles And Partials
- Show how to properly include public assets
- Properly configure our app to use EJS
- Use partials to dry up our code!

#### Post Requests!!!
- Write post routes, and test them with Postman
- Use a form to send a post request
- Use body parser to get form data

## Learned
- Framework is just a bunch of code that someone else written just like a library is, except when we use a framework we have less control
- The goal of using framework is to make the development much faster
- Express is one framework for web development node.js framework
- We use Express because it's popular, lot's of people use it, there's a great documentation, tutorials, widely used and supported
- It's a great first framework for someone to learn
- package.json contains a bunch of metadata about the application or package
- Using `*` inside the route definition it will match anything that comes in at all
- The order of the routes matter
- We can send back the content of a file using `res.render`, and those templates need to exist in the views directory, so express will automatically looks that directory for the file
- EJS (Embedded JavaScript) that enables us to have a dynamic templates, html that will change depending on some data that we provide
- Using EJS brackets `<%= %>`, whatever goes inside is treated as javaScript code first, and whatever code returns, is then printed to the html
- And to pass data through, we pass an object in the `res.render()` where we have key value pairs, just like regular javaScript object
- Difference between `<%= %>` and `<% %>`, whatever code inside this `<%= %>` will render to the html, but this `<% %>` evaluates the code but it doesn't add to the html, and usually use for workflow, if statements and for the loops
- Use the public directory to add stylesheets and tell express to serve the public directory and tell express that all of the templates are ejs, so we don't need to always call the templates `.ejs` file.
- Introduce to the partials to create header and footer to help DRY up the codes
- Using a POST request with the form action and method
- Extracting data from `req.body.something` with body-parser package, and take the requested body and parse it to the javaScript object that we can use and access
- Using `res.redirect()` to redirect to the page of your choice