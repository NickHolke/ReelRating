const unirest = require('unirest');
const { save } = require('./db_connection');
const { formatHelper } = require('./formatHelper');

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
  save(formatHelper(res.body));
})
