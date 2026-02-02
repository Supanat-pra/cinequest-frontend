export interface Watchlist {
  user_id: number;
  tmdb_id: number;
  review: string | null;
  rating: number | null;
  created_at: string;
}

export interface ReviewPayload {
  review: string;
  rating: number;
}
