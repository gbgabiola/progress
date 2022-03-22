const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = 3000;

// app.use(morgan('common'));
app.use(morgan('tiny'));
app.use((req, res, next) => {
  // console.log(req.method.toUpperCase());
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});

app.use('/dogs', (reqn, res, next) => {
  console.log('I love dogs!!!');
  next();
});

const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === 'chickennugget') {
    next();
  }
  res.send('You need a password!');
};

// app.use((req, res, next) => {
//   // res.send('Hijacked by my app.use!');
//   console.log('This is my first middleware!!!');
//   return next();
//   console.log('This is my first middleware - after calling next()');
// });

// app.use((req, res, next) => {
//   console.log('This is my second middleware!!!');
//   return next();
// });

// app.use((req, res, next) => {
//   console.log('This is my third middleware!!!');
//   return next();
// });

app.get('/', (req, res) => {
  console.log(`Request Date: ${req.requestTime}`);
  res.send('Home Page!');
});

app.get('/dogs', (req, res) => {
  console.log(`Request Date: ${req.requestTime}`);
  res.send('Woof Woof!');
});

app.get('/secret', verifyPassword, (req, res) => {
  res.send(
    'My secret is: Sometimes I wear headphones in public so I dont have to talk to anyone.'
  );
});

app.use((req, res) => {
  res.status(404).send('Not Found!');
});

app.listen(PORT, () =>
  console.log(`Server is running on localhost:${PORT}...`)
);
