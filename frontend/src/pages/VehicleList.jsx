// src/pages/VehicleList.jsx

import { useEffect, useState } from 'react';
import { getVehicles } from '../api/vehicleApi';
import { Button } from '../components/Button';
import { useAuth } from '../store/authStore.jsx';

const VehicleList = () => {
  const { token } = useAuth();
  const [vehicles, setVehicles] = useState([]);

  const fetchVehicles = async () => {
    const data = await getVehicles();
    setVehicles(data);
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl mb-6">All Vehicles</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {vehicles.map((v) => (
          <div key={v._id} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{v.make} {v.model}</h2>
            <p className="text-gray-600">{v.category}</p>
            <p className="text-indigo-600 font-bold">$ {v.price}</p>
            <p>In stock: {v.quantity}</p>
            {token && (
              <Button
                disabled={v.quantity === 0}
                className="mt-2 w-full"
                // purchase handled in Dashboard; here just disabled
                onClick={() => {}}
              >
                Purchase
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleList;
