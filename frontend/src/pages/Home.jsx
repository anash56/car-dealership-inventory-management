// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-8">
    <h1 className="text-5xl font-bold text-gray-800 mb-4 drop-shadow-lg">
      Welcome to Car Dealership Inventory
    </h1>
    <p className="text-lg text-gray-700 mb-8 max-w-xl text-center">
      Browse, purchase, and manage vehicles in a sleek, modern interface. Register to add your own listings or log in to start shopping.
    </p>
    <div className="flex gap-4">
      <Link to="/login">
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Login</Button>
      </Link>
      <Link to="/register">
        <Button className="bg-green-600 hover:bg-green-700 text-white">Register</Button>
      </Link>
    </div>
  </div>
);

export default Home;
