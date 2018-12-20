/**
 * printReverse()
    Write a function printReverse() which takes an 
    array as a argument and prints out the elements in the array in the 
    reverse order (don't actually reverse the array itself)
 */

function printReverse(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

printReverse([1, 2, 3, 4]);
// 4
// 3
// 2
// 1

printReverse(['a', 'b', 'c']);
// 'c'
// 'b'
// 'a' 