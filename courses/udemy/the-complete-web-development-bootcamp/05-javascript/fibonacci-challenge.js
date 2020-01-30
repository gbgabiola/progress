/*
Create a function to return an n element in Fibonacci sequence
*/

// var fibonacci = function(n) {
//   if (n === 1) {
//     return [0, 1];
//   } else {
//     var series = fibonacci(n - 1);
//     series.push(series[series.length - 1] + series[series.length - 2]);
//     return series;
//   }
// };

//  console.log(fibonacci(8));

function fibonacci(num) {

  var first = 0;
  var second = 1;
  var next = 1;

  for(var i = 2; i <= num; i++) {
      next = first + second;
      first = second;
      second = next;
  }
  return next;
};