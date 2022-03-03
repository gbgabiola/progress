const { v4: uuid } = require('uuid');
const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const PORT = 3000;
const app = express();

// To parse incoming JSON in POST request body:
app.use(express.json());
// To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }));
// To 'fake' put/patch/delete requests:
app.use(methodOverride('_method'));
// Views folder and EJS setup:
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Fake database
let comments = [
  {
    id: uuid(),
    username: 'Todd',
    comment: 'lol that is so funny!',
  },
  {
    id: uuid(),
    username: 'Skyler',
    comment: 'I like to go birdwatching with my dog',
  },
  {
    id: uuid(),
    username: 'Sk8erBoi',
    comment: 'Plz delete your account, Todd',
  },
  {
    id: uuid(),
    username: 'onlysayswoof',
    comment: 'woof woof woof',
  },
];

// *******************************************
// Index - renders multiple comments
// *******************************************
app.get('/comments', (req, res) => {
  res.render('comments/index', { comments });
});

// *******************************************
// NEW - renders a form
// *******************************************
app.get('/comments/new', (req, res) => {
  res.render('comments/new');
});

// *******************************************
// CREATE - creates a new comment
// *******************************************
app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect('/comments');
});

// *******************************************
// SHOW - details about one particular comment
// *******************************************
app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  const comment = comments.find(c => c.id === id);
  res.render('comments/show', { comment });
});

// *******************************************
// EDIT - renders a form to edit a comment
// *******************************************
app.get('/comments/:id/edit', (req, res) => {
  const { id } = req.params;
  const comment = comments.find(c => c.id === id);
  res.render('comments/edit', { comment });
});

// *******************************************
// UPDATE - updates a particular comment
// *******************************************
app.patch('/comments/:id', (req, res) => {
  const { id } = req.params;
  const foundComment = comments.find(c => c.id === id);
  // Get new text from req.body
  // Update the comment with the data from req.body:
  const newCommentText = req.body.comment;
  foundComment.comment = newCommentText;
  res.redirect('/comments');
});

// *******************************************
// DELETE/DESTROY- removes a single comment
// *******************************************
app.delete('/comments/:id', (req, res) => {
  const { id } = req.params;
  comments = comments.filter(c => c.id !== id);
  res.redirect('/comments');
});

app.get('/tacos', (req, res) => {
  res.send('GET /tacos response');
});

app.post('/tacos', (req, res) => {
  const { meat, qty } = req.body;
  res.send(`OK, here are your ${qty} ${meat} tacos.`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});

// GET /comments - List all comments
// POST /comments - Create a new comment
// GET /comments/:id - Get one comment (using ID)
// PATCH /comments/:id - Update one comment
// DELETE /comments/:id - Destroy one comment
