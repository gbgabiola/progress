# User Created posts

## Letting Users Create Posts

- Add a GET route to go to a form to create post
- Add a partials for header and footer
- Refactor the code by removing duplicate codes
- Add a POST route for the user to create a post


## Post Model

- Created a cleanUp, validate, and create `prototype` for the **Post** model, then `export` it
- `ObjectID` is a tool of the mongoDB package, so you can pass a simple string of text then it will return it as a special `ObjectID` object type


## Viewing a Post

- Add a GET route for `/post/:id`
- Changed `main.css` to `/main.css` to fix unstyled view
- `req` object has parameters object, E.g. `req.params`
- `req.params.id` corresponds with `:id` or the dynamic part that was set up in the router
- pull the real data/content from database to template and display it in the browser


## Performing a Lookup in MongoDB

- Add a 404 template to display when accessing a non-existing URL
- `aggregate()` is great for performing complex operation and it's great for running multiple operations, w/ array of database operation
  - 1st object: `$match` describing a document to match with
  - 2nd object: `$lookup` with `from`, `localField` which is current collection, `foreignField` is the other collection we're trying to lookup within, and `as`
  - 3rd object: `project` w/ title, body, createdDate and author properties


## User Profile Screen

- Add a profile template w/ a static content
- Add a route for this content
- Change the content dynamically coming from the database


## View Posts by Author

- Pull all the post data of the user in its profile
- `$sort` to sort things like post then add a value of one (1) for ascending order or two (2) for descending order


## Update An Existing Post

- Check if the the current visitor is the owner of the post
- `equals()` method returns **Boolean** `true` or `false`
- Add additional route for the edit form just like the create post form
- Create another template for edit just like create post form
- Update contents of the edit form template dynamically
- Set a condition to only show edit/delete to the owner of the post
- Set a flash message for failed (red) and success (green) update
- Make all error/success flash messages available from all templates


## Miscellaneous Improvements

- Kick the user that is not the owner of the post on accessing the edit form and redirect to the home dashboard
- Fix the form when you submit it instead of just sending a text, we redirect the user to the view post for this new URL and have a green success message
- `npm install` and `require` **marked** to have an access for markdown
- Make the markdown function available from within ejs templates using `locals`
- `npm install` and `require` **sanitize-html**
- sanitize the title and body content of the post by setting the `allowedTags` and `allowedAttributes` into empty `[]` and `{}`


## Deleting An Exisiting Post

- Check if the the current visitor is the owner of the post
- Add additional route for the delete form
- Set a flash message for failed (red) and success (green) delete
