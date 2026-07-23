// src/pages/CreateVehicle.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addVehicle } from '../api/vehicleApi';
import { Button } from '../components/Button';
import { useAuth } from '../store/authStore';

const CreateVehicle = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const [vehicle, setVehicle] = useState({
    make: '',
    model: '',
    category: '',
    price: '',
    quantity: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) return;
    try {
      await addVehicle({
        make: vehicle.make,
        model: vehicle.model,
        category: vehicle.category,
        price: Number(vehicle.price),
        quantity: Number(vehicle.quantity)
      });
      alert('Vehicle added');
      navigate('/admin');
    } catch (err) {
      console.error(err);
      alert('Failed to add vehicle');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4 text-center">Add New Vehicle</h2>
        <input
          name="make"
          placeholder="Make"
          className="w-full border p-2 mb-2 rounded"
          value={vehicle.make}
          onChange={handleChange}
          required
        />
        <input
          name="model"
          placeholder="Model"
          className="w-full border p-2 mb-2 rounded"
          value={vehicle.model}
          onChange={handleChange}
          required
        />
        <input
          name="category"
          placeholder="Category"
          className="w-full border p-2 mb-2 rounded"
          value={vehicle.category}
          onChange={handleChange}
          required
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          className="w-full border p-2 mb-2 rounded"
          value={vehicle.price}
          onChange={handleChange}
          required
        />
        <input
          name="quantity"
          type="number"
          placeholder="Quantity"
          className="w-full border p-2 mb-4 rounded"
          value={vehicle.quantity}
          onChange={handleChange}
          required
        />
        <Button type="submit" className="w-full">Create Vehicle</Button>
      </form>
    </div>
  );
};

export default CreateVehicle;
