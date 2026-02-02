import { api } from "@/api/axios";
import type { ReviewPayload } from "../watchlist/watchlist.type";
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

export const updateWatchlist = async (
  movieId: string,
  payload: ReviewPayload,
): Promise<Watchlist> => {
  const res = await api.put(`/watchlist/${movieId}`, payload);
  return res.data.data;
};

export const deleteWatchlist = async (movieId: string): Promise<Watchlist> => {
  const res = await api.delete(`/watchlist/${movieId}`);
  return res.data.data;
};
