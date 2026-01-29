import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Lottie from "lottie-react";
import LoadAnimate from "../../assets/LoadAnimate.json";
import type { MediaDetail, ReviewPayload } from "./movies.type";
import type { Watchlist } from "../watchlist/watchlist.type";
import { getDetails } from "./movies.service";
import { useAuth } from "../auth/useAuth";
import { getWatchlist } from "../watchlist/watchlist.service";

type Params = {
  mediaType?: "movie" | "tv";
  movieId?: string;
};

export const MovieDetails = () => {
  const { isLoggedIn } = useAuth();
  const { mediaType, movieId } = useParams<Params>();
  const [result, setResult] = useState<MediaDetail>({
    genres: [{ name: "" }],
    id: 0,
    media_type: "movie",
    overview: "",
    poster_path: "",
    release_date: "",
    title: "",
    vote_average: 0,
  });
  const [reviews, setReviews] = useState<ReviewPayload>({
    review: "",
    rating: 0,
  });
  const [watchlist, setWatchlist] = useState<Watchlist[]>([
    {
      user_id: 0,
      tmdb_id: 0,
      review: "",
      rating: 0,
      created_at: "",
    },
  ]);
  const [loading, setLoading] = useState(true);
  const imageURL = "https://image.tmdb.org/t/p/w342";

  useEffect(() => {
    if (mediaType !== "movie" && mediaType !== "tv") return;
    if (typeof movieId !== "string") return;
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const res = await getDetails(mediaType, movieId);
        setResult(res);
      } catch (error) {
        console.error("Failed to fetch details", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [mediaType, movieId]);

  useEffect(() => {
    if (!isLoggedIn) {
      setWatchlist([]);
      return;
    }
    const fetchWatchlist = async () => {
      try {
        const res = await getWatchlist();
        setWatchlist(res);
      } catch (err) {
        console.error("Watchlist failed to load:", err);
      }
    };
    fetchWatchlist();
  }, [isLoggedIn]);

  if (
    !(
      (mediaType === "movie" || mediaType === "tv") &&
      typeof movieId === "string"
    )
  ) {
    return <Navigate to="/404" replace />;
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen ">
        <Lottie animationData={LoadAnimate} />
      </div>
    );
  }

  if (!result) return <div>Movie not found.</div>;

  return (
    <div>
      <div className="m-8 grid grid-cols-[32%_68%] min-h-screen">
        <div>
          <img
            src={
              result.poster_path
                ? `${imageURL}/${result.poster_path}`
                : "https://placehold.co/235x353"
            }
            alt="movieimg"
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-5xl font-bold">{result?.title}</div>
          <div className="flex flex-col">
            <div>{result.release_date}</div>
            <div>{result.genres.map((item) => `${item.name} `)}</div>
          </div>
          <div className="text-xl font-bold">Overview:</div>
          <div className="">{result.overview}</div>
          <div>Vote Rating: {result.vote_average}</div>

          {isLoggedIn ? (
            <>
              <div className="text-xl font-bold">Write your review!:</div>
              <textarea
                className="w-full bg-[#232323] p-2"
                name="review"
                id="review"
                rows={4}
              ></textarea>
              <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <div className="text-lg">Give a rating: </div>
                  <input
                    className="bg-[#232323] w-8 text-lg"
                    type="number"
                    name="rating"
                    id="rating"
                    min="0"
                    max="10"
                    step="1"
                  />
                  <div className="text-lg">/10</div>
                </div>
                <button
                  className="bg-red-500 p-2 hover:bg-red-700"
                  type="submit"
                >
                  Add to Watchlist
                </button>
              </div>
            </>
          ) : (
            <div className="bg-red-900 text-center w-full p-5 mx-auto mt-10">
              You can add this to your watchlist! Please login first.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
