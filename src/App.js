import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { atom, useRecoilState } from "recoil";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Movie from "./pages/movie";
import { moviesState, dataState } from "./atoms";
import { useEffect } from "react";
import axios from "axios";
import moviesSort from "./utils/moviesSort";

function App() {
  const [movies, setMovies] = useRecoilState(moviesState);
  const [data, setData] = useRecoilState(dataState);

  useEffect(() => {
    const getMovies = async () => {
      try {
        let { data } = await axios.get("https://api.tvmaze.com/shows");
        setData(data);
        setMovies(moviesSort(data));
      } catch (error) {
        console.error(error);
      }
    };
    getMovies();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/:id" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default App;
