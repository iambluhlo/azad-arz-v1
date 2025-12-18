import { request } from "./api";

type AuthUser = {
  id: string;
  email: string;
};

type LoginResponse = {
  token: string;
  user: AuthUser;
};

type RegisterResponse = {
  user: AuthUser;
};

const login = (email: string, password: string) =>
  request<LoginResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

const register = (email: string, password: string) =>
  request<RegisterResponse>("/auth/register", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

export type { AuthUser, LoginResponse, RegisterResponse };
export { login, register };
