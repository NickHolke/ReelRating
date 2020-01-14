import React from 'react';

const Poster = ({ movie }) => (
  <div>
    <img src={movie.Poster}></img>
  </div>
);

export default Poster;