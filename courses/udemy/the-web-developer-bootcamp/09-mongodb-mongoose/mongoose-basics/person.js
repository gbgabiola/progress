const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost:27017/shopApp')
  .then(() => {
    console.log('Connection Open!!!');
  })
  .catch(err => {
    console.log('Oh No Error!');
    console.log(err);
  });

const personSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
});

personSchema.virtual('fullName').get(function () {
  return `${this.firstName} ${this.lastName}`;
});

personSchema.virtual('fullName').set(function (fullName) {
  this.firstName = fullName.substring(0, fullName.indexOf(' '));
  this.lastName = fullName.substring(fullName.indexOf(' ') + 1);
});

personSchema.pre('save', async function () {
  this.firstName = 'Yo';
  this.lastName = 'Mama';
  console.log('About to Save!');
});

personSchema.post('save', async function () {
  console.log('Just Saved!');
});

const Person = mongoose.model('Person', personSchema);
