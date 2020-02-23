# API

## Skeleton for an API

- **Application Programming Interface (API)** allows other applications to communicate with your application
- An API will make the app's functionality accessible through programmatic requests instead of being tightly coupled to a specific environment (web browser).
- Add a router-api file


## JSON Web Tokens

- `npm install` and `require` **jsonwebtoken**
- Use the `sign()` method of jwt w/ three (3) arguments
  - 1st: object you want to store in this token
  - 2nd: secret string of characters that the package will use to generate the token
  - 3rd: object w/ options, like expiration date for tokens
- Use `verify()` method of jwt w/ two (2) arguments to determine if its the valid token that the server generated
  - 1st: token you want to verify, E.g. `req.body.token`
  - 2nd: JWT secret string
- JWT is popular because it allows stateless authentication, which means you don't need to track session data on the server


## CORS

- Cross Origin Resource Sharing (CORS), web browsers will not send off asychronous requests to other domains, unless the other domain permitted it
- `npm install` and `require` **cors** so that users will be able to access API using other domains (like codepen)
