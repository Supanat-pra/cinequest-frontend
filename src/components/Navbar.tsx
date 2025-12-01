import type React from "react";
import { Link } from "react-router-dom";
import movieicon from "../assets/movie_icon.png";

export const Navbar: React.FC = () => {
  return (
    <div className="sticky top-0 w-full bg-[#141313] pl-5 pr-10 py-2 flex justify-between border-b-2 border-b-gray-600 ">
      <div className="flex gap-5 items-center">
        <img
          src={movieicon}
          alt="movieicon"
          className="w-12 h-12 align-middle"
        ></img>
        <div className="flex gap-10 items-center">
          <Link to="/" className="text-xl">
            Home
          </Link>
          <Link to="/watchlist" className="text-xl">
            Watchlist
          </Link>
        </div>
      </div>
      <div className="flex gap-10 items-center">
        <Link to="/profile" className="text-xl">
          Profile
        </Link>
        <Link to="/login" className="text-xl">
          Login
        </Link>
      </div>
    </div>
  );
};
