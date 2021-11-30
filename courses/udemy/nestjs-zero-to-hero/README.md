# Application Structure

## App Module (root)

- TasksModule
- AuthModule

## TasksModule

- TasksController
- TasksService
- Status ValidationPipe
- TaskEntity
- TaskRepository
- ...


## AuthModule

- AuthController
- AuthService
- UserEntity
- UserRepository
- JwtStrategy
- ...


## API Endpoints - Tasks

| Endpoint            | Method     | Description               |
| :------------------ | :--------- | :------------------------ |
| `tasks/`            | **GET**    | Get tasks (incl. filters) |
| `tasks/:id/`        | **GET**    | Get a task                |
| `tasks/`            | **POST**   | Create a tasks            |
| `tasks/:id/`        | **DELETE** | Delete a task             |
| `tasks/:id/status/` | **PATCH**  | Update task status        |


## API Endpoints - Auth

| Endpoint        | Method   | Description |
| :-------------- | :------- | :---------- |
| `auth/signup/`  | **POST** | Sign up     |
| `auth/signing/` | **POST** | Sign in     |


## Objectives: NestJS

- NestJS Modules
- NestJS Controllers
- NestJS Services and Providers
- Controller-to-Service communication
- Validation using NestJS Pipes


## Objectives: Back-end & Architecture

- Develop production-ready REST APIs
- CRUD operations (Create, Read, Update, Delete)
- Error handling
- Data Transfer Objects (DTO)
- System modularity
- Back-end development best practices
- Configuration Management
- Logging
- Security best practices


## Objectives: Persistence

- Connecting the application to a database
- Working with relational databases
- Using TypeORM
- Writing simple and complex queries using QueryBuilder
- Performance when working with a database


## Objectives: Authorization/Authentication

- Signing up, signing in
- Authentication and Authorization
- Protected resources
- Ownership of tasks by users
- Using JWT tokens (JSON Web Tokens)
- Password hashing, salts and properly storing passwords


## Objectives: Deployment

- Polishing the application for Production use
- Deploying NestJS apps to AWS (Amazon Web Services)
- Deploying front-end applications to Amazon S3
- Wiring up the front-end and back-end


## Bonus: Front-end Application

Fully-featured front-end application that consumes the API we are developing throughout the course, for your own use.



--------------------------


## NestJS Modules

- Each application has at least one module, the root module
  - That is the starting point of the application
- Modules are an effective way to organize components by a closely related set of capabilities (e.g., per feature)
- It is a good practice to have a folder per module, containing the module's components
- Modules are **singletons**, therefore a module can be imported by multiple other modules


## Defining a module

- A module is defined by annotating a class with the `@Module` decorator
- The decorator provides metadata that Nest uses to organize the application structure


## @Module Decorator Properties

- **providers**: Array of providers to be available within the module via dependency injection
- **controllers**: Array of controllers to be instantiated within the module
- **exports**: Array of providers to export to other modules
- **imports**: List of modules required by this module
  - Any exported provider by these modules will now be available in our module via dependency injection


## ForumModule Example

- ForumModule
  - PostModule
    - UserProfileModule
  - CommentModule
    - UserProfileModule
  - AuthModule


## Module Definition Example

```js
@Module({
  providers: [ForumService],
  controllers: [ForumController],
  imports: [
    PostModule,
    CommentModule,
    AuthModule
  ],
  exports: [
    ForumService
  ]
})
export class ForumModule {}
```
