import axios from "axios";

const axiosClient = axios.create({
  // Put your base URL here
  baseURL: "https://35.223.12.18:8000/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// If there are authentication, use this interceptor
// axiosClient.interceptors.response.use();

export default axiosClient;
