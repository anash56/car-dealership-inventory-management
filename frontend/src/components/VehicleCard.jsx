// src/components/VehicleCard.jsx

import { Button } from './Button';

const VehicleCard = ({ vehicle, onPurchase, isAdmin, onEdit, onDelete, children }) => {
  const { _id, make, model, category, price, quantity } = vehicle;
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{make} {model}</h2>
      <p className="text-gray-600">{category}</p>
      <p className="text-indigo-600 font-bold">$ {price}</p>
      <p>In stock: {quantity}</p>

      <Button
        disabled={quantity === 0}
        onClick={() => onPurchase(_id)}
        className="mt-2 w-full"
      >
        {quantity === 0 ? 'Out of Stock' : 'Purchase'}
      </Button>

      {children}

      {isAdmin && (
        <div className="mt-2 flex gap-2">
          <Button onClick={() => onEdit(vehicle)} className="bg-green-600 hover:bg-green-700">Edit</Button>
          <Button onClick={() => onDelete(_id)} className="bg-red-600 hover:bg-red-700">Delete</Button>
        </div>
      )}
    </div>
  );
};

export default VehicleCard;
