import { Link } from "react-router-dom";
export const Home: React.FC = () => {
  return (
    <div className="m-8">
      <h1>Welcome to CineQuest</h1>
      <div>Every Movie is a Quest Completed</div>
      <div>
        Track your watch history and discover what’s next on your journey.
      </div>
      <Link to="/login" className="bg-red-500 p-1 hover:bg-red-700">
        GET STARTED
      </Link>
    </div>
  );
};
