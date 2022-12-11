import axios from "axios";

const axiosClient = axios.create({
  // Put your base URL here
  baseURL: "http://127.0.0.1:8000/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// If there are authentication, use this interceptor
// axiosClient.interceptors.response.use();

export default axiosClient;
