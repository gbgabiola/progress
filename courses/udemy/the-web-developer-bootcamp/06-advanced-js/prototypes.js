String.prototype.yell = function () {
  return `OMG!!! ${this.toUpperCase()}!!!!! AGHGHGHG!`;
};

'bees'.yell(); // "OMG!!! BEES!!!!! AGHGHGHG!"

// Overwriting an existing Array method (not a good idea)
Array.prototype.pop = function () {
  return 'SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!';
};
const nums = [6, 7, 8, 9];
nums.pop(); // "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!"
