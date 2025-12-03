import { Link } from "react-router-dom";

export const Login: React.FC = () => {
  return (
    <div className="flex justify-center p-20">
      <div className="bg-[#1E1E1E] flex flex-col gap-10 w-[400px] h-[500px] p-10 border border-neutral-700 rounded-md">
        <div className="text-5xl">Login</div>
        <form className="flex flex-col gap-5">
          <div>
            <input
              type="text"
              className="bg-white text-black px-2 text-md w-full h-10"
              id="username"
              name="username"
              placeholder="Username"
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
            <Link
              to="/forgotpassword"
              className="text-sm text-blue-700 hover:underline"
            >
              Forgot password
            </Link>
          </div>
          <button type="submit" className="bg-red-500 py-2 hover:bg-red-700">
            Login
          </button>
        </form>
        <p>
          Don't have an account?
          <Link to="/register" className="pl-1 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};
