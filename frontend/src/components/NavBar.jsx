// src/components/NavBar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/authStore';
import { Button } from './Button';

const NavBar = () => {
  const { user, token, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-indigo-600 text-white p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Link to="/" className="font-bold text-lg hover:underline">
          Car Dealership
        </Link>
        {token && (
          <>
            <Link to="/" className="hover:underline">
              Dashboard
            </Link>
            {isAdmin && (
              <Link to="/admin" className="hover:underline">
                Admin
              </Link>
            )}
          </>
        )}
      </div>
      <div className="flex items-center space-x-4">
        {token ? (
          <>
            <span className="mr-2">{user?.email || 'User'}</span>
            <Button onClick={handleLogout} className="bg-red-500 hover:bg-red-600">
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/register" className="hover:underline">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
