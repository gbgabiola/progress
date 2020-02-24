/*
let myName = 'Genesis';

function myFunc() {
  let myName = 'Genesis Junior';
  if (2 + 2 == 4) {
    let myName = 'Genesis the 3rd';
    console.log('inside the if statement', myName);
  }
  console.log('inside our function', myName);
}

myFunc();
console.log('in the global scope', myName);
*/

let myName = 'Genesis';

function myFunc() {
  if (2 + 2 == 4) {
    myName = 'Genesis the 3rd';
  }
}

myFunc();
console.log('in the global scope', myName);
