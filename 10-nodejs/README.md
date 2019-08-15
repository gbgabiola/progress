# Node.js and Express

## Goal

- Understand how to install and use Node and Express, to create a Node applications
- Creating Node and Express based servers
- RESTful Routing with Express
- Understand and use middleware for Node applications

## Node

### What is Node.js

- Node.js allows to take javaScript out of the browser and allows it to interact directly with the hardware of a computer to create desktop applications.

### The Node REPL (Read Evaluation Print Loops)

- By installing node, we also installed the node REPL and to access it we just need to write the command `node` inside the terminal.
- `>` bracket means you are already insde the REPL, and you write any javaScript syntax inside it.
- To exit repl, type `exit` or hit `Ctrl C` twice.

### How to Use the Native Node Modules

- In order to use the node modules, we need to `require` it first.
- `const` or constant cannot be overwrite, you cannot change it once you declared it.
- Things that you can do using file system modules, is specify paths, open files, change files, access, read, and write to the local file system.

Create a file `file1.txt` and then copy and sync `file1.txt` to `file2.txt`:

```js
const fs = require('fs');

// fs.copyFileSync(src, dest[,flags]);
fs.copyFileSync('file1.txt', 'file2.txt');
```

### The NPM Package Manager and Installing External Node Modules

- **NPM (Node Package Manager)** is bundled with node.
- packages on NPM are bits of reusable code that somebody else wrote and using NPM you can incorporate those packages into your own projects. Saving you the time and effort that's required to write those bits of code yourself.


## Express

- **Express** is a node framework, just like jQuery to JavaScript, Express is to Node.
  - a bunch of code that somebody else wrote that add extra features and helps to organize and structure your code specifically for web applications built with node.
- Can do `atom .` or `code .` inside terminal to open the current directory to atom/code.
- install `express` and `--save` means save it in the dependencies list
  
  ```sh
  $ npm install express --save
  ```

- `req` or request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on.

  ```js
  app.get('/', function (req, res) { })
  ```

- `res` or response object represents the HTTP response that an Express app sends when it gets an HTTP request.

  ```js
  res.send('Hello World')
  ```

- `nodemon` will monitor any change in your source and automatically restart your server. `-g` means globally, not just on your current project.

  ```sh
  $ npm install -g nodemon
  $ nodemon server.js
  ```

- `__dirname` will give you the file path of the current file.
- `body-parser` module extract the entire body portion of an incoming request stream and exposes it on `req.body`.
  - parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request.

  ```sh
  $ npm install body-parser
  ```

  ```js
  const bodyParser = require('body-parser');
  ```

- use `urlencoded` to pass data that comes from an html form.
- `extended: true`  allows us to post nested objects.

  ```js
  app.use(bodyParser.urlencoded({extended: true}));
  ```

## Resources

- [Node.js](http://nodejs.org/)
- [Node API Documentation](https://nodejs.org/api/)
- [NPM](https://npmjs.com)
- [Express Documentation](https://expressjs.com/)
- [nodemon utility](https://nodemon.io/)
- [List of HTTP status codes by Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
- [body-parser package](https://www.npmjs.com/package/body-parser)