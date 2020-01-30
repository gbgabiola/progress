/*
Challenge: Create a function to move karel to the top right edge of the canvas.
*/

function main(){
  moveFourTime();
  turnLeft();
  moveFourTime();
}

function moveFourTimes() {
  move();
  move();
  move();
  move();
}


/*
Challenge: Create a shortest possible function to move the beeper diagonally five times until it reaches the top rigt edge of the canvas.
*/

function main(){
  putBeeper();
  moveBeeper();
  moveBeeper();
  moveBeeper();
  moveBeeper();
}

function moveBeeper() {
  move();
  turnLeft();
  move();
  putBeeper();
  turnRight();
}

/*
Challenge: Create a shortest possible function to create a chess board pattern
*/

function main(){
  moveToRight();
  moveUpTurnLeft();
  moveToLeft();
  moveUpTurnRight();
  moveToRight();
  moveUpTurnLeft();
  moveToLeft();
  moveUpTurnRight();
  moveToRight();
}

function moveUpTurnLeft() {
  turnLeft();
  move();
  turnLeft();
}

function moveUpTurnRight() {
  turnRight();
  move();
  turnRight();
}

function moveToLeft() {
  move();
  putBeeper();
  move();
  move();
  putBeeper();
  move();
}

function moveToRight() {
  putBeeper();
  move();
  move();
  putBeeper();
  move();
  move();
  putBeeper();
}