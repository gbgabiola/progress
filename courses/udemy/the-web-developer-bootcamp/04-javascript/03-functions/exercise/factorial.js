/**
 * factorial()
    Write a function factorial() which takes a 
    single numeric argument and returns 
    the factorial of that number

    4! is 4 x 3 x 2 x 1
    6! is 6 x 5 x 4 x 3 x 2 x 1
    0! is 1
 */

// var num = Number(prompt('Enter a number'));  // Optionally prompt the user
// function factorial(num) {
//   var result = 1;
//   while (num > 0) {
//     result*= num;
//     num--;
//   }
//   return result;
// }

function factorial(num) {
  // Define a result variable
  var result = 1;
  // for (var result = 1; num > 0; num--) {
  //   result*= num;
  // }
  // return result;
  
  // Calculate factorial and store value in result
  for (var i = 2; i <= num; i++) {
    result*= i;
  }
  // Return the result variable
  return result;
}

factorial(5) // 120
factorial(2) // 2
factorial(10) // 3628800
factorial(0) // 1
// console.log(factorial(num));