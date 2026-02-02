export interface MediaDetail {
  genres: Array<{ name: string }>; //{ name: string }[]
  id: number;
  media_type: "movie" | "tv";
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
}

export interface TMDbSummaryResult {
  id: number;
  media_type: "movie" | "tv";
  title: string;
  overview: string;
  poster_path: string | null;
  vote_average: number;
}

export interface TMDbMultiSearchResponse {
  page: number;
  total_pages: number;
  total_results: number;
  results: TMDbSummaryResult[];
}
