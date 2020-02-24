/**
 * Not Higher-Order Function
 */

function doubleMe(num) {
  return num * 2;
}

document.write(doubleMe(30));

/**
 * Higher-Order Function
 */

// 1. Accepts a function as an argument
document.addEventListener('click', myFunction);

function myFunction() {
  alert('Thank you for clicking.');
}

// 2. Return a function
function createMultiplier(multiplier) {
  return function(num) {
    return num * multiplier;
  };
}

let doubleMe = createMultiplier(2);
let tripleMe = createMultiplier(3);
let quadrupleMe = createMultiplier(4);

document.write(doubleMe(5));
document.write(tripleMe(5));
document.write(quadrupleMe(5));

// Additional higher-order functions
let myColors = ['red', 'orange', 'yellow'];

myColors.forEach(saySomethingNice);

function saySomethingNice(color) {
  document.write('The color ' + color + ' is a great color.<br>');
}
