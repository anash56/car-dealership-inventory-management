import express from "express";
import authRoutes from "./routes/authRoutes.js";
import { authenticate } from "./middleware/authMiddleware.js";
import { adminOnly } from "./middleware/adminMiddleware.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Car Dealership Inventory API is running",
    });
});

app.get("/protected", authenticate, (req, res) => {
    return res.status(200).json({
        message: "Protected route",
        user: req.user,
    });
});

app.delete(
    "/admin-test",
    authenticate,
    adminOnly,
    (req, res) => {
        return res.status(200).json({
            message: "Admin route",
        });
    }
);

app.use("/api/auth", authRoutes);

export default app;