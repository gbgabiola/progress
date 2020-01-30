/*
Create a function to build a love calculator that accepts two prompts that ask for the names of two people, then ignore that and then calculate a random number that is percentage. Random generator should generate a number between 1 and 100, then give this information back to the user in the form of an alert that tells them their love score.
*/

var person1 = prompt("Enter first person's name:");
var person2 = prompt("Enter second person's name:");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

alert(person1 + " and " + person2 + " love score is " +  loveScore + "%.");