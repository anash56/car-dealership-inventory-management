// src/components/Button.jsx
import React from 'react';

export const Button = ({ children, onClick, disabled, type = 'button', className = '' }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`px-4 py-2 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
      disabled
        ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
        : 'bg-indigo-600 text-white hover:bg-indigo-700'
    } ${className}`}
  >
    {children}
  </button>
);
