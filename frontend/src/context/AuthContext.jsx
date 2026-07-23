// src/context/AuthContext.jsx
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentUser, logout } from '../utils/authService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const init = () => {
      const storedUser = getCurrentUser();
      const storedToken = localStorage.getItem('token');
      if (storedUser && storedToken) {
        setUser(storedUser);
        setToken(storedToken);
      }
    };
    init();
  }, []);

  const handleLogout = () => {
    logout();
    setUser(null);
    setToken(null);
  };

  const isAdmin = user && user.role === 'admin';

  return (
    <AuthContext.Provider value={{ user, token, setUser, setToken, logout: handleLogout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
