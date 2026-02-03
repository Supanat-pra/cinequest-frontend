import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";

export const Login = () => {
  const { isLoggedIn, login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ username: "", password: "" });

  const handleLogIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(form);
    } catch {
      alert("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  if (isLoggedIn) return <Navigate to="/watchlist" replace />;

  return (
    <div className="flex justify-center p-20 min-h-screen">
      <div className="bg-[#1E1E1E] flex flex-col gap-10 w-[400px] h-[500px] p-10 border border-neutral-700 rounded-md">
        <div className="text-5xl">Login</div>
        <form onSubmit={handleLogIn} className="flex flex-col gap-5">
          <div>
            <input
              type="text"
              className="bg-white text-black px-2 text-md w-full h-10"
              id="username"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={form.username}
              required
            />
          </div>
          <div>
            <input
              type="text"
              className="bg-white text-black px-2 text-md w-full h-10"
              id="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={form.password}
              required
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="remember" className="text-sm">
              <input
                type="checkbox"
                className="mr-1"
                id="remember"
                name="remember"
              />
              Remember me
            </label>
            <Link to="/" className="text-sm text-blue-700 hover:underline">
              Forgot password
            </Link>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-red-500 py-2 hover:bg-red-700"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p>
          Don't have an account?
          <Link to="/register" className="pl-1 text-red-800 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};
