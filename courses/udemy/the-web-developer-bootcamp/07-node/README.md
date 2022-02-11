# Node

## Table of Contents <!-- omit in toc -->

- [Topics](#topics)
- [Node Basics](#node-basics)


## Topics

- **Crucial**
  - _Installation_
  - The Node REPL
  - Running Node Files
- **Important**
  - Process
- **Nice To Have**
  - _argv_
  - **File System Module**


## Node Basics

- **Node** is a JS runtime that executes code outside of the browser without events and DOM
  - JS syntax that we can write code and run in the server-side code instead of relying on other languages, e.g., Python, Ruby, etc...
  - Not included:
    - The window
    - document
    - DOM API's
  - Includes:
    - modules to interact with OS and files/folders
- What is Node Used For?
  - Web Servers
  - Command Line Tools
  - Native Apps (VSCode editor)
  - Video Games
  - Drone Software
  - etc...
- **REPL** (Read Evaluate Print Loop) is a command-line tool that processes Node.js expressions
- **Process** object provides information about and control over the current Node.js process
- **Argv** property returns an array containing the command-line arguments when Node.js process was launch
- **File System** (`fs`) module enables interacting with the file system
  - All file system operations have synchronous, callback, and promise-based forms
  - Promise-based operations return a promise that is fulfilled when the asynchronous operation is complete
  - Callback form takes a completion callback function as its last argument and invokes the operation asynchronously
  - Synchronous APIs block the Node.js event loop and further JavaScript execution until the operation is complete
  - `fs.mkdirSync()`
  - `fs.writeFileSync()`
