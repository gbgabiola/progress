// http://www.omdbapi.com/?i=tt3896198&apikey=thewdb
var express = require('express');
var app = express();
var request = require('request');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('search');
});

app.get('/results', function(req, res) {
  var query = req.query.search;
  var url = 'http://www.omdbapi.com/?s=' + query;
  request(url + '&apikey=thewdb', function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      res.render('results', { data: data });
    }
  });
});


app.listen(8080, function() {
  console.log('Movie App has started!');
});