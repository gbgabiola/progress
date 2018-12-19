function doMath() {
  var x = 40;
  console.log(x);
}

var x = 'hello!';

x // 'hello!'
doMath() // 40


var y = 99;
function doMoreMath() {
  y = 100;
  console.log(y);
}

y // 99
doMoreMath() // 100
y // 100


var phrase = 'hi there!';
function doSomething() {
  var phrase = 'Goodbye!';
  console.log(phrase);
}

doSomething() // Goodbye!
phrase // 'hi there!'