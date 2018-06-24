# [Basic JavaScript: Local Scope and Functions](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/local-scope-and-functions)

Variables which are declared within a function, as well as the function parameters have _local_ scope. That means, they are only visible within that function.

Here is a function `myTest` with a local variable called `loc`.

```js
function myTest() {
var loc = "foo";
console.log(loc);
}
myTest(); // logs "foo"
console.log(loc); // loc is not defined
```

`loc` is not defined outside of the function.

---

Declare a local variable `myVar` inside `myLocalScope`. Run the tests and then follow the instructions commented out in the editor.

**Hint**  
Refreshing the page may help if you get stuck.

```js
function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar;
  console.log(myVar);
}
myLocalScope();
```