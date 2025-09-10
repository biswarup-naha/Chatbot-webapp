import axios from "axios";

export const api = axios.create({
  baseURL: "https://localhost:7168/api",
});

api.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    config.withCredentials = true;

    return config;
  },
  (error) => Promise.reject(error),
);
