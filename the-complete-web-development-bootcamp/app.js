const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/databaseName');

app.get('/', function(req, res) {
  res.send('Hello');
});

app.listen(PORT, function() {
  console.log('Server is running on port ' + PORT);
});