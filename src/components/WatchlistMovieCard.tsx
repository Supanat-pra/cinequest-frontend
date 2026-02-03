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
      className="flex gap-4 bg-[#1A1A1A] h-50 p-3 rounded-lg cursor-pointer"
      onClick={() => navigate(`/title/${item.media_type}/${item.tmdb_id}`)}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {/* Poster */}
      <img
        src={
          item.poster_path
            ? `${imageURL}${item.poster_path}`
            : "https://placehold.co/120x180"
        }
        alt={item.title}
        className="w-28 aspect-3/4 object-cover rounded-md shrink-0"
      />

      {/* Content */}
      <div className="flex flex-col gap-2 overflow-hidden">
        <div className="text-lg font-semibold truncate">{item.title}</div>

        {/* User Rating */}
        <div className="text-sm text-yellow-400">
          {item.rating !== null ? `⭐ ${item.rating} / 10` : "Not rated"}
        </div>

        {/* User Review */}
        <div className="text-xs text-gray-300 bg-[#232323] p-2 rounded-md ">
          {item.review || "No review written."}
        </div>
      </div>
    </motion.div>
  );
};
