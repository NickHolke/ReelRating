import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 60%;
  height: 500px;
  background: black;
  position: fixed;
  color: white;
  margin-left: 20%;
  margin-top: -10%;
  z-index: 3;
`

const MovieData = ({ movie, toggleData }) => (
  <Wrapper onClick={() => toggleData()}>
    {movie.Title}
  </Wrapper>
)

export default MovieData;