import { api } from "@/api/axios";
import type {
  AuthUser,
  AuthResponse,
  loginPayload,
  registerPayload,
} from "./auth.types";

export const getMe = async (): Promise<AuthUser> => {
  const res = await api.get<AuthResponse>("/auth/me");
  return res.data.data;
};

export const register = async (payload: registerPayload): Promise<AuthUser> => {
  const res = await api.post<AuthResponse>("/auth/register", payload);
  return res.data.data;
};

export const loginService = async (
  payload: loginPayload,
): Promise<AuthUser> => {
  const res = await api.post<AuthResponse>("/auth/login", payload);
  return res.data.data;
};

export const logoutService = async (): Promise<void> => {
  await api.post("/auth/logout");
};
