import type { TMDbSummaryResult } from "@/features/movies/movies.type";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

type MovieCardProps = {
  item: TMDbSummaryResult;
};

export const MovieCard = ({ item }: MovieCardProps) => {
  const imageURL = "https://image.tmdb.org/t/p/w342";
  const navigate = useNavigate();

  return (
    <motion.div
      className="flex flex-col w-full bg-[#1A1A1A] p-3 rounded-lg"
      onClick={() => navigate(`/title/${item.media_type}/${item.id}`)}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="text-lg md:text-xl truncate">{item.title}</div>

      <div className="mt-2 w-full overflow-hidden mb-2 rounded-md">
        <motion.img
          src={
            item.poster_path
              ? `${imageURL}/${item.poster_path}`
              : "https://placehold.co/235x353"
          }
          alt={item.title}
          className="w-full aspect-10/11 object-fit md:aspect-2/3 md:object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="text-xs md:text-sm text-gray-400">Overview:</div>
      <div className="bg-[#232323] text-xs md:text-sm p-0.5 md:p-1 rounded-md line-clamp-4">
        {item.overview}
      </div>

      <div className="mt-2 text-xs md:text-sm">
        {item.vote_average === 0
          ? "Vote Rating: null"
          : `Vote Rating: ${item.vote_average}`}
      </div>
    </motion.div>
  );
};
