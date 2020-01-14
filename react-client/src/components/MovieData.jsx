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
  z-index: 10;
  font-size: 24px;
  border-radius: 10px;
  line-height: 1.4;
`

const Content = styled.div`
  padding: 10px;
`

const ReelRating = styled.div`
  width: 100px;
  margin: auto;
  text-align: center;
  font-size: 30px;
`

const Image = styled.img`
  float: right;
  height: 310px;
  width: 240px;
`

const MovieData = ({ movie, toggleData }) => (
  <Wrapper onClick={() => toggleData()}>
    <Content>
      <Image src={movie.Poster}></Image>
      <ReelRating>
        ReelRating: {movie.reelRating}
      </ReelRating>
      RottenTomatoes: {movie.RottenTomatoes}<br/>
      IMDB: {movie.imdbRating}<br/>
      MetaCritic: {movie.MetaCritic}<br/>
      Title: {movie.Title}<br/>
      Year: {movie.Year}<br/>
      Genre: {movie.Genre}<br/>
      Director: {movie.Director}<br/>
      Plot: {movie.Plot}
    </Content>
  </Wrapper>
)

export default MovieData;