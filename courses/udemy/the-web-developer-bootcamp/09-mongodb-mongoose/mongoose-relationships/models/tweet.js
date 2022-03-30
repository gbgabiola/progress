const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose
  .connect('mongodb://localhost:27017/relationshipDemo')
  .then(() => console.log('Mongo Connection Open!'))
  .catch(err => {
    console.log('Oh No, Mongo Connection Error!');
    console.log(err);
  });

const userSchema = new Schema({
  username: String,
  age: Number,
});

const tweetSchema = new Schema({
  text: String,
  likes: Number,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

// const makeTweets = async () => {
//   // const user = new User({ username: 'chickenfan99', age: 61 });
//   const user = await User.findOne({ username: 'chickenfan99' });
//   // const tweet1 = new Tweet({
//   //   text: 'OMG, I love my chicken family!',
//   //   likes: 0,
//   // });
//   const tweet2 = new Tweet({
//     text: 'Bock bock bock, my chickens make noises',
//     likes: 1239,
//   });
//   tweet2.user = user;
//   // user.save();
//   tweet2.save();
// };
// makeTweets();

const findTweet = async () => {
  // findOne and find
  const t = await Tweet.find({}).populate({
    path: 'user',
    // select: 'username',
    strictPopulate: true,
  });
  console.log(t);
};

findTweet();
