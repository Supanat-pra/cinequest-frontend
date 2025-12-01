import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Search } from "./pages/Search";
import { Register } from "./pages/Register";
import { Profile } from "./pages/Profile";
import { MovieDetails } from "./pages/MovieDetails";
import { Watchlist } from "./pages/Watchlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/moviedetails", element: <MovieDetails /> },
      { path: "/profile", element: <Profile /> },
      { path: "/register", element: <Register /> },
      { path: "/search", element: <Search /> },
      { path: "/watchlist", element: <Watchlist /> },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
