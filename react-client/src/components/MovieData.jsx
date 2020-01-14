import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 1050px;
  height: 500px;
  background: black;
  position: fixed;
  color: white;
  margin: auto;
  z-index: 3;
`

const MovieData = ({ movie, toggleData }) => (
  <Wrapper onClick={() => toggleData()}>
    {movie.Title}
  </Wrapper>
)

export default MovieData;