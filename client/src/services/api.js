import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api",
  withCredentials: true, // required for the admin HttpOnly cookie
  timeout: 15000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    error.userMessage =
      error.response?.data?.message ||
      "We could not reach the server. Please check your connection and try again.";
    return Promise.reject(error);
  },
);
