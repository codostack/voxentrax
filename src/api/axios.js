import axios from "axios";

const api = axios.create({
  baseURL: "https://api.voxentrax.com/",
});

// ✅ REQUEST INTERCEPTOR — attach token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ RESPONSE INTERCEPTOR — handle token expiry
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      alert("Session expired. Please login again.");
      window.location.href = "/admin";
    }
    return Promise.reject(error);
  }
);

export default api;