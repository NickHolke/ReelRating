import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  width: 60%;
  background: black;
  position: fixed;
  color: white;
  margin-left: 20%;
  margin-top: -10%;
  z-index: 10;
  font-size: 24px;
  border-radius: 10px;
  line-height: 1.4;
  display: grid;
  grid-template-columns: 1fr 1.25fr 1fr;
  grid-column-gap: 20px;
  color: #EEEEEE;
  color: #D1D1D1;
  font-size: 20px;
  padding: 10px;
`

const ReelRating = styled.div`
  border: 1px solid black;
  text-align:center;
  display: inline-block;
  padding: 30px;
  border-radius: 50%;
  background: teal;
  color: white;
  margin-left: 50%;
  transform: translateX(-50%);
`

const Image = styled.img`
  max-heigth: 100%;
  max-width: 100%;
`

const BarBackground = styled.div`
  position: relative;
  height: 18px;
  background: #E3E3E3;
  border-radius: 5px;
  width: 76%;
  margin-top: -14px;
  // margin-left: 10px;
`
const Bar = styled.div`
  position: absolute;
  border-radius: 5px;
  height: 100%;
  top:0;
  left: 0;
  background: #D75A48;
  width: ${props => props.rating};
  z-index: 2;
`

const MovieData = ({ movie, toggleData }) => (
  <Grid onClick={()=>toggleData()}>
    <div>
      <Image src={movie.Poster}></Image>
    </div>
    <div>
      <p>Title: {movie.Title}</p>
      <p>Year: {movie.Year}</p>
      <p>Genre: {movie.Genre}</p>
      <p>Director: {movie.Director}</p>
      <p>{movie.Plot}</p>
    </div>
    <div>
      <ReelRating>{movie.reelRating}</ReelRating>
      <p>RottenTomatoes: {movie.RottenTomatoes}</p>
      <BarBackground>
        <Bar rating={movie.RottenTomatoes + '%'}></Bar>
      </BarBackground>
      <p>IMDB: {movie.imdbRating}</p>
      <BarBackground>
        <Bar rating={movie.imdbRating + '%'}></Bar>
      </BarBackground>
      <p>MetaCritic: {movie.MetaCritic}</p>
      <BarBackground>
        <Bar rating={movie.MetaCritic + '%'}></Bar>
      </BarBackground>
    </div>
  </Grid>
)

export default MovieData;