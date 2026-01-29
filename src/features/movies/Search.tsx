import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieCard } from "../../components/MovieCard";
import { searchMulti } from "./movies.service";
import Lottie from "lottie-react";
import LoadAnimate from "../../assets/LoadAnimate.json";
import type { TMDbMultiSearchResponse } from "./movies.type";

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q") ?? "";
  const [input, setInput] = useState(query);
  const [data, setData] = useState<TMDbMultiSearchResponse>({
    page: 0,
    total_pages: 0,
    total_results: 0,
    results: [],
  });
  const [loading, setLoading] = useState(false);

  // Sync URL (User presses back, open shared link, reload page)
  useEffect(() => {
    setInput(query);
  }, [query]);

  useEffect(() => {
    const fetchData = async () => {
      if (!query.trim()) {
        setData({
          page: 0,
          total_pages: 0,
          total_results: 0,
          results: [],
        });
        return;
      }
      setLoading(true);
      try {
        const res = await searchMulti(query);
        setData(res);
      } catch (err) {
        console.error("Fetch fail", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // set query in URL --- ?q=...
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input.trim()) {
      setSearchParams({});
      return;
    }

    setSearchParams({ q: input });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen ">
        <Lottie animationData={LoadAnimate} />
      </div>
    );
  }

  return (
    <div className="m-8">
      <form onSubmit={handleSubmit}>
        <div className="w-full max-w-4xl mx-auto flex gap-5">
          <input
            type="search"
            placeholder="Search movies, TV shows..."
            className="w-full h-10 pl-8 pr-4 rounded-xl border border-gray-300 bg-[#232323]
             focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-red-900
             shadow-sm"
            onChange={handleChange}
            value={input}
          />
          <button
            type="submit"
            className="px-6 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700 transition"
          >
            {loading ? "Searching" : "Search"}
          </button>
        </div>
      </form>
      <div className="m-8 grid grid-cols-4 gap-6">
        {data.results.map((item) => {
          return (
            <MovieCard key={`${item.media_type}-${item.id}`} item={item} />
          );
        })}
      </div>
    </div>
  );
};
