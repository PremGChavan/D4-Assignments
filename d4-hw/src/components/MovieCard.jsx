import { Heart, MessageCircle, Share2 } from "lucide-react";
import "../app.css";
const MovieCard = ({ movie }) => {
  return (
    <div className="rounded-2xl shadow-md bg-zinc-900 text-white p-4 flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
      <div className="flex flex-col md:flex-row w-full md:w-3/4 p-5 gap-5">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-24 h-36 object-cover rounded-lg shadow-md"
        />

        <div className="text-white flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold">{movie.Title}</h2>
            <p className="text-sm text-cyan-400">
              {movie.Year}, <span className="underline">{movie.Director}</span>
            </p>

            <div className="flex items-center space-x-3 my-2">
              <span className="bg-zinc-800 px-2 py-1 rounded text-xs border border-white/20">
                {movie.Runtime}
              </span>
              <p className="text-sm">{movie.Genre}</p>
            </div>

            <p className="text-sm leading-snug">{movie.Plot}</p>
          </div>

          <div className="mt-3 flex space-x-4 text-white/70">
            <Share2 className="w-4 h-4 hover:text-white cursor-pointer" />
            <Heart className="w-4 h-4 hover:text-white cursor-pointer" />
            <MessageCircle className="w-4 h-4 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="md:w-1/4 p-3 flex items-center justify-center">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="rounded-xl shadow-lg object-cover max-h-80"
        />
      </div>
    </div>
  );
};

export default MovieCard;
