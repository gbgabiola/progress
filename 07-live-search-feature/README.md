# Live Search Feature

## Staying Organized: Front-End JavaScript

- Created a separate folder for the frontend javaScript w/ modules subfolder for the features of the app
- `import` the feature file to `main.js`
- `npm install` **webpack**, **webpack-cli**, **@babel/core**, **@babel/preset-env**, **babel-loader** and `require` **webpack**
- Created `webpack.config.js` file and set its javaScript file, where to export them, including babel
- **Babel** let's us write modern javaScript code/syntax and converts them into a javaScript that every browser supports
- Update `watch` script in `package.json` to `"watch": "nodemon db --ignore frontend-js --ignore public/ & webpack --watch"`
- `require` is Node specific, `import` is part of the javaScript itself


## Showing and Hiding Search Overlay

- In javaScript, classes are just syntactic sugar or alternate syntax
- `export default` a class of Search
- Select DOM elements, and keep tract of any useful data
- separate each events
- separate each methods


## Responding to Key Press Events

- Select the DOM elements of the search input field
- Apply the `focus()` method on the search input field
- Used a `setTimeout()` method to delay it, give it a two (2) arguments
  - 1st: function to run
  - 2nd: how long you want to wait before running it
- Hide search results at first
- Add a search loader icon when keypress starts
- `npm install` and `import` **axios**
- `post()` method of **axios**, give it a two (2) arguments
  - 1st: URL that we want to send a request to
  - 2nd: object w/ any that we want to send along to the server


## Back-End Aspect of Search (Searching Database)

- Make sure that the incoming search term is a string (not an object or `undefined`)
- If search term is a string, perform a database operation, else reject it
- `$match` look for anything that contains the search term anywhere within its value
- `$sort` sort by revelancy score, best match for the search term should be at the top
- by default on MongoDB colection there's only one index which is based on `_id`
- Create index w/ a title and body text based
- there's no need for the general public to be able to see the user Id of another account
- A general practice is, model should not leak out or expose any data that is not 100% need it to expose and leak out
- Strip out author Id property before returning data to Controller
- `delete` is shown by the studies that this a slow operation, if you're going to be looping through an array and performing it multiple times, it's more efficient to set it `undefined`


## Generating HTML for Search Results

- Adjust the send request method so that once it receives its response from the server, it can call a separate method that's responsible for generating and rendering HTML
- if `posts.length` to manipulate results area div
- hide the loade icon and show results area
- on keypress handler method add a condition if its value is empty, `clearTimeout` the typing wait timer, hide loader icon and hide results area
- set the delay to 750ms
- adjust the results area so it uses the raw data instead of the hardcoded HTML
- return html template and update the `src` for image, title, author username and date
- fix the search results for the number of items found to be dynamic
- `if` statements are not allowed within a **template** literal but you can use **ternary** operator
- update the `href` value for result links


## Sanitizing User Generated HTML on the Front-End

- On the front-end it's a best practice to assume that somehow your back-end was compromised, this way front-end still does not execute malicious javaScript
- `npm install` and `import` **dompurify** to sanitize or automatically remove malicious code that can create a cross site scripting attack
