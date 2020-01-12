const unirest = require('unirest');
const API_KEY = '1aa4b71d59342b08b19dea8b16bcf4aa';
const baseURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

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