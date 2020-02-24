let pets = [
  { name: 'Meowslot', species: 'cat', age: 2 },
  { name: 'Barslot', species: 'dog', age: 3 },
  { name: 'Purrsloud', species: 'cat', age: 8 }
];

// pets.push({ name: 'Puppster', species: 'dog', age: 1 });
console.log(pets.push({ name: 'Puppster', species: 'dog', age: 1 }));
// console.log(pets);

let ourTest = pets.map(nameOnly);

function nameOnly(animal) {
  return animal.name;
}

// console.log(ourTest);

let dogs = pets.filter(onlyDogs);

function onlyDogs(x) {
  return x.species == 'dog';
}

function onlyBabies(x) {
  return x.age < 3;
}

let babyDogNames = pets.filter(onlyDogs).filter(onlyBabies).map(nameOnly);
console.log(babyDogNames);
