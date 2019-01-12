# Databases

## Objectives
#### Intro to Databases
- What is a database? 
    - A collection of information/data
    - Has an interface
- SQL(relational) vs. NoSQL(non-relational)

#### Intro to MongoDB
- What is MongoDB?
- Why are we using it?
- Let's Install It!

#### Our First Mongo Commands
- mongod
- mongo
- help
- show dbs
- use
- insert
- find
- update
- remove

#### Mongoose
- What Is Mongoose?
- Why are we using it?
- Interact with a Mongo Database using Mongoose


## Learned
- Database is a collection of information, it has interface, some sort of language, technology or tools to interact with the data, to add, read, delete, and edit things in the database
- It has 2 broad categories: SQL and NoSQL
- Sequel database are relational datases and it's been around the longest, it's what most people think of when they think of databases
- Needs to define a table and everything is tabular, to relate the data you need to have multiple tables and often use ID to relate then from one another
- Non-relational databases doesn't have tables at all and doesn't need to define tables
- It has a more flexible structure
- Mongoose is known as Object Data Mapper (ODM), it's a javaScript layer on top of mongoDB


---

A RELATIONAL DATABASE:
USERS TABLE
| id | name | age | city     |
| -- | ---- | --- | -------- |
| 1  | Tim  | 57  | NYC      |   
| 2  | Ira  | 24  | Missoula |
| 3  | Sue  | 40  | Boulder  |


COMMENTS TABLE
| id | text                          |
| -- | ----------------------------- |
| 1  | "lol"                         |
| 2  | "Come visit Montana!"         |
| 3  | "I love puppies!!!"           |
| 4  | "Seriously Montana is great!" |


USER/COMMENTS JOIN TABLE
| userId  |  commentId |
| ------- | ---------- |
|    1    |    3       |
|    2    |    2       |
|    2    |    4       |
|    3    |    1       |

---

A NON-RELATIONAL DATABASE:

```js
{
  name: "Ira",
  age: 24,
  city: Missoula,
  comments: [
    {text: "Come visit Montana!"},
    {text: "Seriously Montana is great!"},
    {text: "Why does no one care about Montana???"}
  ],
  favColor: "purple"
}


{
  name: "Tammy",
  age: 24,
  city: Missoula,
  comments: [
    {text: "Come visit Montana!"},
    {text: "Seriously Montana is great!"},
    {text: "Why does no one care about Montana???"}
  ],
  favFood: "Ribeye"
}
```