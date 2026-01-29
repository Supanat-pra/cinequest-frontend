import { api } from "@/api/axios";
import type { TMDbMultiSearchResponse, MediaDetail } from "./movies.type";

export const searchMulti = async (
  query: string,
): Promise<TMDbMultiSearchResponse> => {
  const res = await api.get("/api/search", {
    params: { q: query },
  });
  return res.data.data;
};

export const getDetails = async (
  mediaType: "movie" | "tv",
  movieId: string,
): Promise<MediaDetail> => {
  const res = await api.get(`/api/${mediaType}/${movieId}`);
  return res.data.data;
};
