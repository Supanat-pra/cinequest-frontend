import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <div className="min-h-screen flex mt-30 justify-center px-6">
      <motion.div
        className="max-w-2xl text-center flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="text-6xl font-bold mb-8 tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Welcome to <span className="text-red-500">CineQuest</span>
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          Every movie you watch is a quest completed 🎬
        </motion.p>

        <motion.p
          className="text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Track your watch history, rate movies, and discover what’s next on
          your cinematic journey.
        </motion.p>

        <motion.div
          className="flex gap-4 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
        >
          <Link
            to="/login"
            className="bg-red-500 px-6 py-2 rounded-md font-semibold hover:bg-red-600 transition"
          >
            Get Started
          </Link>

          <Link
            to="/search"
            className="border border-red-500 px-6 py-2 rounded-md font-semibold text-red-500 hover:bg-red-500 hover:text-white transition"
          >
            Explore Movies
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};
