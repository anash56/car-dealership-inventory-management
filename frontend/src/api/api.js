// src/api/api.js
import axios from 'axios';

const api = axios.create({
  // Use relative base URL so Vite dev server proxy handles API calls and avoids CORS issues.
  baseURL: import.meta.env.VITE_API_URL || '',
});

// Attach JWT token if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
