# REST APIs

## Goal

- Understand REST and guiding principles behind API design.
- Learn to work with a MongoDB GUI Robo 3T
- Implementing GET, POST, PUT, PATCH and DELETE by creating a public API from scratch.
- Understand and use chained route handlers from Express.


## REST

- **RE**presentational **S**tate **T**ransfer
- REST is an architectural style
  -  e.g. SOAP, REST, GraphQL, FALCOR
- Roy Fielding and his team had one objective: create a standard so that any server could talk to any other server in the world, then created the term REST API
- lots of rules that an API has to follow to be RESTful
  - Use HTTP Request Verbs/Language
  - Use Specific Pattern of Routes/Endpount URLs
- HTTP Verbs/Language: `GET`, `POST`, `PUT`, `PATCH` (NEW) AND `DELETE`
- `GET` = `READ`, `POST` = `CREATE`, `PUT` `PATCH` = `UPDATE`, `DELETE` = `DELETE`
- `PUT` vs `PATCH`
  - `PUT` update entire entry
  - `PATCH` update a particular field in that entry.


## RESTful Routing

| HTTP Verbs | /articles                    | /articles/genesis                  |
| :--------: | :--------------------------: | :--------------------------------: |
| **GET**    | Fetches **all** the articles | Fetches **the** article on genesis
| **POST**   | Creates **one** new article  | -
| **PUT**    | -                            | Updates **the** article on genesis
| **PATCH**  | -                            | Updates **the** article on genesis
| **DELETE** | Delete **all** the articles  | Deletes **the** article on genesis

## GET route and CRUD READ

```js
// GET route
app.get(route, function(req, res) {

});

// CRUD READ
<ModelName>.find({conditions}, function(err, results) {
  // Use the found results docs.
});
```

## POST route and CRUD CREATE

```js
// POST route
app.post(route, function(req, res) {

});

// CRUD CREATE
const <constantName> = new <ModelName> ({
  <fieledName> : <fieldData>,
  ...
});
<constantName>.save();
```

## DELETE route and CRUD DELETE

```js
// DELETE route
app.delete(route, function(req, res) {

});

// CRUD DELETE
<ModelName>.deleteMany({conditions}, function(err) {
  ...
});
```

## Chained Route Handlers using Express

You can create chainable route handlers for a route path by using `app.route()`. Because the path is specified at a single location, creating modular routes is helpful, as is reducing redundancy and typos. 

```js
app.route('/')

.get(function(req, res) {
  ...
})

.post(function(req, res) {
  ...
})

.delete(function(req, res) {
  ...
});
```

## PUT route and CRUD UPDATE

```js
// PUT route
app.put(route, function(req, res) {

});

// CRUD UPDATE
<ModelName>.update({conditions}, {updates}, {overwrite: true}, function(err, results) {

});
```

## PATCH route and CRUD UPDATE

```js
// PATCH route
app.patch(route, function(req, res) {

});

// CRUD UPDATE
<ModelName>.update({conditions}, {$set: updates}, function(err, results) {

});
```

## Resources

- [Download Robo 3T](https://robomongo.org/download)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Download Postman](https://www.getpostman.com/downloads/)
- [Express Documentation](https://expressjs.com/en/guide)