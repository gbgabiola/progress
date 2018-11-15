# [Word Blanks](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/word-blanks)

We will now use our knowledge of strings to build a "[Mad Libs](https://en.wikipedia.org/wiki/Mad_Libs)" style word game we're calling "Word Blanks". You will create an (optionally humorous) "Fill in the Blanks" style sentence. Here's an example of an incomplete sentence.

In a "Mad Libs" game, you are provided sentences with some missing words, like nouns, verbs, adjectives and adverbs. You then fill in the missing pieces with words of your choice in a way that the completed sentence makes sense.

Consider this sentence - "It was really ____, and we ____ ourselves ____". This sentence has three missing pieces- an adjective, a verb and an adverb, and we can add words of our choice to complete it. We can then assign the completed sentence to a variable as follows:

```js
var sentence = "It was really" + "hot" + ", and we" + "laughed" + "ourselves" + "silly.";
```

---

In this challenge, we provide you with a noun, a verb, an adjective and an adverb. You need to form a complete sentence using words of your choice, along with the words we provide.

You will need to use the string concatenation operator `+` to build a new string, using the provided variables: `myNoun`, `myAdjective`, `myVerb`, and `myAdverb`. You will then assign the formed string to the `result` variable.

You will also need to account for spaces in your string, so that the final sentence has spaces between all the words. The result should be a complete sentence.

## Setup

```js
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";
  // Your code above this line
  return result;
}
// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
```

## Solution

```js
var result = "The " + myNoun + " is so " + myAdjective + ", that I " + myVerb + " very " + myAdverb;

// "The dog is so big, that I ran very quickly"
```