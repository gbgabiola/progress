let http = require('http');

let basicApp = http.createServer(function(req, res) {
  if (req.url == '/') {
    res.end('Hello, and welcome to our homepage.');
  }

  if (req.url == '/about') {
    res.end('Thank you for the interest in our company.');
  }

  res.end('We cannot find the page you are looking for.');
});
basicApp.listen(3000);
