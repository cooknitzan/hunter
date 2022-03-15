import React from "react";
import { useRecoilState } from "recoil";
import Cards from "../../components/cards";
import "./styles.css";
import { moviesState } from "../../atoms";

function Home() {
  const [movies, setMovies] = useRecoilState(moviesState);
  const onScroll = (index) => {
    const { scrollWidth, scrollLeft } = document.getElementById(
      `cards${index}`
    );
    if (scrollLeft + 1400 > scrollWidth) {
      let temp = { ...movies };
      temp[index] = temp[index].concat(temp[index].slice(0, 10));
      setMovies({ ...temp });
    }
  };

  return (
    <div className="home-container">
      {Object.keys(movies).map((elm, index) => {
        return (
          <div className="movies" key={elm}>
            <span>{elm}</span>
            <div
              id={`cards${elm}`}
              key={elm}
              className="cards-container"
              onScroll={() => onScroll(elm)}
            >
              <Cards genre={elm} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
