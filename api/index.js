import axios from "axios";
import { API_URL } from "shared/config";

// Create an axios instance for basic requests
const api = axios.create({
  baseURL: API_URL,
});

// Create an axios instance for protected requests
const protectedApi = axios.create({
  baseURL: API_URL,
});

protectedApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    // eslint-disable-next-line
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});

export { api, protectedApi };
