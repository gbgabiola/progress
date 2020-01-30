const superheroes = require('superheroes');
const supervillains = require('supervillains');

var mySuperhero = superheroes.random();

var mySupervillain = supervillains.random();

console.log('My superhero is ' + mySuperhero + ' and my supervillain is ' + mySupervillain);