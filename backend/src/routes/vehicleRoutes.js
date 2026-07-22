import express from "express";
import { authenticate } from "../middleware/authMiddleware.js";
import {
    createVehicleController,
    getAllVehiclesController,
} from "../controllers/vehicleController.js";

const router = express.Router();

router.post("/", authenticate, createVehicleController);
router.get("/", authenticate, getAllVehiclesController);

export default router;