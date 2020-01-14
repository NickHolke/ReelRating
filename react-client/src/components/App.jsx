import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Poster from './Poster.jsx';
import styled from 'styled-components'

const PosterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 80px 0 80px;
`

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('/movies')
      .then((res) => {
        setMovies(res.data)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <PosterContainer>
        {movies.map((movie) => <Poster movie={movie}/>)}
      </PosterContainer>
    </div>
  ) 
};

export default App;