# Advanced Express

## Table of Contents <!-- omit in toc -->

- [Topics](#topics)
- [Middleware](#middleware)
- [Handling Errors](#handling-errors)


## Topics

- **Crucial**
  - _The concept of Middleware_
  - _Defining Custom Middleware_
  - _Defining Custom Error Handlers_
  - **Handling Async Errors**
  - _Defining Custom Error Class_
- **Important**
  - Express' Built-In Error Handler
  - _Working With Mongoose Errors_
- **Nice To Have**
  - Morgan Logging Middleware


## Middleware

- Express middleware are functions that run during the request/response lifecycle
  - Middleware are just functions
  - Each middleware has access to the request and response objects
  - Middleware can end the HTTP request by sending back a response with methods like res.send()
  - OR middleware can be chained together, one after another by calling next()
- Middleware functions can:
  - Execute any code
  - Make changes to the request and the responses objects
  - End the request-response cycle
  - Call the `next` middleware function in the stack
- morgan package is a middleware logging tool for Node.js
- args are according to usual naming convention
  - `req` -> request obj
  - `res` -> response obj
  - `next` -> next thing that needs to be done
    - If present, express knows automatically what to do next and handles this


## Handling Errors

- **Error Handling** refers to how Express catches and processes errors that occur both sync and async
- Express comes with a default built-in error handler
  - Added at the end of the middleware function stack
- **Defining Custom Error Handlers**
  - Define error-handling middleware functions with four arguments, `(err, req, res, next)`
  - Pasing anything to the `next()` will be regard as an error and will skip any remaining non-error handling route and middleware functions
- **Custom Error Class**
  - Error class with `status` and `message` parameter
- **Handling Async Errors**
  - Pass to the `next()` for Errors returned from async functions invoked by route handlers and middleware
  - Use `try...catch`
- **Define Async Utility**
- **Diffentiating Mongoose Errors**
  - `CastError` things that can't be cast into an `ObjectId`
  - `ValidationError`, e.g., leaving things blank
- Intercept any particular error types then modify or build new errors based upon them
