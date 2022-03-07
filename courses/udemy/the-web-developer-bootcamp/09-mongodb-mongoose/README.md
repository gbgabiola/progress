# MongoDB and Mongoose

## Table of Contents <!-- omit in toc -->

- [Topics](#topics)
- [MongoDB](#mongodb)


## Topics

- **Crucial**
  - **Installation**
  - The Mongo Shell
  - _Mongo Inserts_
  - _Mongo Finding/Querying_
  - _Mongo Updates_
  - _Mongo Deletions_
- **Important**
  - Databases Basics
  - SQL vs. NoSQL
- **Nice To Have**


## MongoDB

### Mongo

- According to Mongo's homepage, it is "the most popular database for modern applications"
  - It is commonly used in combination with Node
- Mongo is a document database, which we can use to store and retrieve complex data from
 

### Why Use A Database?

- Handles large amounts of data efficiently and store it compactly
- Provides tools for easy insertion, querying, and updating of data
- Offers security features and control over access to data
- Scales well

### SQL vs No-SQL Databases

- **Structured Query Language (SQL)** databases are relational databases
  - Pre-define a schema of tables before inserting
- **NoSQL** databases do not use SQL
  - There are many types of no-sql databases, including document, key-value, and graph stores

### Popular Databases

- SQL Databases
  - MySQL
  - Postgres
  - SQLite
  - Oracle
  - Microsoft SQL Server
- No-SQL Databases
  - MongoDB
  - CouchDB
  - Neo4j
  - Cassandra
  - Redis

### Why Learn Mongo?

- Mongo is very commonly used with Node and Express (MEAN & MERN stacks)
- It's easy to get started with (though it can be tricky to truly master)
- It plays particularly well with JavaScript
- Its popularity also means there is a strong community of developers using Mongo

### JSON (JavaScript Object Notation) vs BSON (Binary JSON)

- **JSON** was chosen for representing data structures in MongoDB's innovative document data model
- Several issues that make JSON less than ideal for usage inside database:
  - JSON is a text-based format, and text parsing is very slow
  - JSON's readable format is far from space-efficient, another database concern
  - JSON only supports a limited number of basic data types
- **BSON** was invented to bridge the gap: a binary representation to store data in JSON format, optimized for speed, space, and flexibility

 |              |              JSON              |                                          BSON                                          |
 | :----------: | :----------------------------: | :------------------------------------------------------------------------------------: |
 |   Encoding   |          UTF-8 String          |                                         Binary                                         |
 | Data Support | String, Boolean, Number, Array | String, Boolean, Number (Integer, Float, Long, Decimal128...), Array, Date, Raw Binary |
 | Readability  |       Human and Machine        |                                      Machine Only                                      |

### Mongo Commands

- `help`
- `show dbs` displays all your databases
- `use <database>`
  - Uses the selected db or
  - Mongo creates it
- Insert operations will create the collection if it does not currently exist
  - `db.collection.insertOne()` inserts a single document into a collection
  - `db.collection.insertMany()` inserts multiple documents into a collection
- Query operations
  - `db.collection.find()` selects all documents in a collection
  - `db.collection.find( { <field>:<value> } )` selects all documents in a collection where the `<field>` equals `<value>`
  - **Comparison**
    - `$eq` matches values that are equal to a specified value
    - `$gt` matches values that are greater than a specified value
    - `$lt` ... less than ...
    - `$gte` ... greater than or equal to ...
    - `$lte` ... less than or equal to ...
    - `$in` matches any of the values specified in an array
    - `$ne` ... not equal ...
    - `$nin` matches none of the values specified in an array
  - **Logical**
    - `$and` joins query clauses with a logical AND returns all documents that match the conditions of both clauses
    - `$not` inverts the effect of query expression
    - `$nor` 
    - `$or`
  - **Evaluation**
    - `$text` performs text search
    - `$where` matches documents that satisfy a JavaScript expression
- Update operations
  - `db.collection.updateOne(<filter>, <update>, <options>)` updates single document matches specified filter even though multiple documents may match the specified filter
  - `db.collection.updateMany(<filter>, <update>, <options>)` updates all documents that matches a specified filter
  - `db.collection.replaceOne(<filter>, <update>, <options>)` replaces single document that matches a specified filter even though multiple documents may match the specified filter
  - `$set` operation updates the value of the field
  -  `$currentDate` operator updates the value of the field to the current date
  -  `$inc` increments the value of the field by the specified amount
-  Delete operations
  - `db.collection.deleteMany()` deletes all documents from the collection
    - It can also use condition `<field>:<value>` expressions in the query filter document
  - `db.collection.deleteOne({ <field>:<value> })` deletes single documents from the collection that matches a condition
