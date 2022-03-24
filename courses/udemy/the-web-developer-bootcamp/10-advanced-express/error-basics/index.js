const express = require('express');
const app = express();
const morgan = require('morgan');
const AppError = require('./AppError');
const PORT = 3000;

app.use(morgan('tiny'));
app.use((req, res, next) => {
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
  // res.send('You need a password!');
  throw new AppError('Password required!', 401);
};

app.get('/', (req, res) => {
  console.log(`Request Date: ${req.requestTime}`);
  res.send('Home Page!');
});

app.get('/error', (req, res) => {
  chicken.fly();
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

app.get('/admin', (req, res) => {
  throw new AppError('You are not an Admin!', 403);
});

app.use((req, res) => {
  res.status(404).send('Not Found!');
});

// app.use((err, req, res, next) => {
//   console.log('******************************************');
//   console.log('*********************ERROR*********************');
//   console.log('******************************************');
//   // res.status(500).send('Oh boy, we got an error!!!');
//   console.log(err);
//   next(err);
// });

app.use((err, req, res, next) => {
  const { status = 500, message = 'Something went wrong!' } = err;
  res.status(status).send(message);
});

app.listen(PORT, () =>
  console.log(`Server is running on localhost:${PORT}...`)
);
