import React from "react";
import Card from "./card";
import "./styles.css";
import { moviesState } from "../../atoms";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

function Cards({ genre }) {
  const [movies, setMovies] = useRecoilState(moviesState);
  const navigate = useNavigate();

  const clickHandler = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div className="cards">
      {movies[genre].map((elm, i) => {
        return (
          <div key={i} onClick={() => clickHandler(elm.id)}>
            <Card movie={elm} index={i} />
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
