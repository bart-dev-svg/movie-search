function MovieCard({ title, year, poster }) {
  return (
    <li className="movie-card">
      {poster !== "N/A" ? (
        <img src={poster} alt={title} />
      ) : (
        <div className="no-poster">No poster</div>
      )}
      <div className="movie-info">
        <strong>{title}</strong>
        <span>{year}</span>
      </div>
    </li>
  );
}

export default MovieCard;
