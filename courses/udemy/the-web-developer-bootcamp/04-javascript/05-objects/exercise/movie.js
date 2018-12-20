/**
 * movie
    Create an array of movie objects. Each movie should have
    a title, rating, and hasWatched properties. Iterate through
    the array and print out something that looks like:

    You have watched "in Bruges" - 5 stars
    You have not seen "Frozen" - 4.5 stars
    You have seen "Mad Max Fury Road" - 5 stars
    You have not seen "Les Miserables" - 3.5 stars
 */

var movies = [
  {
    title: 'Mission Impossible',
    hasWatched: true,
    rating: 4.5
  },
  {
    title: 'Back to the Future',
    hasWatched: false,
    rating: 3.5
  },
  {
    title: 'The Intern',
    hasWatched: true,
    rating: 5
  },
  {
    title: 'The Guilty (Den Skyldige)',
    hasWatched: false,
    rating: 5
  }
];

movies.forEach(function(movie) {
  console.log(buildString(movie));
});

function buildString(movie) {
  var result = 'You have ';
  if (movie.hasWatched) {
    result += 'watched ';
  } else {
    result += 'not seen ';
  }
  result += '"' + movie.title + '"' + ' - ';
  result += movie.rating + ' stars';
  return result;
}