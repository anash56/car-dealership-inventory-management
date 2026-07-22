import { createVehicle } from "../services/vehicleService.js";

export const createVehicleController = async (req, res) => {
    try {
        const vehicle = await createVehicle(req.body);

        return res.status(201).json({
            message: "Vehicle created successfully",
            vehicle,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};