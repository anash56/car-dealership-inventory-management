import request from "supertest";
import bcrypt from "bcryptjs";
import app from "../../app.js";
import User from "../../models/User.js";

describe("User Registration - Password Hashing", () => {
    it("should store a hashed password instead of the plain password", async () => {
        const userData = {
            name: "Anash",
            email: "anash@gmail.com",
            password: "123456",
        };

        await request(app)
            .post("/api/auth/register")
            .send(userData);

        const savedUser = await User.findOne({
            email: userData.email,
        });

        expect(savedUser.password).not.toBe(userData.password);

        const isMatch = await bcrypt.compare(
            userData.password,
            savedUser.password
        );

        expect(isMatch).toBe(true);
    });
});