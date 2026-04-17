import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

// ✅ GLOBAL RESPONSE INTERCEPTOR
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // TOKEN INVALID / EXPIRED

      localStorage.removeItem("token");

      alert("Session expired. Please login again.");

      window.location.href = "/admin";
    }

    return Promise.reject(error);
  }
);

export default api;