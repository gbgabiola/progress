# Data Associations

## Objectives
####Intro to Associations
- Define associations
- Discuss one:one, one:many, and many:many relationships

#### Embedding Data
- User
- Post

#### Referencing Data

#### Module.Exports
- Introduce module.exports
- Move our models into seperate files

## Learned
- Different types of associations one:one, one:may, and many: many relationships
- one:one is one entity related to one entity, E.g. 
  - one book = one publisher
  - one employee = one title
- one:many is one entity is related to many of another entity, E.g.
  - facebook: one user can have multiple photos those photos belong to the user, but those photos belong to one user, photos cannot have multiple uploaders
- many:many where association both ways, E.g.
  - students = courses, A student can signup to multiple courses and each course has multiple students enrolled
  - books = authors, author can write can have many books, and each book can also have many authors
- Introduce to a new type `mongoose.Schema.Types.ObjectId`
- Use a `module.exports` to allow us break things into files to clean up the codes and to make things more modular and makes it reusable, so we can just require it to other files when needed