import { useState, useEffect } from "react";
import { AuthContext } from "./auth.context";
import Lottie from "lottie-react";
import LoadAnimate from "../../assets/LoadAnimate.json";
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
      } catch (err) {
        console.error("Authentication failed", err);
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
      <div className="flex items-center justify-center h-screen w-screen">
        <Lottie animationData={LoadAnimate} />
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
