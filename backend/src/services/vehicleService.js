import Vehicle from "../models/Vehicle.js";

export const createVehicle = async (vehicleData) => {
    return await Vehicle.create(vehicleData);
};

export const getAllVehicles = async () => {
    return await Vehicle.find().sort({ createdAt: 1 });
};

export const searchVehicles = async (query) => {
    const filter = {};

    if (query.make) {
        filter.make = query.make;
    }

    return await Vehicle.find(filter).sort({ createdAt: 1 });
};