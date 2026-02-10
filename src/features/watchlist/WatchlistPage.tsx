import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import LoadAnimate from "../../assets/LoadAnimate.json";
import { useAuth } from "../auth/useAuth";
import { useEffect, useMemo, useState } from "react";
import type { Watchlist } from "./watchlist.type";
import { getWatchlist } from "./watchlist.service";
import { WatchlistMovieCard } from "@/components/WatchlistMovieCard";

export const WatchlistPage = () => {
  const { isLoggedIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const [watchlist, setWatchlist] = useState<Watchlist[]>([]);
  const [activeCat, setActiveCat] = useState("recently");

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

  const sortedWatchlist = useMemo(() => {
    const list: Watchlist[] = [...watchlist];
    if (activeCat === "recently") {
      list.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
      );
      return list;
    }
    if (activeCat === "alphabetical") {
      list.sort((a, b) => a.title.localeCompare(b.title));
      return list;
    }
    return list;
  }, [activeCat, watchlist]);

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
    <div className="m-2 mt-4 md:m-8 min-h-screen">
      <h1 className="text-4xl text-center">MY WATCHLIST</h1>
      <Tabs
        defaultValue="recently"
        onValueChange={setActiveCat}
        className="mx-8 mt-4 md:mt-8 flex justify-center"
      >
        <TabsList className="flex gap-5 md:gap-10 bg-[#1E1E1E]">
          <TabsTrigger value="recently">Recently Added</TabsTrigger>
          <TabsTrigger value="alphabetical">Alphabetical</TabsTrigger>
        </TabsList>
      </Tabs>
      <Link
        to="/search"
        className="md:hidden block w-fit ml-auto bg-[#1E1E1E] py-1 px-2 rounded-lg hover:scale-105 transition-all duration-200 hover:bg-[#141414]"
      >
        +
      </Link>
      <Link
        to="/search"
        className="hidden md:block w-fit ml-auto bg-[#1E1E1E] p-3 rounded-lg hover:scale-105 transition-all duration-200 hover:bg-[#141414]"
      >
        + Add Movies & TV Shows
      </Link>
      <div className="grid grid-cols-2 gap-2 mt-4 md:mt-8 md:grid md:grid-cols-5 md:gap-4">
        {sortedWatchlist.map((item) => {
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
