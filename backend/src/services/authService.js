import User from "../models/User.js";

export const registerUser = async (userData) => {
    const existingUser = await User.findOne({ email: userData.email });

    if (existingUser) {
        throw new Error("Email already exists");
    }

    const user = await User.create(userData);

    return user;
};