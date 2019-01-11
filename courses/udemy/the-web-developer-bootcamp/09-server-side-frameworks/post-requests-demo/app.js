var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ exnteded: true }));
app.set('view engine', 'ejs');

var friends = ['Tony', 'Miranda', 'Justin', 'Pierre', 'Lily'];

app.get('/', function(req, res) {
  res.render('home');
});

app.post('/addfriend', function(req, res) {
  var newFriend = req.body.newfriend;
  friends.push(newFriend);
  res.redirect('/friends');
});

app.get('/friends', function(req, res) {
  res.render('friends', {friends: friends});
});

// app.listen(process.env.PORT, process.env.IP, function() {
app.listen(8080, function() {
  console.log('Server started!!!');
});