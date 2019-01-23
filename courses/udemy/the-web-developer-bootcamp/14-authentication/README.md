# Authentication

## Objectives
#### Intro to Auth
- What tools are we using?
  - Passport 
  - Passport Local
  - Passport Local Mongoose
- Walk through auth flow
- Discuss sessions
  - Express-Session

#### Auth CodeAlong Part 1
- Set up folder structure
- Install needed packages
- Add root route and template
- Add secret route and template

#### Auth CodeAlong Part 2
- Create User model
- Configure passport

#### Auth CodeAlong Part 3
- Add Register routes
- Add Register form

#### Auth CodeAlong Part 4
- Add Login routes
- Add Login form

#### Auth CodeAlong Part 5
- Add Logout Route
- Add isLoggedIn middleware

## Learned
- Intoduced to Passport (passport.js), Passport Local (local scheme), and Passport Local Mongoose module or package
- Sessions allows us to have state in our HTTP request
- Introduce to middleware using `passport.authenticate`
- Create a isLoggedIn middleware which is a function we defined that takes 3 parameters which are `req`, `res`, and `next`. And if things are find and want to move to the next middleware, we can just call `next()`. Then if things are not find, we can redirect to somewhere, or `/login`.
- Note: We can define as many middleware as we want