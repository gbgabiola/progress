# Deploying Web Application

## Goal

- Understand hosting and deployment.
- Hosting static websites with GitHub Pages.
- Deploying server based applications with Heroku.
- Deploying Databases with Mongo Atlas.


## How to Deploy Web Apps with a Database

- Differences between a server and a workstation:
  - server has to be online 24/7, so anyone can request data from it can access it no matter what hour of the day, depending on what ISP you're going with, they have strict rules regarding whether you can setup a server using your home internet plan.
- using MongoDB Atlas cloud service you can store your data online, so anyone using your app will be able request data from your database online.

## How to Setup MongoDB Atlas

- When creating a new cluster in Atlas, don't forget to:
  - create a new admin user in Security Database Access
  - and whitelist all addresses in Sucrity Network Access
- Can connect with the Mongo Shell (similar to ssh and running mongo)
- Can also Connect Your Application using Connection Strings Only
  - Need to also replace the connection string in your application
- Better to use Environment Variables to hide your credentials when you upload your source code

## Resources

- Get Started with [MongoDB Atlas](https://www.mongodb.com/download-center/cloud)
- [Deploying an existing application on Heroku](https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment)