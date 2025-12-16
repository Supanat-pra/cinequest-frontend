export const MovieDetails: React.FC = () => {
  return (
    <div>
      <div className="m-8 grid grid-cols-[32%_68%]">
        <div>
          <img src="" alt="movieimg" />
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-3xl font-bold">Knives Out</div>
          <div>12/12/2025 - Sci-fi, Action - 2 h 40 m</div>
          <div className="text-xl font-bold">Overview</div>
          <div className="">
            When young priest Jud Duplenticy is sent to assist charismatic
            firebrand Monsignor Jefferson Wicks, it’s clear that all is not well
            in the pews. After a sudden and seemingly impossible murder rocks
            the town, the lack of an obvious suspect prompts local police chief
            Geraldine Scott to join forces with renowned detective Benoit Blanc
            to unravel a mystery that defies all logic.
          </div>
          <div className="text-xl font-bold">Write your review!:</div>
          <textarea
            className="w-full bg-[#232323] p-2"
            name="review"
            id="review"
            rows={4}
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
              />
              <div className="text-lg">/10</div>
            </div>
            <button className="bg-red-500 p-2 hover:bg-red-700" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
