import express from "express";
import { authenticate } from "../middleware/authMiddleware.js";
import {
    createVehicleController,
    getAllVehiclesController,
    searchVehiclesController,
    updateVehicleController,
    deleteVehicleController,
    purchaseVehicleController,
} from "../controllers/vehicleController.js";
import { adminOnly } from "../middleware/adminMiddleware.js";

const router = express.Router();

router.post("/", authenticate, createVehicleController);
router.get("/", authenticate, getAllVehiclesController);
router.get("/search", authenticate, searchVehiclesController);
router.put("/:id", authenticate, updateVehicleController);
router.delete("/:id", authenticate, adminOnly, deleteVehicleController);
router.post("/:id/purchase", authenticate, purchaseVehicleController);

export default router;