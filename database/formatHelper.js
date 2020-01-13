module.exports.formatHelper = (movie) => {
  let { Ratings, imdbRating } = movie;
  let InternetMovieDatabase = Ratings[0].Value.split('/')[0]*10;
  let RottenTomatoes = Ratings[1].Value.split('%')[0]*1;
  let MetaCritic = Ratings[2].Value.split('/')[0]*1
  imdbRating = imdbRating * 10;
  let reelRating = Math.floor((InternetMovieDatabase + RottenTomatoes + MetaCritic + imdbRating) / 4);

  let formattedMovie = {
    Title: movie.Title,
    Year: movie.Year,
    Runtime: movie.Runtime,
    Genre: movie.Genre,
    Director: movie.Director,
    Plot: movie.Plot,
    Awards: movie.Awards,
    Poster: movie.Poster,
    InternetMovieDatabase,
    RottenTomatoes,
    MetaCritic,
    imdbRating,
    reelRating,
  }

  return formattedMovie;
}
