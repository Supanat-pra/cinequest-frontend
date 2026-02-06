import type React from "react";
import { Link, useNavigate } from "react-router-dom";
import movieicon from "../assets/movie_icon.png";
import { useAuth } from "@/features/auth/useAuth";

export const Navbar: React.FC = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await logout();
    navigate("/");
  };

  return (
    <div className="sticky z-50 top-0 w-full bg-[#141313] flex justify-between border-b-2 border-neutral-700 px-2 md:pl-5 md:pr-10 md:py-2">
      <div className="flex gap-3 md:gap-5 items-center">
        <img
          src={movieicon}
          alt="movieicon"
          className="w-12 h-12 align-middle"
        ></img>
        <div className="flex items-center gap-3 md:gap-10">
          <Link
            to="/"
            className="text-sm md:text-lg hover:[text-shadow:0_0_20px_#e6dedd]"
          >
            Home
          </Link>
          {isLoggedIn ? (
            <Link
              to="/watchlist"
              className="text-sm md:text-lg hover:[text-shadow:0_0_20px_#e6dedd] cursor-pointer"
            >
              Watchlist
            </Link>
          ) : null}
        </div>
      </div>

      {isLoggedIn ? (
        <div className="flex items-center gap-3 md:gap-10">
          <Link
            to="/search"
            className="text-sm md:text-lg hover:[text-shadow:0_0_20px_#e6dedd] cursor-pointer"
          >
            Search
          </Link>
          <Link
            to="/profile"
            className="text-sm md:text-lg hover:[text-shadow:0_0_20px_#e6dedd] cursor-pointer"
          >
            Profile
          </Link>
          <button
            onClick={handleLogout}
            className="text-sm md:text-lg hover:[text-shadow:0_0_20px_#e6dedd] cursor-pointer"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-5 md:gap-10">
          <Link
            to="/search"
            className="text-sm md:text-lg hover:[text-shadow:0_0_20px_#e6dedd] cursor-pointer"
          >
            Search
          </Link>
          <Link
            to="/login"
            className="text-sm md:text-lg hover:[text-shadow:0_0_20px_#e6dedd] cursor-pointer"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};
