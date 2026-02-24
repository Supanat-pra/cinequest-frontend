import { useState, useEffect } from "react";
import { AuthContext } from "./auth.context";
import Lottie from "lottie-react";
import LoadAnimate from "../../assets/LoadAnimate.json";
import { motion } from "framer-motion";
import { getMe, loginService, logoutService } from "./auth.service";
import type { loginPayload, AuthUser } from "./auth.types";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const data = await getMe();
        if (data) {
          setUser(data);
        } else {
          setUser(null);
        }
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const login = async (payload: loginPayload): Promise<void> => {
    const data = await loginService(payload);
    setUser(data);
  };

  const logout = async () => {
    await logoutService();
    setUser(null);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-full bg-[#0a0a0a] text-white px-6">
        <div className="w-64 h-64">
          <Lottie animationData={LoadAnimate} loop={true} />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center space-y-4"
        >
          <h2 className="text-xl font-semibold text-red-500 animate-pulse">
            Loading...
          </h2>

          <div className="max-w-xs text-gray-400 text-sm italic">
            "Our free-tier server need to warm-up. <br /> We'll be ready in
            about 15-30 seconds."
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
