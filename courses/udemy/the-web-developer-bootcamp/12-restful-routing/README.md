# RESTful Routing

## Objectives
#### Introduction
- Define REST and explain WHY it matters
- List all 7 RESTful routes
- Show example of RESTful routing in practice

#### Blog Index
- Setup the Blog App
- Create the Blog model
- Add INDEX route and template

#### Basic Layout
- Add Header and Footer Partials
- Include Semantic UI
- Add Simple Nav

#### Putting the C in CRUD
- Add NEW route
- Add NEW template
- Add CREATE route
- Add CREATE template

#### SHOWtime
- Add Show route
- Add Show template
- Add links to show page
- Style show template

#### Edit/Update
- Add Edit Route
- Add Edit Form
- Add Update Route
- Add Update Form
- Add Method-Override

#### DESTROYYYYYY
- Add Destroy Route
- Add Edit and Destroy Links

#### Final Updates
- Sanitize blog body
- Style Index
- Update REST Table

## Learned
- REST (Representational Estate Transfer) is a convention, its an architecture for mapping (structuring) HTTP routes to CRUD functionality
- Used a different css framework which is semantic-ui
- Using a dash(`<%- %>`) instead of equals (`<%= %>`) to run the code and render the result
- Transform the date into a better format using `.toDateString()`
- Review the `substring()` method
- Learned about why forms doesn't accept PUT and DELETE request and only accept GET and POST request
- Method-Override listen for underscore method (`_method=PUT`) to override the current method which is a workaround to make it work on forms
- Introduce to express-sanitizer which is a express middleware to remove potential risk by a script that can be written from a snippet of html
- Learned more about the 7 restful routes which are index, new, create, show, edit, update and destroy route


#### RESTful Routes
A table of all 7 RESTful routes

| Name    | PATH           | HTTP verb | Purpose                                          |
| ------- | -------------- | --------- | ------------------------------------------------ |
| Index   | /dogs          | GET       | List all dogs                                    |
| New     | /dogs/new      | GET       | Show new dog form                                |
| Create  | /dogs          | POST      | Create a new dog, then redirect somewhere        |
| Show    | /dogs/:id      | GET       | Shows info about one specific dog                |
| Edit    | /dogs/:id/edit | GET       | Show edit form for one dog                       |
| Update  | /dogs/:id      | PUT       | Update a particular dog, then redirect somewhere |
| Destroy | /dogs/:id      | DELETE    | Delete a particular dog, then redirect somewhere |