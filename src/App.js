import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";

const POPULAR_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=27f6baf417b8c57971b37fba2b1a14b2";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=27f6baf417b8c57971b37fba2b1a14b2&query=";
function App() {
  const [movies, setmovies] = useState([]);
  const [searchterm, setsearchterm] = useState("");
  useEffect(() => {
    fetch(POPULAR_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setmovies(data.results);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchterm) {
      fetch(SEARCH_API + searchterm)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.results);
          setmovies(data.results);
        });
      setsearchterm("");
    }
  };

  const handleChange = (e) => {
    setsearchterm(e.target.value);
  };
  return (
    <>
      <header>
        <center>
          <span className="siteName">Trending Movies</span>
        </center>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            className="search"
            placeholder="Search Movie..."
            value={searchterm}
            onChange={handleChange}
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 ? (
          movies.map((movie) => <Movie key={movie.id} {...movie} />)
        ) : (
          <h4>Movie Not Found</h4>
        )}
      </div>
    </>
  );
}

export default App;
