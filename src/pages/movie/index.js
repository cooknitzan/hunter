import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        let { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, []);

  return movie ? (
    <div className="movie-container">
      <div className="movie-description left">
        <div className="headline">
          <span className="movie-name">{movie?.name}</span>
        </div>
        <span className="movie-rating">
          movie rating: {movie?.rating.average}
        </span>
        <div
          className="movie-summary"
          dangerouslySetInnerHTML={{ __html: movie?.summary }}
        />
      </div>
      <div className="movie-description right">
        <img alt="movie" src={movie?.image.original} className="movie-image" />
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default Movie;
