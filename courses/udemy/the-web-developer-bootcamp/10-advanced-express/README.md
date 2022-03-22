# Advanced Express

## Table of Contents <!-- omit in toc -->

- [Topics](#topics)
- [Middleware](#middleware)


## Topics

- **Crucial**
  - _The concept of Middleware_
  - _Defining Custom Middleware_
- **Important**
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
