const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  if (req.query.isAdmin) {
    next();
  }
  res.send('SORRY NOT AN ADMIN!');
});

router.get('/top-secret', (req, res) => {
  res.send('THIS IS TOP SECRET');
});

router.get('/delete-everything', (req, res) => {
  res.send('OK DELETING IT ALL!');
});

module.exports = router;
