import {
    createVehicle,
    getAllVehicles,
    searchVehicles,
    updateVehicle,
    deleteVehicle,
    purchaseVehicle,
    restockVehicle,
} from "../services/vehicleService.js";
import Vehicle from "../models/Vehicle.js";
import mongoose from "mongoose";

// Helper to validate vehicle payload (case‑insensitive)
const validateVehiclePayload = (payload) => {
    // Enforce case‑sensitive required fields
    const requiredKeys = ["make", "model", "category", "price", "quantityInStock"];
    for (const key of requiredKeys) {
        if (!Object.prototype.hasOwnProperty.call(payload, key)) {
            return "Make, model, category, price, and quantity in stock are required";
        }
    }
    const { price, quantityInStock } = payload;
    if (price <= 0) {
        return "Price must be a positive number";
    }
    if (!Number.isInteger(quantityInStock) || quantityInStock < 0) {
        return "Quantity in stock must be a non-negative integer";
    }
    return null;
};

export const createVehicleController = async (req, res) => {
    const validationError = validateVehiclePayload(req.body);
    if (validationError) {
        return res.status(400).json({ message: validationError });
    }
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

export const getAllVehiclesController = async (req, res) => {
    try {
        const vehicles = await getAllVehicles();

        return res.status(200).json({
            vehicles,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

export const searchVehiclesController = async (req, res) => {
    try {
        const vehicles = await searchVehicles(req.query);

        return res.status(200).json({
            vehicles,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

export const updateVehicleController = async (req, res) => {
    const id = req.params.id;
    // If id is a valid ObjectId, check existence first
    if (mongoose.Types.ObjectId.isValid(id)) {
        try {
            const existingVehicle = await Vehicle.findById(id);
            if (!existingVehicle) {
                return res.status(404).json({ message: "Vehicle not found" });
            }
        } catch (err) {
            // Treat any DB errors as not found
            return res.status(404).json({ message: "Vehicle not found" });
        }
    }
    // Validate payload (required fields)
    const validationError = validateVehiclePayload(req.body);
    if (validationError) {
        return res.status(400).json({ message: validationError });
    }
    // Proceed with update
    try {
        const updatedVehicle = await updateVehicle(id, req.body);
        return res.status(200).json({ vehicle: updatedVehicle });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteVehicleController = async (req, res) => {
    try {

        await deleteVehicle(req.params.id);

        return res.status(200).json({
            message: "Vehicle deleted successfully"
        });

    } catch (error) {

        if (error.message === "Vehicle not found") {
            return res.status(404).json({
                message: error.message
            });
        }

        return res.status(500).json({
            message: error.message
        });
    }
};

export const purchaseVehicleController = async (req, res) => {
    try {

        const vehicle = await purchaseVehicle(req.params.id);

        return res.status(200).json({
            vehicle
        });

    } catch (error) {

        if (error.message === "Vehicle not found") {
            return res.status(404).json({
                message: error.message
            });
        }

        if (error.message === "Vehicle is out of stock") {
            return res.status(400).json({
                message: error.message
            });
        }


        return res.status(500).json({
            message: error.message
        });

    }
};

export const restockVehicleController = async (req, res) => {
    try {

        const vehicle = await restockVehicle(req.params.id);

        return res.status(200).json({
            vehicle
        });

    } catch (error) {

        if (error.message === "Vehicle not found") {
            return res.status(404).json({
                message: error.message
            });
        }

        return res.status(500).json({
            message: error.message
        });

    }
};