import React from "react";
import "./styles.css";
function Card({ movie, index }) {
  const img = movie.image.original;

  return (
    <div className="game">
      <div className="rank"> {(index % 10) + 1}</div>
      <div className="front">
        <img alt="thumbnail" src={img} className="thumbnail" />
        <h3 className="name">{movie.name}</h3>
      </div>
      <div className="back">
        <h5> premiered at: {movie.premiered} </h5>
        <h5> movie language: {movie.language} </h5>
        <h5> movie rating: {movie.rating.average} </h5>
      </div>
      <div className="background"></div>
    </div>
  );
}

export default Card;
