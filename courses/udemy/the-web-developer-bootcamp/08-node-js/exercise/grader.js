function average(scores) {
  // Add all scores together
  var total = 0;
  scores.forEach(function(score) {
    total += score;
  });
  // Divide by total number of scores
  var avg = total / scores.length;

  // Round average
  return Math.round(avg);
}

console.log("Average score for environment science");
var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores)); // 94

console.log("Average score for organic chemistry");
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2)); // 68