const express = require('express');
const app = express();
const PORT = 3000;
const session = require('express-session');

const sessionOptions = {
  secret: 'thisisnotagoodsecret',
  resave: false,
  saveUninitialized: false,
};
app.use(session(sessionOptions));

app.get('/view-count', (req, res) => {
  if (req.session.count) {
    req.session.count += 1;
  } else {
    req.session.count = 1;
  }
  res.send(`You have viewed this page ${req.session.count} times.`);
});

app.get('/register', (req, res) => {
  const { username = 'Anonymous' } = req.query;
  req.session.username = username;
  res.redirect('/greet');
});

app.get('/greet', (req, res) => {
  const { username } = req.session;
  res.send(`Welcome back, ${username}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}...`);
});
