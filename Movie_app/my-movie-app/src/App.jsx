import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import MovieCard from "./component/MovieCard";
import FavoritePage from "./component/FavoritePage";


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("/Movie.json")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);

  const handleSearch = () => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filtered);
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <Router>
       <div className="max-w-6xl mx-auto px-4 py-6 font-sans">
        <nav className="flex justify-between items-center mb-6  bg-cyan-500 shadow-md">
      <h1 className="text-4xl font-bold">🎬 Movie App</h1>

      <Link
        to="/"
       className="text-white-800 font-medium hover:text-blue-900 p-4 mr-4 text-xl "
      >
        Home
      </Link>
      <Link
        to="/favourite"
        className="text-white-800 font-medium hover:text-blue-900 p-4 mr-4 text-xl "
      >
        Favourites ({favorites.length})
      </Link>
    </nav>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div className="w-full flex justify-end p-4 ">
                  <input
                    type="text"
                    placeholder="Search movie..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-48 px-4  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-100"
                  />
                  <button
                    onClick={handleSearch}
                    className="w-32 bg-blue-500 text-white text-md py-4 rounded shadow-sm hover:bg-blue-700 "
                  >
                    Search
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6  p-4">
                  {(searchResults.length > 0 ? searchResults : movies).map(
                    (movie) => (
                      <MovieCard
                        key={movie.id}
                        movie={movie}
                        isFavorited={favorites.includes(movie.id)}
                        onFavoriteClick={toggleFavorite}
                      />
                    )
                  )}
                </div>
              </div>
            }
          />
          <Route
            path="/favourite"
            element={
              <FavoritePage
                favorites={favorites
                  .map((id) => movies.find((movie) => movie.id === id))
                  .filter((m) => m !== undefined)}
                onFavoriteClick={toggleFavorite}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
