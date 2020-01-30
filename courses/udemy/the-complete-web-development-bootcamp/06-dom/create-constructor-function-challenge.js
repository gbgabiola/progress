/*
  Challenge: Create a constructor function
*/

function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
  this.yearsOfExperience = yearsOfExperience;
  this.name = name;
  this.cleaningRepertoire = cleaningRepertoire;
}

var houseKeeper1 = new HouseKeeper(12, "Jane", ["bathroom", "lobby", "bedroom"]);
var houseKeeper2 = new HouseKeeper(7, "Martha", ["sink", "dining hall", "kitchen"]);