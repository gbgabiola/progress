# JavaScript Refresher


## Table of Contents <!-- omit in toc -->

- [`let` and `const`](#let-and-const)
- [Arrow Functions](#arrow-functions)
- [Exports and Imports](#exports-and-imports)
- [Classes](#classes)
- [Spread and Rest Operators](#spread-and-rest-operators)
- [Destructuring](#destructuring)
- [Primitive and Reference Types](#primitive-and-reference-types)
- [Array Functions](#array-functions)


## `let` and `const`

- `var`
  - Functional scope
  - Can be updated and re-declared into the scope
  - Can be declared without initialization
  - Can be accessed without initialization as its default value is `undefined`
- `let`
  - Block scope
  - Can be updated but cannot  re-declared into the scope
  - Can be declared without initialization
  - Can't be accessed without initialization, as it returns an error
- `const`
  - Block scope
  - Can't be updated orre-declared into the scope
  - Can't be declared without initialization
  - Can't be accessed without initialization, as it cannot be declared without initialization


## Arrow Functions

- `this` in arrow function have no issues anymore
- Arrow functions have no `constructor` or `prototype` unlike the regular functions and classes
- Implicit return is a function that returns a values even with omitting curly brackets and `return` keyword
- Omit parentheses around a single parameter


## Exports and Imports

- Imports default and ONLY export of the file Name in the receiving is up to us
- any declarations like variable, function or a class can be labeled as exported by placing `export` before it 


## Classes

- **Properties** are like variables attached to classes/objecs
  - ES6
    ```js
    constructor() {
      this.myProperty = 'value'
    }
    ```
  - ES7
    ```js
    myProperty = 'value'
    ```
- **Methods** are like functions attached to classes/objects
  - ES6
    ```js
    myMethod () { ... }
    ```
  - ES7
    ```js
    myMethod = () => { ... }
    ```
- _Not hoisted_: Classes must be defined first it can be used
- `constructor` runs with the given argument and assigns it to `this.propertyName`
- `super` keyword


## Spread and Rest Operators

- Spread operator used to split up array elements or object properties
  - Pull elements out of an array and splits the array into a list of its elements
  - Pull the properties out of an object
  ```js
  const newArray = [...oldArray, 1, 2]
  const newObject = { ...oldObject, newProp: 5 }
  ```
- Rest used to merge a list of function arguments into an array
  ```js
  function sortArgs(...args) {
    return args.sort()
  }
  ```


  ## Destructuring

  - Easily extract array elements or object properties and store them in variables
  - Array destructuring
    ```js
    [a, b] = ['Hello', 'Genesis']
    console.log(a) // Hello
    console.log(b) // Genesis
    ```
  - Object destructuring
    ```js
    { name } = { name: 'Genesis', age: 29 }
    console.log(name) // Genesis
    console.log(age) // undefined
    ```


## Primitive and Reference Types

- Primitive Types copies the value when reassign or store a variable inside another variable 
  - String
  - Boolean
  - Number
- Reference Types copies the pointer that points to the same object in memory instead of its value
  - Object
  - Arrays
  - To really copy the reference, create a new object then copy the properties instead of the entire object


## Array Functions

- `map()`
- `find()`
- `findIndex()`
- `filter()`
- `reduce()`
- `concat()`
- `slice()`
- `splice()`
