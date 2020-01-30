/*
BMI Calculator
- Create a BMI calculator using JavaScript functions.
- The Body Mass Index (BMI) is a way of estimating the amount of body fat. It's used in medicine to calculate risk of heart disease.
- You can calculate it using the given formula, where weight divided by height squared.

- BMI = weight(kg) / height2(m2)

Challenge: Create a function that takes height and weight as inputs and gives the calculated BMI value as an output.

If my weight is 65kg and my height uis 1.8m, I should be able to call your function like this: 

var bmi = bmiCalculator(65, 1.8);

bmi should equal around 20 in this case.
*/

function bmiCalculator(weight, height) {
  // var bmi = weight / (height * height);
  var bmi = weight / Math.pow(height, 2);
  return Math.round(bmi); // round the output to whole number
}

var bmi = (bmiCalculator(65, 1.8));
console.log(bmi);