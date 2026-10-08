import { useState } from "react";
import MovieCard from "./MovieCard";

const API_KEY = import.meta.env.VITE_OMDB_KEY;

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function searchMovies(event) {
    event.preventDefault();

    if (query.trim() === "") {
      return;
    }

    setLoading(true);
    setError("");
    setMovies([]);

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
      );
      const data = await response.json();

      if (data.Response === "False") {
        setError(data.Error);
      } else {
        setMovies(data.Search);
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
    }

    setLoading(false);
  }

  return (
    <div>
      <h1>Movie search</h1>

      <form onSubmit={searchMovies}>
        <input
          type="text"
          placeholder="Search for a movie"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <ul>
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            poster={movie.Poster}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;