export interface AuthResponse {
  success: boolean;
  message: string;
  data: AuthUser;
}

export interface AuthUser {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  created_at: string;
}

export interface registerPayload {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
}

export interface loginPayload {
  username: string;
  password: string;
}
