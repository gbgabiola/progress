// Connect to MongoDB
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please check your data entry, no name specified!']
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
  rating: 10,
  review: 'Peaches are so yummy!'
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Person = mongoose.model('Person', personSchema);

const pineapple = new Fruit({
  name: 'Pineapple',
  rating: 9,
  review: 'Great fruit'
});

// pineapple.save();

const person = new Person({
  name: 'Amy',
  age: 12,
  favoriteFruit: pineapple
});

// person.save();

const watermelon = new Fruit({
  name: 'Watermelon',
  rating: 10,
  review: 'The best fruit ever!'
});

// watermelon.save();

const kiwi = new Fruit({
  name: 'Kiwi',
  rating: 10,
  review: 'The best fruit'
});

const orange = new Fruit({
  name: 'Orange',
  rating: 4,
  review: 'Too sour for me'
});

const banana = new Fruit({
  name: 'Banana',
  rating: 3,
  review: 'Weird texture'
});


// Fruit.insertMany([kiwi, orange, banana], function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Successfully saved all the fruits to fruitsDB');
//   }
// });


// Find All Documents
Fruit.find(function(err, fruits) {
    if (err) {
      console.log(err);
    } else {
      mongoose.connection.close();
      fruits.forEach(function(fruit) {
        console.log(fruit.name);
    });
  }
});


// Fruit.updateOne({_id: '5d61ef1e70e5170d1014a26b'}, {name: 'Peach'}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Successfully updated the document.');
//   }
// });

// Fruit.deleteOne({_id: '5d61ef1e70e5170d1014a26b'}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Successfully deleted the document.');
//   }
// });


// Person.deleteMany({name: 'John'}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Successfully deleted all the documents.')
//   }
// });


// Person.updateOne({_id: 'John'}, {favoriteFruit: watermelon}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Successfully added a favorite fruit');
//   }
// });