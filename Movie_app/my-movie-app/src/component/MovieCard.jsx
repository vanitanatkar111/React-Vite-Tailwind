

const MovieCard = ({ movie, isFavorited, onFavoriteClick }) => {
  return (
    <div className="overflow-hidden max-w-xs bg-white p-4 rounded-lg shadow-md">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-48 h-auto object-cover rounded-md"
      />
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold">{movie.title}</h2>
        <p className="text-gray-500 mb-2">Released: {movie.year}</p>
        <button
onClick={() => onFavoriteClick(movie.id)}
          className={`text-2xl ${
            isFavorited ? "text-red-500" : "text-gray-400"
          }`}
          title="Toggle Favorite"
        >
          {isFavorited ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
};
 
export default MovieCard;