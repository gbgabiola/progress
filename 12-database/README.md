# Database Fundamentals

## Goal

- Data Relationships
- Designing a Data Model
- Relational Databases
- Alternative Databases
- Entity Relationship Modelling (ERM) and Object Relational Mapping (ORM)

### Databases Explained: SQL vs NOSQL

- main difference between databases is whether if they are SQL or NoSQL based
- **SQL (Structured Query Language)** are old school database that businesses have been using for many years
  - relational
  - SQL database will group your data into tables
  - good relationship between data
  - use SQL
    - store data: orders, customer details, products, inventory
    - a lot of relationships
- **NoSQL (Not only Structured Query Language)** can be any format as long as it's not SQL but many of them follow a very similar structure.
  - non relational
  - NoSQL database will represent your data as object with key value pairs
  - use NoSQL
    - one to many relationship
    - user makes a lot of posts, easier to map out using NOSQL
    - NoSQL is more scalable than SQL
- common database when working with nodejs
  - SQL - MySQL and PostgreSQL
  - NoSQL - mongoDB and redis

| MySQL                    | MongoDB                              |
| :----------------------: | :---------------------------------: |
| More Mature              | Shiny and New
| Table Structure          | Document Structure
| Require a Schema         | More Flexible to Changes
| Great with Relationships | Not Great with Complex Relationships
| Scales Vertically        | Horizontally Scalable


## SQL (Structured Query Language)

### Goal

- Working with Database Schemas
- Create-Read-Update-Destroy (CRUD)
- Database Joins
- Querying SQL databases

### Commands: CREATE table and INSERT Data

- Main Things to do with database are **CRUD**:
  - **C**reate
  - **R**ead
  - **U**pdate
  - **D**estroy 
- `CREATE TABLE` statement is used to create a new table in a database.
- `SQL PRIMARY KEY` constraint allows particular column to uniquely identifies each record in a database
- `NOT NULL` constraint enforces a column to NOT accept NULL values.
- `INSERT INTO` statement is used to insert new records in a table and has two ways to do it.
  1. specify both the column names and the values to be inserted:

    ```sql
    INSERT INTO table_name (column1, column2, column3, ...)
    VALUES (value1, value2, value3, ...);
    ```

  - If you are adding values for all the columns of the table, you do not need to specify the column names in the SQL query.

    ```sql
    INSERT INTO table_name
    VALUES (value1, value2, value3, ...);
    ```

### Commands: READ, SELECT, and WHERE

- `SELECT` statement is used to select data from a database.
  - The data returned is stored in a result table, called the result-set.
  
  ```sql
  SELECT column1, column2, ...
  FROM table_name;
  ```

- `*` or asterisk is a wildcard, means elect everythung from the selected table

  ```sql
  SELECT * FROM table_name;
  ```

- `WHERE` clause is used to filter or extract only those records that fulfill a specified condition.

  ```sql
  SELECT column1, column2, ...
  FROM table_name
  WHERE condition;
  ```

| Operator     | Description                                      |
| :----------- | :----------------------------------------------- |
| `=`          | Equal
| `>`          | Greater than
| `<`          | Less than
| `>=`         | Greater than or equal
| `<=`         | Less than or equal
| `<>` or `!=` | Not equal
| `BETWEEN`    | Between a certain range
| `LIKE`       | Search for a pattern
| `IN`         | To specify multiple possible values for a column

=	Equal	
>	Greater than	
<	Less than	
>=	Greater than or equal	
<=	Less than or equal	
<>	Not equal. Note: In some versions of SQL this operator may be written as !=	
BETWEEN	Between a certain range	
LIKE	Search for a pattern	
IN	To specify multiple possible values for a column

### Updating Single Values and Adding Columns

- `UPDATE` statement is used to modify the existing records in a table.
  
  ```sql
  UPDATE table_name
  SET column1 = value1, column2 = value2, ...
  WHERE condition;
  ```

- `ALTER TABLE` statement is used to add, delete, or modify columns and also add and drop various constraints on an existing table.

  ```sql
  ALTER TABLE table_name
  ADD column_name datatype;
  ```

- `DELETE` statement is used to delete existing records in a table.

  ```sql
  DELETE FROM table_name WHERE condition;
  ```

- **NOTE**:
  - Remember to add `WHERE` when using `DELETE`

### Understanding SQL Relationships, Foreign Keys and Inner Joins

