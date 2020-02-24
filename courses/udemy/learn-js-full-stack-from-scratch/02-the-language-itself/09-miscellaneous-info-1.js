// Anonymous function
document.addEventListener('click', function() {
  alert('Thank you for clicking');
});

let myNumbers = [10, 500, 2000];
let doubledNumbers = myNumbers.map(function(num) {
  return num * 2;
});
console.log(doubledNumbers);

// Arrow function: first feature
document.addEventListener('click', () => alert('Thank you for clicking'));

let myNumbers = [10, 500, 2000];
let doubledNumbers = myNumbers.map(num => num * 2);
console.log(doubledNumbers);

// Arrow function: second feature
let john = {
  firstName: 'John',
  lastName: 'Doe',
  driveCar() {
    let imAFunctionNotAMethod = () => console.log(this);
    imAFunctionNotAMethod();
    console.log(this.firstName + ' ' + this.lastName + ' is driving a car.');
  }
};

john.driveCar();
