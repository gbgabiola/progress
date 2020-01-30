// Output: You have written 182 characters, you have -42 characters left.

var tweet = prompt("Compose your tweet: ")
var tweetLength = tweet.length;
var charsLeft = 140 - tweetLength;

alert("You have written " + tweetLength + " characters, you have " + charsLeft + " characters left.");