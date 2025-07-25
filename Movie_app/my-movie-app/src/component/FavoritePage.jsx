
import MovieCard from "./MovieCard";
 
const FavoritePage = ({ favorites, onFavoriteClick }) => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Your Favourite Movies</h2>
      {favorites.length === 0 ? (
        <p className="text-gray-500">You haven’t added any favourites yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favorites.map((movie) => (
            <MovieCard
key={movie.id}
              movie={movie}
              isFavorited={true}
              onFavoriteClick={onFavoriteClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};
 
export default FavoritePage;