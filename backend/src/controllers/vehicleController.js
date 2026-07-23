import {
    createVehicle,
    getAllVehicles,
    searchVehicles,
    updateVehicle,
    deleteVehicle,
    purchaseVehicle,
    restockVehicle
} from "../services/vehicleService.js";

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
    try {
        const updatedVehicle = await updateVehicle(req.params.id, req.body);

        return res.status(200).json({
            vehicle: updatedVehicle,
        });
    } catch (error) {

        if (error.message === "Vehicle not found") {
            return res.status(404).json({
                message: error.message,
            });
        }

        return res.status(500).json({
            message: error.message,
        });
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