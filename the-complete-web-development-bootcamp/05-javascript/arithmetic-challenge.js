/*
Challenge: Create a Dog Age to Human Age Converter prompt that ask the user for the age of their dog, then convert it using the formula and send it using an alert.

Formala: humanAge = (dogAge - 2) x 4 + 21
*/

var dogAge = prompt("How old is your dog?");

var humanAge = ((dogAge - 2) * 4) + 21;

alert("Your dog is " + humanAge + " years old in human years.");