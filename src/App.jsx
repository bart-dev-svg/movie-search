import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <h1>Movie search</h1>
      <input
        type="text"
        placeholder="Search for a movie"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <p>You typed: {query}</p>
    </div>
  );
}

export default App;
