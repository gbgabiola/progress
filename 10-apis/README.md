# Application Programming Interfaces (APIS)

## Goal

- Understand what APIs are and how they work.
- HTTP in Depth
- Calling APIs
- Reading API documentation
- Basic API Authentication
- Server to server communication
- JSON vs. XML, sending data over the wire.


## What are APIs

- **Application Programming Interface (API)**
  - is a set of commands, functions, protocols, and objects that programmers can use to **_create software_** or **_interact with an external system_**
  - it provides developers with **_standard commands_** for performing **_commond operations_** so they do not have write the code from scratch
- APIs to Create Software
  - Apple API to interact to IOS operating system
  - Google API to interact to Android operating system
- APIs to Interact with External System
  - tinder app section for shared friends and interests information came from facebook when you sign in using it. Tinder will have you facebook login details and able to go to facebook servers and interact to bring all this information back to the tinder app
- `cURL` is a way of making an HTTP request through command line.
  - a "Client for URLs", or a way to interact with URL on CLI

## Using the Request Module to Get Data from an API

- `?` everything that comes after it is a parameter or an input
- 2 tiers of API
  - API accessible to the public
  - API only accessible internally (private)
- 200 status code is request success and got a response from the server we are requesting
- use the `request` module to make get request to another server.

## Understanding the JSON Format and Working with JSON

- `JSON` is a data interchange format
  - it makes it easier for servers to talk to each other on the internet and get data in a standardized format
  - is JavaScript Object Notation
  - data is formatted in a key value pair
    - key is similar to the variable name
    - each key value pair store a piece of data
- `XML` eXtensible Markup Language
  - pretty similar to HTML where key is the name of the tag, and the value is the data contained between open and closing tags
  - longer and hard to read
- `JSON.stringify(js object)` method to converts a JavaScript object to a JSON string
- `JSON.parse(string)` method parses a JSON string, constructing the JavaScript value or object described by the string.
- `res.send()` is the last thing you'd send to the browser, if you want to send multiple things, you have to use `res.write()` first then call `res.send()` at the end.

## API Calls with Parameters

- `request` module options
  - `uri` || `url` - fully qualified uri or a parsed url object from `url.parse()`
  - `method` - http method (default: `"GET"`)
  - `qs` object containing querystring values to be appended to the `uri`
  - `headers` - http headers (default: `{}`)
  - `body` - entity body for PATCH, POST and PUT requests. Must be a `Buffer`, `String` or `ReadStream`. If `json` is `true`, then `body` must be a JSON-serializable object.

### Setting Up the Newsletter Page

- use `static` which is a special function of express to serve a static files on the server
  - inside the parenthesis add the name of your static folder

  ```js
  app.use(express.static('public'));
  ```

### Heroku & Mailchimp

- Two Requirements for mailchimp
  1. id list
  2. your api key.
- `merge_fields` are custom fields like `FNAME`, `LNAME`.
- Define a `Procfile` (no extensions) to tell heroku what command to run when it's loaded.
- Log into Heroku using heroku login before you do heroku create then push the subtree.
- https://stackoverflow.com/questions/7539382/how-can-i-deploy-push-only-a-subdirectory-of-my-git-repo-to-heroku to push a subdirectory to heroku.
- https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment
- If you're unable to deploy to heroku, you have to update the heroku remote with the "heroku git:remote -a <name of server>" command. https://devcenter.heroku.com/articles/git#deploying-code


## Resources

- [What is cURL?](https://curl.haxx.se/docs/faq.html#What_is_cURL)
- [Any API](http://any-api.com)
- [HTTP Status Codes](https://httpstatuses.com/)
- [Yahoo Weather API](https://developer.yahoo.com/weather/?guccounter=1)
- [W3Schools JSON vs. XML](https://www.w3schools.com/js/js_json_xml.asp)
- [Chrome Browser Add-on JSON Viewer Awesome](https://www.appbrewery.co/p/web-development-course-resources/Chrome%20Browser%20Addon%20Json%20Viewer%20Awesome)
- [Mailchimp](https://mailchimp.com)
- [Heroku](https://www.heroku.com/))