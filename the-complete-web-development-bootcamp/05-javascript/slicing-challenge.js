// Challenge: Implement the tweet character count by cutting the characters down to 140 characters only.

var tweet = prompt("Compose your tweet: ");
var tweetUnder140 = tweet.slice(0, 140);

alert(tweetUnder140);

// One line solution
// alert(prompt("Compose your tweet: ").slice(0, 140));