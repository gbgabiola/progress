const bcrypt = require('bcrypt');
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const User = require('./models/user');
const PORT = 3000;
const app = express();

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
app.use(session({ secret: 'notagoodsecret' }));

const requireLogin = (req, res, next) => {
  if (!req.session.user_id) {
    return res.redirect('/login');
  }
  next();
};

app.get('/', (req, res) => {
  res.send('THIS IS THE HOME PAGE');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 12);
  const user = new User({
    username,
    password: hash,
  });
  await user.save();
  req.session.user_id = user._id;
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
    req.session.user_id = user._id;
    res.redirect('/secret');
  } else {
    res.redirect('/login');
  }
});

app.post('/logout', (req, res) => {
  // req.session.user_id = null;
  req.session.destroy();
  res.redirect('/login');
});

app.get('/secret', requireLogin, (req, res) => {
  res.render('secret');
});

app.get('/topsecret', requireLogin, (req, res) => {
  res.send('Top Secret');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
