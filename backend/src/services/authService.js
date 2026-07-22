import User from "../models/User.js";

export const registerUser = async (userData) => {
    const { name, email, password } = userData;

    if (!name || !email || !password) {
        throw new Error("Name, email and password are required");
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new Error("Email already exists");
    }

    const user = await User.create(userData);

    return user;
};