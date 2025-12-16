import { Link } from "react-router-dom";

export const Register: React.FC = () => {
  return (
    <div className="flex justify-center p-20 min-h-screen">
      <div className="bg-[#1E1E1E] flex flex-col gap-10 w-[550px] h-auto p-10 border border-neutral-700 rounded-md">
        <div className="text-3xl">Register</div>
        <form className="flex flex-col gap-4">
          <div className="flex gap-5">
            <label htmlFor="firstname">
              Firstname:
              <input
                type="text"
                className="bg-white text-black border border-neutral-600 px-2 text-sm w-full h-7"
                id="firstname"
                name="firstname"
                required
              />
            </label>
            <label htmlFor="lastname">
              Lastname:
              <input
                type="text"
                className="bg-white text-black border border-neutral-600 px-2 text-sm w-full h-7"
                id="lastname"
                name="lastname"
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
              required
            />
          </label>
          <button
            type="submit"
            className="w-[200px] text-lg mx-auto mt-2 py-2 bg-red-500 hover:bg-red-700"
          >
            Register
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
