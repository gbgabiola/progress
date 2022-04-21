const express = require('express');
const app = express();
const PORT = 3000;
const cookieParser = require('cookie-parser');
app.use(cookieParser('thisismysecret'));

app.get('/greet', (req, res) => {
  const { name = 'No-name' } = req.cookies;
  res.send(`Hey there, ${name}!`);
});

app.get('/setname', (req, res) => {
  res.cookie('name', 'Bruno');
  res.cookie('animal', 'Harlequin Shrimp');
  res.send('OK, SENT YOU A COOKIE!');
});

app.get('/get-signed-cookie', (req, res) => {
  res.cookie('fruit', 'grape', { signed: true });
  res.send('OK, SIGNED YOUR FRUIT COOKIE!');
});

app.get('/verify-fruit', (req, res) => {
  console.log(req.cookies);
  console.log(req.signedCookies);
  res.send(req.signedCookies);
});

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}...`);
});
