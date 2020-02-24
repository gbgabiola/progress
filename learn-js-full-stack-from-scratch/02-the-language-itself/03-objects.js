// let catName = 'Fluffy';
// let catAge = 4;

// function meow() {
//   alert('Meoooowwwwwwww');
// }

let cat = {
  name: 'Fluffy',
  age: 4,
  food: {
    favorite: 'Tuna',
    leastFavorite: 'Oranges'
  },
  eyeColor: 'blue',
  meow() {
    alert('Meoooowwwwwwww');
  }
};

cat.name;
cat.age;
cat.food.favorite;
cat.meow();

document.addEventListener('click', greet);

function greet() {
  alert('Hello there!');
}
