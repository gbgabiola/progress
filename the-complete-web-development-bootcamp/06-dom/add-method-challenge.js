/*
  Challenge: Add a method to a HouseKeeper constructor function, this method is called clean. The method will send an alert that says "Cleaning in progress".
*/

function HouseKeeper(yearsOfExperience, name, cleaningRepertoire, clean) {
  this.yearsOfExperience = yearsOfExperience;
  this.name = name;
  this.cleaningRepertoire = cleaningRepertoire;
  this.clean = function() {
    alert("Cleaning in progress")
  }
}

var houseKeeper1 = new HouseKeeper(17, "Martha", ["bathroom", "kitchen", "bedroom"]);

houseKeeper1.clean();