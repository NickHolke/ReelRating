import React, { useState } from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height: 310px;
  width: 240px;
  padding: 6px;
  cursor: pointer;
`;

const Rating = styled.div`
  height: 40px;
  width: 40px;
  position: absolute;
  background: black;
  color: white;
  text-align: center;
  margin-top: -50px;
  margin-left: 205px;
  font-size: 30px;
`

const Poster = ({ movie, toggleData }) => {
  
  return (
    <div>
      <Image src={movie.Poster} onClick={() => toggleData(movie)}></Image>
      <Rating>{movie.reelRating}</Rating>
    </div>
  );
}


export default Poster;