- `SQL FOREIGN KEY` is a key used to link two tables together.
  - `FOREIGN KEY` is a field (or collection of fields) in one table that refers to the `PRIMARY KEY` in another table.
  - The table containing the foreign key is called the child table, and the table containing the candidate key is called the referenced or parent table.


"Persons" table:

| PersonID | LastName  | FirstName | Age |
| :------- | :-------- | :-------- | :-- |
| 1        | Hansen    | Ola       | 30  |
| 2        | Svendson  | Tove      | 23  |
| 3        | Pettersen | Kan       | 20  |

"Orders" table:

| OrderID | OrderNumber | PersonID |
| :------ | :---------- | :------- |
| 1       | 77895       | 3
| 2       | 44678       | 3
| 3       | 22456       | 2
| 4       | 24562       | 1

Notice that the "PersonID" column in the "Orders" table points to the "PersonID" column in the "Persons" table.

The "PersonID" column in the "Persons" table is the PRIMARY KEY in the "Persons" table.

The "PersonID" column in the "Orders" table is a FOREIGN KEY in the "Orders" table.

The FOREIGN KEY constraint is used to prevent actions that would destroy links between tables.

The FOREIGN KEY constraint also prevents invalid data from being inserted into the foreign key column, because it has to be one of the values contained in the table it points to.

- `INNER JOIN` keyword selects records that have matching values in both tables.

  ```sql
  SELECT column_name(s)
  FROM table1
  INNER JOIN table2
  ON table1.column_name = table2.column_name;
  ```


## MongoDB

### Goal

- Serialization
- How to model NoSQL data
- Document Databases (MongoDB)
- Create-Read-Update-Destroy (CRUD)
- NoSQL Best Practices
- Mongo Shell and command line use
- Installing MongoDB
- Mapping relationships with MongoDB
- Using an object-data modelling library (Mongoose) to work easily with your data.

### MongDB CRUD Operations in the Shell: Create

- use the quick start guide to install mongoDB.
- run `mongod` to start the local server for mongo database
- run `mongo` to enter in mongoDB shell which is a way for us to interact with our databases on our local system using command line
- `>` represent that you're already in mongo shell
- use `help` command in the mongoDB shell to show a list of all commands
- `show dbs` will lists all the database name that currently have on local system
- `use <name of DB>` to create a new database, note that it won't appear when you run the `show dbs` command until it has some data in it.
- run `db` to show current database
- methods to insert documents into a collection:
  - `insertOne` or `insertMany()` method
- `collection` is the name of the collection
- `db.collection.insertOne()` if doesn't currently exist by writing that line it will create the collection
- collections are like tables in the SQL databases. It can hold multiple JSON documents.
  - are collection of documents, a document is just a single data record, single row in the SQL database
- `show collections` to show all collections in current database

### MongoDB CRUD Operations in the Shell: Reading & Queries

- use `find()` method to read data on database; `db.collection.find()`
  - inside the `find` method you can pass a query filter or criteria
  - accepts two parameters, `query` and `projection` which both are optional
- Query Selectors
  - Comparison
    - `$eq` matches values that are equal to specified value
    - `$gt` matches values that are greater than value
    - `$gte` matches values greater than or equal to
    - `$lt` matches values less than
    - `$lte` matches values less than or equal
  - Logical
    - `$and` joins query clauses with a logical **AND** and returns all documents that match the conditions of both clauses
    - `$or` joins query clauses with a logical **OR**
    - `$not` inverts the effect of a query expression and returns that do not match
  - `db.products.find({price: {$gt: 1}})` find all documents where price is greater than 1
  - second parameter inside `find` method is a way for us to specify which fields in the data do we want back, by default it's set to `true`
  - **Fields** or attributes are similar to columns in a SQL table.
- `{}` is an empty document.

### MongoDB CRUD Operations in the Shell: Update

- use `db.collection.updateOne()` to update one of the records
- `$set` to set a new field and value into the document
  - `db.collection.updateOne({_id: 1}, {$set: {stock: 12}})` to add another field called stock with a value of 12, on the id matches that matches 1

### MongoDB CRUD Operations in the Shell: Delete

- `db.collection.deleteOne()`
  - `db.collection.deleteOne({_id: 2})` will delete the record that matches id: 2
- `db.dropDatabase()` to delete database, make sure you're inside the database you want to delete

### Relationships in MongoDB

