import express from "express";
import { authenticate } from "../middleware/authMiddleware.js";
import {
    createVehicleController,
    getAllVehiclesController,
    searchVehiclesController,
} from "../controllers/vehicleController.js";

const router = express.Router();

router.post("/", authenticate, createVehicleController);
router.get("/", authenticate, getAllVehiclesController);
router.get("/search", authenticate, searchVehiclesController);

export default router;