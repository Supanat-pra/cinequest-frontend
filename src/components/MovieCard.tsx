export const MovieCard: React.FC = () => {
  return (
    <div className="flex flex-col bg-[#1A1A1A] p-3 rounded-md hover:scale-105 transition-all duration-200">
      <div className="text-xl">Movie Title</div>
      <img src="" alt="movieimg" />
      <div>Overview:</div>
      <div className="bg-[#232323] text-sm p-1 rounded-md">
        Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <div>Score: 9/10</div>
    </div>
  );
};
