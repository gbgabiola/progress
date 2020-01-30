/*
Create a function for lyrics of 99 bottles of beer, you can see that this is a repeated pattern where each line the number decreases by 1. Use while loop.
*/

function beer() {
  var count = 99;
  while (count > 0) {
    console.log(count + " " + bottleWord(count) + " of beer on the wall, ");
    console.log(count + " " + bottleWord(count) + " of beer.");
    console.log("Take one down and pass it around,");
    count--;
    
    if (count > 0) {
      console.log(count + " " + bottleWord(count) + " of beer on the wall.");
    } else {
      console.log("No more " + bottleWord(count) + " of beer on the wall.");
      console.log("");
      console.log("No more bottles of beer on the wall, \nno more bottles of beer.");
      console.log("Go to the store and buy some more, \n99 bottles of beer on the wall.");
    }
    console.log("");
  }

  // function for bottles/bottle
  function bottleWord(count) {
    if (count === 1) {
      return "bottle";
    }
    return "bottles";
  }
}

beer();




// var bottleWord;
// var counter = 99;
// while (counter >= 1) {
//   if (counter == 1) {
//     bottleWord = 'bottle';
//   } else {
//     bottleWord = 'bottles';
//   }
//   console.log(counter + " " + bottleWord + " of beer on the wall.");
//   if (counter < 99) {
//     console.log("");
//     console.log(counter + " " + bottleWord + " of beer on the wall.");
//   }
//   console.log(counter + " " + bottleWord + " of beer.");
//   console.log("Take one down and pass it around.");
//   if (counter == 1) {
//     console.log("No more bottles of beer on the wall.");
//   }
//   counter--;
// }



// One line per sentence
// var count = 99;
// while (count >= 1) {
//   if (count > 2) {
//   console.log(count + " bottles of beer on the wall,  " + count + " of beer. Take one down and pass it around, " + (count - 1) + " bottles of beer on the wall.");
//   } else if (count === 2) {
//     console.log(count + " bottles of beer on the wall, " + count + " bottles of beer. Take one down and pass it around, " + ".. " + (count - 1) + " bottle of beer on the wall.");
//   } else if (count === 1) {
//     console.log(count + " bottle of beer on the wall. " + count + " bottle of beer. Take one down and pass it around," + (count - 1) + " bottles of beer on the wall.");
//   }        
//   count--;
// }