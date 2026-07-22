import request from "supertest";
import app from "../../app.js";

describe("User Registration - Duplicate Email", () => {
    it("should reject registration with an existing email", async () => {
        const userData = {
            name: "Anash",
            email: "anash@gmail.com",
            password: "123456",
        };

        // First registration
        await request(app)
            .post("/api/auth/register")
            .send(userData);

        // Second registration with the same email
        const response = await request(app)
            .post("/api/auth/register")
            .send(userData);

        expect(response.status).toBe(409);

        expect(response.body.message).toBe("Email already exists");
    });
});