const person = {
  name: 'Genesis',
  age: 28,
  greet() {
    console.log('Hi, I am ' + this.name);
  },
};

console.log(person.greet());
