import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import LoadAnimate from "../../assets/LoadAnimate.json";
import { useAuth } from "../auth/useAuth";
import { useEffect, useState } from "react";
import type { Watchlist } from "./watchlist.type";
import { getWatchlist } from "./watchlist.service";
import { WatchlistMovieCard } from "@/components/WatchlistMovieCard";

export const WatchlistPage = () => {
  const { isLoggedIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const [watchlist, setWatchlist] = useState<Watchlist[]>([]);

  useEffect(() => {
    const fetchWatchlist = async () => {
      setLoading(true);
      try {
        const res = await getWatchlist();
        setWatchlist(res);
      } catch (err) {
        console.error("Watchlist failed to fetch:", err);
      }
      setLoading(false);
    };
    fetchWatchlist();
  }, []);

  if (!isLoggedIn) {
    return (
      <div className="flex text-5xl items-center justify-center h-screen w-screen">
        Please Login First
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen ">
        <Lottie animationData={LoadAnimate} />
      </div>
    );
  }

  return (
    <div className="m-8 min-h-screen">
      <h1 className="text-4xl text-center">MY WATCHLIST</h1>
      <Tabs defaultValue="recently" className="mx-8 mt-8 flex justify-center">
        <TabsList className="flex gap-10 bg-[#1E1E1E]">
          <TabsTrigger value="recently">Recently Added</TabsTrigger>
          <TabsTrigger value="alphabetical">Alphabetical</TabsTrigger>
        </TabsList>
      </Tabs>
      <Link
        to="/search"
        className="sticky left-330 bg-[#1E1E1E] p-3 rounded-lg hover:scale-105 transition-all duration-200"
      >
        + Add Movies & TV Shows
      </Link>
      <div className="m-8 grid grid-cols-5 gap-6">
        {watchlist.map((item) => {
          return (
            <WatchlistMovieCard
              key={`${item.media_type}-${item.tmdb_id}`}
              item={item}
            />
          );
        })}
      </div>
    </div>
  );
};
