let express = require('express');
let app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.send(`
  <form action="/answer" method="POST">
    <p>What color is the sky on a clear and sunny day?</p>
    <input name="skyColor" autocomplete="off">
    <button>Submit Answer</button>
  </form>
  `);
});

app.post('/answer', function(req, res) {
  if (req.body.skyColor.toUpperCase() == 'BLUE') {
    res.send(`
    <p>Congrats, that is the correct answer!</p>
    <a href="/">Back to homepage</a>
    `);
  } else {
    res.send(`
    <p>Sorry, that is incorrect.</p>
    <a href="/">Back to homepage</a>
    `);
  }
});

app.get('/answer', function(req, res) {
  res.send('Are you lost? There is nothing to see here.');
});

app.listen(3000);
