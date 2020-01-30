const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res) {
  res.send('Hello');
});

app.get('/contact', function(req, res) {
  res.send('Contact me at: genesis@gmail.com');
});

app.get('/about', function(req, res) {
  res.send('I am Genesis, a Web Developer specializing mostly in JavaScript and his friends.');
});

app.get('/hobbies', function(req, res) {
  res.send('<ul><li>Chess</li><li>Code</li><li>Travel</li></ul>');
});

app.listen(port, function() {
  console.log('Server started on port ' + port);
});