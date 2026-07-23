import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './store/authStore';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import DashboardPage from './pages/Dashboard';
import AdminPage from './pages/Admin';
import NavBar from './components/NavBar';
import HomePage from './pages/Home';

// Guard for authenticated routes
const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" replace />;
};

// Guard for admin‑only routes
const AdminRoute = ({ children }) => {
  const { token, isAdmin } = useAuth();
  return token && isAdmin ? children : <Navigate to="/" replace />;
};

const App = () => (
  <AuthProvider>
    <NavBar />
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/"
          element={
            <>{
              // Show Home for unauthenticated users, otherwise Dashboard
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }</>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminPage />
            </AdminRoute>
          }
        />
        {/* fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
