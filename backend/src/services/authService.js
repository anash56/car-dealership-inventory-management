import bcrypt from "bcryptjs";
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

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });

    return user;
};

export const loginUser = async (userData) => {
    const { email, password } = userData;

    if (!email || !password) {
        throw new Error("Email and password are required");
    }

    const user = await User.findOne({ email });

    if (!user) {
        throw new Error("Invalid email or password");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error("Invalid email or password");
    }

    return user;
};