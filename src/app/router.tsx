import { createBrowserRouter } from "react-router-dom";
import { App } from "../app/App";
import { Home } from "../features/Home";
import { Login } from "../features/auth/Login";
import { Search } from "../features/movies/Search";
import { Register } from "../features/auth/Register";
import { Profile } from "../features/watchlist/Profile";
import { MovieDetails } from "../features/movies/MovieDetails";
import { Watchlist } from "../features/watchlist/Watchlist";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/title/:mediaType/:movieId", element: <MovieDetails /> },
      { path: "/profile", element: <Profile /> },
      { path: "/register", element: <Register /> },
      { path: "/search", element: <Search /> },
      { path: "/watchlist", element: <Watchlist /> },
    ],
  },
]);
