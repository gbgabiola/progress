/**
 * I often struggle to know whether I should wear shorts or pants on a given day.
 * Please help me decide by writing me a function called isShortsWeather.
 *   - It should accept a single number argument, which we will call temperature (but you can name it whatever you want, of course).
 *   - If temperature is greater than or equal to 75, return true.
 *   - Otherwise, return false.
 *   - This exercise assumes temperature is in Fahrenheit.
 *    isShortsWeather(80) // true
 *    isShortsWeather(48) // false
 *    isShortsWeather(75) // true
 */

// DEFINE YOUR FUNCTION BELOW:
function isShortsWeather(temperature) {
  if (temperature >= 75) {
    return true;
  }
  return false;
}
