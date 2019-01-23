var express               = require('express'),
    mongoose              = require('mongoose'),
    passport              = require('passport'),
    bodyParser            = require('body-parser'),
    User                  = require('./models/user'),
    LocalStrategy         = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose'),
    app                   = express();

mongoose.connect('mongodb://localhost:27017/auth_demo_app', {useNewUrlParser: true});


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('express-session')({
  secret: 'Tracy is my favorite pet',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ===================
// ROUTES
// ===================

app.get('/', function(req, res) {
  res.render('home');
});

app.get('/secret', isLoggedIn, function(req, res) {
  res.render('secret');
});

// AUTH ROUTES

// Show sign up form
app.get('/register', function(req, res) {
  res.render('register');
});

// Handling user sign up
app.post('/register', function(req, res) {
  req.body.username;
  req.body.password;
  User.register(new User({username: req.body.username}), req.body.password, function(err, user) {
    if (err) {
      console.log(err);
      res.render('register');
    }
    passport.authenticate('local')(req, res, function() {
      res.redirect('/secret');
    });
  });
});


// LOGIN ROUTES
// Render login form
app.get('/login', function(req, res) {
  res.render('login');
});

// Login logic
app.post('/login', passport.authenticate('local', {
  successRedirect: '/secret',
  failureRedirect: '/login'
}), function(req, res) {
});

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

// app.listen(process.env.PORT, process.env.IP, function() {
app.listen(8080, function() {
  console.log('Server started......');
});