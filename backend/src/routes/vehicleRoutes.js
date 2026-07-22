import express from "express";
import { authenticate } from "../middleware/authMiddleware.js";
import {
    createVehicleController,
    getAllVehiclesController,
    searchVehiclesController,
    updateVehicleController,
} from "../controllers/vehicleController.js";

const router = express.Router();

router.post("/", authenticate, createVehicleController);
router.get("/", authenticate, getAllVehiclesController);
router.get("/search", authenticate, searchVehiclesController);
router.put("/:id", authenticate, updateVehicleController);

export default router;