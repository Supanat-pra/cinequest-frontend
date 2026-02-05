import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Lottie from "lottie-react";
import LoadAnimate from "../../assets/LoadAnimate.json";
import type { MediaDetail } from "./movies.type";
import type { Watchlist, ReviewPayload } from "../watchlist/watchlist.type";
import { getDetails } from "./movies.service";
import { useAuth } from "../auth/useAuth";
import {
  createWatchlist,
  deleteWatchlist,
  getWatchlist,
  updateWatchlist,
} from "../watchlist/watchlist.service";
import { ReviewForm } from "@/components/ReviewForm";

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
  const [watchlist, setWatchlist] = useState<Watchlist[]>([
    {
      user_id: 0,
      media_type: "movie",
      tmdb_id: 0,
      title: "",
      poster_path: "",
      review: "",
      rating: 0,
      created_at: "",
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const imageURL = "https://image.tmdb.org/t/p/w342";

  // Fetch movie details
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

  // Fetch watchlist
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

  // Fetch individual watchlist, if exist normalize initial review for pass down into ReviewForm
  const userData =
    watchlist.find((item) => item.tmdb_id === Number(movieId)) ?? null;
  const initialReview: ReviewPayload | null = userData
    ? { review: userData.review ?? "", rating: userData.rating ?? 0 }
    : null;

  // Create Watchlist
  const handleSaveReview = async (payload: ReviewPayload) => {
    if (mediaType !== "movie" && mediaType !== "tv") return;
    if (typeof movieId !== "string") return;
    setSaving(true);
    try {
      if (!userData) {
        await createWatchlist(
          mediaType,
          movieId,
          result.title,
          result.poster_path,
          payload,
        );
      } else {
        await updateWatchlist(movieId, payload);
      }
      const updated = await getWatchlist();
      setWatchlist(updated);
    } catch (err) {
      console.error("Failed to save review", err);
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteWatchlist = async () => {
    if (!userData) return;
    if (typeof movieId !== "string") return;
    const confirm = window.confirm("Remove from watchlist?");
    if (!confirm) return;
    try {
      await deleteWatchlist(movieId);
      const updated = await getWatchlist();
      setWatchlist(updated);
    } catch (err) {
      console.error("Failed to delete review", err);
    }
  };

  // if path params not applicable => 404
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
      <div className="flex flex-col m-8 md:grid grid-cols-[32%_68%] min-h-screen">
        <div className="h-130 aspect-2/3 pr-4">
          <img
            src={
              result.poster_path
                ? `${imageURL}/${result.poster_path}`
                : "https://placehold.co/235x353"
            }
            alt="movieimg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 mt-2">
          <div className="flex justify-between">
            <div className="text-2xl md:text-5xl font-bold">
              {result?.title}
            </div>
            {userData ? (
              <button
                className="bg-[#2a2929] text-sm md:text-base px-1 md:h-10 cursor-pointer rounded-sm hover:bg-[#0b0b0b]"
                onClick={handleDeleteWatchlist}
              >
                Delete Watchlist
              </button>
            ) : null}
          </div>

          <div className="flex flex-col">
            <div>{result.release_date}</div>
            <div>{result.genres.map((item) => `${item.name} `)}</div>
          </div>
          <div className="text-xl font-bold">Overview:</div>
          <div className="">{result.overview}</div>
          <div>Vote Rating: {result.vote_average}</div>
          {/* Child component(ReviewForm) need to have "key" to make React re-initialize the component again React not remount because React thinks it is still the same MovieDetails page */}
          {isLoggedIn ? (
            <ReviewForm
              key={movieId}
              isSaving={saving}
              initialValue={initialReview}
              onSubmit={handleSaveReview}
            />
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
