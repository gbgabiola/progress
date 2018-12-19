/**
 * isEven()
    Write a function isEven() which takes a 
    single numeric argument and returns true if 
    the number is even, and false otherwise 
 */

// var num = Number(prompt('Enter a number'));  // Optionally prompt the user
// function isEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   }
//   return false;
// }

function isEven(num) {
  return num % 2 === 0;
}

isEven(4); // true
isEven(21); // false
isEven(68); // true
isEven(333); // false
// console.log(isEven(num));