/*
Create a prompt that asks the guest what is their name, then check the name against the names in our arrays. If it does exist, send an alert saying welcome, if it does not exist, tell them sorry, maybe next time.
*/

var guestList = ["Genesis", "David", "Abby", "Jesh", "Moises", "Irene"];
var guestName = prompt("What is your name?");

if (guestList.includes(guestName)) {
  alert("Welcome, " + guestName);
} else {
  alert("Sorry, maybe next time.");
}