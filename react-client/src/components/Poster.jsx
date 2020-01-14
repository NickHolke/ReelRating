import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height: 300px;
  width: 220px;
  padding: 5px;
  
`;

const Rating = styled.div`
  height: 40px;
  width: 40px;
  position: absolute;
  background: black;
  color: white;
  text-align: center;
  margin-top: -50px;
  margin-left: 185px;
  font-size: 30px;
`

const Poster = ({ movie }) => (
  <div>
    <Image src={movie.Poster}></Image>
    <Rating>{movie.reelRating}</Rating>
  </div>
);

export default Poster;