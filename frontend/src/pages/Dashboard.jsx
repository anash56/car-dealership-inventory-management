// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { getVehicles, purchaseVehicle } from '../api/vehicleApi';
import { Button } from '../components/Button';
import { useAuth } from '../store/authStore';

const DashboardPage = () => {
  const { isAdmin } = useAuth();
  const [vehicles, setVehicles] = useState([]);
  const [filters, setFilters] = useState({});

  const fetchVehicles = async () => {
    const data = await getVehicles(filters);
    setVehicles(data);
  };

  useEffect(() => {
    fetchVehicles();
  }, [filters]);

  const handlePurchase = async (id) => {
    try {
      await purchaseVehicle(id);
      fetchVehicles();
    } catch (e) {
      console.error(e);
      alert('Purchase failed');
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl mb-6">Vehicle Inventory</h1>

      {/* Simple filter inputs */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <input
          placeholder="Make"
          className="border p-2 rounded"
          onChange={(e) => setFilters((f) => ({ ...f, make: e.target.value }))}
        />
        <input
          placeholder="Model"
          className="border p-2 rounded"
          onChange={(e) => setFilters((f) => ({ ...f, model: e.target.value }))}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {vehicles.map((v) => (
          <div
            key={v._id}
            className="bg-white p-4 rounded shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{v.make} {v.model}</h2>
            <p className="text-gray-600">{v.category}</p>
            <p className="text-indigo-600 font-bold">$ {v.price}</p>
            <p>In stock: {v.quantity}</p>

            <Button
              disabled={v.quantity === 0}
              onClick={() => handlePurchase(v._id)}
              className="mt-2 w-full"
            >
              {v.quantity === 0 ? 'Out of Stock' : 'Purchase'}
            </Button>

            {isAdmin && (
              <div className="mt-2 flex gap-2">
                <Button className="bg-green-600 hover:bg-green-700">Edit</Button>
                <Button className="bg-red-600 hover:bg-red-700">Delete</Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
