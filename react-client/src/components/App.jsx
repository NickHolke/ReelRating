import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('/movies')
      .then((res) => {
        setMovies(res.data)
      })
      .catch((err) => console.log(err));
  })
  return <div>hello</div>
};

export default App;