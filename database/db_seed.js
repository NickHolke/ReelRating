const unirest = require('unirest');
const API_KEY = '1aa4b71d59342b08b19dea8b16bcf4aa';
const baseURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
const { save } = require('./db_connection');

save({
  Title: 'Test Movie',
  Year: '1969',
  Runtime: '1 hours',
  Genre: 'comedy',
  Director: 'John',
  Plot: 'A gripping thriller that will knock your socks off.',
  Awards: 'Emmy',
  Poster: 'http:posterpsth',
  InternetMovieDatabase: '98',
  RottenTomatoes: '12',
  MetaCritic: '14',
  imdbRating: '16',
  reelRating: '43',
})

let req = unirest("GET", "https://movie-database-imdb-alternative.p.rapidapi.com/");

req.query({
	"i": "tt0499549",
	"r": "json"
});

req.headers({
	"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
	"x-rapidapi-key": "9f47e036acmshd7e2398d19a3b05p1a38d3jsnad7da08815a2"
});

req.end((res) => {
  console.log(res.body);
})

//poster path http://image.tmdb.org/t/p/w185///kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg