import { useState } from "react";

const movies = [
  { id: 1, title: "The Matrix", year: 1999 },
  { id: 2, title: "Inception", year: 2010 },
  { id: 3, title: "Interstellar", year: 2014 },
  { id: 4, title: "The Dark Knight", year: 2008 },
  { id: 5, title: "Jurassic Park", year: 1993 },
];

function App() {
  const [query, setQuery] = useState("");

  const results = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Movie search</h1>
      <input
        type="text"
        placeholder="Search for a movie"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <ul>
        {results.map((movie) => (
          <li key={movie.id}>
            {movie.title} ({movie.year})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
