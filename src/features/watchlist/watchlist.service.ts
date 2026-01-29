import { api } from "@/api/axios";
import type { ReviewPayload } from "../movies/movies.type";
import type { Watchlist } from "./watchlist.type";

export const createWatchlist = async (
  movieId: string,
  payload: ReviewPayload,
): Promise<Watchlist> => {
  const res = await api.post(`/watchlist/${movieId}`, payload);
  return res.data.data;
};

export const getWatchlist = async (): Promise<Watchlist[]> => {
  const res = await api.get("/watchlist/");
  return res.data.data;
};
