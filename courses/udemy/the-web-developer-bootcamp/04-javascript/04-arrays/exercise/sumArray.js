/**
 * sumArray()
    Write a function sumArray() that accept an 
    array of numbers and returns the sum of 
    all numbers in the array
 */

// using forEach
function sumArray(arr) {
  var total = 0;
  arr.forEach(function(element) {
    total += element;
  });
  return total;
}

// using for loop
// function sumArray(arr) {
//   var total = 0;
//   for (var i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }

sumArray([1, 2, 3]); // 6
sumArray([10, 3, 10, 4]); // 27
sumArray([-5, 100]); // 95