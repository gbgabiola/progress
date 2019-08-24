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



## Resources

- [Kristof Kovacs' database comparison](https://kkovacs.eu/cassandra-vs-mongodb-vs-couchdb-vs-redis)
- [Internet Live Stats](http://www.internetlivestats.com/) - Internet Usage & Social Media Statistics
- [W3School SQL Documentation](https://www.w3schools.com/sql/)
- [SQL Plaground](https://sqliteonline.com/)
