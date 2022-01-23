/**
 * Define a function called capitalize that accepts a string argument and returns a new string with the first letter capitalized (but the rest of the string unchanged).
 * For example:
 *    capitalize('eggplant') // "Eggplant"
 *    capitalize('pamplemousse') // "Pamplemousse"
 *    capitalize('squid') // "Squid"
 */

// DEFINE YOUR FUNCTION BELOW:
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
