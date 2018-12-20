/**
 * Version 1
 */

function myForEach(arr, func) {
  // loop through array
  for (var i = 0; i < arr.length; i++) {
    // call func for each item in array
    func(arr[i]);
  }
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'PURPLE'];
// myForEach(colors, alert);
myForEach(colors, function(color) {
  console.log(color);
});
// red
// orange
// yellow
// green
// blue
// PURPLE



/**
 * Version 2
 */

Array.prototype.myForEach = function(func) {
  for (var i = 0; i < this.length; i++) {
    func(this[i]);
  }
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'PURPLE'];
colors.myForEach(function(color) {
  console.log(color);
});
// red
// orange
// yellow
// green
// blue
// PURPLE