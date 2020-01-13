const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reelRating', {useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=> console.log('Mongodb connected'))
        .catch((err) => console.log('Error with mongo connection'));

const movieSchema = mongoose.Schema({
  Title: String,
  Year: String,
  Runtime: String,
  Genre: String,
  Director: String,
  Plot: String,
  Awards: String,
  Poster: String,
  InternetMovieDatabase: Number,
  RottenTomatoes: Number,
  MetaCritic: Number,
  imdbRating: Number,
  reelRating: Number,
});

const Movie = mongoose.model('Movie', movieSchema);

const save = (movieData) => {
  let movie = new Movie(movieData);
  return movie.save(movie);
};

const getAll = () => {
  return Movie.find().exec();
};

module.exports = {
  save,
  getAll,
};
