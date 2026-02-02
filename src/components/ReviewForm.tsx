import { useState } from "react";
import type { ReviewPayload } from "@/features/watchlist/watchlist.type";

type ReviewFormProps = {
  isSaving: boolean;
  initialValue: ReviewPayload | null;
  onSubmit: (payload: ReviewPayload) => void;
};

export function ReviewForm({
  initialValue,
  onSubmit,
  isSaving,
}: ReviewFormProps) {
  const [review, setReview] = useState(initialValue?.review ?? "");
  const [rating, setRating] = useState(initialValue?.rating ?? 0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ review: review.trim(), rating: rating });
  };

  return (
    <>
      {initialValue ? (
        <form onSubmit={handleSubmit}>
          <div className="text-xl font-bold">Your review!:</div>
          <textarea
            className="w-full bg-[#232323] p-2"
            name="review"
            id="review"
            onChange={(e) => {
              setReview(e.target.value);
            }}
            value={review}
            rows={4}
            disabled={isSaving ? true : false}
            placeholder="Write your review..."
          ></textarea>
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-lg">Give a rating: </div>
              <input
                className="bg-[#232323] w-8 text-lg"
                type="number"
                name="rating"
                id="rating"
                min="0"
                max="10"
                step="1"
                disabled={isSaving ? true : false}
                value={rating}
                onChange={(e) => {
                  setRating(Number(e.target.value));
                }}
              />
              <div className="text-lg">/10</div>
            </div>
            <button className="bg-red-500 p-2 hover:bg-red-700" type="submit">
              {isSaving ? "Updating" : "Update Review"}
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <button
            className="bg-red-500 p-2 hover:bg-red-700"
            type="submit"
            disabled={isSaving ? true : false}
          >
            {isSaving ? "Adding" : "Add to Watchlist"}
          </button>
        </form>
      )}
    </>
  );
}
