# Advanced JS Concepts

## Table of Contents <!-- omit in toc -->

- [Topics](#topics)
- [Async JS](#async-js)


## Topics

- **Crucial**
  - **Working With Promises**
  - _Async Functions_
- **Important**
  - **The Call Stack**
  - _Callback Hell_
- **Nice To Have**
  - **Understanding WebAPI's**
  - **Creating Our Own Promises**


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
