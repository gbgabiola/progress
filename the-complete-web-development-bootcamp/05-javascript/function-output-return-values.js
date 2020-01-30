function getMilk(money, costPerBottle) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  console.log("buy " + calcBottles(money, costPerBottle) + " bottles of milk");

  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

  return calcChange(money, costPerBottle);
}

function calcBottles(startingMoney, costPerBottle) {
  var numOfBottles = Math.floor(startingMoney / costPerBottle);
  return numOfBottles;
}

function calcChange(startAmount, costPerBottle) {
  var change = startAmount % costPerBottle; // Remainder of the division
  return change;
}

console.log("Hello master, here is your " + getMilk(5, 1.5) + " change.");