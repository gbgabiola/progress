/**
 * isUniform()
    Write a function isUniform() which takes an 
    array as a argument and returns true if 
    all elements in the array are identical
 */

function isUniform(arr) {
  var first = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== first) {
      return false
    }
  }
  return true;
}

isUniform([1, 1, 1, 1]); // true
isUniform([2, 1, 1, 1]); // false
isUniform(['a', 'b', 'p']); // false
isUniform(['b', 'b', 'b']); // true