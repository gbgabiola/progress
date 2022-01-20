/**
 * I've provided you with an array called planets.
 * Using the array methods we just learned...
 *   1. Remove the first element, "The Moon", from the planets array.
 *   2. Add in "Saturn" at the very end of the planets array.
 *   3. Add "Mercury" as the first element in the planets array.
 *
 * At the end of your hard work, planets should look like this: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn"].
 */

const planets = ['The Moon', 'Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:
planets.shift();
planets.push('Saturn');
planets.unshift('Mercury');
