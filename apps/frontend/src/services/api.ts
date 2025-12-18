const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:4000/api";

const request = async <T>(path: string, options: RequestInit = {}): Promise<T> => {
  const token = typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers ?? {}),
    },
    credentials: "include",
    ...options,
  });

  if (!response.ok) {
    const body = await response.json().catch(() => null);
    const message = body?.message || "Request failed";
    throw new Error(message);
  }

  return response.json();
};

export { API_BASE_URL, request };
