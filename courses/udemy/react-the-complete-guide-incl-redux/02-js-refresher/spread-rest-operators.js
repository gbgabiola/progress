// SPREAD Operator
const nums = [1, 2, 3];
// const newNums = [nums, 4]; // [[1, 2, 3], 4]
const newNums = [...nums, 4]; // [1, 2, 3, 4]
console.log(newNums);

const person = {
  name: 'Genesis',
};

const newPerson = {
  ...person,
  age: 28,
};
console.log(newPerson);

// REST Operator
const filter = (...args) => {
  return args.filter(el => el === 1);
};

console.log(filter(1, 2, 3)); // [1]
