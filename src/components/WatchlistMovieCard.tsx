import type { Watchlist } from "@/features/watchlist/watchlist.type";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

type WatchlistMovieCardProps = {
  item: Watchlist;
};

export const WatchlistMovieCard = ({ item }: WatchlistMovieCardProps) => {
  const navigate = useNavigate();
  const imageURL = "https://image.tmdb.org/t/p/w342";

  return (
    <motion.div
      className="flex flex-col gap-1 md:flex-row md:gap-2 bg-[#1A1A1A] p-1 md:p-2 rounded-lg cursor-pointer"
      onClick={() => navigate(`/title/${item.media_type}/${item.tmdb_id}`)}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {/* Poster */}
      <div className="w-full md:w-30 h-40 md:h-46 md:aspect-2/3 overflow-hidden rounded-md shrink-0">
        <img
          src={
            item.poster_path
              ? `${imageURL}${item.poster_path}`
              : "https://placehold.co/120x180"
          }
          alt={item.title}
          className="w-full h-full object-contain md:object-cover"
          // className="w-full aspect-2/3 object-contain rounded-md md:w-33 md:aspect-2/3 md:object-cover md:rounded-md md:shrink-0"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1 md:gap-2 overflow-hidden">
        <div className="text-xs text-center md:text-left md:text-base font-semibold truncate">
          {item.title}
        </div>

        {/* User Rating */}
        <div className="text-xs text-center md:text-left  text-yellow-400">
          {item.rating !== null ? `⭐ ${item.rating} / 10` : "Not rated"}
        </div>

        {/* User Review */}
        <div className="text-xs text-gray-300 bg-[#232323] p-1 md:p-2 rounded-md line-clamp-2 md:line-clamp-5">
          {item.review || "No review written."}
        </div>
      </div>
    </motion.div>
  );
};
