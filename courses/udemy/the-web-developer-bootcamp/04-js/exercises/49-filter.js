/**
 * Write a function called validUserNames that accepts an array of usernames (strings).
 * It should return a new array, containing only the usernames that are less than 10 characters.
 * For example:
 *   validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);
 *   // => ["mark", "carrie98", "MoanaFan"]
 */

const validUserNames = usernames =>
  usernames.filter(username => username.length < 10);
