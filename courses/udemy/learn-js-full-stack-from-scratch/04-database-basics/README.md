# Database Basics

## Database Systems

- MongoDB
- MySQL
- SQL Server
- Oracle
- MariaDB
- PostgreSQL
- CouchDB
- etc...


## CRUD

- `C`reate, `R`ead, `U`pdate, `D`elete
- each item in the collection is a `document`
- **Create** an item to insert document in mongoDB
- **Read** performs quesry on the collection, reading, loading or retrieving data from the database
- **Update** means edit or update an existing document
- **Delete** to remove/delete a document


## Setup App

- `npm install express` then `require` it
- let the app `listen` to port `3000`
- `app.use(express.urlencoded({extended: false}))` is used to enabling the feature in express so that the user's input is easily accessible from request body object
- `npm install nodemon` to automatically restart for every changes you made
- add `"watch": "nodemon server"` script in `package.json` so you can run `npm run watch` in the terminal
- `insertOne` method means create in CRUD operation that accepts two (2) arguments
  - 1st: is an object to be stored as document in the database
  - 2nd: is a function to be call once the item is created in the database
- `npm install mongodb` which is driver/package, official package that gives Node.js the ability work w/ mongoDB database
- `connect` is a mongoDB method that accepts three (3) arguments
  - 1st: is a connection string to tell mongoDB what or where we want to connect to
  - 2nd: in an object set mongoDB configuration `{useNewUrlParser: true}`
  - 3rd: is a function that the `connect` method will call after it connected to the database, it accepts parameter
    - 1st: `err`, if there is an error while connecting
    - 2nd: `client` that contains information about the mongoDB environment that we just connected to
- `find` method to read data in the database, leave it blank for all documents
- `toArray` method converts the data into a javaScript array, it accepts a function as an argument and will call the function when database action completes, the function will have two (2) parameters
  - 1st: error parameter to make sure there is no error reading from the database
  - 2nd: javaScript array of all items from the database
- `redirect` method to redirect the user of the app
- `app.use(express.static('public'))` this will make the contents of the folder available from the root of the server
- the parameter in the event listener contains all sorts of information about the event
- **axios** keeps the code clean and minimal
- `post` method of axios library is how we can send in on the fly post request to a server, with two (2) arguments
  - 1st: is the url that we want to send a post request to 
  - 2nd: is a javaScript object which is the data that will be sent along w/ the request to that url (the data that server will receive)
- `then` method with a function that will not run until the action is complete
- `catch` method with a function that will run if the action runs into a problem
- `findOneAndUpdate` is a CRUD method that will have three (3) arguments
  - 1st: is to tell which document to update
  - 2nd: is to tell what to update on that document
  - 3rd: is a function that will get called once the database action is completed
- `data-` is a HTML5 attribute that let us embed data in the html
- `deleteOne` is a CRUD method, with two (2) arguments
  - 1st: is select the document to delete
  - 2nd: is a function that will run after the database action is completed
- `submit` event takes care both click to submit and pressing enter/return key on the keyboard
- `insertAdjacentHTML` method with two (2) arguments
  - 1st: is where to add the new HTML, E.g. `beforeend` 
  - 2nd: is HTML we want to add
- `JSON` is a JavaScript Object Notation which is popular way of sending data back and forth
- Client-Side Rendering means the server would only send the browser raw data, then it would be up to the browser/client to use that raw data to generate the appropriate HTML, instead of generating each HTML for our dynamic data on the server side and then sending that HTML out to the web browser
- `JSON.stringify` method converts javaScript data into a string of text


## Security

- `set` method with two (2) arguments
  - 1st: string of text (`WWW.Authenticate`)
  - 2nd: is a name of application, a string of text (`Basic realm="Simple App"`)
- `status` method to add an a code status
- `401` code status means unathorized
- `npm install sanitize` and require it
- `sanitizedHTML` with two (2) arguments
  - 1st: is the text/input to sanitize or clean up
  - 2nd: is an object for options, empty array and object to not allow any HTML tags & attributes (`allowedTags: [], allowedAttributes: {}`)

## Deploying App

- check if git is installed `git --version`
- set a basic information `git config --global user.name` and `git config --global user.email`
- install heroku then enter credentials in terminal `heroku login`
- add a `.gitignore` file to ignore files like `node_modules` folder to save some bandwidth
- `git init` to initialize a git on a project
- `git add -A` to add all the files in git
- `git commit -m "FIrst commit"` to commit files in git with message
