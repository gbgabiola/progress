/* 
Challenge: Create a prompt that ask the user for their name, but if they gave you a uppercase or lowercase, send them an alert, Hello and their name, but the name shoould be capitalize.

Output: Hello, Genesis
*/

// 1. Create a var that stores the name that the user enters via prompt.
var name = prompt("Enter your name: ");


// 2. Capitalize the first char of their name.

// a. Isolate the first char of their name.
var firstChar = name.slice(0, 1);

// b. Turn the first char to uppercase.
var upperCaseFirstChar = firstChar.toUpperCase();

// c. Isolate the rest of the char
var restOfChar = name.slice(1,);

// d. Change the rest of char to lowercase
restOfChar = restOfChar.toLowerCase();

// e. Concatenate the first char with the rest of the char
var capitalizedName = upperCaseFirstChar + restOfChar;


// 3. We use the capitalized version of their name to greet them using an alert.
alert("Hello, " + capitalizedName);


// Shorter version
// alert("Hello, " + name.slice(0, 1).toUpperCase() + name.slice(1,).toLowerCase());