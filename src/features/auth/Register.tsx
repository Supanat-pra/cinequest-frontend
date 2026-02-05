import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import { register } from "./auth.service";

export const Register = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
  });

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/watchlist");
    }
  }, [isLoggedIn, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await register(form);
      navigate("/login");
    } catch {
      alert("Cannot register");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center p-5 md:p-20 ">
      <div className="bg-[#1E1E1E] flex flex-col gap-10 w-[550px] h-auto p-10 border border-neutral-700 rounded-md">
        <div className="text-3xl">Register</div>
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <div className="flex gap-5">
            <label htmlFor="first_name">
              First Name:
              <input
                type="text"
                className="bg-white text-black border border-neutral-600 px-2 text-sm w-full h-7"
                id="first_name"
                name="first_name"
                onChange={handleChange}
                value={form.first_name}
                required
              />
            </label>
            <label htmlFor="last_name">
              Last Name:
              <input
                type="text"
                className="bg-white text-black border border-neutral-600 px-2 text-sm w-full h-7"
                id="last_name"
                name="last_name"
                onChange={handleChange}
                value={form.last_name}
                required
              />
            </label>
          </div>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              className="bg-white text-black border border-neutral-600 px-2 text-sm w-full h-7"
              id="email"
              name="email"
              onChange={handleChange}
              value={form.email}
              required
            />
          </label>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              className="bg-white text-black border border-neutral-600 px-2 text-sm w-full h-7"
              id="username"
              name="username"
              onChange={handleChange}
              value={form.username}
              required
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              className="bg-white text-black border border-neutral-600 px-2 text-sm w-full h-7"
              id="password"
              name="password"
              onChange={handleChange}
              value={form.password}
              required
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="w-[200px] text-lg mx-auto mt-2 py-2 bg-red-500 hover:bg-red-700"
          >
            {loading ? "..." : "Register"}
          </button>
          <Link
            to="/login"
            className="mx-auto text-gray-500 pt-2 hover:underline"
          >
            back
          </Link>
        </form>
      </div>
    </div>
  );
};
