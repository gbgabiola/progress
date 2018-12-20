/**
 * max()
    Write a function max() that accepts an 
    array of numbers and returns the
    maximum number in the array
 */

function max(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

max([1, 2, 3]); // 3
max([10, 3, 10, 4]); // 10
max([-5, 100]); // 100