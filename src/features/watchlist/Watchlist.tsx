import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { MovieCard } from "../../components/MovieCard";
import { useAuth } from "../auth/useAuth";

export const Watchlist = () => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return (
      <div className="flex text-5xl items-center justify-center h-screen w-screen">
        Please Login First
      </div>
    );
  }

  return (
    <div className="m-8">
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
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

// <Link to={`/movie/`}>
//   <div className="w-40 bg-neutral-600 hover:scale-105 transition-all duration-200 cursor-pointer">
//     <img src="" className="rounded-lg shadow-lg" />
//     <h3 className="mt-2 text-sm font-medium">movie.title</h3>
//   </div>
// </Link>
