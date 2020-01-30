var person1 = prompt("Enter first person's name:");
var person2 = prompt("Enter second person's name:");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70) {
  alert(person1 + " and " + person2 + " love score is " +  loveScore + "%. Both of you are perfect match!");
} else if (loveScore > 30 && loveScore <= 70) {
  alert(person1 + " and " + person2 + " love score is " +  loveScore + "%.");
} else {
  alert(person1 + " and " + person2 + " love score is " +  loveScore + "%. You go together like oil and water.");
}