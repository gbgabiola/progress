/**
 * Stalker
    Variables, Strings, Prompt, and Console.log
		Ask for the user's first name
		Ask for the user's last name
		Ask for the user's age
		Print out the user's full name in a sentence
		Print out the user's age in a sentence		
 */

var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');
var age = prompt('How old are you?');

var fullName = firstName + ' ' + lastName;

// console.log("Your full name is " + firstName + " " + lastName);
console.log('Your full name is ' + fullName);
console.log('Your are ' + age + ' years old');