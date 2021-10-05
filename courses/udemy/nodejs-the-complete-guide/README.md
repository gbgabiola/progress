# [NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)](https://www.udemy.com/course/nodejs-the-complete-guide/)

Master Node JS & Deno.js, build REST APIs with Node.js, GraphQL APIs, add Authentication, use MongoDB, SQL & much more!

Course Created by Academind


## Course Content

- [x] introduction
- [x] Optional JavaScript - A Quick Refresher
- [x] Understanding the Basics
- [x] Improved Development Workflow and Debugging
- [ ] Working with Express.js
- [ ] Working with Dynamic Content & Adding Templating Engines
- [ ] The Model View Controller (MVC)
- [ ] Optional: Enhancing the App
- [ ] Dynamic Routes & Advanced Models
- [ ] SQL introduction
- [ ] Understanding Sequelize
- [ ] Working with NoSQL & Using MongoDB
- [ ] Working with Mongoose
- [ ] Sessions & Cookies
- [ ] Adding Authentication
- [ ] Sending Emails
- [ ] Advanced Authentication
- [ ] Understanding Validation
- [ ] Error Handling
- [ ] File Upload & Download
- [ ] Adding Pagination
- [ ] Understanding Async Requests
- [ ] Adding Payments
- [ ] Working with REST APIs - The Basics
- [ ] Working with REST APIs - The Practical Application
- [ ] Understanding Async Await in Node.js
- [ ] Understanding Websockets & Socket.io
- [ ] Working with GraphQL
- [ ] Deploying our App
- [ ] Testing Node.js Applications
- [ ] Node.js as a Build Tool & Using npm
- [ ] Modern JavaScript & NodeJS
- [ ] NodeJS & TypeScript
- [ ] An Introduction to Deno
- [ ] Deno, CRUD & Databases (MongoDB)
- [ ] Roundup


## JS Summary

- Weakly Typed Language
  - No explicit type assignment
  - Data types can be switched dynamically
- Object-Oriented Language
  - Data can be organized in logical objects
  - Primitive and reference types
- Versatile Language
  - Runs in browser & directly on a PC/server
  - Can perform a broad variety of tasks


## How the Web Works

- Client
- Request
- Server
- Response
- Client


## Program Lifecycle & Event Loop

- Node.js runs non-blocking JS code and uses on event-driven code (**Event Loop**) for running logic
- A Node.js program exits as soon as there is no more work to do
- **Note**: `createServer()` event never finishes by default


## Asychronous Code

- JS code is non-blocking
- Use callbacks and events
  - Order changes


## Requests & Responses

- Parse request data in chunks (Streams & Buffers)
- Avoid _double responses_


## Node.js Core Modules

- Node.js ships with multiple core modules
  - `http` launches a server, send requests
  - `https` launches a SSL server
  - `fs`
  - `path`
  - `os`
- Core modules can be imported into any file to be used there
- Import via `require('module')` 


## Node Module System

- Import via `require('./path-to-file')` for custom files
  - `require('module')` for core & third-party modules
- Export via `module.exports` or just `exports` for multiple exports


## The Event Loop

- **Timers** executes `setTimeout`, `setInterval` Callbacks
  - **Pending Callbacks** executes I/O related Callbacks that were deferred, e.g., Disk & Network Operations (~Blocking Operations)
- **Poll** retrieves new I/O events, execute their callbacks
  - **Check** executes `setImmediate()` callbacks
- **Close Callbacks** executes all _close_ event callbacks


## NPM & Packages

- npm
  - npm stands for "Node Package Manager" and allows us to manage our Node project and its dependencies
  - can initialize a project with `npm init` 
  - npm scripts can be defined in the `package.json` to give us _shortcuts_ to common tasks/commands
- 3rd Party Package
  - Node projects typically don't just use core modules and custom code but also third-party packages
  - can install via npm
  - can differentiate between
    - production dependencies
    - development dependencies (`--save-dev` or `-D`)
    - global dependencies (`-g`)
- Local Project
- Our Code
- Core Node Packages
- Dependencies (3rd Party) installed & managed via npm
  - express
  - body-parser


## Type of Errors

- Syntax, Runtime and Logical errors can break our app
- Syntax and Runtime errors throw (helpful) error messages (with line numbers)
- Logical errors can be fixed with testing and the help of the debugger


## Debugging

- Use VS Code Node debugger to step into our code and go through it step by step
- Analyze variable values at runtime
- Look into (and manipulate) variables at runtime
- Set breakpoint (i.e., respect the async/event-driven nature)
