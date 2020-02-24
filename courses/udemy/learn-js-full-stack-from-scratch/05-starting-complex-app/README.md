# Staring Complex App

## What's Next

1. Organization
2. Unique data per user
3. Attention to detail

### Already Familiar With

- Using the web browser to send requests to a server
- Using express to create a server that listens for requests
- Performing C.R.U.D. actions on a database


## App/Router Setup

- `npm init -y`
- install and `require` **express** package
- `const` is a constant means it cannot reassigned it with a new value
- all html files will be put in `views` folder
- `set()` method for the app to create `views` folder
  - 1st: is express `'views'`
  - 2nd: is the name of the folder itself
- `set()` method to tell which template we will be using
  - 1st: `'view engine'`
  - 2nd: template engine, E,g. pug, handlebars or ejs
- install **ejs** Embedded Javascript template engine
- `render()` method, which can be put name of the view, extension ejs can be ommited
- `public` folder that will keep for css files or browser based js files that we wants to be accessible by anyone who views the app, `app.use(express.static('public'));`
- install **nodemon** package to auto restart project for any changes made
- router has the responsibility of listing all the urls or routes that you want to listen for and them say what should happen for each of those routes
- `require` in node does two (2) things
  - 1st: it executes the said file
  - 2nd: it returns whatever that file exports
- `module.exports` whatever you export will be stored in the variable


## MVC Pattern

- **Model View Controller (MVC)** pattern to keep the code organized into three distinct components
  - **Model** will include all the business logic and all the rules we want to enforce on our data
  - **View** is the HTML template which the user will see in their web browser
  - **Controller** is the responsible for accepting input, the controller will call the appropriate model, once done the controller will call the appropriate view and pass it any relevant dynamic data from the model
    - - controller separates the logic from the router which listing all the routes
- `app.use(express.urlencoded({extended: false}))` to add the submitted data onto the `req` object, so we can access it from `req.body`
- `new` keyword/operator will create a new object using a blueprint (which is usually a capitalized name)
- Several if statements of problems w/ the data to look at for:
  - if they left the username field blank
  - if they left the email field blank
  - if they left the password field blank
  - minimum and maximum length for username and password
- every javaScript **Array** has `length` property


## Adding Validation and Cleaning Up

- install **validator** package then require to use a validator checks
- exclamation (`!`) reverses whatever comes after it, if it's true before, now it's false and vice versa
- `validator.isEmal()` method for email validation
- `validator.isAlphanumeric()` method will return **Boolean** values if the selected data is alphanumeric or not
- `typeof()` operator returns a string indicating the data type of the evaluated data
- `trim()` method removes whitespace from both ends of a string
- `toLowerCase()` method converts the calling string a lower case value


## Connecting to a Database

- install and `require` **mongodb** package
- `mongodb.connect()` method w/ three (3) arguments
  - 1st: is a connection string to tell mongoDB what or where we want to connect to
  - 2nd: in an object set mongoDB configuration `{useNewUrlParser: true}`
  - 3rd: a function that will be called after it connected to the database, it accepts parameter
    - 1st: `err`, if there is an error while connecting
    - 2nd: `client` that contains information about the mongoDB environment that we just connected to
- `insertOne()` method means create in CRUD
- install and `require` **dotenv** package to store username/password, database logins, API keys, secrets anything important


## Login Feature

- `findOne()` method in CRUD to read data in the database with two (2) arguments
  - 1st: is an object for what to find
  - 2nd: is a function that `findOne()` will call once it is complete
- **Arrow function** does not manipulate or change the `this` keyword


## What is a Promise

- `Promise` is an object that represents the eventual completetion of an asynchronous operation
  - is a blueprint/constructor that we can use to create new promises w/ two (2) common convention names arguments
  - 1st: `resolve`
  - 2nd: `reject`
  - within the body of a function we can perform asynchronous operation, or operations that are going to take some time to complete, when complete we can call resolve or reject
- **Async/Await** is an alternative approach for Promises which is much concise and clearer


## Hashing User Passwords

- hashing is not the same thing as an encrypting
  - encrpyting a value implies that it can be decrypted which is a two (2) street
  - hashing a value is a one (1) way street
- install and `require` **bcryptjs** to hash user's password and has two (2) process
  - 1st: `genSaltSync(10)` method to generate the salt
  - 2nd: overwrite the password values, `hashSync()` with two (2) arguments
    - 1st: the value you want to hash
    - 2nd: the salt that you generated 
- `compareSync()` method for bcryptjs that returns **Boolean** value to compare the registered and login attempt, give this method two (2) arguments
  - 1st: input that the user just typed in
  - 2nd: hashed value from the database


## Sessions

- install and `require` **express-sessions**
- provide an object when calling the package, then add properties/options
  - `secret: 'Something that someone couldn't guess.`
  - `resave: false`
  - `saveUninitialized: false`
  - how long for a session for the cookie should be valid `cookie: {maxAge: 1000 * 60 * 60 * 24}` this represents one (1) day
- install and `require` **connect-mongo**
- in ejs put html, you can also do javaScript
  - inside `<% %>` is how you do a javaScript code/logic
  - inside `<%= %>` is if you want it to output/display it
- `destroy()` method is a session method


## Flash Message

- install and `require` **connect-flash**
- `flash()` with two arguments
  - 1st: name of a collection/array of a messages to add on to
  - 2nd: message you want to add on to the array/collection
