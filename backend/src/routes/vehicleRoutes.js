import express from "express";
import { authenticate } from "../middleware/authMiddleware.js";
import { createVehicleController } from "../controllers/vehicleController.js";

const router = express.Router();

router.post("/", authenticate, createVehicleController);

export default router;