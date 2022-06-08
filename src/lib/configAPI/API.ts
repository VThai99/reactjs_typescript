import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  responseType: "json",
});

API.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);
API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => Promise.reject(error)
);
export default API