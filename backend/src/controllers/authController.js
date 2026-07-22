import { registerUser } from "../services/authService.js";

export const register = async (req, res) => {
    try {
        await registerUser(req.body);

        return res.status(201).json({
            message: "User registered successfully",
        });
    } catch (error) {
        if (error.message === "Email already exists") {
            return res.status(409).json({
                message: error.message,
            });
        }

        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};