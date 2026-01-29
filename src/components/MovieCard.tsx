import type { TMDbSummaryResult } from "@/features/movies/movies.type";
import { useNavigate } from "react-router-dom";

type MovieCardProps = {
  item: TMDbSummaryResult;
};

export const MovieCard = ({ item }: MovieCardProps) => {
  const imageURL = "https://image.tmdb.org/t/p/w342";
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col w-full bg-[#1A1A1A] p-3 rounded-lg hover:scale-102 transition-all duration-200"
      onClick={() => navigate(`/title/${item.media_type}/${item.id}`)}
    >
      <div className="text-xl truncate">{item.title}</div>
      <div className="mt-2 w-full overflow-hidden mb-2">
        <img
          src={
            item.poster_path
              ? `${imageURL}/${item.poster_path}`
              : "https://placehold.co/235x353"
          }
          alt="movieimg"
          className="w-full aspect-3/4 object-cover"
        />
      </div>
      <div>Overview:</div>
      <div className="bg-[#232323] text-sm p-1 rounded-md">{item.overview}</div>
      <div className="mt-2">
        {item.vote_average === 0
          ? "Vote Rating: null"
          : `Vote Rating: ${item.vote_average}`}
      </div>
    </div>
  );
};
