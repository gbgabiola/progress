function singSong() {
  console.log('DO');
  console.log('RE');
  console.log('MI');
}
// singSong()

function greet(firstName, lastName) {
  console.log(`Hey there, ${firstName} ${lastName[0]}.`);
}
// greet('John', 'Doe');

function repeat(str, numTimes) {
  let result = '';
  for (let i = 0; i < numTimes; i++) {
    result += str;
  }
  console.log(result);
}
// repeat('hi', 3);

function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return false;
  }
  return x + y;
}
// add(1, 5);
