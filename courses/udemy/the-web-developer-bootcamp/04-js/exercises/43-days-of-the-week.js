/**
 * Write a function called returnDay.
 * This function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)
 * If the number is less than 1 or greater than 7, the function should return null.
 * In some countries Sunday is treated as the first day of the week, but for this exercise we will use Monday as the first day.
 *
 * Hint: store the days of the week in an array, or use an object with numerical keys.
 * When the function is called, plug the number into the array/object you've created to retrieve the corresponding day name and then return that value.
 *    returnDay(1) // "Monday"
 *    returnDay(7) // "Sunday"
 *    returnDay(4) // "Thursday"
 *    returnDay(0) // "null"
 */

// DEFINE YOUR FUNCTION BELOW:
function returnDay(num) {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  if (num < 1 || num > 7) {
    return null;
  }
  return days[num - 1];

  // ===================================
  // USING SWITCH
  // ===================================
  // let day;
  // switch (num) {
  //   case 1:
  //     day = days[0];
  //     break;
  //   case 2:
  //     day = days[1];
  //     break;
  //   case 3:
  //     day = days[2];
  //     break;
  //   case 4:
  //     day = days[3];
  //     break;
  //   case 5:
  //     day = days[4];
  //     break;
  //   case 6:
  //     day = days[5];
  //     break;
  //   case 7:
  //     day = days[6];
  //     break;
  //   default:
  //     day = null;
  // }
  // return day;

  // ===================================
  // USING OBJECTS
  // ===================================
  // const days = {
  //   1: 'Monday',
  //   2: 'Tuesday',
  //   3: 'Wednesday',
  //   4: 'Thursday',
  //   5: 'Friday',
  //   6: 'Saturday',
  //   7: 'Sunday',
  // };

  // if (num < 1 || num > 7) {
  //   return null;
  // }
  // return days[num];
}
