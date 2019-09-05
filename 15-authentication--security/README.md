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
- **Level 1**: **Register Users with Username and Password**
  - Create a database of users and store username and password as plain text in the database
- **Level 2**: **Database Encryption**
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
- **Environment Variables** to keep secrets safe
  - a simple file to keep sensitive variables such as encryption keys and API keys
  - `doenv` package loads environment variables from `.env` file into `process.env`.
  - require and config the package as early as possible `require('dotenv').config()`
  - create a `.env` file in the root directory then add environment variables in the form of `NAME=VALUE`. E.g. `DB_HOST=localhost`
  - add the `node_modules` and `.env` file into `.gitignore` file
  - For deployment: you can add the environment variables as Config Variables into the their platform
- **Level 3**: **Hashing Passwords**
  - no longer requires an encryption key,
  - **`hash`** functions are mathematical equations that are designed to make it almost impossible to go backwards or turn hash back into a password.
  - turn the password into a hash and store that hash into the database
  - password you typed produced a hash and compared it against the hash that we have stored in the database
  - if those two hashes match then that must mean the  login password is the same as the registration password as well. And at no point in this process we store their password in plaintext or we abe to reverse the process to figure out the original password.
  - `md5` package is a JavaScript function for hashing messages with MD5 which is a hashing algorithm
- **Hacking 101**
  - when hashing as a mathematical formula, number of your password increases the computation time it will take to crack it increases exponentially
  - strong password with uppercase, lowercase, numbers, symbols, but most importantly long password
  - don't use a dictionary word to avoid **dictionary attack**
  - [Hash Toolkit Decrypter](https://hashtoolkit.com) to decrypt / reverse a hash in various formats into their original text.
- **Level 4**: **Salting and Hashing Passwords with bcrypt**
  - **Salting** generate a random set of characters along with the user's password gets combined then put through the **hash** function.
  - **bcrypt** is another hashing algorithm which is the industry standard hashing algorithms that developers use to keep the user's passwords safe.
  - **Salt rounds** concept is the number of time combing salting and hashing.
    - every increase in the rounds, the amount of time that it takes to hash your password doubles.
  - `bcrypt` package is peculiar about the version compatibility with node, check your node by: `node --version`
- **Level 5**: **Cookies** and **Sessions** are used to store information
  - **Cookies** are only stored on the client-side machine
  - while **sessions** get stored on the client as well as a server.
  - **Session** creates a file in a temporary directory on the server where registered **session** variables and their values are stored
  - require `express-session`, `passport` & `passport-local-mongoose`
  - `express-session` package stores only a session identifier on the client within a cookie and stores the session data on the server, typically in a database.
    - **Middleware**
    - In a Connect or Express-based application, `passport.initialize()` middleware is required to initialize Passport. If your application uses persistent login sessions, `passport.session()` middleware must also be used.
    - `secret` is used to sign the session ID cookie
    - `resave` forces the session to be saved back to the session store, even if the session was never modified during the request
    - `saveUninitialized` forces a session to be saved to the store.
  - `passport-local` package is a Username and password authentication strategy for Passport and Node.js
  - `passport` package is Express compatible authentication middleware for Node.js.
    - Passport's sole purpose is to authenticate requests, which it does through an extensible set of plugins known as _strategies_
    - Passport does not mount routes or assume any particular database schema, which maximizes flexibility and allows application-level decisions to be made by the developer
    - API is simple: you provide Passport a request to authenticate, and Passport provides hooks for controlling what occurs when authentication succeeds or fail
  - `passport-local-mongoose` package is a Mongoose plugin that simplifies building username and password login with Passport
    - `createStrategy()` Creates a configured passport-local `LocalStrategy` instance that can be used in passport.
    - `serializeUser()` Generates a function that is used by Passport to serialize users into the session
    - `deserializeUser()` Generates a function that is used by Passport to deserialize users into the session
    - `register(user, password, cb)` Convenience method to register a new user instance with a given password. Checks if username is unique.
- **level 6**: OAuth 2.0 API
  - **OAuth (Open Authorization)** is an open standard for token-based authentication and authorization.
  - allows an end user's account information to be used by third-party services, such as Facebook, Twitter, Google and etc, without exposing the user's password
  - Why OAuth?
    1. **Granular Access Levels** can access specific things from the third-party service
    2. **Read/Read+Write Access**
    3. **Revoke Access**
  - How it Works
    1. **Step 1: Setup Your App** in their developer console and in return will get an app or client ID, then will make their request to third-party service to authenticate our user
    2. **Step 2: Redirect to Authentication** can give them an option to log in with third-party services
    3. **Step 3: User Logs In** on the third-party service they chose
    4. **Step 4: User Grants Permissions** review the permission that our app/site is asking for.
    5. **Step 5: Receive Authorization Code** from the third-party service you have chosen, and allow us to check to make sure the user actually successfully signed on to third-party service
    6. **Step 6: Exchange AuthCode for Access Token** and save it into our database, this is valid for a lot longer than the authentication token
  - `passport-google-oauth20` module lets you authenticate using Google in your Node.js applications. By plugging into Passport, Google authentication can be easily and unobtrusively integrated into any application or framework that supports Connect-style middleware, including Express


## Resources

- [Mongoose package](https://www.npmjs.com/package/mongoose)
- [Cryptii](https://cryptii.com/)
- Numberphile Video on Enigma [Part 1](https://www.youtube.com/watch?v=G2_Q9FoD-oQ) and [Part 2](https://www.youtube.com/watch?v=V4V2bpZlqx8)
- [mongoose-encryption package](https://www.npmjs.com/package/mongoose-encryption)
- [Mongoose Documentation](https://mongoosejs.com/docs/guide.html)
- [Bad Things Happen When You Don't Secure Your API Keys](https://www.theregister.co.uk/2015/01/06/dev_blunder_shows_github_crawling_with_keyslurping_bots/)
- [Developer AWS gets used by Litecoin miners](http://vertis.io/2013/12/16/unauthorised-litecoin-mining.html)
- [dotenv package](https://www.npmjs.com/package/dotenv)
- [gitignore and directories](https://stackoverflow.com/questions/22924633/gitignore-is-not-ignoring-directories)
- [MD5 package](https://www.npmjs.com/package/md5)
- [Plaintext Offenders](https://plaintextoffenders.com/)
- [Have I Been Pwned](https://haveibeenpwned.com/): Check if your email has been compromised in a data breach
- [Most common passwords list by PasswordRandom](https://www.passwordrandom.com/most-popular-passwords)
- [List of the most common passwords by Wikipedia](https://en.wikipedia.org/wiki/List_of_the_most_common_passwords)
- [Check if your password is compromised](https://haveibeenpwned.com/)
- [Password Strength Checker](http://password-checker.online-domain-tools.com/)
- [Hacker Typer](http://hackertyper.com/)
- [Node Website](https://nodejs.org/en/)
- [Passport Documentation](http://www.passportjs.org/docs/downloads/html/)
- [Passport Stategies](http://www.passportjs.org/packages/)
- [Passport strategy with Google using OAuth 2.0 API](http://www.passportjs.org/packages/passport-google-oauth20/)