- every document is represented by a set of curly braces (`{}`)
- the style of embedding documents in each other is well suited to one to many relationship
  - one product can have many reviews
  - one user can create many comments

  ```js
  db.products.insert(
    {
      _id: 3,
      name: "Rubber",
      price: 1.30,
      stock: 43,
      reviews: [
        {
          author: "Sally",
          rating: 5,
          review: "Best rubber ever!"
        },
        {
          author: "John",
          rating: 5,
          review: "Awesome rubber!"
        }
      ]
    }
  )
  ```

- another format is two products/documents on a products collection, pen and pencil and they have unique identifying ID which is 1 and 2 respectively
- and then a collection of orders
  - with orderNumber and productsOrdered which is an array that references the ID of the products/documents in the products collection

```js
{
  _id: 1,
  name: "Pen",
  price: 1.20,
  stock: 32
}

{
  _id: 2,
  name: "Pencil",
  price: 0.80,
  stock: 12
}

{
  orderNumber: 3243,
  productsOrdered: [1, 2]
}
```

### Working with The Native MongoDB Driver

- when creating a node app that needs to connect to a mongo database there are two options to choose from: **MongoDB Native Driver** or **ODM (Object Document Modeler/Mapper/Manager)** which one is **mongoose** package
  - driver will enable mongoDB to interact with our application, depending on which language the application was developed you'll need to use a different driver
- MongoDB Native Driver
  - most developers rarely use Native MongoDB Driver, it's not because it's not good
  - it works and allows a lot of personalization and set the mongoDB database with a high level control


## Mongoose

- **Mongoose** is an Object Data Modeler/Mapper/Manager (ODM) for Node. 
  - provides a simple validation query API to help you interact with MongoDB database.
  - objective is to simplify the writing of validation code, business logic boilerplate and to make the code shorter and easier to work.
  - think of mongoose as an organizer, when data comes back from the client, mongoose validates and structures your data based on your model(schema). You will always know how & what data is being stored in your database.
- **Schema** is the document data structure and validation that is enforced via the application layer.
  - let's say you have a sign up form on your page. You may not want to allow certain characters in the user name, or you may want to ensure the email address is valid when stored in your database.
- **Models** are higher-order constructors that take a schema and create an instance of a document equivalent to records in a relational database.
  - when saved, creates a Document in MongoDB with the properties as defined by the schema it is derived from.
- `mongoose.connections.close` to close the database once we're done with it is a good practice
- `min`: Number, creates a validator that checks if the value is greater than or equal to the given minimum.
- `max`: Number, creates a validator that checks if the value is less than or equal to the given maximum.
- `required` enable/disable the validator, or function that returns required boolean, or options object
  - Parameters: required, [message] -> optional custom error message
- `Model.updateOne()` Same as `update()`, except it does not support the `multi` or `overwrite` options.
  - Parameters: filter, doc, [options]
- `Model.deleteOne()` deletes the first document that matches `conditions` from the collection. Behaves like `remove()`, but deletes at most one document regardless of the `single` option.
  - Parameters: conditions, [options], [callback]
- `Model.deleteMany()` deletes all of the documents that match `conditions` from the collection. Behaves like `remove()`, but deletes all documents that match `conditions` regardless of the `single` option.
  - Parameters: condition, [options], [callback]
- `Model.findOne()` finds one document
  - Parameters: [condition], [projection], [options], [callback]
- `Model.findOneAndRemove()` finds a matching document, removes it, passing the found document (if any) to the callback.
  - Parameters: conditions, [options], [callback]
- `Model.findOneAndUpdate()` finds a matching document, updates it according to the `update` arg, passing any `options`, and returns the found document (if any) to the callback. The query executes if `callback` is passed else a Query object is returned.
  - Parameters: [conditions], [update], [options], [callback]
-  `$pull` operator from mongoDB removes from an existing array all instances of a value or values that match a specified condition.
   -  `{ $pull: { <field1>: <value|condition>, <field2>: <value|condition>, ... } }`


## Resources

- [Kristof Kovacs' database comparison](https://kkovacs.eu/cassandra-vs-mongodb-vs-couchdb-vs-redis)
- [Internet Live Stats](http://www.internetlivestats.com/) - Internet Usage & Social Media Statistics
- [W3School SQL Documentation](https://www.w3schools.com/sql/)
- [SQL Plaground](https://sqliteonline.com/)
- [MongoDB Documentation](https://docs.mongodb.com/guides/)
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [MongoDB NodeJS Driver](https://mongodb.github.io/node-mongodb-native/)
- [Mongoose: an alternative to the native MongoDB driver](https://mongoosejs.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/guide.html)