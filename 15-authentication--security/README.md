# Authentication and Security

## Goal

- Understand the need for authentication and keeping user
details secure.
- Learn about Encryption and use encryption to keep your
database secure.
- Learn and implement Hashing and Salting with bcrypt
- Using Sessions and Cookies to persist user log in sessions.
- Setting up local authentication from scratch.
- Implementing Passport to authenticate users quickly and
effectively.
- Understand and use environment variables to keep secret keys secure.
- Understand and use OAuth 2.0 to log in users using Google and Facebook.


## Introduction to Authentication

- Why Authenticate?
  - as we create webiste/app for users to use, then these users are going to start generating data in the website.
    - they might like certain posts, interact with other users, messages created or recipes created.
  - Create an Account
    - in order to associate those pieces of data with individual users we need to create an account for each user so they would sign up to our website using a username and password and we would essentially create an I.D for them to uniquely identify them on our database and to save all of the data that they generate on to that account. 
  - Log In
    - the next time they come onto the website, they'll be able to use their username and password and login to the website and be able to access all of those possibly private pieces of information.
    - this way you don't end up with everybody being able to see you, know what private messages you're sending on social medias.
  - Restrict Access
    - to certain areas of the website depending on the status of the user. E.g. Spotify or Netflix
    - charge a subscription for accessing certain parts of the website, then once the user pays, you have to update their account in your database to say that they have paid and they'll be allowed to access the, tv shows or songs that they're entitled to.
- **Level 1**: Register Users with Username and Password
  - Create a database of users and store username and password as plain text in the database