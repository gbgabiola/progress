const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;
const DB = process.env.DATABASEURL || 'mongodb://localhost:27017/wikiDB';

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect(DB, { useNewUrlParser: true });

const articleSchema = {
  title: String,
  content: String
};

const Article = mongoose.model('Article', articleSchema);

// Chained Route handlers
/*************** TARGETTING ALL ARTICLES ***************/
app.route('/articles')

.get(function(req, res) {
  Article.find({}, function(err, articles) {
    if (articles) {
      const jsonArticles = JSON.stringify(articles);
      res.send(jsonArticles);
    } else {
      res.send('No articles found.');
    }
  });
})

.post(function(req, res) {
  const newArticle = new Article({
    title: req.body.title,
    content: req.body.content
  });

  newArticle.save(function(err) {
    if (!err) {
      res.send('Successfully added a new article.');
    } else {
      res.send(err);
    }
  });
})

.delete(function(req, res) {
  Article.deleteMany(function(err) {
    if (!err) {
      res.send('Successfully deleted all articles.');
    } else {
      res.send(err);
    }
  });
});


/*************** TARGETTING SPECIFIC ARTICLE ***************/
app.route('/articles/:title')

.get(function(req, res) {
  Article.findOne({ title: req.params.title }, function(err, article) {
    if (article) {
      const jsonArticle = JSON.stringify(article);
      res.send(jsonArticle);
    } else {
      res.send('No articles with that title found.');
    }
  });
})

.put(function(req, res) {
  Article.update(
    { title: req.params.title}, 
    { title: req.body.title, content: req.body.content },
    { overwrite: true },
    function(err) {
      if (!err) {
        res.send('Successfully updated the selected article.');
      } else {
        res.send(err);
      }
    }
  );
})

.patch(function(req, res) {
  Article.update(
    { title: req.params.title },
    { $set: req.body },
    function(err) {
      if (!err) {
        res.send('Successfully updated article.');
      } else {
        res.send(err);
      }
    }
  );
})

.delete(function(req, res) {
  Article.deleteOne({ title: req.params.title }, function(err) {
    if (!err) {
      res.send('Successfully deleted the article.');
    } else {
      res.send(err);
    }
  });
});

app.listen(PORT, function() {
  console.log('Server is running on port ' + PORT);
});