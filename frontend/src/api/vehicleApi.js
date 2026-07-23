// src/api/vehicleApi.js
import api from './api';

export const getVehicles = async (params = {}) => {
  const response = await api.get('/api/vehicles', { params });
  return response.data.vehicles;
};

export const getVehicle = async (id) => {
  const response = await api.get(`/api/vehicles/${id}`);
  return response.data;
};

export const searchVehicles = async (query) => {
  const response = await api.get('/api/vehicles/search', { params: query });
  return response.data;
};

export const addVehicle = async (vehicle) => {
  const response = await api.post('/api/vehicles', vehicle);
  return response.data;
};

export const updateVehicle = async (id, vehicle) => {
  const response = await api.put(`/api/vehicles/${id}`, vehicle);
  return response.data;
};

export const deleteVehicle = async (id) => {
  const response = await api.delete(`/api/vehicles/${id}`);
  return response.data;
};

export const purchaseVehicle = async (id) => {
  const response = await api.post(`/api/vehicles/${id}/purchase`);
  return response.data;
};

export const restockVehicle = async (id, qty) => {
  const response = await api.post(`/api/vehicles/${id}/restock`, { quantity: qty });
  return response.data;
};
