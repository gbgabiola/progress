# Advanced JS Concepts

## Table of Contents <!-- omit in toc -->

- [Topics](#topics)
- [Async JS](#async-js)
- [AJAX and API's](#ajax-and-apis)
- [Prototypes, Classes, & OOP](#prototypes-classes--oop)


## Topics

- **Crucial**
  - **Working With Promises**
  - _Async Functions_
  - Working With API's
  - Intro to JSON
  - _Working With Axios_
  - _Object Prototypes (the concept)_
  - _Defining Classes_
  - _Extends & Super_
- **Important**
  - **The Call Stack**
  - _Callback Hell_
  - Postman
  - _The Fetch API_
  - **The "new" keyword (the 4 things it does)**
- **Nice To Have**
  - **Understanding WebAPI's**
  - **Creating Our Own Promises**
  - **Making XHRs**
  - _Defining Constructor Functions (the "old" way)_
  - **Converting Colors & Associated Crazy Math**


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


## Prototypes, Classes, & OOP

- Prototypes are template object for certain objects
  - Contains a lot of methods that every certain objects have access to
  - We can create multiple objects that share the same prototype to get access to the same method without their own copy
  - We can overwrite an existing methods
  - `String.prototype` is a _template object_ for every single string
  - `Array.prototype`
  - `__proto__` is a reference
    - Property name of the current object
- **Object Oriented Programming (OOP)**
  - Organizing code, designing, and structuring applications by breaking things up into distinct patterns (recipe) of objects
- **Factory Functions** creates and returns an object every time it is called
  - Resulting objects all follow the same pattern (recipe)
  - Not commonly used and not ideal way of doing it
- **Constructor Functions** with `new`operator
  1. Creates a blank, plain JavaScript object
  2. Adds a property to the new object (`__proto__`) that links to the constructor function's prototype object
  3. Binds the newly created object instance as the `this` context
  4. Returns `this` if the function doesn't return an object
- **Classes** are a template for creating objects
  - syntactic sugar for constructor functions
  - `constructor` method creates and initializes an object instance of the class
- **Extends & Super Keywords**
  - `extends` keyword is used to create a class that is a child of another class
  - `super` keyword is used to access and call functions on an object's parent
    - Can only be called in the `constructor`
