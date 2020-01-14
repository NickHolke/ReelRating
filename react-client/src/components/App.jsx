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
`

const Logo = styled.img`
  width: 400px;
  height: 200px;
`
const LogoContainer = styled.div`
  text-align: center;
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

  return (
    <div>
      <LogoContainer><Logo src="logo.png"></Logo></LogoContainer>
      {showData && <MovieData movie={currentMovie} toggleData={toggleData}></MovieData>}
      <PosterContainer>
        {movies.map((movie, idx) => <Poster movie={movie} key={idx} toggleData={toggleData}/>)}
      </PosterContainer>
    </div>
  ) 
};

export default App;