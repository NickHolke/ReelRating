import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Poster from './Poster.jsx';

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
      {movies.map((movie) => <Poster movie={movie}/>)}
    </div>
  ) 
};

export default App;