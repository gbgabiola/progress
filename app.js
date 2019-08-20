const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.send('Hello');
});

app.listen(PORT, function() {
  console.log('Server is running on port ' + PORT);
});