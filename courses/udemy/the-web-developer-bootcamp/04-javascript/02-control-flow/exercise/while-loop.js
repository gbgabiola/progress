/**
 * While Loops Problem Set
 */

// 1. Print all numbers between -10 and 19
var num = -10;
console.log('PRINT ALL NUMBERS BETWEEN -10 AND 19');
while (num <= 19) {
  console.log(num);
  num++;
}


// 2. Print all even numbers between 10 and 40
var num = 10;
console.log('PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40');

// while (num <= 40) {
//   console.log(num);
//   num += 2;
// }

while (num <= 40) {
  if (num % 2 === 0) {
    console.log(num);
  }
  // num+= 2;
  num++;
}


// 3. Print all odd numbers between 300 and 333
var num = 300;
console.log('PRINT ALL ODD NUMBERS BETWEEN 300 AND 333');
while (num <= 333) {
  if (num % 2 !== 0) {
    console.log(num);
  }
  num++;
}


// 4. Print all numbers divisible by 5 and 3, between 5 and 50
var num = 5;
console.log('PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3, BETWEEN 5 AND 50');
while (num <= 50) {
  if (num % 5 === 0 && num % 3 === 0) {
    console.log(num);
  }
  num++;
}