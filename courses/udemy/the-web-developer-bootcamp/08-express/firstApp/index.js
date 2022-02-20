const express = require('express');
const app = express();
const PORT = 3000;

// app.use((req, res) => {
//   console.log('We Got A New REQUEST!');
//   // console.dir(req);
//   // res.send('Hello, we got your request!');
//   res.send('<h1>This is my webpage!</h1>');
// });

app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
});

app.get('/r/:subreddit/:postId', (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`);
});

app.post('/cats', (req, res) => {
  res.send('POST Request to /cats! This is different than a GET Request!');
});

app.get('/cats', (req, res) => {
  res.send('MEOW!');
});

app.get('/dogs', (req, res) => {
  res.send('WOOF!');
});

app.get('/search', (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send('Nothing Found If Nothing Searched!');
  } else {
    res.send(`<h1>Search results for: ${q}</h1>`);
  }
});

app.get('*', (req, res) => {
  res.send(`I don't know that path!`);
});

// /cats => 'meow'
// /dogs => 'woof'
// '/'

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
