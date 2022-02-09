# Advanced JS Concepts

## Table of Contents <!-- omit in toc -->

- [Topics](#topics)
- [Async JS](#async-js)
- [AJAX and API's](#ajax-and-apis)


## Topics

- **Crucial**
  - **Working With Promises**
  - _Async Functions_
  - Working With API's
  - Intro to JSON
  - _Working With Axios_
- **Important**
  - **The Call Stack**
  - _Callback Hell_
  - Postman
  - _The Fetch API_
- **Nice To Have**
  - **Understanding WebAPI's**
  - **Creating Our Own Promises**
  - **Making XHRs**


## Async JS

- **Call Stack**
  - The mechanism the JS interpreter uses to keep track of its place in a script that calls multiple functions
  - How JS "knows" what function is currently being run and what functions are called from within that function, etc.
  - Stack is a basic data structure in computer science
    - Known for **LIFO** (Last-In-First-Out)
  - **How It Works**
    - When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function
    - Any functions that are called by the function are added to the call stack further up, and run where their calls are reached
    - When the current function is finished, the interpreter takes it off the stack and resumes execution where it left of in the last code listing
- **JS is Single Threaded**
  - JS is running at most one line of code at a time
  - Browsers does the work
    - Browsers come with Web APIs that are able to handle certain tasks in the background (like making requests or `setTimeout`)
    - The JS call stack recognizes these Web API functions and passes them off to the browser to take care of
    - Once the browser finishes those tasks, they return and are pushed onto the stack as a callback
- **Callback Hell**
  - Solution: **Promises**
    - A Promise is an object representing the eventual completion or failure of an asynchronous operation
- **Promises**
  - A promise is a returned object to which you attach callbacks, instead of passing callbacks into a function
- **Async Function**
  - A newer and cleaner syntax for working with async code
  - Syntax _"makeup"_ for promises
  - 2 pieces
    - `async` keyword
    - `await` keyword
- **async** keyword
  - Async functions always return a promise
  - If the function returns a value, the promise will be resolved with that value
  - If the function throws an exception, the promise will be rejected
- **await** keyword
  - We can only use the await keyword inside of functions declared with async
  - await will pause the execution of the function, _waiting for a promise to be resolved_


## AJAX and API's

- **AJAX** - Asynchronous JavaScript And XML (Extensible Markup Language)
  - Not common these days
- Requests
  - XMLHttp
  - Fetch
  - Axios
- **APIs** - Application Programming Interface
- **AJAJ** - Asynchronous JavaScript And **JSON** (JavaScript Object Notation)
  - data format made for code or other computers to consume
  - JSON data are a long series of strings
  - `JSON.parse()` method parses JSON string (data) into JS object
  - `JSON.stringify()` method converts JS object into JSON string
- **HTTP Response Status Codes**
  - Informational responses (100-199)
  - Successful responses (200-299)
    - 200 OK
    - 201 Created
    - 202 Accepted
    - etc...
  - Redirection messages (300-399)
    - 301 Moved Permanently
  - Client error responses (400-499)
    - 400 Bad Request
    - 401 Unauthorized
    - 403 Forbidden
    - 404 Not Found
    - etc...
  - Server error responses (500-599)
    - 500 Internal Server Error
    - etc...
- **Query Strings & Headers**
- **XHR** XMLHttpRequest
  - The _original_ way of sending requests via JS
  - Does not support promises (lots of callbacks)
  - Hard to remember
- **Fetch API**
  - The newer way of making requests via JS
  - Supports promises
  - Not supported in IE
- **Axios** is library for making HTTP requests
