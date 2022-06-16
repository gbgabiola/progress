// PRIMITIVE Types
const num = 1;
const num2 = num;
console.log(num2); // 1

// REFERENCE Types
const person = {
  name: 'Genesis',
};

// const secondPerson = person;
// console.log(secondPerson);
/*
[object Object] {
  name: 'Genesis'
}
*/

// person.name = 'Gabby';
// console.log(secondPerson);
/*
[object Object] {
  name: 'Gabby'
}
*/

// SPREAD Operator copies the object in an immutable way
const secondPerson = {
  ...person,
};
person.name = 'Gabby';
console.log(secondPerson);
/*
[object Object] {
  name: 'Genesis'
}
*/
