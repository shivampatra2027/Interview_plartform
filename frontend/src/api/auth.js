// frontend/src/api/auth.js
import api from "./axios";

export const authAPI = {
  // Register new user
  register: async (userData) => {
    const response = await api.post("/auth/register", userData);
    return response.data;
  },

  // Login user
  login: async (credentials) => {
    const response = await api.post("/auth/login", credentials);
    return response.data;
  },

  // Get current user (requires token)
  getMe: async (token) => {
    const response = await api.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  }
};
