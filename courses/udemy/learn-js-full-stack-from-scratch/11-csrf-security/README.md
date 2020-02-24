# CSRF (Security)

- `npm install` and `require` **csurf**
- `use()` method in router to call `csrf()` method so that any request method that modifies the state will need to have a valid csrf token or else the request will be rejected
- setup a middleware to make the csrf token available from within HTML templates
- Handle the error by giving it a simple design instead of showing the forbidden error to the user
- Pass the matching csrf token anywhere that performs a post request
