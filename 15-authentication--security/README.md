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
- **Level 2**: Database Encryption
  - **encryption** is just scrambling something so that people can't tell what the original, unless they were in on the secret and they knew how to unscramble it
    - sending a secret message to someone and you both had a key to encode and decode the messages
  - **Enigma** machine is used during the world war 2, to encrypt the messages that the Germans send to each other, so when messages are intercepted to the radio, unless you have the same Enigma machine and knew the decoding key, or settings for the machine then you wouldn't be able to tell what's the message was.
  - **Caesar Cipher** is a letter substitution cipher, the key for the cipher is the number of letters that you would shift by.
    - earliest ways of encrypting messages, comes from Julius Caesar who was Roman Empire General, he would send encryped messages to his general, if his messenger got murdered along the way, then his messages would be kept secret.
  - All encryption works exactly the same way, you have a way of scrambling your message and it requires a key to unscramble that message.
  - `mongoose-encryption` package is a simple encryption and authentication that works for mongoose
    - uses a relatively modern encryption algorithm AES, which is far more secure 
    - `npm install mongoose-encryption` to install the package, then require it.
    - make sure to use the proper schema `new mongoose.Schema()`, not just a simple javaScript object, so it will be created from the mongoose Schema class
    - two ways of encrypting database using mongoose-encryption package:
      1. Create an encryption key and a signing key, or
      2. Use a _convenient_ way: a **Secret String Instead of Two Keys**
  - mongoose **Plugins** are package code that you can use to mongoose schemas to extend their functionality.
    - use the schema then add `encrypt` as a plugin to pass the secret as javaScript object: `userSchema.plugin(encypt, { secret: secret });`
    - make sure to add it to the schema before the `mongoose.model`
    - Using **Encrypt Only Certain Fields**: `userSchema.plugin(encypt, { secret: secret, encryptedFields: ['password'] });`



## Resources

- [Mongoose Package](https://www.npmjs.com/package/mongoose)
- [Cryptii](https://cryptii.com/)
- Numberphile Video on Enigma [Part 1](https://www.youtube.com/watch?v=G2_Q9FoD-oQ) and [Part 2](https://www.youtube.com/watch?v=V4V2bpZlqx8)
- [mongoose-encryption package](https://www.npmjs.com/package/mongoose-encryption)
- [Mongoose Documentation](https://mongoosejs.com/docs/guide.html)