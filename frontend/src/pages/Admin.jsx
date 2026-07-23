// src/pages/Admin.jsx
import { useEffect, useState } from 'react';
import { getVehicles, addVehicle, updateVehicle, deleteVehicle, restockVehicle } from '../api/vehicleApi';
import VehicleCard from '../components/VehicleCard';
import { Button } from '../components/Button';

const AdminPage = () => {
  const [vehicles, setVehicles] = useState([]);
  const [newVehicle, setNewVehicle] = useState({
    make: '',
    model: '',
    category: '',
    price: '',
    quantity: ''
  });

  const fetchVehicles = async () => {
    const data = await getVehicles();
    setVehicles(data);
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await addVehicle({
        make: newVehicle.make,
        model: newVehicle.model,
        category: newVehicle.category,
        price: Number(newVehicle.price),
        quantity: Number(newVehicle.quantity),
      });
      setNewVehicle({ make: '', model: '', category: '', price: '', quantity: '' });
      fetchVehicles();
    } catch (err) {
      console.error(err);
      alert('Failed to add vehicle');
    }
  };

  const handleEdit = async (vehicle) => {
    // Simple prompt‑based edit for demo purposes
    const make = prompt('Make', vehicle.make) || vehicle.make;
    const model = prompt('Model', vehicle.model) || vehicle.model;
    const category = prompt('Category', vehicle.category) || vehicle.category;
    const price = prompt('Price', vehicle.price) || vehicle.price;
    const quantity = prompt('Quantity', vehicle.quantity) || vehicle.quantity;
    try {
      await updateVehicle(vehicle._id, {
        make,
        model,
        category,
        price: Number(price),
        quantity: Number(quantity),
      });
      fetchVehicles();
    } catch (err) {
      console.error(err);
      alert('Update failed');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this vehicle?')) return;
    try {
      await deleteVehicle(id);
      fetchVehicles();
    } catch (err) {
      console.error(err);
      alert('Delete failed');
    }
  };

  const handleRestock = async (id) => {
    const qty = prompt('Enter quantity to add');
    const quantity = Number(qty);
    if (!quantity || quantity <= 0) return;
    try {
      await restockVehicle(id, quantity);
      fetchVehicles();
    } catch (err) {
      console.error(err);
      alert('Restock failed');
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl mb-6">Admin Panel – Manage Vehicles</h1>

      {/* Add new vehicle form */}
      <form onSubmit={handleAdd} className="grid grid-cols-2 gap-4 mb-8 bg-gray-50 p-4 rounded">
        <input
          placeholder="Make"
          className="border p-2 rounded"
          value={newVehicle.make}
          onChange={(e) => setNewVehicle({ ...newVehicle, make: e.target.value })}
          required
        />
        <input
          placeholder="Model"
          className="border p-2 rounded"
          value={newVehicle.model}
          onChange={(e) => setNewVehicle({ ...newVehicle, model: e.target.value })}
          required
        />
        <input
          placeholder="Category"
          className="border p-2 rounded"
          value={newVehicle.category}
          onChange={(e) => setNewVehicle({ ...newVehicle, category: e.target.value })}
          required
        />
        <input
          placeholder="Price"
          type="number"
          className="border p-2 rounded"
          value={newVehicle.price}
          onChange={(e) => setNewVehicle({ ...newVehicle, price: e.target.value })}
          required
        />
        <input
          placeholder="Quantity"
          type="number"
          className="border p-2 rounded"
          value={newVehicle.quantity}
          onChange={(e) => setNewVehicle({ ...newVehicle, quantity: e.target.value })}
          required
        />
        <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white">
          Add Vehicle
        </Button>
      </form>

      {/* Vehicle list with admin actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {vehicles.map((v) => (
          <VehicleCard
            key={v._id}
            vehicle={v}
            isAdmin={true}
            onPurchase={() => {}}
            onEdit={() => handleEdit(v)}
            onDelete={handleDelete}
          >
            {/* Restock button below card */}
            <Button onClick={() => handleRestock(v._id)} className="mt-2 w-full bg-yellow-500 hover:bg-yellow-600 text-white">
              Restock
            </Button>
          </VehicleCard>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
