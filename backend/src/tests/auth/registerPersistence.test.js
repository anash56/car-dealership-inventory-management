import request from "supertest";
import app from "../../app.js";
import User from "../../models/User.js";

describe("User Registration - Persistence", () => {
    test("should save a new user in the database", async () => {
        const userData = {
            name: "Anash",
            email: "anash@example.com",
            password: "password123",
        };

        const response = await request(app)
            .post("/api/auth/register")
            .send(userData);

        expect(response.statusCode).toBe(201);

        const savedUser = await User.findOne({
            email: userData.email,
        });

        expect(savedUser).not.toBeNull();
        expect(savedUser.name).toBe(userData.name);
        expect(savedUser.email).toBe(userData.email);
    });
});