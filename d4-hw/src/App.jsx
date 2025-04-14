import movies from "./movieList.json";
import MovieCard from "./components/MovieCard";

const App = () => {
  return (
    <div className="bg-gray-950 min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        {movies.map((movie, idx) => (
          <MovieCard key={idx} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;
