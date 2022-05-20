# Advanced Express

## Table of Contents <!-- omit in toc -->

- [Topics](#topics)
- [Middleware](#middleware)
- [Handling Errors](#handling-errors)
- [Express Router](#express-router)
- [Cookies](#cookies)
- [Sessions](#sessions)
- [Flash](#flash)
- [Authentication](#authentication)


## Topics

- **Crucial**
  - _The concept of Middleware_
  - _Defining Custom Middleware_
  - _Defining Custom Error Handlers_
  - **Handling Async Errors**
  - _Defining Custom Error Class_
  - _Express Router Basics_
  - _Understanding Cookies_
  - Cookie Parser
  - _Conceptual Overview of Session_
  - _Setting Up Express Session_
  - Authentication vs. Authorization
  - _How To (Not) Store Passwords_
  - **Working With Bcrypt**
- **Important**
  - Express' Built-In Error Handler
  - _Working With Mongoose Errors_
  - _Signed Cookies_
  - _Integrating Flash Messages_
  - _Auth Demo_
  - **Understanding Hashing Functions**
  - **Password Salts**
- **Nice To Have**
  - Morgan Logging Middleware
  - **HMAC Signing**


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


## Express Router

- `router` object is an isolated instance of middleware and routes
  - mini-application capable only of performing middleware and routing functions
- `router.use()` to apply some kind of middle to the whole route


## Cookies

- Cookies are little bits of information that are stored in a user's browser when browsing a particular website
- Once a cookie is set, a user's browser will send the cookie on every subsequent request to the site
- Cookies allow use to make HTTP stateful
- `cookie-parser` npm package parses `Cookie` header and populate `req.cookies`
  - optionally may signed by passing `secret` string  which assigns `req.secret`
- signed cookies are digital signature cryptographic signature not to encrypt or hide information instead it is to verify its integrity (haven't change like wax seal)
- [HMAC Generator / Tester Tool](https://www.freeformatter.com/hmac-generator.html) computes a **Hash-based message authentication codes (HMAC)** using a secret key


## Sessions

- **Cookies** are not very practical (or secure) to store a lot of data client-side, cons:
  - limit maximum size
  - size of a cookie (how much does it store)
- **Sessions** are a server-side data store that we use to make HTTP stateful
  - Instead of storing data using cookies, we store the data on the server-side and then send the browser a cookie that can be used to retrieve the data
- `express-session` module is an HTTP server-side framework used to create and manage a session middleware
  - `secret` option is used to encode and decode the information in the session
  - `resave` and `saveUninitialized` options are required to remove deprecated warning


## Flash

- **Flash** messages is used to send or share a message to a user on a page that is not permanently there
  - Will be removed when page is refreshed 
  - Typically used in combination with redirects
- `connect-flash` module
  - `req.flash()` function that can be used for flash messages
  - `res.locals` is an object that contains local variables for the response, scoped to the request only and therefore just available for the views rendered during that request or response cycle


## Authentication

- **Authentication** is the process of verifying who a particular user is
  - username/password
  - security questions
  - facial recognition
  - etc.
- **Authorization** is verifying what a specific user has access to
  - Authorized after a user has been authenticated
  - Meaning, "Now that we know who you are, here is what you are allowed to do and NOT allowed to do"
- Rules #1: Never Store Passwords
- **Hashing** Rather than storing a password in the database, we run the password through a _hashing function_ first and then store the result in the database
- **Hashing functions** are functions that map input data of some arbitrary size to fixed-size output values
- Cryptographic Hash Function
  1. One-way function which is infeasible to invert
  2. Small change in input yields large change in the output
  3. Deterministic - same input yields same output
  4. Unlikely to find 2 outputs with same value
  5. Password Hash Functions are deliberately SLO
- **Salt** is a random value added to the password before we hash it
  - Helps ensure unique hashes and mitigate common attacks
- bcrypt
