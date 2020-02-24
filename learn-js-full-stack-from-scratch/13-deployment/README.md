# Deployment

## Push App onto the Web

- Push the app into heroku
- Create a `Procfile` and instruct heroku how to launch the app, E.g. `web: node index.js`


## Sending Email from the App

- Signup to [SendGrid](https://sendgrid.com/ "Email Deliversy Service") and generate an API key
- `npm install` and `require` **@sendgrid/mail**
- Use sendgrid `setApiKey()` method w/ API key to use the API key to make sure you have permission to work with sendgrid account
