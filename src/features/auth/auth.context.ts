import { createContext } from "react";
import type { AuthUser, loginPayload } from "./auth.types";

export interface AuthContextValue {
  user: AuthUser | null;
  isLoggedIn: boolean;
  login: (payload: loginPayload) => Promise<void>;
  logout: () => Promise<void>;
}
export const AuthContext = createContext<AuthContextValue | null>(null);
