import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Poster from './Poster.jsx';
import styled from 'styled-components';
import MovieData from './MovieData.jsx';

const PosterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 80px 0 80px;
  color: grey;
  opacity: ${(props) => props.showData ? 0.5 : 1};
`

const Logo = styled.img`
  width: 400px;
  height: 200px;
`
const LogoContainer = styled.div`
  text-align: center;
  color: grey;
  opacity: ${(props) => props.showData ? 0.5 : 1};
`

const DropDown = styled.div`
  width: 100px;
  margin: auto;
  padding-bottom: 5px;
`

const App = () => {
  let [movies, setMovies] = useState([]);
  let [showData, setShowData] = useState(false);
  let [currentMovie, setCurrentMovie] = useState({});

  useEffect(() => {
    axios.get('/movies')
      .then((res) => {
        setMovies(res.data)
      })
      .catch((err) => console.log(err));
  }, []);

  const toggleData = (movie) => {
    setShowData(!showData);
    setCurrentMovie(movie)
  }

  const sortMovies = (e) => {
    let unsorted = [...movies], newMovies
    if (e.target.value === 'highest') {
      newMovies = unsorted.sort((movie1, movie2) => movie2.reelRating - movie1.reelRating);
    } else {
      newMovies = unsorted.sort((movie1, movie2) => movie1.reelRating - movie2.reelRating);
    }
    setMovies(newMovies);
  }

  const genreSelect = (e) => {
    let genre = e.target.value, newMovies;

    if (genre === 'genre') {
      newMovies = movies.map((movie) => {
        movie.show = true;
        return movie;
      })
    } else {
      newMovies = movies.map((movie) => {
        if (!movie.Genre.includes(genre)) {
          movie.show = false;
        } else {
          movie.show = true;
        }
        return movie;
      })
    }
    setMovies(newMovies)
  }

  return (
    <div>
        <LogoContainer showData={showData}>
          <Logo src="logo.png"></Logo>
          <DropDown>
            <select onChange={sortMovies}>
              <option value="sort">Popularity</option>
              <option value="highest">Highest Rated</option>
              <option value="lowest">Lowest Rated</option>
            </select>
          </DropDown>
          <DropDown>
            <select onChange={genreSelect}>
              <option value="genre">Genre</option>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Horror">Horror</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Thriller">Thriller</option>
              <option value="Crime">Crime</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Music">Music</option>
              <option value="Romance">Romance</option>
              <option value="Biography">Biography</option>
            </select>
          </DropDown>
        </LogoContainer>
        {showData && <MovieData movie={currentMovie} toggleData={toggleData}></MovieData>}
        <PosterContainer showData={showData}>
          {movies.map((movie, idx) => {
            if (movie.show) {
              return <Poster movie={movie} key={idx} toggleData={toggleData}/>
            }
          })}
        </PosterContainer>
    </div>
  ) 
};

export default App;