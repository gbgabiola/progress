const mongoose = require('mongoose');
const express = require('express');
const app = express();
const User = require('./models/user');
const bcrypt = require('bcrypt');
const PORT = 3000;

mongoose
  .connect('mongodb://localhost:27017/authApp')
  .then(() => console.log('Mongo Connection Open!!!'))
  .catch(err => {
    console.log('Oh No, Mongo Connection Error!');
    console.log(err);
  });

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('THIS IS THE HOME PAGE');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', async (req, res) => {
  // req.body
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 12);
  const user = new User({
    username,
    password: hash,
  });
  await user.save();
  res.redirect('/');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  const validPassword = await bcrypt.compare(password, user.password);
  if (validPassword) {
    res.send('YAY WELCOME!!!');
  } else {
    res.send('TRY AGAIN!');
  }
});

app.get('/secret', (req, res) => {
  res.send('THIS IS SECRET! YOU CANNOT SEE ME UNLESS YOU ARE LOGGED IN!');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
