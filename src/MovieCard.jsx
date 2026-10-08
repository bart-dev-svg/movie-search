function MovieCard({ title, year, poster }) {
  return (
    <li>
      {poster !== "N/A" && <img src={poster} alt={title} width="100" />}
      <div>
        <strong>{title}</strong> ({year})
      </div>
    </li>
  );
}

export default MovieCard;