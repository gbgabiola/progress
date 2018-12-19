/**
 * kebabToSnake()
    Write a function kebabToSnake() which takes a 
    single kebab-cased string argument and returns 
    the snake_case version

    Basically, replace "-"s with "_"s
 */

// var str = prompt('Enter your string');  // Optionally prompt the user
function kebabToSnake(str) {
  // Using Regex with global flag
  var newStr = str.replace(/-/g, '_'); // store in a new variable to capture the value
  return newStr;
}

kebabToSnake('hello-world') // "hello_world"
kebabToSnake('dogs-are-awesome') // "dogs_are_awesome"
kebabToSnake('blah') // "blah"
// console.log(kebabToSnake(str));