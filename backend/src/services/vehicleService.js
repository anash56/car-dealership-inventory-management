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

    if (query.model) {
        filter.model = query.model;
    }

    if (query.category) {
        filter.category = query.category;
    }

    if (query.minPrice || query.maxPrice) {
        filter.price = {};

        if (query.minPrice) {
            filter.price.$gte = Number(query.minPrice);
        }

        if (query.maxPrice) {
            filter.price.$lte = Number(query.maxPrice);
        }
    }

    return await Vehicle.find(filter).sort({ createdAt: 1 });
};