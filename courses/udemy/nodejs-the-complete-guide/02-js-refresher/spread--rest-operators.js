const person = {
  name: 'Genesis',
  age: 28,
  greet() {
    console.log('Hi, I am ' + this.name);
  },
};

const copiedPerson = { ...person };
console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking'];

// const copiedArray = hobbies.slice();
const copiedHobbies = [...hobbies];
console.log(copiedHobbies);

// const toArray = (arg1, arg2, arg3) => [arg1, arg2, arg3];
const toArray = (...args) => args;
console.log(toArray(1, 2, 3, 4));
